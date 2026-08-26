import path from "path";
import fs from "fs";
import { extract } from "./src/extractor";
import { cropper } from "./src/imageExtractor";
import { convertPdfToImages } from "./src/pdfToImage";
import { mergeExtractionResults } from "./src/schema/mergeExtraction";

const timestamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace("T", "_")
  .slice(0, 15);

const outputDir = path.join("output", timestamp);
fs.mkdirSync(outputDir, { recursive: true });
const cropsDir = path.join(outputDir, "crops");
fs.mkdirSync(cropsDir, { recursive: true });

const PROMPT = fs.readFileSync(
  path.join(__dirname, "src/prompts", "extract_prompt.txt"),
  "utf-8",
);

const CROP_PROMPT = fs.readFileSync(
  path.join(__dirname, "src/prompts", "crop_prompt.txt"),
  "utf-8",
);

// pdf to image
const pages = await convertPdfToImages("./input/merged.pdf", outputDir, {
  dpi: 300,
});
console.log(pages);
// const image = path.join(outputDir, "page_1.png");

// const data = await extract(image, PROMPT);

// const output = {
//   extractions: data,
// };
// const resultPath = path.join(outputDir, "result.json");
// fs.writeFileSync(resultPath, JSON.stringify(output, null, 2));
// console.log("file is saved");

const results = [];
for (const page of pages) {
  console.log(`Extracting: ${page}`);

  // const result = await extract(page, PROMPT);
  const result = await cropper(page, cropsDir, CROP_PROMPT);
  results.push(result);
}
const finalResult = mergeExtractionResults(results);

// console.log(JSON.stringify(finalResult, null, 2));
const output = {
  extractions: finalResult,
};
const resultPath = path.join(outputDir, "result.json");
fs.writeFileSync(resultPath, JSON.stringify(output, null, 2));
console.log("file is saved");
