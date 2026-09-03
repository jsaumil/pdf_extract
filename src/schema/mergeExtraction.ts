import type { ExtractResult } from "./extractSchema";

export function mergeExtractionResults(
  results: ExtractResult[],
): ExtractResult {
  return {
    project_name: results.find((r) => r.project_name)?.project_name ?? null,

    structure_consultant:
      results.find((r) => r.structure_consultant)?.structure_consultant ?? null,

    drawing_no: results.find((r) => r.drawing_no)?.drawing_no ?? null,

    date: results.find((r) => r.date)?.date ?? null,

    rev: results.find((r) => r.rev)?.rev ?? null,

    element_name: results.find((r) => r.element_name)?.element_name ?? null,

    element_number:
      results.find((r) => r.element_number)?.element_number ?? null,

    plate: results
      .flatMap((result) => result.plate ?? [])
      .filter((plate): plate is NonNullable<typeof plate> => plate !== null),

    mark: results
      .flatMap((result) => result.mark ?? [])
      .filter((mark): mark is NonNullable<typeof mark> => mark !== null),

    columns: results
      .flatMap((result) => result.columns ?? [])
      .filter(
        (column): column is NonNullable<typeof column> => column !== null,
      ),
  };
}
