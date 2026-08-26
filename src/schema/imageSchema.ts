import { z } from "zod";

export const cropSchema = z.object({
  column_name: z
    .string()
    .describe(
      "it should contains the name of the column or say name of the bar or bar position bar mark.",
    ),
  cellType: z.enum(["header", "row_label", "data"]).describe("Type of cell"),
  x1: z.number().min(0).max(1).describe("Left edge normalized"),
  y1: z.number().min(0).max(1).describe("Top edge normalized"),
  x2: z.number().min(0).max(1).describe("Right edge normalized"),
  y2: z.number().min(0).max(1).describe("Bottom edge normalized"),
  label: z
    .string()
    .describe(
      "Semantic label, e.g. 'header_size', 'row_GC41', 'GC41_reinforcement'",
    ),
});
