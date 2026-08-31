// types.ts
export interface CropResult {
  path: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  description: string; // e.g. "Column 2: Invoice Date"
  columnNumber?: number;
  columnName?: string;
}

export interface ExtractedCrop extends CropResult {
  extractedData: any; // whatever ExtractSchema produces
}
