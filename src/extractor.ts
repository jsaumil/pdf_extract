import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenRouter } from "@langchain/openrouter";
import { ExtractSchema } from "./schema/extractSchema";
import type {ExtractResult} from "./schema/extractSchema";
import { compressImage, withRetry } from "./utils/api_helpers";
import type { TableCropResult } from "./imageExtractor";
import config from "../config.json";

// export async function extract(imagePath: string, prompt: string) {
//   const b64 = await compressImage(imagePath);

//   const model = new ChatOpenRouter({
//     model: config.EXTRCAT_MODEL,
//     apiKey: config.OPENROUTER_API_KEY,
//   });

//   const message = new HumanMessage({
//     content: [
//       {
//         type: "text",
//         text: prompt,
//       },
//       {
//         type: "image_url",
//         image_url: {
//           url: b64,
//         },
//       },
//     ],
//   });

//   const structuredModel = model.withStructuredOutput(ExtractSchema);
//   const response = await withRetry(
//     () => structuredModel.invoke([message]),
//     "extract",
//   );

//   return response;
// }

function normalizeResponse(raw: any): ExtractResult {
  return {
    project_name: raw.project_name ?? null,
    structure_consultant: raw.structure_consultant ?? null,
    drawing_no: raw.drawing_no ?? null,
    date: raw.date ?? null,
    rev: raw.rev ?? null,
    element_name: raw.element_name ?? null,
    element_number: raw.element_number ?? null,
    plate: raw.plate ?? [],
    columns: raw.columns ?? [],
  };
}

function attachCropImages(
  result: ExtractResult,
  cropResult: TableCropResult
): ExtractResult {
  const { cells, cropPaths } = cropResult;

  // Build lookup: column_name (lowercased) → best crop path
  const cropLookup = new Map<string, string>();

  for (const cell of cells) {
    const cropPath = cropPaths[cell.label];
    if (!cropPath) continue;

    const key = cell.column_name.toLowerCase().trim();

    // Prefer "data" type crops over header/row_label
    if (cell.cellType === "data" || !cropLookup.has(key)) {
      cropLookup.set(key, cropPath);
    }
  }

  console.log(`[attachCropImages] Crop lookup keys: ${[...cropLookup.keys()].join(", ")}`);

  // Attach to each column entry
  for (const col of result.columns) {
    const key = col.bar_mark.toLowerCase().trim();

    // 1. Exact match
    let match = cropLookup.get(key);

    // 2. Substring match: crop key contains the bar mark
    if (!match) {
      for (const [cropKey, cropPath] of cropLookup) {
        if (cropKey.includes(key)) {
          match = cropPath;
          break;
        }
      }
    }

    // 3. Reverse substring: bar mark contains the crop key
    if (!match) {
      for (const [cropKey, cropPath] of cropLookup) {
        if (key.includes(cropKey) && cropKey.length >= 2) {
          match = cropPath;
          break;
        }
      }
    }

    if (match) {
      col.crop_image = match;
      console.log(`[attachCropImages] Matched bar_mark "${col.bar_mark}" → ${match}`);
    } else {
      console.warn(`[attachCropImages] No crop found for bar_mark "${col.bar_mark}"`);
    }
  }

  return result;
}

export async function extract(
  imagePath: string,
  prompt: string,
  cropResults?: TableCropResult[] | null
) {
  const b64 = await compressImage(imagePath);

  const model = new ChatOpenRouter({
    model: config.EXTRCAT_MODEL,
    apiKey: config.OPENROUTER_API_KEY,
  });

  const message = new HumanMessage({
    content: [
      {
        type: "text",
        text: prompt,
      },
      {
        type: "image_url",
        image_url: {
          url: b64,
        },
      },
    ],
  });

  const structuredModel = model.withStructuredOutput(ExtractSchema);
  const rawResponse = await withRetry(
    () => structuredModel.invoke([message]),
    "extract"
  );

  const result = normalizeResponse(rawResponse);

  // Inject crop image paths into the extracted data
  if (cropResults && cropResults.length > 0) {
    for (const cropResult of cropResults) {
      attachCropImages(result, cropResult);
    }
  }

  return result;
}

// export async function extractFromCrops(
//   cropResult: TableCropResult,
//   prompt: string,
//   tracker?: TokenTracker,
// ) {
//   const model = new ChatOpenRouter({ model: process.env.EXTRACT_MODEL });
//   const structuredModel = model.withStructuredOutput(ExtractBeamSchema);

//   // Build message content with all crop images
//   const content: Array<
//     | { type: "text"; text: string }
//     | { type: "image_url"; image_url: { url: string } }
//   > = [];

//   //system prompt
//   const systemPrompt =
//     new SystemMessage(`You are extracting data from cropped table cells from the image.

//   For EACH image:
//   1. Identify the cell
//   2. Extract ALL which user wants
//   3. If the cell is empty or unreadable, set value to null
//   4. Make sure you extract all data from the all row dont leave any row and columns`);

//   content.push({ type: "text", text: prompt });

//   for (const cell of cropResult.cells) {
//     const cropPath = cropResult.cropPaths[cell.label];
//     if (!cropPath) continue;

//     try {
//       //image
//       const cropB64 = await compressImage(cropPath);
//       content.push({
//         type: "image_url",
//         image_url: { url: cropB64 },
//       });
//       //add text label after each image so llm know which cell this is
//       content.push({
//         type: "text",
//         text: `[Cell: ${cell.label} | ${cell.cellType} | beam_name: ${cell.beam_name}]`,
//       });
//     } catch (err) {
//       console.warn(`Failed to load crop ${cell.label}:`, err);
//       content.push({
//         type: "text",nc function extractFromCrops(
//   cropResult: TableCropResult,
//   prompt: string,
//   tracker?: TokenTracker,
// ) {
//   const model = new ChatOpenRouter({ model: process.env.EXTRACT_MODEL });
//   const structuredModel = model.withStructuredOutput(ExtractBeamSchema);

//   // Build message content with all crop images
//   const content: Array<
//     | { type: "text"; text: string }
//     | { type: "image_url"; image_url: { url: string } }
//   > = [];

//   //system prompt
//   const systemPrompt =
//     new SystemMessage(`You are extracting data from cropped table cells from the image.

//   For EACH image:
//   1. Identify the cell
//   2. Extract ALL which user wants
//   3. If the cell is empty or unreadable, set value to null
//   4. Make sure you extract all data from the all row dont leave any row and columns`);

//   content.push({ type: "text", text: prompt });

//   for (const cell of cropResult.cells) {
//     const cropPath = cropResult.cropPaths[cell.label];
//     if (!cropPath) continue;

//     try {
//       //image
//       const cropB64 = await compressImage(cropPath);
//       content.push({
//         type: "image_url",
//         image_url: { url: cropB64 },
//       });
//       //add text label after each image so llm know which cell this is
//       content.push({
//         type: "text",
//         text: `[Cell: ${cell.label} | ${cell.cellType} | beam_name: ${cell.beam_name}]`,
//       });
//     } catch (err) {
//       console.warn(`Failed to load crop ${cell.label}:`, err);
//       content.push({
//         type: "text",
//         text: `[Cell: ${cell.label} - IMAGE LOAD FAILED]`,
//       });
//     }
//   }
//   const humanMsg = new HumanMessage({ content });

//   const messages = [systemPrompt, humanMsg];
//   const usageHandler = tracker?.createUsageHandler();

//   // const messages = [humanMsg];
//   const response = await withRetry(
//     () => structuredModel.invoke(messages),
//     "extract from crops",
//   );

//   // Track tokens
//   if (tracker && usageHandler) {
//     tracker.addRecord("extract_from_crops", usageHandler.usage);
//   }

//   return response;
// }

//         text: `[Cell: ${cell.label} - IMAGE LOAD FAILED]`,
//       });
//     }
//   }
//   const humanMsg = new HumanMessage({ content });

//   const messages = [systemPrompt, humanMsg];
//   const usageHandler = tracker?.createUsageHandler();

//   // const messages = [humanMsg];
//   const response = await withRetry(
//     () => structuredModel.invoke(messages),
//     "extract from crops",
//   );

//   // Track tokens
//   if (tracker && usageHandler) {
//     tracker.addRecord("extract_from_crops", usageHandler.usage);
//   }

//   return response;
// }
