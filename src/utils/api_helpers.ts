import sharp from "sharp";
import { encodeImageToBase64 } from "./image";

const MAX_RETRIES = 3;
const BACKOFF_MS = 5000;

/** Resize large images to reduce payload size before sending to the API. */
export async function compressImage(
  imagePath: string,
  maxDim = 1500,
): Promise<string> {
  const meta = await sharp(imagePath).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;

  if (w <= maxDim && h <= maxDim) {
    return encodeImageToBase64(imagePath);
  }

  const resized = await sharp(imagePath)
    .resize({ width: maxDim, height: maxDim, fit: "inside" })
    .png()
    .toBuffer();

  const b64 = resized.toString("base64");
  return `data:image/png;base64,${b64}`;
}

/** Retry a function with exponential backoff on transient network errors. */
export async function withRetry<T>(
  fn: () => Promise<T>,
  label = "API call",
  maxRetries = MAX_RETRIES,
): Promise<T> {
  let lastError: Error | null = null;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      lastError = err;
      const msg = err.message ?? "";
      console.warn(`  ${label} attempt ${attempt}/${maxRetries} error: ${msg.slice(0, 200)}`);

      const isRetryable =
        msg.includes("ECONNRESET") ||
        msg.includes("socket") ||
        msg.includes("fetch failed") ||
        msg.includes("timeout") ||
        msg.includes("503") ||
        msg.includes("429") ||
        msg.includes("choices") ||
        msg.includes("undefined");

      if (attempt < maxRetries && isRetryable) {
        const delay = BACKOFF_MS * attempt;
        console.warn(`  Retrying in ${delay / 1000}s...`);
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}
