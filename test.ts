import { cropBbsRows } from "./src/bbs";

const imagePath = "output/20260831_055942/page_1.png";

const outputDir = "output/20260831_055942/bbs-crops";

const rows = await cropBbsRows(imagePath, outputDir, {
  headerRows: 3,
  debug: true,
});

console.log(`Total rows: ${rows.length}`);

console.log(rows);
