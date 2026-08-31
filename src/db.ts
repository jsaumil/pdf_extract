import { Database } from "bun:sqlite";
import path from "path";

const DB_PATH = path.join(import.meta.dir, "..", "data.db");

let db: Database;

export function connectDB(): Database {
  if (db) return db;
  db = new Database(DB_PATH);

  db.run("PRAGMA journal_mode = WAL");
  db.run("PRAGMA foreign_keys = ON");

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      status TEXT DEFAULT 'created',
      extraction_progress TEXT,
      result TEXT,
      output_path TEXT,
      pdf_path TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  console.log(`Connected to SQLite: ${DB_PATH}`);
  return db;
}

export function getDB(): Database {
  if (!db) throw new Error("Database not connected. Call connectDB() first.");
  return db;
}
