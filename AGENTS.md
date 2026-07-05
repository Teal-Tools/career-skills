# AGENTS.md — Canonical Agent Instructions

> This is the single canonical instruction file for all agents/CLIs. Per-CLI
> files (`CLAUDE.md`, `CODEX.md`, `GEMINI.md`, …) import or defer to this one.
> `CLAUDE.md` additionally carries the full project brief.

## What this repo is
A library of discrete career **skills** authored against the open agent-skill
standard, designed to run identically across Claude Code, Claude Cowork, Codex,
OpenClaw, and Hermes.

## How skills are structured
- Each skill lives in `skills/<name>/SKILL.md` with `name` + `description`
  frontmatter only (lowest-common-denominator spec — no CLI-specific features in
  the core path).
- Longer frameworks are factored into `references/*.md` and imported by skills.
- The shared context document `.agents/career-profile.md` (created by the
  `career-profile` skill) is read first by every skill and written to by several.

## Operating rules for any agent running these skills
1. **Read `.agents/career-profile.md` first** if it exists. If it doesn't and the
   skill needs profile data, offer to run `career-profile`.
2. **MCP is optional.** If the Teal MCP is available, use it for live market data.
   If not, ask the user for the data (job postings, comp figures) or search the web.
   Never hard-fail because the MCP is absent.
3. **One deliverable per skill.** Produce the specific artifact the skill promises.
4. **Career/money content is informational**, not directive. Present options and
   ranges; cite sources; let the user decide.
5. Offer to update `.agents/career-profile.md` when you learn something durable.

## For contributors/builders
See `CLAUDE.md` for the full brief, `docs/ARCHITECTURE.md` for layout and the
cross-reference map, and `docs/SKILL-INVENTORY.md` for the skill specs.
