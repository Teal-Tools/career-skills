---
name: skills-market-report
description: Use when the user has a current role plus a target title, occupation, or candidate direction from career-clarity and wants to know what the market actually asks for, how their current skills transfer, where the gaps are, and what learning or positioning moves would make the pivot more credible. Aggregates postings with Teal MCP when available and produces a market skill-gap roadmap.
---

# skills-market-report

**Mode: Pivoting.** A market-backed reality check for a possible pivot. It answers:
"If I aimed at this occupation, what would employers actually ask for, how close am I,
and what proof would make me credible?"

This skill should not crush exploratory energy with gatekeeping. It should separate
real requirements from noisy wish lists, identify transferable advantages (the user's
**Energizers**), and turn skill gaps (their **Potentials**) into proof-building moves.
It frames the target through Teal's **Functions** and **4 G's** so "the market" resolves
into a concrete function, level, and org type rather than a vague title.

## Inputs
- `.agents/career-profile.md` if present: history, current role, skills, direction,
  constraints, location, target roles, and open questions.
- `.agents/career-clarity.md` if present: candidate directions, energizers/drainers,
  values, environment preferences, and experiments.
- `.agents/win-log.md` if present: proof of transferable skills and impact.
- A target title, occupation, role family, or 1-3 related candidate directions.
- Optional: locations, career level, work setting, target domains, company stage,
  comp floor, and job postings the user likes or dislikes.

## Deliverable (exactly one)
A Markdown market report written to
`.agents/skills-market-report-<target>-<date>.md`, containing target-role market
signals, demanded skills/keywords, transferable strengths, gaps, learning and proof
roadmap, positioning advice, and next experiments. After writing it, offer to update
`.agents/career-profile.md` and `.agents/career-clarity.md` with durable target-role
or skills information.

## Dependencies
- `references/teal-mcp.md` - use the aggregation helper pattern, parsing notes, and
  fallback ladder.
- Reads `.agents/career-profile.md`, `.agents/career-clarity.md`, and
  `.agents/win-log.md` if present.
- Feeds `tailor-to-job`, `resume-review`, `interview-prep`, and `win-log` once the
  user chooses a target.

## Teal MCP usage
Strong. Use Teal MCP to aggregate many postings for target titles and adjacent titles,
then extract repeated responsibilities, required skills, nice-to-haves, seniority
signals, industry/domain patterns, work setting, location, and salary signals when
available. Without MCP, use browser fetch, pasted postings, public web search, or
agent knowledge with clear caveats and sample size.

---

## Workflow

### Step 0 - Establish the target
Read `.agents/career-profile.md`, `.agents/career-clarity.md`, and `.agents/win-log.md`
if present.

Clarify:
- current role and level (IC / front-line manager / strategic leader);
- target title(s) or candidate direction(s);
- target **Function** — the grouping of skills the role belongs to (a Function nests
  into sub-function → channel → platform); the title is the surface, the Function is
  the substance;
- which of the **4 G's** the target sits in — **Goods** (build the product/service for
  customers), **Growth** (generate/grow revenue), **Gears** (run the business
  internally), or **General** (spans all; startups favor generalists, big companies
  favor specialists);
- target location(s) and work setting;
- desired company stage/environment and **org type** — Products (own IP), Services
  (labor/expertise/time), Causes (non-profit); how an org makes money shows how it
  invests in talent;
- target domain or industry;
- must-have constraints: comp floor, remote needs, timeline, credentials, risk
  tolerance.

If the user has only a vague direction, ask one narrowing question and pick a first
market scan. Example: "For the first scan, should we test product marketing, developer
relations, or customer success strategy?"

Alignment to keep in mind: the user's **Skills** (Energizers + Potentials) point to a
**Function**; their **Interests + Knowledge** point to an **Industry**; together they
define **organization fit**.

### Step 1 - Build the user's skill map
Create a working map from profile, clarity brief, win log, resume, and interview. If
`.agents/career-profile.md` or `.agents/career-clarity.md` already carries a **Skills
Matrix**, start from it rather than rebuilding.

Sort skills with the Teal **Skills Matrix** and note transferability for the target:
- **Energizers** (skill + want more) → the strengths to lead with and get hired for.
- **Potentials** (not yet a skill + want more) → what a pivot must grow into; these
  become the roadmap.
- **Assets** (skill + want less) → proven, usable if needed, but don't build the
  target on them.
- **Drainers** (not a skill + want less) → avoid; also a fit-risk signal if the target
  demands them.

For each, mark **transferable** (proven in another context and plausibly useful in the
target) vs. needs-market-proof, and distinguish **natural strengths** (how the user is
wired — from Work Style) from **acquired skills** (the resume is a database of these).

Also capture:
- domain expertise and **Interests + Knowledge** (these point at Industry fit);
- company-stage experience and level (IC / front-line manager / strategic leader);
- generalist ("a little about a lot") vs. specialist ("a lot about a little") lean;
- customer/user exposure;
- tools and technical depth;
- leadership and influence scope;
- writing, communication, facilitation, research, analysis, operations, strategy.

### Step 2 - Gather market data
Follow `references/teal-mcp.md`.

Preferred Teal MCP path:
1. Use `searchJobs` with `targetTitles`, `careerLevel`, `location`, `workSetting`, and
   `includedKeywords` for target domains or company-stage signals.
2. Search adjacent titles too. Example: "Product Marketing Manager" plus "Developer
   Marketing Manager" or "Solutions Marketing Manager" when relevant.
3. Segment across levels, locations, and work settings to avoid one narrow sample.
4. Collect `jobId`s and call `getJobDetails` on as many representative postings as
   practical.
5. Parse responsibilities, requirements, nice-to-haves, skills, years of experience,
   tools, domain terms, work setting, location, company, and salary text when present.

Fallback ladder:
- browser fetch if the runtime can browse;
- pasted postings, ideally at least 8-10;
- public web search where available;
- agent knowledge with clear caveat that the market scan still needs validation.

Always track sample size, source, recency, and target query.

### Step 3 - Extract market patterns
Aggregate the posting sample into useful signal:
- top responsibilities;
- top required skills;
- top nice-to-have skills;
- common tools/platforms;
- domain/industry terms;
- seniority and years-of-experience signals;
- portfolio, certification, credential, or degree expectations;
- company stage and work setting patterns;
- salary or comp signals if present;
- title variants that look more/less aligned.

Separate:
- **must-have:** appears often and is central to the work;
- **common advantage:** appears often but can be learned or substituted;
- **nice-to-have noise:** appears occasionally or reads like a wishlist;
- **red flag for fit:** common requirement that conflicts with the user's drainers,
  values, or constraints.

### Step 4 - Map fit and gaps
Compare market patterns against the user's skill map.

Create:
- **Transferable strengths (Energizers that carry):** evidence the user already has
  that the market values — the strengths to lead with.
- **Positioning translations:** how to rename or frame current experience for the
  target Function.
- **Gaps (the Potentials to develop):** the market asks the user wants to grow into
  but has not yet proven. Sort the fills by type: **knowledge gaps** (learn from
  people/resources), **skill gaps** (formal or self-directed learning), **experience
  gaps** (projects, volunteering, portfolio, thought leadership).
- **Proof gaps:** skills the user may have but cannot yet demonstrate credibly.
- **Fit risks:** role realities that may violate the user's Drainers, values, pace,
  company stage, comp, or lifestyle.
- **Better-fit variants:** adjacent titles, Functions, or org types (Products /
  Services / Causes) that preserve fit while reducing gaps.

Be precise. Do not say "learn marketing." Say "build proof around positioning,
launch messaging, customer segmentation, and sales enablement because these appear in
18/31 sampled PMM postings."

### Step 5 - Build the roadmap
Convert the Potentials/gaps into a 30/60/90-day roadmap, matching each gap to its fill
type — **knowledge gaps** to people/resources, **skill gaps** to formal or
self-directed learning, **experience gaps** to projects, volunteering, a portfolio, or
thought leadership.

Each roadmap item should include:
- target market signal;
- action;
- proof artifact;
- how to use it in resume/interviews;
- effort level;
- confidence.

Examples:
- publish a teardown or positioning memo;
- build a mini case study using a real product;
- volunteer for adjacent work internally;
- interview 3 people in the target role;
- complete a tool-specific project;
- rewrite 3 existing wins for the target audience;
- apply to 5 roles as a market test and track response quality;
- run `win-log` to capture proof artifacts as the user builds them.

### Step 6 - Write the report
Write `.agents/skills-market-report-<target>-<date>.md`. Use a new file for each
materially different target. If the same target/date exists, merge carefully or ask
before overwriting.

Use this format:

```markdown
# Skills Market Report - <Target Role>
_Generated: 2026-07-05 - maintained by the skills-market-report skill_

## Target and Source
- Current role:
- Target role(s):
- Location / work setting:
- Source:
- Sample size:
- Date range / recency:

## Executive Read
- 3-5 bullets on fit, gaps, and recommended next experiments.

## Market Pattern Summary
### Responsibilities
### Required Skills
### Nice-to-Haves
### Tools / Domains / Credentials
### Title Variants
### Work Environment Signals

## Target Function and Fit
- Function / sub-function:
- 4 G's (Goods / Growth / Gears / General):
- Level (IC / front-line manager / strategic leader) and generalist vs. specialist:
- Org type fit (Products / Services / Causes):

## Transferable Strengths (Energizers that carry)
| Market ask | User evidence | Positioning angle | Confidence |
|---|---|---|---|

## Gaps and Proof Gaps (Potentials to develop)
| Gap | Gap type (knowledge / skill / experience) | Why it matters | Evidence needed | Roadmap move |
|---|---|---|---|---|

## Fit Risks
- Drainer / constraint / environment mismatch:
- Why it matters:
- How to test:

## 30/60/90-Day Roadmap
### Next 30 Days
### Days 31-60
### Days 61-90

## Resume and Interview Positioning
- Keywords to earn, not stuff:
- Wins to reframe:
- Stories to build:

## Next Experiments
1. ...
2. ...
3. ...

## Profile / Clarity Updates To Offer
- Durable target-role or skill information to write back if approved.
```

### Step 7 - Offer updates and handoffs
After writing the report:
- offer to update `.agents/career-profile.md` with target roles, market gaps, and
  durable skill facts;
- offer to update `.agents/career-clarity.md` with market notes for the direction;
- suggest `win-log` to capture proof-building work;
- suggest `tailor-to-job` once the user has a target posting;
- suggest `interview-prep` after the user starts landing conversations;
- suggest `comp-analysis` if pay trade-offs are material.

## Guardrails
- **Sample size matters.** Always show n, source, date, and how titles were searched.
- **Do not gatekeep from wish lists.** Job postings overstate requirements. Distinguish
  must-have from nice-to-have and noisy wishlist items.
- **Do not fake market precision.** If the sample is small or pasted, label it.
- **Do not erase fit.** A role with high demand can still be wrong for the user's
  values, energy, environment, or constraints.
- **No keyword stuffing.** Recommend language the user can honestly support with
  evidence.
- **Roadmap must produce proof.** Learning without proof artifacts is weaker for a
  pivot.

## Usage example
> **User:** From my clarity brief, I want to test product marketing manager as a pivot
> from product management.
> **Agent:** I read your profile, clarity brief, and win log. I'll scan PMM and adjacent
> product marketing titles in your target location and compare them to your proven PM
> skills. ... I sampled 36 Teal postings from the last 60 days. The market repeatedly
> asks for positioning, launch messaging, customer segmentation, sales enablement, and
> cross-functional GTM. Your strongest transferable evidence is customer discovery,
> roadmap narrative, and launch coordination (Energizers that carry); your Potentials
> to develop are sales enablement and messaging artifacts. PMM sits in the Growth "G,"
> specialist-leaning at bigger orgs. I wrote
> `.agents/skills-market-report-product-marketing-manager-2026-07-05.md` with a
> 30/60/90-day proof roadmap — gaps sorted into knowledge / skill / experience fills —
> and three role variants to test.

---

_Built by Teal - give your agent the [Teal MCP](https://tealhq.com) for live,
aggregated job-market skill data - https://tealhq.com_
