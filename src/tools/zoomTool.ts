import sharp from "sharp";

function clamp01(n: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

const ZOOM_TARGET_PX = 1200;

export async function cropAndZoom(
  image: Buffer,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): Promise<Buffer> {
  const meta = await sharp(image).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (!w || !h) return image;

  const fx1 = clamp01(x1);
  const fy1 = clamp01(y1);
  let fx2 = clamp01(x2);
  let fy2 = clamp01(y2);

  if (fx2 <= fx1) fx2 = Math.min(1, fx1 + 0.05);
  if (fy2 <= fy1) fy2 = Math.min(1, fy1 + 0.05);

  const left = Math.max(0, Math.min(w - 1, Math.floor(fx1 * w)));
  const top = Math.max(0, Math.min(h - 1, Math.floor(fy1 * h)));
  let right = Math.min(w, Math.max(left + 20, Math.floor(fx2 * w)));
  let bottom = Math.min(h, Math.max(top + 20, Math.floor(fy2 * h)));
  // right = Math.max(right, left + 1);
  // bottom = Math.max(bottom, top + 1);

  // Clamp to image bounds
  const cropW = Math.max(1, Math.min(w - left, right - left));
  const cropH = Math.max(1, Math.min(h - top, bottom - top));

  // ─── NEW: Check if region is mostly blank ───
  const rawCrop = await sharp(image)
    .extract({ left, top, width: cropW, height: cropH })
    .greyscale()
    .raw()
    .toBuffer();

  const avgBrightness =
    rawCrop.reduce((sum, px) => sum + px, 0) / rawCrop.length;

  // if (avgBrightness > 250) {
  //   console.warn(
  //     `⚠ Crop (${fx1.toFixed(2)},${fy1.toFixed(2)})→(${fx2.toFixed(2)},${fy2.toFixed(2)}) is mostly blank (avg brightness: ${avgBrightness.toFixed(0)}). Saving anyway.`,
  //   );
  // }

  // Normal pipeline
  let pipeline = sharp(image).extract({
    left,
    top,
    width: cropW,
    height: cropH,
  });

  const longest = Math.max(cropW, cropH);
  if (longest > 0 && longest < ZOOM_TARGET_PX) {
    const scale = ZOOM_TARGET_PX / longest;
    pipeline = pipeline.resize(
      Math.round(cropW * scale),
      Math.round(cropH * scale),
    );
  }
  const cropped = await pipeline.png().toBuffer();
  return cropped;
}
