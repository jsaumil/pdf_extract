import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

import { getOpenCV } from "./tools/opencv";

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface BbsRowCrop {
  tableIndex: number;
  rowIndex: number;

  x: number;
  y: number;
  width: number;
  height: number;

  path: string;
}

export interface BbsCropOptions {
  /**
   * Number of non-data rows before the actual BBS rows.
   *
   * Your screenshot has:
   *
   * 1. Schedule title
   * 2. Bending dimensions
   * 3. Column headers
   *
   * Therefore default = 3.
   */
  headerRows?: number;

  /**
   * Minimum width of a detected table relative to page width.
   */
  minTableWidthRatio?: number;

  /**
   * Minimum height of a detected table relative to page height.
   */
  minTableHeightRatio?: number;

  /**
   * Extra pixels around each row.
   */
  rowPadding?: number;

  /**
   * If true, generate an image showing detected tables.
   */
  debug?: boolean;
}

/**
 * Load an image into an OpenCV RGBA Mat.
 *
 * We use Sharp for decoding PNG/JPEG because OpenCV.js imread()
 * depends on browser DOM APIs in some Node environments.
 */
async function loadImageForOpenCV(imagePath: string, cv: any) {
  const { data, info } = await sharp(imagePath).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });

  const rgba = new Uint8ClampedArray(
    data.buffer,
    data.byteOffset,
    data.byteLength,
  );

  const mat = cv.matFromImageData({
    data: rgba,
    width: info.width,
    height: info.height,
  });

  return {
    mat,
    width: info.width,
    height: info.height,
  };
}

/**
 * Detect complete table rectangles.
 */
function detectTables(
  cv: any,
  image: any,
  options: Required<BbsCropOptions>,
): Rect[] {
  const gray = new cv.Mat();
  const binary = new cv.Mat();

  const horizontal = new cv.Mat();
  const vertical = new cv.Mat();

  const combined = new cv.Mat();
  const dilated = new cv.Mat();

  const contours = new cv.MatVector();
  const hierarchy = new cv.Mat();

  try {
    // ---------------------------------------------
    // 1. RGBA -> GRAY
    // ---------------------------------------------

    cv.cvtColor(image, gray, cv.COLOR_RGBA2GRAY);

    // ---------------------------------------------
    // 2. Adaptive threshold
    // ---------------------------------------------

    cv.adaptiveThreshold(
      gray,
      binary,
      255,
      cv.ADAPTIVE_THRESH_GAUSSIAN_C,
      cv.THRESH_BINARY_INV,
      31,
      10,
    );

    // ---------------------------------------------
    // 3. Horizontal lines
    // ---------------------------------------------

    const horizontalLength = Math.max(30, Math.floor(image.cols / 30));

    const horizontalKernel = cv.getStructuringElement(
      cv.MORPH_RECT,
      new cv.Size(horizontalLength, 1),
    );

    cv.morphologyEx(binary, horizontal, cv.MORPH_OPEN, horizontalKernel);

    horizontalKernel.delete();

    // ---------------------------------------------
    // 4. Vertical lines
    // ---------------------------------------------

    const verticalLength = Math.max(30, Math.floor(image.rows / 20));

    const verticalKernel = cv.getStructuringElement(
      cv.MORPH_RECT,
      new cv.Size(1, verticalLength),
    );

    cv.morphologyEx(binary, vertical, cv.MORPH_OPEN, verticalKernel);

    verticalKernel.delete();

    // ---------------------------------------------
    // 5. Combine lines
    // ---------------------------------------------

    cv.bitwise_or(horizontal, vertical, combined);

    // ---------------------------------------------
    // 6. Connect table lines
    // ---------------------------------------------

    const connectKernel = cv.getStructuringElement(
      cv.MORPH_RECT,
      new cv.Size(3, 3),
    );

    cv.dilate(combined, dilated, connectKernel, new cv.Point(-1, -1), 1);

    connectKernel.delete();

    // ---------------------------------------------
    // 7. IMPORTANT:
    //    RETR_LIST instead of RETR_EXTERNAL
    // ---------------------------------------------

    cv.findContours(
      dilated,
      contours,
      hierarchy,
      cv.RETR_LIST,
      cv.CHAIN_APPROX_SIMPLE,
    );

    const candidates: Array<
      Rect & {
        area: number;
        horizontalScore: number;
        verticalScore: number;
      }
    > = [];

    // ---------------------------------------------
    // 8. Examine every contour
    // ---------------------------------------------

    for (let i = 0; i < contours.size(); i++) {
      const contour = contours.get(i);

      try {
        const rect = cv.boundingRect(contour);

        const area = rect.width * rect.height;

        const widthRatio = rect.width / image.cols;

        const heightRatio = rect.height / image.rows;

        /*
         * Your BBS tables are large.
         *
         * Ignore:
         * - page border
         * - small summary table
         * - revision block
         * - text
         */

        if (widthRatio < 0.2 || heightRatio < 0.2) {
          continue;
        }

        if (widthRatio > 0.8 || heightRatio > 0.9) {
          continue;
        }

        // -----------------------------------------
        // Calculate horizontal line density
        // -----------------------------------------

        const roiHorizontal = horizontal.roi(rect);

        const horizontalPixels = cv.countNonZero(roiHorizontal);

        roiHorizontal.delete();

        // -----------------------------------------
        // Calculate vertical line density
        // -----------------------------------------

        const roiVertical = vertical.roi(rect);

        const verticalPixels = cv.countNonZero(roiVertical);

        roiVertical.delete();

        const rectangleArea = rect.width * rect.height;

        const horizontalScore = horizontalPixels / rectangleArea;

        const verticalScore = verticalPixels / rectangleArea;

        /*
         * A real table should have both
         * horizontal AND vertical lines.
         */

        if (horizontalScore < 0.005 || verticalScore < 0.001) {
          continue;
        }

        candidates.push({
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
          area,
          horizontalScore,
          verticalScore,
        });
      } finally {
        contour.delete();
      }
    }

    console.log("Table candidates:", candidates);

    // ---------------------------------------------
    // 9. Remove duplicates
    // ---------------------------------------------

    const unique = removeDuplicateTables(candidates);

    // ---------------------------------------------
    // 10. Sort left -> right
    // ---------------------------------------------

    unique.sort((a, b) => {
      if (Math.abs(a.y - b.y) < 50) {
        return a.x - b.x;
      }

      return a.y - b.y;
    });

    return unique;
  } finally {
    gray.delete();
    binary.delete();
    horizontal.delete();
    vertical.delete();
    combined.delete();
    dilated.delete();
    contours.delete();
    hierarchy.delete();
  }
}

/**
 * Remove duplicate table rectangles.
 */
function removeDuplicateTables(tables: Rect[]): Rect[] {
  const sorted = [...tables].sort(
    (a, b) => b.width * b.height - a.width * a.height,
  );

  const result: Rect[] = [];

  for (const candidate of sorted) {
    const duplicate = result.some(
      (existing) => intersectionOverUnion(candidate, existing) > 0.8,
    );

    if (!duplicate) {
      result.push(candidate);
    }
  }

  return result.sort((a, b) => {
    if (Math.abs(a.y - b.y) < 20) {
      return a.x - b.x;
    }

    return a.y - b.y;
  });
}

function intersectionOverUnion(a: Rect, b: Rect): number {
  const left = Math.max(a.x, b.x);
  const top = Math.max(a.y, b.y);

  const right = Math.min(a.x + a.width, b.x + b.width);

  const bottom = Math.min(a.y + a.height, b.y + b.height);

  if (right <= left || bottom <= top) {
    return 0;
  }

  const intersection = (right - left) * (bottom - top);

  const areaA = a.width * a.height;

  const areaB = b.width * b.height;

  const union = areaA + areaB - intersection;

  return intersection / union;
}

/**
 * Detect horizontal grid lines inside a table.
 */
function detectHorizontalLines(cv: any, tableImage: any): number[] {
  const gray = new cv.Mat();
  const binary = new cv.Mat();
  const horizontal = new cv.Mat();

  try {
    cv.cvtColor(tableImage, gray, cv.COLOR_RGBA2GRAY);

    cv.threshold(gray, binary, 0, 255, cv.THRESH_BINARY_INV | cv.THRESH_OTSU);

    /*
     * The important trick:
     *
     * The kernel is approximately half the table width.
     *
     * Therefore text and small shapes disappear,
     * while horizontal table borders remain.
     */

    const kernelWidth = Math.max(20, Math.floor(tableImage.cols * 0.5));

    const kernel = cv.getStructuringElement(
      cv.MORPH_RECT,
      new cv.Size(kernelWidth, 1),
    );

    cv.morphologyEx(binary, horizontal, cv.MORPH_OPEN, kernel);

    kernel.delete();

    /*
     * Count white pixels on each Y coordinate.
     *
     * A table line will have many white pixels.
     */

    const lines: number[] = [];

    const threshold = tableImage.cols * 0.5;

    for (let y = 0; y < tableImage.rows; y++) {
      let count = 0;

      for (let x = 0; x < tableImage.cols; x++) {
        const value = horizontal.ucharPtr(y, x)[0];

        if (value > 0) {
          count++;
        }
      }

      if (count >= threshold) {
        lines.push(y);
      }
    }

    return groupNearbyCoordinates(lines, 2);
  } finally {
    gray.delete();
    binary.delete();
    horizontal.delete();
  }
}

/**
 * Convert multiple pixels belonging to one line
 * into one coordinate.
 */
function groupNearbyCoordinates(values: number[], maxGap: number): number[] {
  if (values.length === 0) {
    return [];
  }

  const groups: number[][] = [];

  for (const value of values) {
    const last = groups[groups.length - 1];

    if (!last || value - last[last.length - 1] > maxGap) {
      groups.push([value]);
    } else {
      last.push(value);
    }
  }

  return groups.map((group) =>
    Math.round(group.reduce((sum, value) => sum + value, 0) / group.length),
  );
}

/**
 * Detect vertical grid lines inside a table.
 * Returns X coordinates of each vertical line.
 */
function detectVerticalLines(cv: any, tableImage: any): number[] {
  const gray = new cv.Mat();
  const binary = new cv.Mat();
  const vertical = new cv.Mat();

  try {
    cv.cvtColor(tableImage, gray, cv.COLOR_RGBA2GRAY);
    cv.threshold(gray, binary, 0, 255, cv.THRESH_BINARY_INV | cv.THRESH_OTSU);

    const kernelHeight = Math.max(20, Math.floor(tableImage.rows * 0.3));

    const kernel = cv.getStructuringElement(
      cv.MORPH_RECT,
      new cv.Size(1, kernelHeight),
    );

    cv.morphologyEx(binary, vertical, cv.MORPH_OPEN, kernel);
    kernel.delete();

    const lines: number[] = [];
    const threshold = tableImage.rows * 0.3;

    for (let x = 0; x < tableImage.cols; x++) {
      let count = 0;
      for (let y = 0; y < tableImage.rows; y++) {
        if (vertical.ucharPtr(y, x)[0] > 0) {
          count++;
        }
      }
      if (count >= threshold) {
        lines.push(x);
      }
    }

    return groupNearbyCoordinates(lines, 3);
  } finally {
    gray.delete();
    binary.delete();
    vertical.delete();
  }
}

/**
 * Crop all BBS rows from one detected table.
 */
async function cropTableRows(
  imagePath: string,
  outputDir: string,
  table: Rect,
  tableIndex: number,
  cv: any,
  headerRows: number,
  rowPadding: number,
): Promise<BbsRowCrop[]> {
  const tableImage = await sharp(imagePath)
    .extract({
      left: table.x,
      top: table.y,
      width: table.width,
      height: table.height,
    })
    .ensureAlpha()
    .raw()
    .toBuffer({
      resolveWithObject: true,
    });

  const rgba = new Uint8ClampedArray(
    tableImage.data.buffer,
    tableImage.data.byteOffset,
    tableImage.data.byteLength,
  );

  const tableMat = cv.matFromImageData({
    data: rgba,
    width: tableImage.info.width,
    height: tableImage.info.height,
  });

  try {
    const lineYs = detectHorizontalLines(cv, tableMat);
    const lineXs = detectVerticalLines(cv, tableMat);

    console.log(`Table ${tableIndex}:`, table);
    console.log(`Horizontal lines:`, lineYs);
    console.log(`Vertical lines:`, lineXs);

    const crops: BbsRowCrop[] = [];

    for (let i = headerRows; i < lineYs.length - 1; i++) {
      const relativeTop = lineYs[i];
      const relativeBottom = lineYs[i + 1];
      const rowHeight = relativeBottom - relativeTop;

      if (rowHeight < 20) {
        continue;
      }

      // --- Full row crop ---
      const left = Math.max(0, table.x - rowPadding);
      const top = Math.max(0, table.y + relativeTop - rowPadding);
      const right = Math.min(
        table.x + table.width + rowPadding,
        tableImage.info.width + table.x,
      );
      const bottom = Math.min(
        table.y + relativeBottom + rowPadding,
        tableImage.info.height + table.y,
      );
      const width = right - left;
      const height = bottom - top;

      if (width <= 0 || height <= 0) {
        continue;
      }

      const rowIndex = i - headerRows + 1;

      const filename = `table_${tableIndex}_row_${String(rowIndex).padStart(3, "0")}.png`;
      const outputPath = path.join(outputDir, filename);

      await sharp(imagePath)
        .extract({ left, top, width, height })
        .png()
        .toFile(outputPath);

      crops.push({
        tableIndex,
        rowIndex,
        x: left,
        y: top,
        width,
        height,
        path: outputPath,
      });

      console.log(`  Row ${rowIndex}: ${width}x${height} → ${outputPath}`);
    }

    return crops;
  } finally {
    tableMat.delete();
  }
}

/**
 * Create an SVG debug overlay showing detected tables.
 */
async function createDebugImage(
  imagePath: string,
  outputPath: string,
  tables: Rect[],
): Promise<void> {
  const metadata = await sharp(imagePath).metadata();

  if (!metadata.width || !metadata.height) {
    return;
  }

  const colors = ["#ff0000", "#0000ff", "#00aa00", "#ff8800"];

  const rects = tables
    .map((table, index) => {
      const color = colors[index % colors.length];

      return `
          <rect
            x="${table.x}"
            y="${table.y}"
            width="${table.width}"
            height="${table.height}"
            fill="none"
            stroke="${color}"
            stroke-width="4"
          />

          <text
            x="${table.x + 10}"
            y="${table.y + 30}"
            font-size="24"
            fill="${color}"
            font-family="Arial"
          >
            TABLE ${index + 1}
          </text>
        `;
    })
    .join("");

  const svg = `
    <svg
      width="${metadata.width}"
      height="${metadata.height}"
      xmlns="http://www.w3.org/2000/svg"
    >
      ${rects}
    </svg>
  `;

  await sharp(imagePath)
    .composite([
      {
        input: Buffer.from(svg),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toFile(outputPath);
}

/**
 * Main public function.
 */
export async function cropBbsRows(
  imagePath: string,
  outputDir: string,
  options: BbsCropOptions = {},
): Promise<BbsRowCrop[]> {
  const {
    headerRows = 3,

    minTableWidthRatio = 0.25,

    minTableHeightRatio = 0.15,

    rowPadding = 1,

    debug = true,
  } = options;

  if (!fs.existsSync(imagePath)) {
    throw new Error(`Image not found: ${imagePath}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const cv = await getOpenCV();

  const { mat: image, width, height } = await loadImageForOpenCV(imagePath, cv);

  try {
    console.log(`Image: ${width}x${height}`);

    const tables = detectTables(cv, image, {
      headerRows,
      minTableWidthRatio,
      minTableHeightRatio,
      rowPadding,
      debug,
    });

    console.log(`Detected ${tables.length} tables`);

    if (tables.length === 0) {
      console.warn("No BBS tables detected.");

      return [];
    }

    console.log("Detected tables:", tables);

    if (debug) {
      await createDebugImage(
        imagePath,
        path.join(outputDir, "debug_tables.png"),
        tables,
      );
    }

    const allRows: BbsRowCrop[] = [];

    for (let i = 0; i < tables.length; i++) {
      const rows = await cropTableRows(
        imagePath,
        outputDir,
        tables[i],
        i + 1,
        cv,
        headerRows,
        rowPadding,
      );

      allRows.push(...rows);
    }

    return allRows;
  } finally {
    /*
     * Very important for OpenCV.js/WASM.
     */
    image.delete();
  }
}
