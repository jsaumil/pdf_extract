import { z } from "zod";

const dataSchema = z.object({
  bar_mark: z
    .string()
    .describe(
      "the name of the bar it can be also written position we can all bar_mark or position",
    ),
  diameter: z.coerce.number().describe("extract the bar diameter"),
  qty: z.coerce
    .number()
    .describe("extract the qty from the table it is the number of qty"),
  length: z.coerce
    .number()
    .describe("extract the bar cutting lenth from the row"),
  total_bar_length: z.coerce
    .number()
    .describe("extract the total number of the bar length"),
  data: z
    .record(z.string(), z.coerce.number().nullable())
    .default({})
    .describe(
      "Extract only dimension values such as A, B, C, C1, C2, D, D1, D2, D3. Do not put text fields such as bending_details inside this object.",
    ),
  total_weigth: z.coerce
    .number()
    .describe("extract the total weigth of the bar"),
});

const plateSchema = z.object({
  plate_name: z
    .string()
    .nullable()
    .describe("Extract the plate name if it is available on the page"),
  plate_repetation: z.coerce
    .number()
    .nullable()
    .describe("extract the number of the plate which are repetated"),
  plate_profile: z
    .string()
    .nullable()
    .describe("extract the plate profile form the image example:12x200x2 "),
  weigth: z.coerce
    .number()
    .nullable()
    .describe("Extract the weight of plate in kg's"),
  dia_of_lug: z.coerce
    .number()
    .nullable()
    .describe("Extract the dia of lugs if available"),
  total_length_of_lug: z.coerce
    .number()
    .nullable()
    .describe("Extract the total length of the lug"),
  total_weight_of_lug: z.coerce
    .number()
    .nullable()
    .describe("Extract the total weight of the lug"),
});

export const ExtractSchema = z.object({
  project_name: z
    .string()
    .nullable()
    .describe("the name of the project it mostly in the information table"),
  structure_consultant: z
    .string()
    .nullable()
    .describe("the  name of the consultant of the project"),
  drawing_no: z.string().nullable().describe("extract the drawing number"),
  date: z
    .string()
    .nullable()
    .describe("extract the date from the information table"),
  rev: z
    .string()
    .nullable()
    .describe("extract the rev number from the information table"),
  element_name: z
    .string()
    .nullable()
    .describe(
      "Extract the structural element name, for example N3C-2-C15, if available",
    ),
  element_number: z
    .string()
    .nullable()
    .describe(
      "Extract the number of the elements only if explicity given. Do not guess or calculate it",
    ),
  plate: z
    .array(plateSchema)
    .default([])
    .describe("Extract from the plate table"),
  columns: z
    .array(dataSchema)
    .default([])
    .describe("Extract from bar or columns table extracted from the table"),
});

export type ExtractResult = z.infer<typeof ExtractSchema>;
