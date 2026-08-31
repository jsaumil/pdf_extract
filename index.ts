import path from "path";
import fs from "fs";
import { extract } from "./src/extractor";
import { convertPdfToImages } from "./src/pdfToImage";
import { mergeExtractionResults } from "./src/schema/mergeExtraction";
import { detectAndCropBbs } from "./src/langgraph";

const startTime = performance.now();

const timestamp = new Date()
  .toISOString()
  .replace(/[-:]/g, "")
  .replace("T", "_")
  .slice(0, 15);

const outputDir = path.join("output", timestamp);
fs.mkdirSync(outputDir, { recursive: true });
const rowDir = path.join(outputDir, "bbsrow");
fs.mkdirSync(rowDir, { recursive: true });

const PROMPT = fs.readFileSync(
  path.join(__dirname, "src/prompts", "extract_prompt.txt"),
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
  console.log(`Found ${bbsRows.length} BBS rows`);

  // Pass bending detail crops directly — no LLM cropper needed
  const cropResults = bbsRows.map((row) => ({
    imagePath: row.bendingDetailsPath,
    cells: [
      {
        column_name: `row_${row.rowIndex}`,
        cellType: "data" as const,
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1,
        label: `bbs_row_${row.rowIndex}`,
      },
    ],
    cropPaths: {
      [`bbs_row_${row.rowIndex}`]: row.bendingDetailsPath,
    },
  }));

  const result = await extract(page, PROMPT, cropResults);
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
