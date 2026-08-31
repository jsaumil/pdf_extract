// utils/image.ts
import fs from "fs";
import path from "path";

export function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const map: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
  };
  return map[ext] || "image/png";
}

export async function encodeImageToBase64(imagePath: string) {
  const imageBuffer = await fs.promises.readFile(imagePath);
  const base64Image = imageBuffer.toString("base64");
  const mimeType = getMimeType(imagePath);
  return `data:${mimeType};base64,${base64Image}`;
}
