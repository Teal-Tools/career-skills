---
name: earn-more-plan
description: Use when the user says they want to make more money, get paid more, increase income, maximize compensation, compare career trajectories for higher earnings, or understand whether promotion, switching companies, relocating, upskilling, going back to school, or pivoting could improve their pay. Reads the career profile and constraints, uses Teal MCP job-market data when available, and produces an interactive HTML report with three compensation-growth plans, projections, timelines, trade-offs, and non-starter filters.
---

# earn-more-plan

**Mode: Cross-mode money strategy.** This skill sits across Growing, Pivoting, and
Searching. It is not just a comp benchmark. It builds a practical money map: three
credible ways the user could earn more, what each would take, what constraints rule
out, and what the market says about upside.

The output is informational, not financial advice. It should help the user compare
options and decide what to explore next.

## Inputs
- `.agents/career-profile.md` if present: current role, level, years of experience,
  location, current comp, target direction, constraints, energizers/drainers, wins,
  and open questions.
- `.agents/career-clarity.md` if present: candidate directions, domains, workstyle,
  company-stage preferences, and constraints.
- `.agents/skills-market-report-*.md` if present: target-role skill gaps and market
  signals.
- `.agents/win-log.md` if present: promotion/raise evidence and transferable wins.
- Optional: current compensation details (base, bonus, equity, commission/OTE,
  benefits), desired income, timeline, risk tolerance, willingness to relocate,
  willingness to change companies, willingness to pivot, willingness to go back to
  school, willingness to pick up skills, domains of interest, company-size/stage
  preferences, and ethical or lifestyle non-starters.
- Optional: pasted job postings, offer data, salary data, or target companies.

## Deliverable (exactly one)
A self-contained interactive HTML report named `earn-more-plan-<date>.html`, written
to the working directory. The report compares three compensation-growth trajectories
with projections, timelines, evidence, trade-offs, constraints, and next actions. It
uses inline CSS, inline JavaScript, and inline SVG only; no external assets, CDNs, or
network calls.

## Dependencies
- `references/teal-mcp.md` - use the market-data fallback ladder and parsing notes for
  salary, skills, seniority, location, and company signals.
- Reads `.agents/career-profile.md`, `.agents/career-clarity.md`,
  `.agents/skills-market-report-*.md`, `.agents/win-log.md`, and
  `.agents/career-checkins.md` if present.
- Can hand off to `comp-analysis`, `skills-market-report`, `career-clarity`,
  `performance-self-review`, `difficult-conversation`, `tailor-to-job`, or
  `interview-prep` depending on the chosen path.

## Teal MCP usage
Strong. Use Teal MCP to gather current-market compensation and demand for the user's
current role, next-level role, same-role higher-paying employers, higher-paying
locations, adjacent roles, and pivot roles. Without MCP, use browser fetch, pasted
postings or comp data, public web search where available, or agent knowledge with
clear caveats. Always show sample size, source, recency, and confidence.

---

## Workflow

### Step 0 - Establish money goal and constraints
Read available `.agents/` context first. If profile data is thin, ask only for the
minimum needed to model options.

Capture:
- current comp: base, bonus, equity, commission/OTE, benefits, vesting, location;
- target income or "more than now" if no precise target;
- timeline: 3 months, 6 months, 12 months, 2 years, 5 years;
- risk tolerance: low, moderate, high;
- willingness to switch companies;
- willingness to relocate or commute;
- willingness to work remote/hybrid/onsite;
- willingness to learn new skills or earn credentials;
- willingness to go back to school, including time/cost tolerance;
- willingness to pivot function, domain, or industry;
- lifestyle constraints: hours, travel, caregiving, health, visa, schedule;
- ethical/non-starter filters: industries, companies, missions, work types, cultures;
- preferences: company stage, domain, pace, management track vs. IC, stability vs.
  upside.

Ask for non-starters explicitly:

> Are there industries, companies, business models, locations, schedules, or trade-offs
> you refuse to consider even if they pay more?

### Step 1 - Build the baseline
Summarize the user's current economic position:
- current role / level / location;
- current total comp components;
- current market band for same role and location;
- percentile or rough position if enough data exists;
- promotion/raise evidence from `win-log` and review artifacts;
- constraints that limit or expand available paths.

If current comp is missing, still model market bands and mark the user's position as
unknown.

### Step 2 - Gather market data
Use `references/teal-mcp.md`.

Market scans to run when possible:
1. **Current-path scan:** current title and next-level title in current location.
2. **Same-role better-market scan:** same title/level across higher-paying companies,
   industries, and locations the user would consider.
3. **Adjacent/pivot scan:** 2-4 roles suggested by `career-clarity`, profile skills,
   or user interest.
4. **Skill premium scan:** compare higher-paying postings against lower-paying ones
   for repeated skills, domains, tools, credentials, company stage, or responsibilities.

For each scan, collect:
- sample size, source, recency;
- salary range, base vs. OTE vs. total comp when stated;
- title/level variants;
- locations and work settings;
- companies/domains;
- required skills and years of experience;
- company stage or tier if inferable;
- constraints conflicts.

Fallbacks:
- browser fetch if available;
- pasted postings or salary data;
- public web search where available;
- agent knowledge with clear caveats.

### Step 3 - Generate the three plans (Teal's shift-difficulty ladder)
Always produce three plans unless a user constraint makes one impossible. If one is
ruled out, show it as "not viable under current constraints" and explain why.

The three plans map to Teal's **shift-difficulty ladder** — how hard a move is
depends on how much of the user's *knowledge, function, and skills* has to change.
The more that changes at once, the harder and slower the move:

Plan A: **Grow on current path** — *easy: same knowledge*
- Promotion, level-up, raise, internal transfer, scope expansion, or higher-paying
  version of the current function.
- Same knowledge, same function — so the move is the lowest-difficulty on the ladder.
  The primary lever is a **raise**, argued with Teal's **5 value levers**
  (Knowledge, Network, Leadership, Growth, Savings — the case for why the user is
  worth more).
- Uses current wins, review evidence, next-level market band, level expectations, and
  internal strategy.
- Good when the user has strong evidence, low risk tolerance, or high attachment to
  current craft/company.

Plan B: **Change market, not identity** — *moderate: industry + function change*
- Same or adjacent role at a higher-paying employer, domain, company tier, location,
  work setting, or compensation model.
- On the ladder this is a market/context change (industry and/or function shift) with
  the user's core skills intact.
- Examples: larger company, AI/security/fintech domain, sales/OTE path, remote role in
  higher-paying market, relocation, smaller title at a better-paying company.
- Good when the user's skill set is already marketable but current environment pays
  less.

Plan C: **Build or pivot into higher upside** — *moderate-to-hard: adds new skills*
- New skills, credential, school, portfolio, apprenticeship, adjacent function, or
  role family with higher compensation ceiling.
- On the ladder, difficulty depends on what changes with the skills: **function +
  skills = moderate** (adjacent pivot), while **knowledge + skills = hard** (a fuller
  reinvention that takes longer and may cost a near-term dip).
- Uses willingness to learn, pivot, relocate, change domains, or take a near-term dip.
- Good when the current path has limited upside or the user wants a meaningful shift.

For any plan that requires the user to close a distance to the target, use Teal's
**gap-filling model** — name the gap type, then match it to how it's actually closed:
- **Knowledge gaps** (you don't yet *know* something about the field/role) → close via
  people and resources: informational interviews, reading, mentors.
- **Skill gaps** (you can't yet *do* something) → close via learning, formal (courses,
  credentials) or self-directed (practice, side projects).
- **Experience gaps** (you haven't *done it in a real setting*) → close via projects,
  volunteering, or a portfolio that proves the capability.
Tag each plan's "skill/proof gaps" with which of these three it is, so the closing
action is obvious and realistic.

Each plan must include:
- projected comp range by timeline (near-term, 12 months, 2-3 years);
- timeline and milestones;
- market evidence and sample size;
- skill/proof gaps;
- cost: time, money, opportunity cost, risk, lifestyle, identity, credential burden;
- constraints hit or respected;
- non-starters filtered out;
- first three actions;
- confidence level.

### Step 4 - Model projections conservatively
Use ranges, not promises. Build a simple projection for each plan:
- current comp baseline;
- conservative outcome;
- likely/median outcome;
- upside outcome;
- earliest plausible timing;
- prerequisites that must become true.

Do not compound unsupported year-over-year fantasy growth. Use market bands, title
transitions, and realistic timelines. If data is thin, widen the range and lower
confidence.

Projection examples:
- Plan A: current $X -> same-role market median or next-level band after review cycle.
- Plan B: current $X -> same-level top-quartile market band at target company/location.
- Plan C: current $X -> possible short-term flat/dip -> target role band after proof
  or credential timeline.

### Step 5 - Rank and explain trade-offs
Rank plans by the user's stated goal, not by raw upside alone. Use the constraints:
- fastest path to more cash;
- highest 2-3 year upside;
- lowest risk;
- best fit with values/energy;
- best optionality;
- lowest retraining cost;
- best ethical fit;
- best lifestyle fit.

If the highest-paying path violates non-starters, exclude it from recommendations and
show why it was filtered.

### Step 6 - Generate the interactive HTML report
Write one standalone file: `earn-more-plan-<date>.html`.

The report must include:
- **Header:** user role, location, run date, source summary, sample sizes.
- **Constraint summary:** willing / unwilling filters; non-starters; assumptions.
- **Baseline:** current comp and market position if available.
- **Three plan cards:** Plan A/B/C with projected comp range, timeline, trade-offs,
  confidence, and first actions.
- **Projection chart:** inline SVG or CSS-based chart comparing baseline,
  conservative, likely, and upside ranges over time.
- **Interactive controls:** inline JavaScript controls for toggling timeline, risk
  tolerance, relocation, pivot willingness, and school/upskilling willingness. Controls
  can filter, highlight, or re-sort plans using precomputed data.
- **Evidence tables:** sample size, market source, salary bands, skills, locations,
  companies/domains, and caveats.
- **Decision matrix:** fastest, highest upside, lowest risk, best fit, and recommended
  next experiment.
- **Next 30 days:** concrete actions for each plan.
- **Sources and caveats:** source, date, sample size, uncertainty, no financial advice.

Implementation requirements:
- Use plain HTML/CSS/JS only.
- Keep all data embedded in a `<script type="application/json" id="plan-data">` block
  or a simple JS object.
- No CDN, images, external fonts, package install, build step, or network request.
- Use accessible controls and readable tables.
- Keep text concise enough that the report can be scanned.

### Step 7 - Offer profile updates and handoffs
After writing the report:
- offer to update `.agents/career-profile.md` with target comp, constraints,
  non-starters, and selected trajectory;
- offer to update `.agents/career-clarity.md` if the winning path involves a pivot;
- suggest `difficult-conversation` for Plan A raise/promotion conversations;
- suggest `performance-self-review` if evidence for Plan A is thin;
- suggest `skills-market-report` for Plan C skill gaps;
- suggest `tailor-to-job` and `interview-prep` for Plan B or C external searches;
- suggest `comp-analysis` for a deeper benchmark on one target title/location.

## Guardrails
- **Informational, not financial advice.** Present options, ranges, assumptions, and
  uncertainty. Do not promise income outcomes.
- **Constraints are real.** Do not recommend paths that violate non-starters such as
  excluded industries, relocation limits, schedule constraints, or ethical boundaries.
- **Ranges over point estimates.** Pay varies by company, location, level, OTE, equity,
  and timing. Use bands and confidence.
- **Show source quality.** Always state source, sample size, date, and whether data
  came from Teal, pasted postings, browser fetch, web search, or assumptions.
- **Do not inflate school ROI.** Going back to school has cost, time, and risk. Model
  it as one possible path only when the user is open to it and the target role
  plausibly requires or rewards it.
- **Avoid hustle coercion.** More money can cost time, stress, identity, values, and
  lifestyle. Make trade-offs visible.
- **No unethical optimization.** Do not suggest lying about skills, hiding material
  facts, or applying to non-starter industries just because they pay more.

## Usage example
> **User:** I want to make more money. I'm a senior customer success manager in Denver,
> base $145k, bonus $20k. I will learn new skills and switch companies, but I won't
> move, travel heavily, or work in oil/gas.
> **Agent:** I read your career profile and win log. I'll compare three paths: grow
> into CS leadership, move into a higher-paying customer strategy / enterprise account
> role, and pivot toward revenue operations or product operations. I will exclude oil
> and gas, relocation, and travel-heavy roles. ... I sampled 64 Teal postings from the
> last 60 days across CS leadership, enterprise customer strategy, RevOps, and Product
> Ops. I wrote `earn-more-plan-2026-07-05.html` with three trajectories, 12-month and
> 3-year projections, constraints filters, and first 30-day actions.

---

_Built by Teal - give your agent the [Teal MCP](https://tealhq.com) for live,
aggregated job-market compensation data - https://tealhq.com_
