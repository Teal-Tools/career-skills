# Versions

Semantic versioning. This file also carries a **rename map** so that when skills
are consolidated or renamed, old install paths still resolve.

## [Unreleased]

- **New skill: `giving-feedback`** (skill #17, Growing) — the manager-side counterpart
  to `performance-self-review`. Interviews the user for what actually happened, runs
  every point through an observation-vs-story test, and produces a three-part packet:
  a factual **Record** for their files, a communicative **Send** document to share as
  a pre-read, and terse **Meeting Notes** for the conversation. Handles feedback to a
  report, a peer, or a manager, flexing the document by relationship.
- **New reference: `references/nvc-method.md`** — Nonviolent Communication
  (Observation → Feeling → Need → Request), the camera test for separating fact from
  story, real feelings vs. accusations in disguise, requests vs. demands, and a
  "don't sound like NVC" tone section so output reads as a leader, not a workshop.
  Recommends Rosenberg's *Nonviolent Communication: A Language of Life*.
- First skill in the library whose deliverable concerns **someone other than the
  user**. Carries guardrails to match: no unfalsifiable trait feedback, no
  paper-trail construction, PIP situations routed to HR, harassment and
  discrimination never reframed as communication problems, and the user's
  `career-profile` never populated with a third party's performance details.

## [0.1.1] — 2026-07-16

Distribution launch blockers — makes every skill actually installable on claude.ai
/ Claude Desktop and standalone-safe on per-skill installers (Hermes, `npx skills
add --skill`, zip uploads).

- **All 16 descriptions rewritten to ≤200 chars** — claude.ai's upload cap (the
  spec allows 1024, but 200 is the binding constraint). `scripts/validate.mjs` now
  errors and `scripts/package.mjs` warns above 200.
- **Canonical resume rubric extracted to `references/resume-rubric.md`**, and
  `skills/resume-review/calibration.md` moved to `references/resume-calibration.md`,
  so standalone installs of `tailor-to-job` carry the full rubric and bands
  (previously they lived only inside `resume-review`'s SKILL.md).
- **Ephemeral-runtime persistence guardrail** added to all 9 `.agents/*.md`-writing
  skills and `profile-schema.md`: in sandboxed environments (claude.ai / Desktop),
  deliver file contents in chat for the user to save and re-paste.
- Claude Desktop / claude.ai distribution: `scripts/package.mjs` packages each
  skill as a self-contained upload-ready zip (shared references vendored in,
  self-paths rewritten) → `dist/*.zip`; README gained a no-terminal install
  section. Removed `job-application`'s repo-root `../../CLAUDE.md` pointers
  (portability fix).

## [0.1.0] — 2026-07-10

First cut of the library: **all 16 skills built** — no stubs — carrying Teal's
actual methodology.

- **16 skills** across the four modes plus foundation:
  - Foundation: `career-profile`, `teal-mcp` (connect + verify the Teal MCP in any
    client — free account, OAuth, no API keys)
  - Money / cross-mode: `earn-more-plan` (interactive HTML report)
  - Searching: `resume-review`, `tailor-to-job`, `interview-prep`, `offer-review`,
    `job-application`
  - Pivoting: `career-clarity`, `skills-market-report`
  - Growing: `comp-analysis`, `performance-self-review`, `difficult-conversation`
  - Thriving: `career-checkin`, `win-log`, `network-maintenance`
- **Three shared references:** `interview-technique` (adaptive grill-me method),
  `teal-mcp` (tool contract, aggregation patterns, graceful no-MCP fallback),
  `teal-method` (Achievement Formula, quantification fallback ladder, ATS reality).
- `resume-review` gained a context-calibration companion
  (`skills/resume-review/calibration.md`): career stage, industry, education.
- README "Connect the Teal MCP" section with per-client setup one-liners.
- Tooling: `scripts/validate.mjs` (16/16 passing), `scripts/sync.mjs`
  (Windows/CI mirror), Claude Code plugin manifest at 0.1.0.

Known-open items shipping *with* 0.1 (tracked in `docs/DECISIONS.md`): the
cross-CLI compatibility spike has not run (five-CLI claim unverified); the
`resume-*`/`tracker-jobs-*` MCP tool suites are documented secondhand until a
live login verifies them; `docs/TEAL-INPUT-AUDIT.md` (internal) must be removed
before any public push.

## Rename map
_(empty — populate when skills are renamed or merged; format below)_

| Old skill path | New skill path | Since version |
|----------------|----------------|---------------|
| _example: skills/old-name_ | _skills/new-name_ | _v0.2.0_ |

## Release checklist (status at 0.1.0)
- [x] All shipped skills pass `scripts/validate.mjs` (16/16)
- [ ] Compatibility verified across target CLIs (see CLAUDE.md §6) — **not yet run;
      the blocking item for a public push**
- [x] README four-mode table matches the shipped skill set
- [x] `.claude-plugin/marketplace.json` schema-valid (verified against the official
      plugin-marketplace docs 2026-07-09; the spec auto-discovers `skills/` from the
      plugin root — it does not want skills enumerated)
- [x] Tag with semver, update this changelog (v0.1.0)
