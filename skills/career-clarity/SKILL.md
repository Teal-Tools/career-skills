---
name: career-clarity
description: Use when the user is unsure of their career direction, considering a pivot, choosing between paths, feeling stuck or misfit, or wanting to explore roles based on values, motivation, vision, energizers, drainers, skills, work style, domains, company stage, pace, environment, and lifestyle constraints. Runs an adaptive interview using Teal's Values→Motivation→Vision and Skills Matrix method, optionally explores occupations with Teal MCP job-market data, and produces a clarity brief with candidate directions and next experiments.
---

# career-clarity

**Mode: Pivoting.** A guided career direction interview for users who do not yet know
what they want next, or who know what they are running away from but not what they are
running toward.

The skill should validate the user's experience without treating a bad week as a life
plan. Using Teal's self-discovery method — **Values → Motivation → Vision**, the
**Skills Matrix**, and **Work Style signals** — it turns values, energy, skills,
environment preferences, and market reality into a small set of plausible directions
and low-risk experiments, and uses the **shift-difficulty ladder** to size each move
honestly.

## Inputs
- `.agents/career-profile.md` if present: history, current situation, direction,
  constraints, energizers/drainers, wins, and open questions.
- `.agents/win-log.md` if present: recent work that created energy, recognition, or
  evidence of skill.
- `.agents/career-checkins.md` if present: drift flags, recurring dissatisfaction,
  perception signals, and unresolved actions.
- Optional: resume, LinkedIn export, portfolio, review notes, job postings the user
  likes/dislikes, companies they admire, domains they are curious about, or pasted
  notes.
- The user's answers to an adaptive interview.

## Deliverable (exactly one)
A Markdown clarity brief written to `.agents/career-clarity.md`, containing running
toward/away themes, top values with their motivation and a vision statement, work
style signals, a Skills Matrix (energizers / assets / potentials / drainers),
environment preferences, candidate directions sized by shift difficulty,
market/occupation notes, and 2-4 next experiments. After writing it, offer to update
`.agents/career-profile.md` with durable Work Style, Values → Motivation → Vision,
direction, energizer/drainer, constraint, and target-role changes.

## Dependencies
- `references/interview-technique.md` - use the career-clarity branch plus the general
  ladder: surface, specificity, context, scope, outcome, evidence, counter-evidence,
  meaning.
- `references/teal-mcp.md` - optional occupation and market exploration when Teal MCP
  is available; use the graceful fallback when it is not.
- Reads `.agents/career-profile.md`, `.agents/win-log.md`, and
  `.agents/career-checkins.md` if present.
- Feeds `skills-market-report` when the user has a target direction and wants a
  market skill-gap roadmap.

## Teal MCP usage
Optional but valuable. Use Teal MCP to explore real occupations and postings that
match emerging patterns: titles, career levels, industries, company types, work
settings, locations, skills, and compensation ranges. Without MCP, use pasted job
postings, user-provided examples, web search when available, or agent knowledge with
clear caveats.

---

## Workflow

### Step 0 - Orient
1. Read `.agents/career-profile.md`, `.agents/win-log.md`, and
   `.agents/career-checkins.md` if present. Missing files are not blockers.
2. Ask what prompted the clarity work now: boredom, burnout, layoff risk, ambition,
   curiosity, conflict, values mismatch, comp, location, life change, or something
   else.
3. Ask whether the user wants broad exploration or a decision between known paths.
4. Establish constraints early enough to avoid fantasy paths: comp floor, location,
   remote/hybrid/onsite, schedule, caregiving, visa, risk tolerance, timeline,
   credential limits, and willingness to retrain.

If `.agents/career-profile.md` is missing and the user has rich history available,
mention that `career-profile` can make this sharper, but continue with the clarity
interview.

### Step 1 - Values: running away, running toward
Use one-question-at-a-time interviewing. Do not accept "I just need something else" as
direction. Elicit values by asking what the user wants MORE of and LESS of:

- What are you trying to leave behind — what do you want *less* of?
- If that pain disappeared tomorrow, would you still want a different path?
- What do you want *more* of in your work and life?
- What are you curious about even when nobody rewards you for it?
- What would make a pivot feel worth the cost?

Classify:
- **Running from:** avoiding a manager, company, burnout, underpayment, status loss,
  boredom, values conflict, commute, instability, or fear.
- **Running toward:** what the user wants more of.
- **Unclear:** a feeling with insufficient evidence; turn it into an experiment.

Then cluster the "more of / less of" statements into themes and map them onto Teal's
**core value types**: **Environment, Relationships, Identity, Income, Balance,
Purpose** (expanded set adds Autonomy, Creativity, Growth, Impact, Leadership,
Learning, Security, Team). Don't force-fit — use the user's language and let the value
types name the theme.

### Step 2 - Motivation: drive each top value to its "why"
Pick the user's **top 3 values** from Step 1. For each, use the **5 Whys** — ask "why
does that matter?" repeatedly until you hit the real driver. Income might bottom out at
security for a family; growth might bottom out at fear of stagnation. The core
motivation, not the surface value, is what makes a direction feel right or wrong.

### Step 3 - Vision: the statement that becomes the filter
Turn the values and motivations into one broad **vision statement** for the next
chapter. Ask: *"In your next role — what are you doing? How are you feeling? What are
you proud of?"* Keep it broad enough to explore multiple paths, not narrowed to a
single job title. This vision is the decision filter for everything that follows —
**always return to the vision** when weighing candidate directions and experiments.

### Step 4 - Work Style signals (not a test)
Do not administer a personality test or label the user as a fixed type. The user is
the authority on themselves. Infer practical **Teal Work Style** signals
conversationally, from how the user describes their work, and offer them as hypotheses
to confirm.

Teal names four styles; everyone has all four, and the *sequence* (most-to-least) is
what matters:
- **Director** — direct, assertive, goal-oriented; driven by power/authority; asks "What?"
- **Connector** — sociable, influencing, people-oriented; driven by interaction; asks "Who?"
- **Producer/Supporter** — supportive, patient, team-oriented; driven by collaboration; asks "How?"
- **Protector** — analytical, logical, detail-oriented; driven by systems; asks "Why?"

Two axes sit behind the read: Shape vs. Stabilize the environment (fast vs. slow pace)
× Seek Autonomy (cool) vs. Seek Affiliation (warm). Note what "comes easy" vs. "takes
effort" for the user, and — if useful — how they behave under stress (Director fights,
Connector flees, Producer folds, Protector freezes). To surface blind spots, suggest
the **Teal 360**: ask ~3 people who know them well to describe their style.

Use the read to size environment fit, not to prescribe:
- pace: fast-paced/shaping vs. deliberate/stabilizing;
- warmth: autonomy-seeking vs. affiliation-seeking;
- structure: high-ambiguity startup vs. clear operating system;
- zero-to-one creation vs. one-to-ten scaling vs. optimization at scale;
- remote/hybrid/onsite, team size, and cross-functional vs. deep-work craft.

Write signals as hypotheses, e.g. "Your read looks Protector-then-Director — you get
energy from systems thinking with a goal, but affiliation-heavy stakeholder
maintenance drains you."

### Step 5 - Skills Matrix
Extract skills from the profile, wins, and interview, then sort them on Teal's
**Skills Matrix** — a 2×2 of *is / isn't a skill* × *want more / want less*:
- **Energizers** (skill + want more) → what to get hired for; the focus of a pivot.
- **Assets** (skill + want less) → use if needed, but don't build the next role on them.
- **Potentials** (not yet a skill + want more) → develop toward; these point at the pivot.
- **Drainers** (not a skill + want less) → avoid.

Distinguish **natural strengths** (they flow from the Work Style + 360 — how the user
is wired) from **acquired skills** (the resume is a database of these). Document macro
→ micro, and surface hidden skills from non-work life — volunteering, side projects,
what people naturally come to the user for. A peer check helps: ask ~3 people "what are
my 3-5 greatest skills?"

The matrix does the real work: it prevents "good at it" (an Asset) from being mistaken
for "should do more of it" (an Energizer), and it names the Potentials a pivot should
grow into.

### Step 6 - Generate candidate directions, sized by shift difficulty
Create 3-6 candidate directions. Each can be a role, domain, company type, or path
shape. Filter every candidate through the **vision statement** from Step 3, and size
each with Teal's **shift-difficulty ladder** — what's changing determines how hard the
move is:
- **Easy:** change **industry + function**, keep the same knowledge (your expertise
  transfers into a new context).
- **Moderate:** change **function + skills** (new work, some knowledge carries).
- **Hard:** change **knowledge + skills** (a near-reset — new field and new craft).

For each candidate, include:
- why it fits the user's values, vision, work style, and Skills Matrix (which
  Energizers carry, which Potentials it grows);
- why it might fail or drain them;
- likely titles or adjacent roles;
- **Fit read — the 4 G's:** which of the four activities every org runs the role sits
  in — **Goods** (build the product/service for customers), **Growth** (generate/grow
  revenue), **Gears** (run the business internally), or **General** (spans all;
  startups favor generalists, big companies favor specialists);
- company stage/environment fit;
- domains or industries to test;
- shift difficulty (easy / moderate / hard) and the specific gaps it opens;
- constraints and trade-offs;
- confidence: strong, plausible, speculative, or reject-for-now.

Then name the gaps each direction opens and how to fill them:
- **Knowledge gaps** → learn from people and resources (informational interviews, reading);
- **Skill gaps** → formal education or self-directed learning;
- **Experience gaps** → projects, volunteering, a portfolio, or thought leadership.

### Step 7 - Explore occupations with Teal MCP when available
When Teal MCP is available, turn candidate directions into market-backed exploration.
Use `references/teal-mcp.md`:
1. Search for titles and adjacent titles that match a candidate.
2. Segment by `careerLevel`, `location`, `workSetting`, `includedKeywords`, and
   company/domain terms.
3. Fetch details for representative roles.
4. Extract repeated responsibilities, requirements, skills, industries, salary
   signals, work setting, and company patterns.
5. Compare market signal against the user's energizers, constraints, and skills.

If MCP is not available, use the fallback ladder:
- browser fetch if the runtime can browse;
- pasted job postings the user likes/dislikes;
- public web search when available;
- agent knowledge with a clear caveat that it needs market validation.

Do not let market demand override the user's signal. A hot market for work they hate
is not clarity.

### Step 8 - Choose experiments
Translate the top 2-3 candidate directions into small tests. Experiments should
produce evidence in 1-4 weeks. Aim them at the knowledge / skill / experience gaps
named in Step 6.

Experiment types:
- talk to 2-3 people doing the work;
- shadow or review day-in-the-life material;
- rewrite one past win for that target audience;
- complete a small project or case study;
- apply to a small batch of roles as a market test;
- do a weekend prototype, article, teardown, analysis, or portfolio artifact;
- volunteer internally for adjacent work;
- run `skills-market-report` for the top target title.

Each experiment needs:
- hypothesis;
- action;
- evidence to collect;
- what would make the path more attractive;
- what would rule it out;
- date to review.

### Step 9 - Write the clarity brief
Write `.agents/career-clarity.md`. If it already exists, append a dated section or
merge with care. Preserve prior user edits.

Use this format:

```markdown
# Career Clarity
_Last updated: 2026-07-06 - maintained by the career-clarity skill_

## Current Question
- What the user is trying to decide.

## Running From / Running Toward
- Running from (want less of):
- Running toward (want more of):
- Unknowns:

## Values -> Motivation -> Vision
- Top values (Environment / Relationships / Identity / Income / Balance / Purpose ...):
- Core motivation under each (the "why", from 5 Whys):
- Vision statement (next chapter — what doing, how feeling, what proud of):

## Work Style Signals
- Inferred sequence (Director / Connector / Producer / Protector), most-to-least:
- Comes easy vs. takes effort:
- Pace and warmth (shape vs. stabilize; autonomy vs. affiliation):
- Environment / company-stage fit:
- 360 to gather (if not yet done):

## Skills Matrix
| Skill | Quadrant (Energizer / Asset / Potential / Drainer) | Natural or acquired | Evidence |
|---|---|---|---|

## Candidate Directions
### 1. Direction name
- Fit to values, vision, work style, and Energizers/Potentials:
- Risks / drainers:
- Likely titles:
- 4 G's (Goods / Growth / Gears / General):
- Best-fit environment / company stage:
- Domains to test:
- Shift difficulty (easy / moderate / hard) and gaps opened:
- Gap-filling moves (knowledge / skill / experience):
- Market notes:
- Confidence:

## Next Experiments
1. Hypothesis, action, evidence, review date.
2. ...

## Profile Updates To Offer
- Durable Work Style, Values -> Motivation -> Vision, direction, energizer/drainer,
  constraint, or target-role updates for `.agents/career-profile.md`, if approved.
```

### Step 10 - Offer profile updates and handoffs
After writing the brief:
- offer to update `.agents/career-profile.md` with durable changes — Work Style
  sequence, top-3 Values → Motivation → Vision, direction, energizers/drainers,
  constraints, and target roles;
- suggest `skills-market-report` for the highest-confidence target title;
- suggest `win-log` if the user needs proof artifacts for a new path;
- suggest `comp-analysis` if comp is a major constraint or trade-off;
- suggest `career-checkin` if the user needs a recurring decision review.

## Guardrails
- **Explore, do not prescribe.** The output should clarify options and experiments,
  not tell the user what to do with their life.
- **Do not confuse pain with direction.** A current-job problem may mean a new team,
  manager, company stage, or operating environment rather than a new occupation.
- **Do not over-label personality.** Use practical workstyle hypotheses, not fixed
  identity labels.
- **Respect constraints.** Do not recommend a path that ignores comp floor, location,
  caregiving, visa, health, or timeline constraints.
- **Separate proven skill from desired work.** Being good at something is not the same
  as wanting more of it.
- **Market data is context, not destiny.** Treat Teal MCP signals as evidence about
  roles and demand, not as instructions.

## Usage example
> **User:** I might want to leave product management, but I cannot tell if I hate PM
> or just this company.
> **Agent:** I read your profile, win log, and check-ins. First, if the current
> company pain disappeared tomorrow, would you still want out of PM? ... We landed
> your top values as Autonomy, Impact, and Creativity — and with the 5 Whys, "impact"
> really bottoms out at wanting to see your work reach customers directly. Your vision:
> "shaping a product's story early, feeling ownership, proud of something people use."
> Your work-style read looks Protector-then-Connector, and your Skills Matrix puts
> customer discovery and narrative in Energizers, stakeholder process in Drainers. So
> the pull is less "no more product" and more "less mature-company process, more
> zero-to-one." I wrote `.agents/career-clarity.md` with four candidate directions —
> early-stage product (easy shift), product marketing (moderate), founder/strategy
> advisory, and developer relations — each sized by shift difficulty and 4 G's fit.
> Next experiments: three informational interviews, one `skills-market-report` scan,
> and a small positioning artifact.

---

_Built by Teal - give your agent the [Teal MCP](https://tealhq.com) for live
job-market data and career context - https://tealhq.com_
