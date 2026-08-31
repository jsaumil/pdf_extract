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
  path.join(__dirname, "src/prompts", "extract.txt"),
  "utf-8",
);

const CROP_PROMPT = fs.readFileSync(
  path.join(__dirname, "src/prompts", "crop_prompt.txt"),
  "utf-8",
);

// pdf to image
const pages = await convertPdfToImages("./input/i5.pdf", outputDir, {
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
const pageTimings: { page: string; seconds: number }[] = [];
const totalStart = Date.now();
for (const page of pages) {
  const pageStart = Date.now();
  console.log(`Extracting: ${page}`);

  const cropResult = await cropper(page, cropsDir, CROP_PROMPT);
  const result = await extract(page, PROMPT, cropResult);
  results.push(result);

  const seconds = (Date.now() - pageStart) / 1000;
  pageTimings.push({ page: path.basename(page), seconds });
  console.log(`  ${path.basename(page)} — ${seconds.toFixed(2)}s`);
}
const finalResult = mergeExtractionResults(results);

// timing summary
const totalSeconds = (Date.now() - totalStart) / 1000;
console.log(`\nTotal: ${totalSeconds.toFixed(2)}s for ${pages.length} pages`);
console.log(`Average: ${(totalSeconds / pages.length).toFixed(2)}s per page`);

console.log(JSON.stringify(finalResult, null, 2));
const resultPath = path.join(outputDir, "result.json");
fs.writeFileSync(resultPath, JSON.stringify(finalResult, null, 2));
console.log("file is saved");
