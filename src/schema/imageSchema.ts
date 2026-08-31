import { z } from "zod";

export const cropSchema = z.object({
  column_name: z
    .string()
    .describe(
      "The EXACT bar mark number only (e.g. '2031', '622', '5395'). No prefixes, no extra text. Just the numeric bar mark from the row.",
    ),
  cellType: z.enum(["header", "row_label", "data"]).describe("Type of cell"),
  x1: z.number().min(0).max(1).describe("Left edge normalized"),
  y1: z.number().min(0).max(1).describe("Top edge normalized"),
  x2: z.number().min(0).max(1).describe("Right edge normalized"),
  y2: z.number().min(0).max(1).describe("Bottom edge normalized"),
  label: z
    .string()
    .describe(
      "Semantic label in format: bending_{barmark} (e.g. 'bending_2031', 'bending_622')",
    ),
});
