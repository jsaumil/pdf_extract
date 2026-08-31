import cvModule from "@techstark/opencv-js";

export async function getOpenCV() {
  const cv = await cvModule;

  if (!cv || !cv.Mat) {
    throw new Error("OpenCV.js failed to initialize");
  }

  return cv;
}
