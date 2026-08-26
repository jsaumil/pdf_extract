import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenRouter } from "@langchain/openrouter";
import { ExtractSchema } from "./schema/extractSchema";
import { compressImage, withRetry } from "./utils/api_helpers";
// import { TableCropResult } from "./cropper";
import config from "../config.json";

export async function extract(imagePath: string, prompt: string) {
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
  const response = await withRetry(
    () => structuredModel.invoke([message]),
    "extract",
  );

  return response;
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
