# Architecture

This document is the design reference. For the strategic *why*, see `../CLAUDE.md`.

## Model in one sentence

Discrete, individually-installable skills, unified by one shared context document
(`career-profile`), authored once against the open agent-skill standard and made to
run across five agent CLIs.

## Directory layout

```
career-skills/
├── CLAUDE.md                 # build brief (auto-read by Claude Code)
├── AGENTS.md                 # canonical agent instructions
├── CODEX.md / GEMINI.md ...  # thin per-CLI wrappers → import AGENTS.md
├── README.md                 # public four-mode narrative + diagram
├── LICENSE                   # MIT
├── VERSIONS.md               # changelog + rename map
├── docs/                     # design reference (this folder)
├── references/               # shared, DRY building blocks imported by skills
│   ├── interview-technique.md
│   ├── teal-mcp.md
│   └── teal-method.md
├── skills/                   # SOURCE OF TRUTH — one folder per skill
│   └── <name>/SKILL.md       # (+ extra files like profile-schema.md)
├── scripts/                  # validate / sync tooling
├── .claude-plugin/           # plugin-marketplace manifest
├── .claude/skills/  → skills/   # symlink (created during compat spike)
└── .agents/skills/  → skills/   # symlink (open-standard path)
```

`skills/` is the human-browsable source of truth. CLI-specific directories are
symlinks into it (or mirrored by a sync script if symlinks prove fragile — see
`../CLAUDE.md` §6).

## Resolution rule (granularity)

**One skill = one job-to-be-done with one distinct deliverable.**
Merge two ideas only if they share the same input, workflow, *and* output format.
Err away from over-granularity; skills should reference each other, not fragment.

Locked applications of the rule:
- `resume-review` vs `tailor-to-job` → **separate**, share the scoring rubric.
- `comp-analysis` vs `skills-market-report` → **separate**, share `teal-mcp.md`.
- `earn-more-plan` vs `comp-analysis` / `skills-market-report` → **separate**:
  `earn-more-plan` compares trajectories and produces an interactive strategy report;
  the others deepen one comp benchmark or skill-gap question.
- "capabilities dump" → **folded into** `career-profile` (its deep-interview path).
- "grill me" technique → **extracted to** `references/interview-technique.md`.

## The three throughlines

1. **`career-profile`** (state) — the shared context every skill reads.
2. **`interview-technique.md`** (method) — the adaptive interview, reused by the
   profile, clarity, review, check-in, win-log, and interview-prep flows.
3. **`teal-mcp.md`** (data) — live market data with a no-MCP fallback; the moat *and*
   the compatibility guarantee.

## Cross-reference map

```
                        career-profile
             (read by all; written by career-clarity,
              win-log, career-checkin, capabilities path)
                              │
  ┌───────────┬──────────────┼───────────────┬────────────────┐
SEARCHING   PIVOTING        GROWING         THRIVING        references
  │             │              │                │               │
resume-review  career-clarity earn-more-plan  win-log       interview-technique
  │  └─rubric──┐   │ ↕ profile   ↑ ↓             ↓ ↑           ← career-profile(deep)
  ↓            │   ↓             │               │             ← performance-self-review
tailor-to-job ─┘ skills-market- comp-analysis   performance-  ← career-clarity
  │  └─teal-method  report       │              self-review   ← interview-prep
  ↓                  ↑           │  ┌──win-log──→ │
interview-prep       │        offer-review       career-checkin  teal-mcp
  │                  │        difficult-          │             ← earn-more-plan
job-application      │        conversation    network-          ← offer-review
  └─profile,tailor   │                        maintenance       ← skills-market-report
                     │                        (Teal CRM)        ← tailor-to-job
                     └──────── teal-mcp ───────┘                teal-method
                     (comp / offer / skills-market / tailor)    ← resume-review
                                                                ← tailor-to-job
                                                                ← win-log
```

Read the arrows as "imports / feeds". `career-profile` sits above everything;
`teal-mcp` feeds the data-driven skills; `interview-technique` and `teal-method` are
pulled in wherever the label appears on the right.

## Compatibility layer

- Canonical instructions: `AGENTS.md`.
- Per-CLI wrappers: `CLAUDE.md`, `CODEX.md`, `GEMINI.md`, and whatever OpenClaw /
  Hermes expect — each a thin import of `AGENTS.md`.
- Skill discovery: symlink each CLI's skills directory to `skills/`, or sync-mirror.
- Frontmatter: `name` + `description` only. No CLI-specific features in core paths.

The **first build task** is proving this layer with one dummy skill across all five
CLIs (and Windows). See `../CLAUDE.md` §6.
