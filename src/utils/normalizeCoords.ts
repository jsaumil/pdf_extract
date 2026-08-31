import sharp from "sharp";

export async function normalizeCoords(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  imagePath: string,
): Promise<{ x1: number; y1: number; x2: number; y2: number }> {
  const needsNormalize = x1 > 1 || y1 > 1 || x2 > 1 || y2 > 1;
  if (!needsNormalize) return { x1, y1, x2, y2 };

  const meta = await sharp(imagePath).metadata();
  const w = meta.width ?? 1;
  const h = meta.height ?? 1;

  return {
    x1: Math.max(0, Math.min(1, x1 / w)),
    y1: Math.max(0, Math.min(1, y1 / h)),
    x2: Math.max(0, Math.min(1, x2 / w)),
    y2: Math.max(0, Math.min(1, y2 / h)),
  };
}
