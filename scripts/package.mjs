#!/usr/bin/env node
// Package each skill as a self-contained zip for Claude Desktop / claude.ai
// (Settings → Capabilities → Skills → upload). One zip per skill; shared
// references/*.md are vendored into the skill folder so repo-root-relative
// paths resolve unchanged once the skill folder is the zip root.
//
// Usage: node scripts/package.mjs [skill-name ...]   (default: all skills)
// Output: dist/<skill>.zip
//
// Dependency-free except the system `zip` binary (macOS/Linux; CI-safe).

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const skillsDir = path.join(root, "skills");
const referencesDir = path.join(root, "references");
const distDir = path.join(root, "dist");

// claude.ai upload constraints (LCD spec stays name + description)
const MAX_DESCRIPTION = 1024;
const MAX_NAME = 64;

const requested = process.argv.slice(2);
const warnings = [];

function listSkills() {
  return fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => !requested.length || requested.includes(name))
    .sort();
}

function frontmatter(text, skill) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const out = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^(name|description):\s*(.*)$/);
    if (m) out[m[1]] = m[2].trim();
  }
  if ((out.name || "").length > MAX_NAME)
    warnings.push(`${skill}: frontmatter name exceeds ${MAX_NAME} chars`);
  if ((out.description || "").length > MAX_DESCRIPTION)
    warnings.push(
      `${skill}: description is ${out.description.length} chars (max ${MAX_DESCRIPTION} for claude.ai upload)`
    );
  return out;
}

function packageSkill(skill) {
  const srcDir = path.join(skillsDir, skill);
  const buildDir = path.join(distDir, skill);
  fs.rmSync(buildDir, { recursive: true, force: true });
  fs.cpSync(srcDir, buildDir, { recursive: true });

  const skillFile = path.join(buildDir, "SKILL.md");
  let body = fs.readFileSync(skillFile, "utf8");
  frontmatter(body, skill);

  // Rewrite self-references (skills/<this-skill>/foo.md → foo.md); the files
  // are already in the folder via the copy above.
  body = body.replaceAll(`skills/${skill}/`, "");

  // Vendor shared references named in the body so `references/<name>.md`
  // resolves relative to the zip root.
  const refs = new Set();
  for (const m of body.matchAll(/(?:^|[\s(`])references\/([A-Za-z0-9_.-]+\.md)/gm))
    refs.add(m[1]);
  if (refs.size) fs.mkdirSync(path.join(buildDir, "references"), { recursive: true });
  for (const ref of refs) {
    const src = path.join(referencesDir, ref);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(buildDir, "references", ref));
    } else {
      warnings.push(`${skill}: references/${ref} named in SKILL.md but not found`);
    }
  }

  // Surface anything that cannot travel in a standalone zip.
  for (const m of body.matchAll(/skills\/([a-z0-9-]+)\//g))
    warnings.push(
      `${skill}: cross-skill pointer skills/${m[1]}/ — degrades gracefully unless that skill is also installed`
    );
  if (body.includes("../../"))
    warnings.push(`${skill}: repo-root relative path (../../) will not resolve in a zip`);

  fs.writeFileSync(skillFile, body);
  // Drop macOS noise if any slipped in.
  fs.rmSync(path.join(buildDir, ".DS_Store"), { force: true });

  const zipPath = path.join(distDir, `${skill}.zip`);
  fs.rmSync(zipPath, { force: true });
  execFileSync("zip", ["-r", "-q", "-X", `${skill}.zip`, skill], { cwd: distDir });
  fs.rmSync(buildDir, { recursive: true, force: true });
  return zipPath;
}

fs.mkdirSync(distDir, { recursive: true });
const skills = listSkills();
if (!skills.length) {
  console.error("No matching skills found.");
  process.exit(1);
}

const built = skills.map((s) => {
  const zip = packageSkill(s);
  const kb = Math.round(fs.statSync(zip).size / 102.4) / 10;
  console.log(`  ${path.relative(root, zip)} (${kb} KB)`);
  return zip;
});

console.log(`\nPackaged ${built.length} skill${built.length === 1 ? "" : "s"} → dist/`);
if (warnings.length) {
  console.log("\nWarnings:");
  for (const w of [...new Set(warnings)]) console.log(`  - ${w}`);
}
