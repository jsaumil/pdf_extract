import { test, expect } from "bun:test";
import { mapBatched } from "./api_helpers";

test("mapBatched preserves order and caps concurrency", async () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  let inFlight = 0;
  let peak = 0;

  const out = await mapBatched(
    items,
    async (n) => {
      inFlight++;
      peak = Math.max(peak, inFlight);
      await new Promise((r) => setTimeout(r, 10 - (n % 3) * 3));
      inFlight--;
      return n * 2;
    },
    3,
  );

  expect(out).toEqual([2, 4, 6, 8, 10, 12, 14]);
  expect(peak).toBeLessThanOrEqual(3);
});

test("mapBatched drops failures but keeps batch mates", async () => {
  const out = await mapBatched(
    [1, 2, 3, 4],
    async (n) => {
      if (n === 2) throw new Error("boom");
      return n;
    },
    4,
  );

  expect(out).toEqual([1, 3, 4]);
});
