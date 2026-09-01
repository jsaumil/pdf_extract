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
      const isRetryable =
        msg.includes("ECONNRESET") ||
        msg.includes("socket") ||
        msg.includes("fetch failed") ||
        msg.includes("timeout") ||
        msg.includes("503") ||
        msg.includes("429");

      if (attempt < maxRetries && isRetryable) {
        const delay = BACKOFF_MS * attempt;
        console.warn(
          `  ${label} attempt ${attempt}/${maxRetries} failed (${msg.slice(0, 80)}). Retrying in ${delay / 1000}s...`,
        );
        await new Promise((r) => setTimeout(r, delay));
        continue;
      }
      throw err;
    }
  }
  throw lastError;
}

/**
 * Run `fn` over `items` in fixed-size concurrent batches.
 *
 * Order is preserved. A rejected item does not kill its batch mates —
 * it is logged and dropped, so one bad image cannot discard the rest.
 */
export async function mapBatched<T, R>(
  items: T[],
  fn: (item: T, index: number) => Promise<R>,
  concurrency = 4,
  label = "batch",
): Promise<R[]> {
  const size = Math.max(1, concurrency);
  const results: R[] = [];

  for (let start = 0; start < items.length; start += size) {
    const slice = items.slice(start, start + size);
    console.log(
      `  ${label}: ${start + 1}-${start + slice.length} of ${items.length}`,
    );

    const settled = await Promise.allSettled(
      slice.map((item, offset) => fn(item, start + offset)),
    );

    for (const [offset, outcome] of settled.entries()) {
      if (outcome.status === "fulfilled") {
        results.push(outcome.value);
      } else {
        console.error(
          `  ${label} item ${start + offset + 1} failed: ${outcome.reason?.message ?? outcome.reason}`,
        );
      }
    }
  }

  return results;
}
