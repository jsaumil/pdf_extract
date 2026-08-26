import mupdf from "mupdf";
import fs from "node:fs";
import path from "node:path";

function fitDpiToPixelLimit(
  widthPt: number,
  heightPt: number,
  requestedDpi: number,
  maxPixels: number,
): number {
  if (!(widthPt > 0) || !(heightPt > 0)) return requestedDpi;
  const scale = requestedDpi / 72;
  const estimatedPixels = widthPt * scale * heightPt * scale;
  if (estimatedPixels <= maxPixels) return requestedDpi;
  const fittedScale = Math.sqrt(maxPixels / (widthPt * heightPt));
  const fittedDpi = Math.floor(fittedScale * 72);
  return Math.max(36, Math.min(requestedDpi, fittedDpi));
}

export async function convertPdfToImages(
  pdfPath: string,
  outputDir: string,
  options?: { dpi?: number; maxPixels?: number },
): Promise<string[]> {
  // 1. Check if file exists and read it
  if (!fs.existsSync(pdfPath)) {
    throw new Error(`PDF file not found at: ${pdfPath}`);
  }
  const buffer = fs.readFileSync(pdfPath);

  // 2. Open document using static import
  const u8In = new Uint8Array(buffer.byteLength);
  u8In.set(buffer);
  const doc = mupdf.Document.openDocument(u8In, "application/pdf");

  const dpi = options?.dpi ?? 300;
  const maxPixels = options?.maxPixels;

  const buildMatrix = (d: number): any => {
    const s = d / 72;
    return mupdf.Matrix && typeof mupdf.Matrix.scale === "function"
      ? mupdf.Matrix.scale(s, s)
      : [s, 0, 0, s, 0, 0]; // Fallback for different mupdf versions
  };

  const colorspace = mupdf.ColorSpace.DeviceRGB;
  const alpha = false;

  const imagePaths: string[] = [];

  try {
    const pageCount: number = doc.countPages();
    console.log(`Total pages: ${pageCount}`);

    for (let i = 0; i < pageCount; i++) {
      const page = doc.loadPage(i);
      try {
        let renderDpi = dpi;

        // Adjust DPI if maxPixels limit is set
        if (
          maxPixels &&
          maxPixels > 0 &&
          typeof page.getBounds === "function"
        ) {
          const bounds = page.getBounds();
          if (Array.isArray(bounds) && bounds.length >= 4) {
            const widthPt = bounds[2] - bounds[0];
            const heightPt = bounds[3] - bounds[1];
            renderDpi = fitDpiToPixelLimit(widthPt, heightPt, dpi, maxPixels);
          }
        }

        const pixmap = page.toPixmap(buildMatrix(renderDpi), colorspace, alpha);
        try {
          const pngBytes = pixmap.asPNG();

          // Handle mupdf buffer wrapper safely
          const u8Out =
            pngBytes && typeof pngBytes.asUint8Array === "function"
              ? pngBytes.asUint8Array()
              : pngBytes;

          const outputPath = path.join(outputDir, `page_${i + 1}.png`);
          fs.writeFileSync(outputPath, Buffer.from(u8Out));
          imagePaths.push(outputPath);

          console.log(
            `Saved page ${i + 1}/${pageCount} (${pixmap.width}x${pixmap.height} @ ${renderDpi}dpi) → ${outputPath}`,
          );
        } finally {
          if (typeof pixmap.destroy === "function") pixmap.destroy();
        }
      } finally {
        if (typeof page.destroy === "function") page.destroy();
      }
    }
    return imagePaths;
  } finally {
    if (typeof doc.destroy === "function") doc.destroy();
  }
}
