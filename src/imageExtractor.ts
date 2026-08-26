import { HumanMessage, ToolMessage } from "@langchain/core/messages";
import { readFile } from "fs/promises";
import { ChatOpenRouter } from "@langchain/openrouter";
import fs from "fs";
import path from "path";
import { tool } from "@langchain/core/tools";
import { cropAndZoom } from "./tools/zoomTool";
import { z } from "zod";

import { compressImage, withRetry } from "./utils/api_helpers";
import config from "../config.json";
import { cropSchema } from "./schema/imageSchema";
import { normalizeCoords } from "./utils/normalizeCoords";

let maxCropCalls = 40;

interface CellCrop {
  footing_name: string;
  cellType: "header" | "row_label" | "data"; // header=top, row_label=left, data=middle
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string; // e.g., "GC41_size", "header_column_no"
}

/** Result of table cropping */
export interface TableCropResult {
  // imagePath: string;
  // cells: CellCrop[];
  cropPaths: Record<string, string>; // label -> saved path
}

export async function cropper(
  imagePath: string,
  outputDir: string,
  prompt: string,
  tracker?: TokenTracker,
): Promise<TableCropResult> {
  const b64 = await compressImage(imagePath);
  const cells: CellCrop[] = [];
  const cropPaths: Record<string, string> = {};

  // ─── Tool: Crop a specific cell region ───
  const cropCellTool = tool(
    async ({ footing_name, cellType, x1, y1, x2, y2, label }) => {
      const normalized = await normalizeCoords(x1, y1, x2, y2, imagePath);
      const image = await readFile(imagePath);

      const cropped = await cropAndZoom(
        image,
        normalized.x1,
        normalized.y1,
        normalized.x2,
        normalized.y2,
      );

      // Save with structured naming: {outputDir}/row{rowIndex}_col{colIndex}_{type}_{label}.png
      const fileName = `crop_${Date.now()}_${Math.random().toString(36).slice(2, 10)}.png`;
      const cropPath = path.join(outputDir, fileName);
      await fs.promises.mkdir(outputDir, { recursive: true });
      await fs.promises.writeFile(cropPath, cropped);

      const cell: CellCrop = {
        footing_name,
        cellType,
        x1: normalized.x1,
        y1: normalized.y1,
        x2: normalized.x2,
        y2: normalized.y2,
        label,
      };
      cells.push(cell);
      cropPaths[label] = cropPath;

      return `OK — Saved ${cellType} [footing_name=${footing_name}] "${label}" → ${fileName} (${cells.length} total cropped so far)`;
    },
    {
      name: "crop_cell",
      description:
        "Crop exactly one complete table cell from the column schedule. " +
        "The crop MUST include the entire cell boundary and ALL text or data inside the cell. " +
        "Do not crop partial cells or cut off any text. " +
        "Do not include adjacent rows, columns, or neighboring cells unless they are part of the same cell (e.g., merged cells). " +
        "The table has column headers at the top, row headers on the left, and data cells in the body. " +
        "Coordinates are normalized between 0.0 and 1.0.",
      schema: cropSchema,
    },
  );

  // ─── Tool: Mark table structure as complete ───
  const finishTool = tool(
    async ({ totalRows, totalCols, notes }) => {
      return `Table structure recorded: ${totalRows} rows, ${totalCols} columns. Notes: ${notes || "none"}`;
    },
    {
      name: "finish_table",
      description:
        "Call when ALL cells have been cropped. Reports the final table dimensions.",
      schema: z.object({
        totalRows: z
          .number()
          .int()
          .min(1)
          .describe("Total rows including header"),
        totalCols: z
          .number()
          .int()
          .min(1)
          .describe("Total columns including row label column"),
        notes: z
          .string()
          .optional()
          .describe("Any observations about the table structure"),
      }),
    },
  );

  const model = new ChatOpenRouter({
    model: config.CROPPER_MODEL,
    apiKey: config.OPENROUTER_API_KEY,
  }).bindTools([cropCellTool, finishTool]);

  const message = new HumanMessage({
    content: [
      { type: "text", text: prompt },
      { type: "image_url", image_url: { url: b64 } },
    ],
  });

  // ─── Agent loop ───
  let response = await withRetry(
    () => model.invoke([message]),
    "Table cropper init",
  );

  // tracker
  if (tracker) {
    tracker.addRecord("cropper_init", tracker.extractUsage(response));
  }

  let totalCalls = 0;

  while (response.tool_calls && response.tool_calls.length > 0) {
    totalCalls++;
    if (totalCalls > maxCropCalls) {
      console.log(`⚠ Max crop calls (${maxCropCalls}) reached`);
      break;
    }

    const toolResults: ToolMessage[] = [];
    for (const tc of response.tool_calls) {
      try {
        let result: string | any;
        if (tc.name === "crop_cell") {
          result = await cropCellTool.invoke(tc.args);
        } else if (tc.name === "finish_table") {
          result = await finishTool.invoke(tc.args);
        } else {
          result = `Unknown tool: ${tc.name}`;
        }
        toolResults.push(
          new ToolMessage({ content: result, tool_call_id: tc.id }),
        );
      } catch (err: any) {
        console.error(`  Crop failed: ${err.message}`);
        toolResults.push(
          new ToolMessage({
            content: `Error: ${err.message}`,
            tool_call_id: tc.id,
          }),
        );
      }
    }

    response = await withRetry(
      () => model.invoke([message, response, ...toolResults]),
      `Table cropper turn ${totalCalls}`,
    );

    // Tracker each loop iteration
    if (tracker) {
      tracker.addRecord(
        "cropper_loop",
        tracker.extractUsage(response),
        totalCalls,
      );
    }
  }

  console.log(`\n── Table cropping complete ──`);
  console.log(`Cells cropped: ${cells.length}`);
  console.log(
    `Table dimensions: ${cells.length > 0 ? "See finish_table result" : "Unknown"}`,
  );

  return {
    // imagePath,
    // cells,
    cropPaths,
  };
}
