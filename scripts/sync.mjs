#!/usr/bin/env node
// sync.mjs — mirror skills/ into each CLI's expected directory.
//
// WHY: The default dev setup symlinks .claude/skills and .agents/skills to skills/
// (see docs/ARCHITECTURE.md). Symlinks are fragile on Windows and in some CI/zip
// flows. On those platforms, run this instead to COPY the source of truth (skills/)
// into each target directory. Strategy is identical either way — only the plumbing
// differs (CLAUDE.md §6).
//
// Usage:
//   node scripts/sync.mjs           # mirror into all targets
//   node scripts/sync.mjs --check   # verify targets are up to date (exit 1 if not)
//
// Dependency-free (plain Node), so it runs anywhere the skills do.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "skills");

// Each CLI's expected skills directory. Add targets here as CLIs are confirmed
// during the compatibility spike.
const TARGETS = [
  ".claude/skills", // Claude Code / Cowork project skills
  ".agents/skills", // open agent-skill standard path
];

const checkOnly = process.argv.includes("--check");

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  for (const entry of await fs.readdir(src, { withFileTypes: true })) {
    if (entry.name === ".DS_Store") continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}

async function isStale(src, dest) {
  try {
    for (const entry of await fs.readdir(src, { withFileTypes: true })) {
      if (entry.name === ".DS_Store") continue;
      const s = path.join(src, entry.name);
      const d = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        if (await isStale(s, d)) return true;
      } else {
        try {
          const [ss, ds] = await Promise.all([fs.stat(s), fs.stat(d)]);
          if (ss.mtimeMs > ds.mtimeMs) return true;
        } catch {
          return true; // missing in dest
        }
      }
    }
  } catch {
    return true;
  }
  return false;
}

let stale = 0;
for (const rel of TARGETS) {
  const dest = path.join(ROOT, rel);
  if (checkOnly) {
    if (await isStale(SRC, dest)) {
      console.error(`stale: ${rel} is behind skills/`);
      stale++;
    } else {
      console.log(`ok: ${rel}`);
    }
  } else {
    // Replace a symlink or old copy with a fresh mirror.
    await fs.rm(dest, { recursive: true, force: true });
    await copyDir(SRC, dest);
    console.log(`synced: skills/ -> ${rel}`);
  }
}

if (checkOnly && stale > 0) {
  console.error(`\n${stale} target(s) out of date. Run: node scripts/sync.mjs`);
  process.exit(1);
}
