---
name: performance-self-review
description: Use when the user wants to prepare an honest self-assessment, performance review, promotion-cycle reflection, or manager-facing review draft. Reads the career profile, win log, and career check-ins when present, grills for evidence and gaps, and produces a candid performance self-review draft with strengths, misses, evidence, growth areas, and goals.
---

# performance-self-review

**Mode: Growing.** A candid self-assessment builder. It turns scattered wins,
manager feedback, goals, doubts, and review-form prompts into a review draft that is
honest enough to be trusted and polished enough to submit.

The stance is: do not undersell real impact, do not inflate weak evidence, and do not
turn a self-review into corporate fan fiction. The user should leave with a clear
performance story, proof, misses, lessons, and a practical next-period plan.

## Teal's Achievement Formula

Contributions in this review are phrased using Teal's **Achievement Formula**, so each
one reads as a proven achievement rather than a duty. Two complementary shapes:

- **Skill + Proof** — name the skill, then the evidence that the user has it.
- **Success Verb + Noun/Keyword + Metric + Outcome** — a strong action verb, the
  concrete thing acted on, the number that sizes it, and the result it produced.
  (e.g. "Reduced onboarding time [outcome] by cutting [verb] manual setup steps
  [noun] 40% [metric]".)

Forward-looking goals use the *same* formula, written as **future achievements** — the
achievement the user intends to be able to claim next period. Before phrasing a goal,
define the **intention / "why"** behind it, then make it **SMART** (specific,
measurable, achievable, relevant, time-bound). A goal written this way is already
shaped to become next period's evidence.

## Inputs
- `.agents/career-profile.md` if present: role, level, current direction,
  constraints, energizers/drainers, and open questions.
- `.agents/win-log.md` if present: evidence-backed wins, metrics, recognition, and
  resume-ready bullets.
- `.agents/career-checkins.md` if present: drift flags, company-perception read,
  unresolved actions, and alignment notes.
- Optional: review form prompts, company values, level rubric, OKRs, goals, project
  plans, manager feedback, peer feedback, 1:1 notes, prior review drafts, promotion
  criteria, or pasted evidence.
- The user's answers to an adaptive interview.

## Deliverable (exactly one)
A Markdown self-review draft written to `.agents/performance-self-review-<period>.md`.
The file contains a submission-ready draft plus the evidence table, gaps, and private
calibration notes needed to make the draft defensible. After writing it, offer to
update `.agents/career-profile.md` or `.agents/win-log.md` with durable facts.

## Dependencies
- `references/interview-technique.md` - use the adaptive interview ladder, especially
  evidence confidence and the career-checkin / self-review branch.
- Reads `.agents/win-log.md`, `.agents/career-checkins.md`, and
  `.agents/career-profile.md` if present.
- Feeds `difficult-conversation` when the review reveals a raise, promotion, scope, or
  feedback conversation that needs preparation.

## Teal MCP usage
None required. If Teal MCP exposes resume, job, comp, or goal data, use it only as
optional context. This skill must work from local files and pasted material.

---

## Workflow

### Step 0 - Orient
1. Read `.agents/career-profile.md`, `.agents/win-log.md`, and
   `.agents/career-checkins.md` if present. Missing files are not blockers.
2. Ask for or infer the review period: quarter, half, year, promotion cycle, or custom
   dates.
3. Ask for the target format if the user has one: company review form, manager email,
   promotion packet excerpt, or freeform self-assessment.
4. Ask for the audience and stakes: routine review, calibration packet, promotion,
   comp discussion, performance recovery, or manager context-setting.

If the user has no review form, use the default structure in Step 6.

### Step 1 - Build the evidence board
Create a private working map before interviewing. Pull:
- wins and metrics from `win-log`;
- feedback, perception signals, and drift flags from `career-checkins`;
- role expectations, target direction, and open questions from `career-profile`;
- explicit goals, OKRs, and review prompts from pasted artifacts.

Cluster evidence into themes:
- business/customer impact;
- execution and ownership;
- leadership, collaboration, or mentoring;
- technical/product/domain craft;
- communication and influence;
- values or culture contributions;
- learning, judgment, and growth.

Flag weak areas:
- claims with no proof;
- wins with missing metrics;
- work that mattered but is invisible;
- goals that were missed, deprioritized, or changed;
- feedback that should be addressed directly;
- areas where the user is minimizing evidence-backed impact.

### Step 2 - Grill for truth and proof
Interview one question at a time using `references/interview-technique.md`.

Start with the core read:

> If your manager wrote the blunt version of your review, what would they praise,
> what would they question, and what would they say you need to do next?

Then adapt. Useful questions:
- What were the 2-4 outcomes that mattered most this period?
- Which goal changed, got dropped, or did not land? Why?
- What did you personally do that would not have happened otherwise?
- Where did you make the team faster, clearer, safer, or more effective?
- What was harder than it looks from the outside?
- What feedback did you receive, and what did you change because of it?
- Where are you tempted to overclaim? Where are you tempted to undersell?
- What would make this review feel undeniable to a skeptical calibration group?

Use evidence confidence from the reference:
- strong evidence can go in the submission-ready draft;
- mixed evidence needs careful wording;
- weak signal belongs in private notes or a follow-up action;
- story needs more proof before it becomes a claim.

### Step 3 - Calibrate the performance narrative
Synthesize the period into one clear narrative:
- the headline contribution;
- the pattern behind the strongest wins;
- the user's level/scope signal;
- the honest miss or growth edge;
- what the next period should prove.

Keep the narrative manager-readable. It should sound like a capable person taking
ownership, not a resume, therapy transcript, or legal brief.

Calibration checks:
- **Impact:** Are the biggest claims backed by evidence?
- **Level:** Does the draft show work appropriate to the user's current or target
  level?
- **Balance:** Does it include misses or growth without self-sabotage?
- **Specificity:** Could a manager repeat the examples in calibration?
- **Relevance:** Does it answer the actual review prompts?

### Step 4 - Draft the review
If the user provided review prompts, answer those prompts directly. Otherwise use the
default structure:
- **Summary:** one concise paragraph on the period.
- **Top contributions:** 3-5 evidence-backed accomplishments, each phrased with the
  **Achievement Formula** — Skill + Proof, or Success Verb + Noun/Keyword + Metric +
  Outcome. Mark any missing number as `TODO` rather than inventing one.
- **How I worked:** collaboration, leadership, ownership, communication, judgment.
- **What I learned / where I grew:** real changes in behavior or skill.
- **What did not go as planned:** misses, trade-offs, or unresolved work, framed with
  ownership and learning.
- **Goals for next period:** 2-4 concrete goals, each written as a **future
  achievement** — define the intention / "why" first, then phrase the goal in the
  Achievement Formula and make it SMART, so its proof is observable by next period.
- **Support / asks:** manager support, clarity, sponsorship, resources, or feedback
  needed.

Use first person unless the user's review system requires otherwise. Keep claims
specific and proportional to the evidence.

### Step 5 - Add the evidence layer
In the same file, include a compact evidence table after the draft. This is usually
not pasted into the HR form, but it keeps the review defensible.

Columns:
- claim;
- supporting evidence;
- metric / proof;
- confidence;
- source link or note;
- follow-up needed.

Also include a short "Do not submit as-is" private calibration section when needed:
- overclaims to soften;
- underclaims to strengthen;
- sensitive claims to discuss live instead of writing;
- missing metrics to chase;
- likely manager questions.

### Step 6 - Write the file
Write `.agents/performance-self-review-<period>.md`. Preserve any previous review
files by creating a new period-specific file. If a file for the same period exists,
merge carefully or ask before overwriting.

Use this format:

```markdown
# Performance Self-Review - 2026 H1
_Drafted: 2026-07-05 - maintained by the performance-self-review skill_

## Submission Draft

### Summary

### Top Contributions

### How I Worked

### Growth and Learning

### What Did Not Go As Planned

### Goals for Next Period

### Support / Asks

## Evidence Table
| Claim | Evidence | Metric / proof | Confidence | Source | Follow-up |
|---|---|---|---|---|---|

## Private Calibration Notes
- Overclaims to soften:
- Underclaims to strengthen:
- Sensitive points to discuss live:
- Missing metrics:
- Likely manager questions:

## Follow-up Actions
1. ...
2. ...
3. ...
```

### Step 7 - Offer updates and handoffs
After writing the draft:
- offer to add missing wins to `.agents/win-log.md`;
- offer to update `.agents/career-profile.md` with durable changes to current
  situation, direction, strengths, energizers/drainers, or open questions;
- suggest `difficult-conversation` if the review reveals a raise, promotion, scope,
  conflict, or feedback conversation;
- suggest `career-checkin` if the review uncovers drift but the user is not ready to
  decide what it means.

## Guardrails
- **Truth over polish.** Make the review compelling because it is specific, not
  because it exaggerates.
- **Do not self-sabotage.** Include misses and growth areas with ownership and
  learning; do not write a confession document unless the user specifically needs one.
- **No fake metrics or quotes.** Mark missing numbers as TODO. Never invent manager or
  peer feedback.
- **Avoid manipulation.** Do not coach the user to hide material facts or attack
  colleagues. Frame conflict as observable behavior, impact, and desired change.
- **Respect sensitive issues.** For harassment, discrimination, retaliation, health,
  legal, or HR risk, separate factual documentation from a normal self-review and
  encourage appropriate trusted, HR, legal, or professional support. Do not provide
  legal advice.
- **Protect privacy.** Link to evidence or summarize it. Do not paste private threads,
  third-party comments, or sensitive review text unless the user explicitly requests
  it.

## Usage example
> **User:** Help me write my midyear self-review. I have a win log but I know there
> were misses too.
> **Agent:** I read your profile, win log, and last check-in. For 2026 H1, the
> strongest evidence clusters around onboarding automation, mentoring, and roadmap
> clarity. Before drafting: if your manager wrote the blunt version, what would they
> praise and what would they question? ... The onboarding win has strong evidence; the
> mentoring claim is real but needs a better proof point. I wrote
> `.agents/performance-self-review-2026-h1.md` with a submission draft, evidence
> table, private calibration notes, and three follow-up actions.

---

_Built by Teal - give your agent the [Teal MCP](https://tealhq.com) for live
career context and resume sync - https://tealhq.com_
