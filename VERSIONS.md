# Versions

Semantic versioning. This file also carries a **rename map** so that when skills
are consolidated or renamed, old install paths still resolve.

## [Unreleased]
- _Nothing yet._

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
