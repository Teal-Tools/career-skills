---
name: skills-market-report
description: Use when the user has a current role plus a target title, occupation, or candidate direction from career-clarity and wants to know what the market actually asks for, how their current skills transfer, where the gaps are, and what learning or positioning moves would make the pivot more credible. Aggregates postings with Teal MCP when available and produces a market skill-gap roadmap.
---

# skills-market-report

**Mode: Pivoting.** A market-backed reality check for a possible pivot. It answers:
"If I aimed at this occupation, what would employers actually ask for, how close am I,
and what proof would make me credible?"

This skill should not crush exploratory energy with gatekeeping. It should separate
real requirements from noisy wish lists, identify transferable advantages, and turn
skill gaps into proof-building moves.

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
- current role and level;
- target title(s) or candidate direction(s);
- target location(s) and work setting;
- desired company stage/environment;
- target domain or industry;
- must-have constraints: comp floor, remote needs, timeline, credentials, risk
  tolerance.

If the user has only a vague direction, ask one narrowing question and pick a first
market scan. Example: "For the first scan, should we test product marketing, developer
relations, or customer success strategy?"

### Step 1 - Build the user's skill map
Create a working map from profile, clarity brief, win log, resume, and interview.

Classify skills:
- **Proven:** evidence-backed in work history or win log.
- **Transferable:** proven in another context and plausibly useful in the target role.
- **Emerging:** some evidence, but not enough market proof.
- **Aspirational:** desired but not yet proven.
- **Retire:** skills the user can do but does not want to keep selling.

Also capture:
- domain expertise;
- company-stage experience;
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
- **Transferable strengths:** evidence the user already has that the market values.
- **Positioning translations:** how to rename or frame current experience for the
  target role.
- **Skill gaps:** missing hard skills, domain exposure, tools, credentials, or proof.
- **Proof gaps:** skills the user may have but cannot yet demonstrate credibly.
- **Fit risks:** role realities that may violate energizers/drainers, pace, company
  stage, comp, lifestyle, or values.
- **Better-fit variants:** adjacent titles or environments that preserve fit while
  reducing gaps.

Be precise. Do not say "learn marketing." Say "build proof around positioning,
launch messaging, customer segmentation, and sales enablement because these appear in
18/31 sampled PMM postings."

### Step 5 - Build the roadmap
Convert gaps into a 30/60/90-day roadmap.

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

## Transferable Strengths
| Market ask | User evidence | Positioning angle | Confidence |
|---|---|---|---|

## Gaps and Proof Gaps
| Gap | Why it matters | Evidence needed | Roadmap move |
|---|---|---|---|

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
> roadmap narrative, and launch coordination; your proof gaps are sales enablement and
> messaging artifacts. I wrote
> `.agents/skills-market-report-product-marketing-manager-2026-07-05.md` with a
> 30/60/90-day proof roadmap and three role variants to test.

---

_Built by Teal - give your agent the [Teal MCP](https://tealhq.com) for live,
aggregated job-market skill data - https://tealhq.com_
