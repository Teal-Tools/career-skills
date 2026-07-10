# Skill Inventory

All 16 skills, grouped by mode. Current status:

- **Built + Teal methodology pulled in:** all 15 skills have full `SKILL.md`
  implementations and now carry Teal's actual frameworks (Achievement Formula, Work
  Style, Values → Motivation → Vision, Skills Matrix, Total Comp = 5 forms, Job Posting
  Analysis, the 5 hiring stages, the +2/+7/+14 networking cadence, Career Health, the
  shift-difficulty ladder). `references/teal-method.md` is the Achievement Formula (no
  longer a placeholder); `profile-schema.md` is locked. See `DECISIONS.md`.

Build order is in `../CLAUDE.md` §7.

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

### `teal-mcp`
One-time infrastructure setup: connect `https://mcp.tealhq.com/mcp` to the user's
client (free Teal account, OAuth, no API keys) and verify it with a live tool listing
plus a smoke-test query. The fallback ladder in `references/teal-mcp.md` offers this
skill before dropping to pasted data.
- **Input:** which client to connect (defaults to the agent's own runtime); a free
  Teal account.
- **Deliverable:** a verified Teal MCP connection (configured, authenticated,
  smoke-tested).
- **Deps:** `teal-mcp` reference (the usage contract it hands off to).
- **MCP:** this skill *creates* the connection; its own fallback is the library's
  pasted-data path.

## 💸 Money / Cross-mode

### `earn-more-plan`
Compare realistic ways for the user to make more money, across promotion, switching
companies/markets, relocation, upskilling, school, or pivoting.
- **Input:** `career-profile` plus current comp, target income, timeline, risk
  tolerance, willingness to switch/relocate/upskill/pivot, and non-starters.
- **Deliverable:** `earn-more-plan-<date>.html`, a self-contained interactive report
  with three compensation-growth trajectories, projections, trade-offs, constraints,
  and next actions.
- **Deps:** `teal-mcp`, `career-profile`, `career-clarity`, `skills-market-report`,
  `win-log`; hands off to `comp-analysis`, `difficult-conversation`, and search
  skills as needed.
- **MCP:** strong — aggregates current-role, next-level, higher-paying-market, and
  pivot-role compensation signals.

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
Explore paths through energizers/drainers, running-toward vs. running-from, values,
skills, workstyle, domains, company stage, and environment fit.
- **Input:** an adaptive interview; existing `career-profile`, `win-log`, and
  `career-checkins` if present.
- **Deliverable:** `.agents/career-clarity.md` with patterns, candidate directions,
  market/occupation notes, and next experiments; offers profile updates.
- **Deps:** `interview-technique`, `teal-mcp`; writes `career-profile` with approval.
- **MCP:** optional — surface real occupations/postings matching the emerging
  direction.

### `skills-market-report`
Given a current role plus a target title or candidate direction, produce a market
skill-gap roadmap.
- **Input:** current role plus target title/occupation/candidate direction; profile,
  clarity brief, and win log if present.
- **Deliverable:** `.agents/skills-market-report-<target>-<date>.md` with market
  signals, demanded skills, transferable strengths, gaps, 30/60/90 roadmap, and
  positioning advice.
- **Deps:** `teal-mcp`, `career-clarity`, `career-profile`, `win-log`.
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
A grill-me workflow that turns wins, feedback, misses, and goals into an honest
self-assessment.
- **Input:** review prompt or period; `win-log`, `career-checkins`, and
  `career-profile` if present.
- **Deliverable:** `.agents/performance-self-review-<period>.md` with a
  submission-ready draft, evidence table, private calibration notes, and follow-up
  actions.
- **Deps:** `interview-technique`, `win-log`, `career-checkin`.
- **MCP:** none required.

### `difficult-conversation`
Prep and script a hard conversation with a manager (raise, scope, conflict, exit).
- **Input:** the situation + desired outcome.
- **Deliverable:** framing, a script/talking points, and anticipated responses.
- **Deps:** `career-profile`. Must be honest and constructive, never manipulative.
- **MCP:** optional — comp context for a raise conversation.

## 🌱 Thriving (the differentiator)

### `career-checkin`
A periodic maintenance interview against the profile: is the user still on track, how
does work feel, what is the company signaling, and what is evidence vs. story?
- **Input:** `career-profile` + a light interview.
- **Deliverable:** a dated `.agents/career-checkins.md` entry with a summary, evidence
  audit, drift flags, and 1–3 concrete next actions.
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
- **Growing:** 3 skills plus the cross-mode money strategy skill.
- **Thriving:** 3 skills — **the wedge.** Ship ≥2 in v1 (`win-log` + `career-checkin`)
  so the four-quadrant story is complete at launch.
