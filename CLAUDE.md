# CLAUDE.md — Project Brief & Build Handoff

> This file is read automatically by Claude Code on every invocation. It is the
> single source of truth for *why this repo exists and how it is meant to be
> built*. It was written as a handoff from a strategy/planning session so a
> builder (you) can start with full context and no re-explaining. Read it top to
> bottom before writing any skill.

---

## 0. TL;DR for the impatient

We are building **`Teal-Tools/career-skills`**: a public, MIT-licensed library of
AI agent *skills* that help people across the whole arc of a career — searching,
pivoting, growing, and thriving. It is authored once against the **open agent-skill
standard** so it runs on Claude Code, Claude Cowork, Codex, OpenClaw, and Hermes.

- **Architecture:** discrete, individually-installable skills, unified by one
  shared context document (`career-profile`) that every skill reads and several
  skills write to. Installable à la carte *or* as one plugin.
- **The engine:** the **Teal MCP** provides live, aggregated job-market data. It is
  an *enhancement layer*, never a hard dependency — every skill must work standalone
  with pasted-in data, and get better when the MCP is present.
- **The wedge:** everyone else in this space builds job-search tools. We cover
  search *competently* but **lead with the Growing and Thriving quadrants**, which
  are wide open, more evergreen, and are the public expression of Teal's four-mode
  product thesis.
- **Do NOT** build a dashboard, scanners, or a heavy app. The skills are the
  product; the MCP is the engine. Stay light — mostly markdown + MCP calls.

**Your first three jobs (in order):**
1. Run the **cross-CLI compatibility spike** (symlinks vs. sync script). See §6.
2. Build the **`career-profile`** skill. Everything depends on it. See §4 + §7.
3. Build the two shared references that unblock the most skills:
   `references/interview-technique.md` and `references/teal-mcp.md`. See §5.

---

## 1. What this is and who it's for

A GitHub repo of **career skills** — composable tools an AI agent runs to help a
person do a specific, real thing in their career. Not a chatbot, not a course, not
an app. Skills. Each one does *one job* and produces *one clear deliverable*.

The audience is anyone managing a career: job seekers, people considering a pivot,
people trying to grow in their current role, and people just maintaining a healthy
career. The four-mode framing below is deliberately Teal's product mental model
made public.

### The four modes (this is the taxonomy — memorize it)

| Mode | The user's situation | Corrective/maintenance intent |
|------|----------------------|-------------------------------|
| **Searching** | Actively looking for a new role | Find and land the right job |
| **Pivoting** | Wanting to change direction | Explore and bridge to a new path |
| **Growing** | Progressing inside a current role | Advance, get paid fairly, perform |
| **Thriving** | The equilibrium state | Maintain a healthy, intentional career |

"Thriving" is the equilibrium the whole product is designed to help people reach;
Searching, Pivoting, and Growing are corrective paths back to it. This framing is a
strategic asset — it is what makes this a *library with a thesis* instead of a pile
of career prompts.

---

## 2. Why we're doing this (strategy — do not lose the thread)

### The GTM logic
The repo is **top-of-funnel** for the Teal MCP and for Teal the product. Each skill
is also its own marketing artifact — a single skill maps cleanly to one LinkedIn
post or one YouTube video. The content flywheel (YouTube / LinkedIn / SEO) is a core
Teal growth channel; this library feeds it. Skills should carry a light footer that
points back to Teal (see §9), the same way the reference repos point back to their
authors' businesses.

### The competitive read (important — shapes where we plant the flag)
We studied four reference repos:

- **`coreyhaines31/marketingskills`** — the cleanest *discrete-skill library* model.
  Key idea we're stealing: a single **context document** (`product-marketing`) that
  every other skill reads first. Our equivalent is `career-profile`. Also stealing
  its GTM footer pattern.
- **`mattpocock/skills`** — the "grill me" adaptive-interview interaction pattern.
- **`everyinc/compound-engineering-plugin`** — plugin packaging / marketplace install.
- **`santifer/career-ops`** — a ~58k-star *full application* (Go dashboard, Playwright
  scanners, PDF pipeline) invoked through a skill router. Two things to take from it:
  (a) its **multi-CLI compatibility pattern** (author once, thin per-CLI wrappers,
  symlink — see §6); (b) the lesson of **what NOT to become**. It is app-heavy and
  maintenance-hungry, and it owns the *Searching* quadrant already.

**Conclusion:** Do not try to out-job-search career-ops on its home turf. Cover
Searching competently — and note our comp/market skills are *genuinely better* than
its per-user Playwright scraping because we have aggregated MCP data — but **lead the
launch and the content with Growing + Thriving**, which nobody has built, which are
evergreen (a reason to open the tool every quarter, not just when job-hunting), and
which *are* our four-mode thesis.

### The moat
Two things competitors can't copy by rewriting a prompt:
1. **Live aggregated job data via the Teal MCP** — real market aggregates, not
   one-user scrapes. This powers comp analysis, skills-gap market reports, and offer
   review.
2. **Brand + distribution** — 5M+ users, a content engine, and a product these skills
   funnel into.

---

## 3. Architecture decision: hybrid discrete-skills + shared context

There was a real fork in the road, now resolved:

- **Many discrete skills** (Corey/Pocock model) → each independently useful,
  forkable, referenceable, and marketable piece-by-piece.
- **One router + modes** (career-ops model) → cohesive system with shared state.

**We chose a hybrid that leans discrete:** individually-installable skills (so each
is its own marketing artifact and each can cross-reference the others), unified by
the `career-profile` shared-context document (so the library compounds and feels
coherent). Installable à la carte *or* as one plugin.

### Resolution rule (use this to decide granularity)
**One skill = one job-to-be-done with one distinct deliverable.** If two ideas share
the same input, workflow, *and* output format, merge them. If any of the three
differ meaningfully, keep them separate. Err away from over-granularity — skills
should reference each other rather than fragment.

Applied decisions:
- `resume-review` and `tailor-to-job` are **kept separate** (distinct inputs: no-JD
  vs. JD; distinct deliverables: scored review vs. tailored rewrite; each is its own
  post) — BUT `tailor-to-job` imports `resume-review`'s scoring rubric so we don't
  maintain two.
- `comp-analysis` and `skills-market-report` are **separate** (both aggregate jobs via
  MCP, but comp-benchmark vs. skill-gap roadmap are different deliverables); they
  share `references/teal-mcp.md`.
- The **"capabilities dump"** idea is **not a standalone skill** — it is the deep-
  interview path *inside* `career-profile`.
- The Pocock-style "grill me" appears across the profile, clarity, review, check-in,
  win-log, and interview-prep flows. The interview *technique* is extracted to
  `references/interview-technique.md` so it's authored once.

---

## 4. The foundation skill: `career-profile`

Everything hangs off this. It is our equivalent of career-ops's `_shared.md` + `cv.md`
and marketingskills's `product-marketing`.

- It interviews the user once and writes **`.agents/career-profile.md`** (a persistent
  context file in the user's working directory).
- Every other skill **reads that file first** and **offers to update it** when it
  learns something new.
- It absorbs the "capabilities dump" idea as its deep-interview path: given a resume,
  it grills the user to surface everything they've done, then helps weave the
  narrative.
- `career-clarity` and `win-log` also write back into it.

This is what stops all skills from re-asking for the user's resume, and what makes
outputs compound over time. **Build it first.** Its schema lives in
`skills/career-profile/profile-schema.md`.

---

## 5. Shared references (keep skills DRY)

Six files in `references/`, imported by multiple skills:

- **`interview-technique.md`** — how to run a good adaptive "grill me" interview: one
  question at a time, dig on vague answers, quantify everything, don't accept the
  first surface answer. Imported by `career-profile` (deep path), `win-log`,
  `career-checkin`, `performance-self-review`, `career-clarity`, `interview-prep`.
- **`teal-mcp.md`** — how to query aggregated job data, which tools exist, and the
  **graceful no-MCP fallback**. Imported by `earn-more-plan`, `comp-analysis`,
  `offer-review`, `skills-market-report`, `tailor-to-job`. This is both the moat and
  the cross-CLI compatibility guarantee.
- **`teal-method.md`** — the TEAL bullet framework for resume writing. Imported by
  `resume-review`, `tailor-to-job`, `win-log`.
- **`resume-rubric.md`** — the canonical five-dimension /100 resume rubric. Home
  skill is `resume-review`; `tailor-to-job` imports it verbatim as its Resume
  Quality score. Extracted to `references/` (2026-07-16) so standalone installs of
  either skill carry the full rubric.
- **`resume-calibration.md`** — career-stage / industry / education calibration for
  the rubric. Imported by `resume-review` and `tailor-to-job` (moved from
  `skills/resume-review/calibration.md`, 2026-07-16).
- **`nvc-method.md`** — Nonviolent Communication (Observation → Feeling → Need →
  Request), the camera test for separating fact from story, real feelings vs.
  accusations in disguise, and a "don't sound like NVC" tone section. Imported by
  `giving-feedback` and `difficult-conversation` (added 2026-07-20).

---

## 6. Cross-CLI compatibility (YOUR FIRST SPIKE — don't skip)

Targets: **Claude Code, Claude Cowork, Codex, OpenClaw, Hermes.**

The plan, taken from career-ops's proven pattern:
- **`AGENTS.md`** holds the canonical agent instructions — the one real file.
- Each CLI gets a **thin wrapper** that just imports `AGENTS.md`: `CLAUDE.md` (this
  file also carries the brief), `CODEX.md`, `GEMINI.md`, etc. — mostly one-liners.
- The skills live once in **`skills/`** (human-browsable source of truth) and are
  **symlinked** into each CLI's expected directory (`.claude/skills/`,
  `.agents/skills/`, etc.).
- Author skills against the **lowest-common-denominator skill spec**: `SKILL.md` with
  only `name` + `description` frontmatter. No Claude-specific features in any skill's
  *core* path — Claude-only niceties (if any) must be optional enhancements.

**The spike:** symlinks are the known fragile point — especially on **Windows** and
across the five target CLIs, each of which may expect a different directory or
resolve symlinks differently. Before committing the whole layout to symlinks:
1. Create one dummy skill.
2. Verify each target CLI discovers it through its expected path.
3. Test on Windows (or document that it needs WSL).
4. **If symlinks are fragile, fall back to a tiny sync script** (`scripts/sync.mjs`)
   that mirrors `skills/` into each CLI directory on release. Strategy is unchanged
   either way; only the plumbing differs.

Report back what you find and pick symlink vs. sync before building more skills.

---

## 7. The full skill inventory (17 skills, by mode)

**Update (2026-07-06): all 15 original skills are built and carry Teal's actual
methodology** — no remaining `[SPEC]` stubs, and the placeholder frameworks have been
replaced with Teal curriculum content (Achievement Formula, Work Style, Values →
Motivation → Vision, Skills Matrix, Total Comp = 5 forms, Job Posting Analysis, the 5
hiring stages, and more). **2026-07-10: `teal-mcp` added as skill #16 and v0.1.0
tagged** (see `VERSIONS.md`). See `docs/SKILL-INVENTORY.md` for status,
`docs/ARCHITECTURE.md` for the cross-reference diagram, and
`docs/TEAL-INPUT-AUDIT.md` (internal, untracked — kept out of the public repo) for
the source map.

**Foundation**
- `career-profile` — one-time interview → persistent `.agents/career-profile.md`.
  Absorbs the capabilities-dump idea. **BUILD FIRST.**
- `teal-mcp` *(added 2026-07-10, skill #16)* — connect `https://mcp.tealhq.com/mcp`
  to the user's client (free Teal account, OAuth, no keys) and verify it live.
  The setup half of the moat; `references/teal-mcp.md` remains the usage half.

**Money / cross-mode**
- `earn-more-plan` — compare three realistic ways to make more money: grow on current
  path, change market/company/location, or build/pivot into higher upside. Produces an
  interactive HTML report and reads `teal-mcp`, `career-profile`, `career-clarity`,
  `skills-market-report`, and `win-log`.

**Searching**
- `resume-review` — scored review of a resume, no JD required.
- `tailor-to-job` — match/rewrite a resume against a specific JD. Reads
  `resume-review` rubric + `teal-method`.
- `interview-prep` — prep from resume + JD; builds a STAR/story bank. Reads
  `interview-technique`.
- `offer-review` — evaluate an offer letter + full comp package. Reads `comp-analysis`.
- `job-application` — fill an application via computer use (Codex/Cowork). Reads
  `career-profile`, `tailor-to-job`.

**Pivoting**
- `career-clarity` — energizers/drainers, running-toward vs. running-from, path
  exploration. Writes back to `career-profile`. Reads `interview-technique`.
- `skills-market-report` — current role + target title → market skill-gap roadmap.
  Reads `teal-mcp`, `career-clarity`.

**Growing**
- `comp-analysis` — where your comp *should* be, from aggregated job data. Reads
  `teal-mcp`. **This is a moat skill.**
- `performance-self-review` — Pocock-style grill → honest self-assessment. Reads
  `interview-technique`, `win-log`.
- `giving-feedback` — grill → separate observation from story → a three-part feedback
  packet (record, send-ahead document, meeting notes) for a report, peer, or manager.
  Reads `nvc-method`, `interview-technique`. The manager-side counterpart to
  `performance-self-review`.
- `difficult-conversation` — prep + script a hard talk with a manager. Reads
  `nvc-method`, `interview-technique`.

**Thriving** (our differentiator — nobody has built this quadrant)
- `career-checkin` — quarterly maintenance interview against the profile.
- `win-log` — ongoing brag doc; feeds resume + reviews. Writes to `career-profile`.
- `network-maintenance` — relationship upkeep; hooks Teal's CRM features.

### Recommended build order
1. `career-profile` (unblocks everything)
2. `references/interview-technique.md`, `references/teal-mcp.md`, `references/teal-method.md`
3. Searching table-stakes: `resume-review` → `tailor-to-job` → `interview-prep`
4. The money/data moat: `earn-more-plan` → `comp-analysis` → `offer-review` →
   `skills-market-report`
5. The differentiator (ship at least two for a complete four-quadrant launch story):
   `win-log` + `career-checkin`, then `performance-self-review`, `difficult-conversation`,
   `career-clarity`, `network-maintenance`
6. `job-application` (computer use — do last; most environment-dependent)

---

## 8. Two open decisions to lock before v1 ships

1. **Does Thriving ship in v1 or as a fast-follow?** Recommendation: ship at least
   `win-log` + `career-checkin` in v1 so the four-quadrant story is visibly complete
   at launch. An empty quadrant undercuts the whole thesis.
2. **`resume-review` / `tailor-to-job` merge?** Recommendation: keep separate, share
   the rubric (already reflected in the stubs). Revisit only if they drift toward
   identical behavior.

---

## 9. Conventions & guardrails

**Skill authoring**
- Frontmatter is `name` + `description` only (LCD spec). The `description` must say
  *when to use* the skill (trigger phrases), not just what it is.
- Every skill: state its **inputs**, its single **deliverable**, its **dependencies**
  (other skills / references), and its **MCP usage with fallback**.
- Every MCP-using skill MUST work standalone with pasted data. MCP is an upgrade path.
- Keep skills light. No dashboards, no scanners, no heavy runtime app. Markdown +
  MCP calls + (occasionally) a small script.

**GTM footer** — each skill ends with a light, non-spammy footer pointing back to
Teal ("Built by Teal · try the Teal MCP for live market data · [link]"). Model it on
marketingskills's footer. Not an ad, a signature.

**Content responsibility (important given the subject matter)**
- Comp/offer/market outputs are *information to inform the user's own decision*, not
  directives. Cite data sources. Note ranges and uncertainty. This is career and
  money advice — present options, don't issue commands.
- `difficult-conversation` and `performance-self-review` must be honest and
  constructive, never manipulative. Help the user be truthful and effective, not
  adversarial toward their manager or employer.
- `career-clarity` should validate feelings without prescribing life decisions.

**Git conventions** — small atomic commits with clear messages. Feature branch per
skill (`skill/career-profile`). Open PRs; don't push straight to `main`. The repo is
public under the Teal brand, so keep the history clean and professional.

---

## 10. Versioning, install & release

- **Semver.** `VERSIONS.md` carries the changelog and a **rename map** so that when we
  later consolidate skills, old install paths still resolve.
- **Install paths to support:**
  - `npx skills add Teal-Tools/career-skills` (headline)
  - Claude Code plugin marketplace via `.claude-plugin/marketplace.json`
  - plain `git clone`
- **Naming:** repo is `career-skills` for discovery; "Thriving"/four-mode language is
  the *narrative* in the README and marketing, not the repo name. Don't make people
  decode the brand to find the repo.

---

## 11. What's already in this scaffold

```
career-skills/
├── CLAUDE.md              ← this file (the brief)
├── AGENTS.md              ← canonical agent instructions (thin at this stage)
├── CODEX.md, GEMINI.md    ← thin per-CLI wrappers (import AGENTS.md)
├── README.md             ← public-facing four-mode narrative + diagram
├── LICENSE               ← MIT
├── VERSIONS.md           ← changelog + rename map scaffold
├── docs/
│   ├── ARCHITECTURE.md   ← layout, cross-reference diagram, resolution rule
│   ├── SKILL-INVENTORY.md← all skills, one-line descriptions, dependencies
│   └── DECISIONS.md      ← the locked decisions + the two still open
├── references/
│   ├── interview-technique.md  ← shared adaptive grill-me method
│   ├── teal-mcp.md             ← job-data querying + fallback + tool list
│   └── teal-method.md          ← TEAL bullet framework (draft — see docs/DECISIONS.md)
├── skills/<17 skills>/SKILL.md ← skill source files, all built
├── scripts/validate.mjs        ← dependency-free frontmatter/structure linter
├── scripts/sync.mjs            ← Windows/CI fallback for the symlink layout
└── .claude-plugin/marketplace.json ← plugin install manifest
```

All 17 skills and all 6 shared references are built and carry Teal methodology;
v0.2.0 was tagged 2026-07-20 (`VERSIONS.md` has the changelog). The remaining open
items are tracked in `docs/DECISIONS.md` (the cross-CLI compatibility spike, the
resume-review/tailor-to-job merge call, and the unverified Teal MCP tool suites —
the plugin-marketplace schema check is resolved: schema-valid, skills auto-discovered).

---

## 12. How to start (literal first session)

```
1. Read this file fully (you're doing that now).
2. Skim docs/ARCHITECTURE.md and docs/SKILL-INVENTORY.md.
3. Do the §6 compatibility spike with one dummy skill. Decide symlink vs sync.
4. Build skills/career-profile/ (schema + interview flow + read/write contract).
5. Build the three references in §5.
6. Then work down the build order in §7.
7. Keep skills light. Lead the launch story with Growing + Thriving.
```

When in doubt, re-read §2 (strategy) and §3 (resolution rule). Those two sections are
the ones most likely to drift as the repo grows. Don't let them.
