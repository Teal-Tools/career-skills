#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");
const referencesDir = path.join(root, "references");

const errors = [];
const warnings = [];

function addError(file, message) {
  errors.push(`${file}: ${message}`);
}

function addWarning(file, message) {
  warnings.push(`${file}: ${message}`);
}

function rel(file) {
  return path.relative(root, file);
}

function readText(file) {
  return fs.readFileSync(file, "utf8");
}

function parseFrontmatter(file, text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    addError(rel(file), "missing YAML frontmatter");
    return { data: {}, keys: [], body: text };
  }

  const data = {};
  const keys = [];
  const frontmatter = match[1].split(/\r?\n/).filter(Boolean);

  for (const line of frontmatter) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) {
      addError(rel(file), `invalid frontmatter line: ${line}`);
      continue;
    }

    const [, key, value] = field;
    keys.push(key);
    data[key] = value.replace(/^"(.*)"$/, "$1");
  }

  return { data, keys, body: text.slice(match[0].length) };
}

function listSkillFiles() {
  if (!fs.existsSync(skillsDir)) {
    addError("skills", "missing skills directory");
    return [];
  }

  return fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(skillsDir, entry.name, "SKILL.md"))
    .sort();
}

function checkReferences(file, body) {
  const references = new Set();
  const regex = /(?:^|[\s(`])((?:\.\.\/\.\.\/)?references\/[A-Za-z0-9_.\/-]+\.md)/gm;
  let match;

  while ((match = regex.exec(body))) {
    references.add(match[1].replace(/^\.\.\/\.\.\//, ""));
  }

  for (const reference of references) {
    const target = path.join(root, reference);
    if (!target.startsWith(referencesDir) || !fs.existsSync(target)) {
      addError(rel(file), `missing referenced file: ${reference}`);
    }
  }
}

function validateSkill(file) {
  const relative = rel(file);
  const dirName = path.basename(path.dirname(file));

  if (!fs.existsSync(file)) {
    addError(relative, "missing SKILL.md");
    return;
  }

  const text = readText(file);
  const { data, keys, body } = parseFrontmatter(file, text);
  const keySet = new Set(keys);

  for (const required of ["name", "description"]) {
    if (!data[required]) {
      addError(relative, `frontmatter missing ${required}`);
    }
  }

  for (const key of keys) {
    if (!["name", "description"].includes(key)) {
      addError(relative, `frontmatter has unsupported key: ${key}`);
    }
  }

  if (keySet.size !== keys.length) {
    addError(relative, "frontmatter has duplicate keys");
  }

  if (data.name && data.name !== dirName) {
    addError(relative, `name "${data.name}" does not match directory "${dirName}"`);
  }

  if (data.name && !/^[a-z0-9-]+$/.test(data.name)) {
    addError(relative, `name "${data.name}" must use lowercase letters, digits, and hyphens`);
  }

  if (data.description && !/\bUse (when|for|to)\b/i.test(data.description)) {
    addWarning(relative, "description should include trigger phrasing like 'Use when' or 'Use for'");
  }

  // claude.ai skill upload rejects/truncates descriptions over 200 chars — the
  // tightest cap across target platforms (spec allows 1024; OpenClaw suggests <160).
  if (data.description && [...data.description].length > 200) {
    addError(
      relative,
      `description is ${[...data.description].length} chars (max 200 for claude.ai upload)`
    );
  }

  const requiredSections = [
    [/^## Inputs?/m, "Inputs"],
    [/^## Deliverable\b/m, "Deliverable"],
    [/^## Dependencies\b/m, "Dependencies"],
    [/^## Teal MCP usage\b/m, "Teal MCP usage"],
  ];

  for (const [pattern, label] of requiredSections) {
    if (!pattern.test(body)) {
      addError(relative, `missing required section: ${label}`);
    }
  }

  if (!/^## Deliverable.*exactly one/m.test(body)) {
    addWarning(relative, "Deliverable heading should say '(exactly one)'");
  }

  if (/\b(Claude-only|Codex-only|Cursor-only)\b/i.test(body)) {
    addWarning(relative, "possible CLI-specific core-path wording");
  }

  checkReferences(file, body);
}

for (const file of listSkillFiles()) {
  validateSkill(file);
}

if (warnings.length > 0) {
  console.log("Warnings:");
  for (const warning of warnings) {
    console.log(`- ${warning}`);
  }
  console.log("");
}

if (errors.length > 0) {
  console.error("Validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validation passed: ${listSkillFiles().length} skills checked.`);
