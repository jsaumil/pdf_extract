import { connectDB, getDB } from "./src/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";

// Extraction pipeline imports
import { convertPdfToImages } from "./src/pdfToImage";
import { cropperBatch } from "./src/imageExtractor";
import { extract } from "./src/extractor";
import { mergeExtractionResults } from "./src/schema/mergeExtraction";
import type { ExtractResult } from "./src/schema/extractSchema";
import { detectAndCropBbs } from "./src/langgraph";

const CROP_CONCURRENCY = 4;

const JWT_SECRET = process.env.JWT_SECRET || "pdf-extract-secret-key-2024";
const PORT = 3000;

const PROMPT = fs.readFileSync(
  path.join(import.meta.dir, "src/prompts", "extract_prompt.txt"),
  "utf-8"
);
const CROP_PROMPT = fs.readFileSync(
  path.join(import.meta.dir, "src/prompts", "crop_prompt.txt"),
  "utf-8"
);

function json(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function verifyToken(req: Request): any {
  const auth = req.headers.get("Authorization");
  if (!auth?.startsWith("Bearer ")) return null;
  try {
    return jwt.verify(auth.slice(7), JWT_SECRET);
  } catch {
    return null;
  }
}

async function runExtraction(projectId: number, pdfPath: string) {
  const db = getDB();
  const startTime = performance.now();
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace("T", "_")
    .slice(0, 15);

  const outputDir = path.join("output", timestamp);
  fs.mkdirSync(outputDir, { recursive: true });
  const cropsDir = path.join(outputDir, "crops");
  fs.mkdirSync(cropsDir, { recursive: true });
  const rowDir = path.join(outputDir, "bbsrow");
  fs.mkdirSync(rowDir, { recursive: true });

  try {
    db.run(
      "UPDATE projects SET status = 'processing', extraction_progress = 'Converting PDF to images...' WHERE id = ?",
      [projectId]
    );

    const pages = await convertPdfToImages(pdfPath, outputDir, { dpi: 300 });
    console.log(`Converted ${pages.length} pages`);

    const results: ExtractResult[] = [];
    for (let i = 0; i < pages.length; i++) {
      const pageStartTime = performance.now();
      const page = pages[i];
      console.log(`Processing page ${i + 1}/${pages.length}: ${page}`);

      db.run(
        "UPDATE projects SET extraction_progress = ? WHERE id = ?",
        [`Detecting BBS tables on page ${i + 1}/${pages.length}...`, projectId]
      );

      const bbsRows = await detectAndCropBbs(page, rowDir);

      let cropResults: any[] = [];
      if (bbsRows.length > 0) {
        db.run(
          "UPDATE projects SET extraction_progress = ? WHERE id = ?",
          [`Cropping ${bbsRows.length} BBS rows from page ${i + 1}/${pages.length}...`, projectId]
        );

        cropResults = await cropperBatch(
          bbsRows.map((row) => row.path),
          cropsDir,
          CROP_PROMPT,
          CROP_CONCURRENCY,
        );
      }

      db.run(
        "UPDATE projects SET extraction_progress = ? WHERE id = ?",
        [`Extracting data from page ${i + 1}/${pages.length}...`, projectId]
      );

      const result = await extract(page, PROMPT, cropResults);
      results.push(result);

      const pageTime = ((performance.now() - pageStartTime) / 1000).toFixed(2);
      console.log(`Page ${i + 1} done in ${pageTime}s`);
    }

    const merged = mergeExtractionResults(results);

    // Make crop_image paths relative to output dir
    for (const col of merged.columns) {
      if (col.crop_image) {
        col.crop_image = path.relative(".", col.crop_image).replace(/\\/g, "/");
      }
    }

    const totalTime = ((performance.now() - startTime) / 1000).toFixed(2);
    console.log(`\nExtraction complete for project ${projectId} in ${totalTime}s`);

    db.run(
      "UPDATE projects SET status = 'completed', extraction_progress = ?, result = ?, output_path = ? WHERE id = ?",
      [`Done in ${totalTime}s`, JSON.stringify(merged), path.join(outputDir, "result.json").replace(/\\/g, "/"), projectId]
    );
  } catch (err: any) {
    console.error(`Extraction failed for project ${projectId}:`, err);
    db.run(
      "UPDATE projects SET status = 'failed', extraction_progress = ? WHERE id = ?",
      [err.message, projectId]
    );
  }
}

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // ─── Static files ───
    if (pathname === "/" || pathname === "/login") {
      return new Response(Bun.file("public/login.html"));
    }
    if (pathname === "/dashboard") {
      return new Response(Bun.file("public/dashboard.html"));
    }
    if (pathname === "/project") {
      return new Response(Bun.file("public/project.html"));
    }
    if (pathname.startsWith("/public/")) {
      return new Response(Bun.file(pathname.slice(1)));
    }

    // Serve crop images from output directory
    if (pathname.startsWith("/output/")) {
      const filePath = path.join(".", pathname);
      if (fs.existsSync(filePath)) {
        return new Response(Bun.file(filePath));
      }
      return json({ error: "File not found" }, 404);
    }

    // ─── API Routes ───
    const db = getDB();

    // Register
    if (pathname === "/api/auth/register" && req.method === "POST") {
      const body = await req.json();
      const { email, password, name } = body;
      if (!email || !password) return json({ error: "Email and password required" }, 400);

      const existing = db.query("SELECT id FROM users WHERE email = ?").get(email);
      if (existing) return json({ error: "User already exists" }, 409);

      const hash = await bcrypt.hash(password, 10);
      const result = db.run("INSERT INTO users (email, password, name) VALUES (?, ?, ?)", [
        email,
        hash,
        name || email,
      ]);

      const userId = result.lastInsertRowid;
      const token = jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: "7d" });
      return json({ token, user: { id: userId, email, name: name || email } });
    }

    // Login
    if (pathname === "/api/auth/login" && req.method === "POST") {
      const body = await req.json();
      const { email, password } = body;
      if (!email || !password) return json({ error: "Email and password required" }, 400);

      const user = db.query("SELECT * FROM users WHERE email = ?").get(email) as any;
      if (!user) return json({ error: "Invalid credentials" }, 401);

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return json({ error: "Invalid credentials" }, 401);

      const token = jwt.sign({ userId: user.id, email }, JWT_SECRET, { expiresIn: "7d" });
      return json({ token, user: { id: user.id, email, name: user.name } });
    }

    // Get current user
    if (pathname === "/api/auth/me" && req.method === "GET") {
      const user = verifyToken(req);
      if (!user) return json({ error: "Unauthorized" }, 401);
      return json({ user: { id: user.userId, email: user.email } });
    }

    // ─── Project routes ───

    // List projects
    if (pathname === "/api/projects" && req.method === "GET") {
      const user = verifyToken(req);
      if (!user) return json({ error: "Unauthorized" }, 401);

      const projects = db
        .query("SELECT * FROM projects WHERE user_id = ? ORDER BY created_at DESC")
        .all(user.userId);
      return json({ projects });
    }

    // Create project
    if (pathname === "/api/projects" && req.method === "POST") {
      const user = verifyToken(req);
      if (!user) return json({ error: "Unauthorized" }, 401);

      const body = await req.json();
      const { name } = body;
      if (!name) return json({ error: "Project name required" }, 400);

      const result = db.run(
        "INSERT INTO projects (user_id, name, status) VALUES (?, ?, 'created')",
        [user.userId, name]
      );

      const project = db
        .query("SELECT * FROM projects WHERE id = ?")
        .get(result.lastInsertRowid);
      return json({ project }, 201);
    }

    // Get single project
    if (
      pathname.startsWith("/api/projects/") &&
      req.method === "GET" &&
      !pathname.includes("/upload") &&
      !pathname.includes("/status")
    ) {
      const user = verifyToken(req);
      if (!user) return json({ error: "Unauthorized" }, 401);

      const projectId = parseInt(pathname.split("/")[3]);
      const project = db
        .query("SELECT * FROM projects WHERE id = ? AND user_id = ?")
        .get(projectId, user.userId) as any;
      if (!project) return json({ error: "Project not found" }, 404);

      // Parse result JSON if present
      if (project.result) {
        project.result = JSON.parse(project.result);
      }
      return json({ project });
    }

    // Delete project
    if (pathname.startsWith("/api/projects/") && req.method === "DELETE") {
      const user = verifyToken(req);
      if (!user) return json({ error: "Unauthorized" }, 401);

      const projectId = parseInt(pathname.split("/")[3]);
      db.run("DELETE FROM projects WHERE id = ? AND user_id = ?", [projectId, user.userId]);
      return json({ success: true });
    }

    // Upload PDF and trigger extraction
    if (
      pathname.startsWith("/api/projects/") &&
      pathname.endsWith("/upload") &&
      req.method === "POST"
    ) {
      const user = verifyToken(req);
      if (!user) return json({ error: "Unauthorized" }, 401);

      const projectId = parseInt(pathname.split("/")[3]);
      const project = db
        .query("SELECT * FROM projects WHERE id = ? AND user_id = ?")
        .get(projectId, user.userId) as any;
      if (!project) return json({ error: "Project not found" }, 404);

      const formData = await req.formData();
      const file = formData.get("file") as File;
      if (!file) return json({ error: "No file uploaded" }, 400);

      // Save PDF to uploads directory
      const uploadsDir = path.join("uploads", String(projectId));
      fs.mkdirSync(uploadsDir, { recursive: true });
      const pdfPath = path.join(uploadsDir, `${Date.now()}_${file.name}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(pdfPath, buffer);

      // Update project with PDF path and start extraction
      db.run(
        "UPDATE projects SET pdf_path = ?, status = 'processing', extraction_progress = 'Starting extraction...' WHERE id = ?",
        [pdfPath, projectId]
      );

      // Run extraction in background
      runExtraction(projectId, pdfPath);

      return json({ success: true, message: "Extraction started" });
    }

    // Get extraction status
    if (
      pathname.startsWith("/api/projects/") &&
      pathname.endsWith("/status") &&
      req.method === "GET"
    ) {
      const user = verifyToken(req);
      if (!user) return json({ error: "Unauthorized" }, 401);

      const projectId = parseInt(pathname.split("/")[3]);
      const project = db
        .query("SELECT status, extraction_progress, result FROM projects WHERE id = ? AND user_id = ?")
        .get(projectId, user.userId) as any;
      if (!project) return json({ error: "Project not found" }, 404);

      return json({
        status: project.status,
        progress: project.extraction_progress,
        hasResult: !!project.result,
      });
    }

    return json({ error: "Not found" }, 404);
  },
});

console.log(`Server running at http://localhost:${PORT}`);

connectDB();
