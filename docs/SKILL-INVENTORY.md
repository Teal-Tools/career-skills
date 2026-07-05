# Skill Inventory

All 14 skills, grouped by mode. Status: every skill is currently **[SPEC]** (stub
exists in `skills/<name>/SKILL.md`, not yet built). Build order is in `../CLAUDE.md` §7.

Columns: **Input** → what the user supplies · **Deliverable** → the single artifact ·
**Deps** → skills/references it reads · **MCP** → how the Teal MCP enhances it.

## Foundation

### `career-profile` — **build first**
The one-time interview that creates `.agents/career-profile.md`, the shared context
every other skill reads. Includes a **deep "capabilities dump" path**: given a resume,
it grills the user to surface everything they've done and helps weave the narrative.
- **Input:** resume and/or freeform history; answers to an adaptive interview.
- **Deliverable:** `.agents/career-profile.md` (history, current role, target
  direction, comp, constraints, energizers/drainers).
- **Deps:** `interview-technique`.
- **MCP:** optional — can enrich target-role context with market data.

## 🔍 Searching

### `resume-review`
Scored, contextual review of a resume with specific rewrites. No JD required.
- **Input:** a resume (any format).
- **Deliverable:** scored review + prioritized, concrete rewrite suggestions.
- **Deps:** `teal-method`; writes/reads `career-profile` if present.
- **MCP:** none required.

### `tailor-to-job`
Match and rewrite a resume against a specific job description.
- **Input:** resume + target JD.
- **Deliverable:** a tailored resume/bullets + a match assessment.
- **Deps:** `resume-review` (rubric), `teal-method`, `career-profile`; optional `teal-mcp`.
- **MCP:** optional — validate emphasis against what the market asks for the role.

### `interview-prep`
Prepare for an interview from a resume + JD; build a STAR/story bank.
- **Input:** resume + JD (+ company if known).
- **Deliverable:** likely questions, a STAR story bank, and prep notes.
- **Deps:** `interview-technique`, `tailor-to-job` output, `career-profile`.
- **MCP:** optional — company/role context.

### `offer-review`
Evaluate an offer letter and full comp package, optionally against market data.
- **Input:** offer letter / comp details.
- **Deliverable:** a plain-language breakdown + comparison + questions to ask.
- **Deps:** `comp-analysis`, `teal-mcp`.
- **MCP:** strong — benchmark the offer against aggregated comp for the role/level/geo.

### `job-application`
Fill out a job application using computer use (Codex/Cowork). Build last — most
environment-dependent.
- **Input:** target application URL/form + `career-profile` + tailored resume.
- **Deliverable:** a completed (or draft) application.
- **Deps:** `career-profile`, `tailor-to-job`.
- **MCP:** none required.

## 🧭 Pivoting

### `career-clarity`
Explore paths: energizers vs. drainers, running-toward vs. running-from.
- **Input:** an adaptive interview; existing `career-profile`.
- **Deliverable:** a clarity brief (patterns, candidate directions, next experiments)
  written back into `career-profile`.
- **Deps:** `interview-technique`; writes `career-profile`; optional `teal-mcp`.
- **MCP:** optional — surface real roles matching the emerging direction.

### `skills-market-report`
Given a current role and a target title, produce a market skill-gap roadmap.
- **Input:** current job + target title.
- **Deliverable:** what the market asks for the target role, the user's gap, and a
  learning/positioning roadmap.
- **Deps:** `teal-mcp`, `career-clarity`.
- **MCP:** strong — aggregate many postings for the target title to extract demanded
  skills/keywords. This is where MCP aggregation beats per-user scraping.

## 📈 Growing

### `comp-analysis` — **moat skill**
Where the user's comp *should* be, from aggregated job data.
- **Input:** role, level, location, current comp.
- **Deliverable:** a comp benchmark with ranges and sources, and a positioning read.
- **Deps:** `teal-mcp`, `career-profile`.
- **MCP:** core — aggregated comp is the whole point. Fallback: ask for postings / web.

### `performance-self-review`
A Pocock-style grill that produces an honest self-assessment.
- **Input:** an adaptive interview; `win-log` / `career-profile` if present.
- **Deliverable:** a candid self-review draft (strengths, gaps, evidence, goals).
- **Deps:** `interview-technique`, `win-log`.
- **MCP:** none required.

### `difficult-conversation`
Prep and script a hard conversation with a manager (raise, scope, conflict, exit).
- **Input:** the situation + desired outcome.
- **Deliverable:** framing, a script/talking points, and anticipated responses.
- **Deps:** `career-profile`. Must be honest and constructive, never manipulative.
- **MCP:** optional — comp context for a raise conversation.

## 🌱 Thriving (the differentiator)

### `career-checkin`
A quarterly maintenance interview against the profile — is the user still on track?
- **Input:** `career-profile` + a light interview.
- **Deliverable:** a check-in summary, drift flags, and 1–3 concrete next actions.
- **Deps:** `career-profile`, `interview-technique`.
- **MCP:** optional.

### `win-log`
An ongoing brag doc that feeds resumes and reviews.
- **Input:** wins/accomplishments as they happen.
- **Deliverable:** an accumulating, well-phrased win log; writes into `career-profile`.
- **Deps:** `teal-method`; writes `career-profile`.
- **MCP:** none required.

### `network-maintenance`
Relationship upkeep — who to reconnect with and how. Hooks Teal's CRM features.
- **Input:** contacts / relationships (or Teal CRM data).
- **Deliverable:** a prioritized reconnect list + light outreach drafts.
- **Deps:** `career-profile`.
- **MCP:** optional — Teal relationship/CRM data if exposed via MCP.

---

## Coverage check

- **Searching:** 5 skills — competent coverage (deliberately not trying to out-build
  career-ops; our comp/offer/market pieces are stronger via MCP).
- **Pivoting:** 2 skills.
- **Growing:** 3 skills.
- **Thriving:** 3 skills — **the wedge.** Ship ≥2 in v1 (`win-log` + `career-checkin`)
  so the four-quadrant story is complete at launch.
