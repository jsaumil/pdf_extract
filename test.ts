import { cropBbsRows } from "./src/bbs";
import { extract } from "./src/extractor";
import path from "path";
import fs from "fs";

const imagePath = "output/20260901_084919/page_1.png";

const outputDir = "output/20260831_055942/bbs-crops";
const PROMPT = fs.readFileSync(
  path.join(__dirname, "src/prompts", "extract.txt"),
  "utf-8",
);

const rows = await extract(imagePath, PROMPT, []);

console.log(rows);
