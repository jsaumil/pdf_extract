import { StateGraph, Annotation, START, END } from "@langchain/langgraph";
import { HumanMessage } from "@langchain/core/messages";
import { ChatOpenRouter } from "@langchain/openrouter";

import config from "../config.json";
import { compressImage, withRetry } from "./utils/api_helpers";
import { cropBbsRows, type BbsRowCrop } from "./bbs";

// ─── Graph State ──────────────────────────────────────────

const GraphState = Annotation.Root({
  imagePath: Annotation<string>,
  outputDir: Annotation<string>,
  hasSchedules: Annotation<boolean>,
  rowCrops: Annotation<BbsRowCrop[]>({
    reducer: (prev, next) => [...prev, ...next],
    default: () => [],
  }),
});

// ─── Node: Classify image ─────────────────────────────────

async function classifyImage(
  state: typeof GraphState.State,
): Promise<Partial<typeof GraphState.State>> {
  const b64 = await compressImage(state.imagePath);

  const model = new ChatOpenRouter({
    model: config.CROPPER_MODEL,
    apiKey: config.OPENROUTER_API_KEY,
  });

  const message = new HumanMessage({
    content: [
      {
        type: "text",
        text: [
          "Look at this image carefully.",
          "",
          "Does it contain a Bar Bending Schedule (BBS) table?",
          "",
          "A BBS table is a structural engineering table with these columns:",
          "- Bar mark (unique identifier like M1, M2, etc.)",
          "- Bar diameter (in mm like 8, 10, 12, 16, 20, 25, 32)",
          "- Number of bars / quantity",
          "- Bar bending details / shape type",
          "- Bar cutting length",
          "- Total length of bar",
          "- Total weight of bar",
          "",
          "The table has a grid layout with horizontal and vertical lines.",
          "It may also have headers like: member type, size, number of members.",
          "",
          'Reply with ONLY "yes" or "no". Nothing else.',
        ].join("\n"),
      },
      { type: "image_url", image_url: { url: b64 } },
    ],
  });

  const response = await withRetry(
    () => model.invoke([message]),
    "classify image",
  );

  const answer =
    typeof response.content === "string"
      ? response.content.toLowerCase().trim()
      : "";

  console.log(`Classification result: "${answer}"`);

  return {
    hasSchedules: answer.includes("yes"),
  };
}

// ─── Node: Crop BBS rows ──────────────────────────────────

async function cropBbsRowsNode(
  state: typeof GraphState.State,
): Promise<Partial<typeof GraphState.State>> {
  console.log(`Cropping BBS rows from: ${state.imagePath}`);

  const crops = await cropBbsRows(state.imagePath, state.outputDir, {
    debug: true,
  });

  console.log(`Cropped ${crops.length} rows`);

  return { rowCrops: crops };
}

// ─── Conditional edge ─────────────────────────────────────

function routeAfterClassification(
  state: typeof GraphState.State,
): "crop_bbs_rows" | "end" {
  return state.hasSchedules ? "crop_bbs_rows" : "end";
}

// ─── Build graph ──────────────────────────────────────────

const graph = new StateGraph(GraphState)
  .addNode("classify_image", classifyImage)
  .addNode("crop_bbs_rows", cropBbsRowsNode)
  .addEdge(START, "classify_image")
  .addConditionalEdges("classify_image", routeAfterClassification, {
    crop_bbs_rows: "crop_bbs_rows",
    end: END,
  })
  .addEdge("crop_bbs_rows", END)
  .compile();

// ─── Public function ──────────────────────────────────────

export async function detectAndCropBbs(
  imagePath: string,
  outputDir: string,
): Promise<BbsRowCrop[]> {
  const result = await graph.invoke({
    imagePath,
    outputDir,
    hasSchedules: false,
    rowCrops: [],
  });

  return result.rowCrops;
}
