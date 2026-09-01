import path from "path";
import fs from "fs";
import { extract } from "./src/extractor";
import { cropperBatch } from "./src/imageExtractor";
import { convertPdfToImages } from "./src/pdfToImage";
import { mergeExtractionResults } from "./src/schema/mergeExtraction";
import { detectAndCropBbs } from "./src/langgraph";

// ponytail: fixed concurrency; make it adaptive only if OpenRouter starts 429ing
const CROP_CONCURRENCY = 4;

const startTime = performance.now();

const timestamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace("T", "_")
  .slice(0, 15);

const outputDir = path.join("output", timestamp);
fs.mkdirSync(outputDir, { recursive: true });
const cropsDir = path.join(outputDir, "crops");
fs.mkdirSync(cropsDir, { recursive: true });
const rowDir = path.join(outputDir, "bbsrow");
fs.mkdirSync(rowDir, { recursive: true });

const PROMPT = fs.readFileSync(
  path.join(__dirname, "src/prompts", "extract_prompt.txt"),
  "utf-8",
);

const CROP_PROMPT = fs.readFileSync(
  path.join(__dirname, "src/prompts", "crop_prompt.txt"),
  "utf-8",
);

// pdf to image
const pages = await convertPdfToImages("./input/i1.pdf", outputDir, {
  dpi: 300,
});
console.log(pages);

const results = [];
for (const page of pages) {
  console.log(`Extracting: ${page}`);
  const bbsRows = await detectAndCropBbs(page, rowDir);
  console.log(bbsRows);
  const cropResult = await cropperBatch(
    bbsRows.map((row) => row.path),
    cropsDir,
    CROP_PROMPT,
    CROP_CONCURRENCY,
  );
  const result = await extract(page, PROMPT, cropResult);
  results.push(result);
}
const finalResult = mergeExtractionResults(results);

console.log(JSON.stringify(finalResult, null, 2));
const resultPath = path.join(outputDir, "result.json");
fs.writeFileSync(resultPath, JSON.stringify(finalResult, null, 2));
console.log("file is saved");

//timing
const totalTime = performance.now() - startTime;
console.log("\n================================");
console.log(`TOTAL TIME: ${(totalTime / 1000).toFixed(2)} seconds`);
console.log(`TOTAL TIME: ${(totalTime / 60000).toFixed(2)} minutes`);
console.log("================================");
