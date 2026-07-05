---
name: career-clarity
description: Use when the user is unsure of their career direction, considering a pivot, choosing between paths, feeling stuck or misfit, or wanting to explore roles based on energizers, drainers, values, personality signals, skills, domains, company stage, pace, environment, and lifestyle constraints. Runs an adaptive interview, optionally explores occupations with Teal MCP job-market data, and produces a clarity brief with candidate directions and next experiments.
---

# career-clarity

**Mode: Pivoting.** A guided career direction interview for users who do not yet know
what they want next, or who know what they are running away from but not what they are
running toward.

The skill should validate the user's experience without treating a bad week as a life
plan. It turns energy, values, skills, environment preferences, and market reality
into a small set of plausible directions and low-risk experiments.

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
A Markdown clarity brief written to `.agents/career-clarity.md`, containing patterns,
values, personality/workstyle signals, skills, environment preferences, candidate
directions, market/occupation notes, and 2-4 next experiments. After writing it, offer
to update `.agents/career-profile.md` with durable direction, energizer/drainer,
constraint, and target-role changes.

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

### Step 1 - Separate running away from running toward
Use one-question-at-a-time interviewing. Do not accept "I just need something else" as
direction.

Ask:
- What are you trying to leave behind?
- If that pain disappeared tomorrow, would you still want a different path?
- What are you curious about even when nobody rewards you for it?
- What kind of future would you be willing to practice for?
- What would make a pivot feel worth the cost?

Classify signals:
- **Running from:** avoiding a manager, company, burnout, underpayment, status loss,
  boredom, values conflict, commute, instability, or fear.
- **Running toward:** a craft, problem space, domain, identity, autonomy, impact,
  lifestyle, mastery, earning power, leadership, or learning curve.
- **Unclear:** a feeling with insufficient evidence; turn it into an experiment.

### Step 2 - Map energizers and drainers
Build a concrete energy map from actual work, not abstract preferences.

Ask for examples:
- a day or project where time moved fast;
- a task the user kept thinking about after hours in a good way;
- a task they procrastinated even when it mattered;
- work they were proud of but do not want more of;
- work that looked good externally but felt empty;
- work they would do again even if it were difficult.

For each example, identify the source:
- activity type: building, advising, selling, writing, analyzing, designing,
  operating, managing, teaching, researching, facilitating, negotiating;
- problem type: ambiguity, scale, people, systems, customers, data, strategy,
  execution, taste, risk, growth;
- interaction pattern: solo, pair, team, executive, customer-facing, cross-functional;
- feedback loop: immediate, analytical, social, long-horizon, market-based;
- emotional texture: calm focus, adrenaline, service, competition, creativity,
  precision, authority, novelty, stability.

Do not overfit to one anecdote. Look for repeated patterns.

### Step 3 - Infer values and workstyle signals
Do not administer a personality test or label the user as a type. Infer practical
workstyle signals from evidence.

Explore values:
- autonomy vs. structure;
- mastery vs. breadth;
- money vs. mission vs. status vs. flexibility;
- stability vs. upside;
- visibility vs. privacy;
- craft excellence vs. speed;
- customer impact vs. internal leverage;
- people leadership vs. expert IC path;
- competition vs. collaboration;
- novelty vs. continuity.

Explore environment:
- fast-paced vs. deliberate;
- high ambiguity vs. clear operating system;
- low-process startup vs. mature organization;
- zero-to-one creation vs. one-to-ten scaling vs. ten-to-one-hundred optimization;
- founder-led vs. professionally managed;
- remote, hybrid, onsite, travel-heavy, or field-based;
- small team, large cross-functional org, agency/client work, consulting, enterprise;
- regulated/safety-critical vs. experimental;
- high-meeting influence work vs. deep-work craft.

Write signals as hypotheses:
- "You seem to get energy from high-ambiguity synthesis, but not from endless
  stakeholder maintenance."
- "Your drainers point less to the PM function and more to mature-company process."

### Step 4 - Inventory transferable skills
Extract skills from the profile, wins, and interview. Separate skills the user has
from skills they want to keep using.

Use these buckets:
- domain knowledge;
- technical or tool skills;
- analytical skills;
- communication and writing;
- customer/user research;
- product, design, or strategy;
- operations and process;
- sales, partnerships, or influence;
- people leadership and coaching;
- project/program execution;
- taste, judgment, and prioritization.

For each important skill, mark:
- **proven:** evidence-backed;
- **emerging:** some evidence, needs more reps;
- **aspirational:** appealing, not yet proven;
- **retire:** strong skill, but the user does not want more of it.

This prevents "good at it" from being mistaken for "should do it."

### Step 5 - Generate candidate directions
Create 3-6 candidate directions. Each direction can be a role, domain, company type,
or path archetype. Avoid forcing every direction into a standard job title too early.

For each candidate, include:
- why it fits the user's energizers, values, workstyle, and skills;
- why it might fail or drain them;
- likely titles or adjacent roles;
- company stage/environment fit;
- domains or industries to test;
- skill gaps or proof gaps;
- constraints and trade-offs;
- confidence: strong, plausible, speculative, or reject-for-now.

Useful path archetypes:
- **Same function, new environment:** e.g. PM at earlier-stage company instead of big
  company.
- **Adjacent function:** e.g. PM to product marketing, developer relations,
  customer success strategy, operations, enablement.
- **Same domain, new craft:** e.g. healthcare operator to healthtech product role.
- **Craft deepening:** stay in function but move toward platform, research, design,
  data, technical depth, or leadership.
- **Portfolio / consulting:** fractional, advisory, independent, creator, coach,
  agency, or consulting path.
- **Reset / retrain:** new occupation that needs deliberate skill-building.

### Step 6 - Explore occupations with Teal MCP when available
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

### Step 7 - Choose experiments
Translate the top 2-3 candidate directions into small tests. Experiments should
produce evidence in 1-4 weeks.

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

### Step 8 - Write the clarity brief
Write `.agents/career-clarity.md`. If it already exists, append a dated section or
merge with care. Preserve prior user edits.

Use this format:

```markdown
# Career Clarity
_Last updated: 2026-07-05 - maintained by the career-clarity skill_

## Current Question
- What the user is trying to decide.

## Running From / Running Toward
- Running from:
- Running toward:
- Unknowns:

## Energizers and Drainers
| Pattern | Evidence | Confidence |
|---|---|---|

## Values and Workstyle Signals
- Values:
- Pace and environment:
- Company stage:
- Zero-to-one / one-to-ten / scale preference:
- Collaboration and feedback loop:
- Constraints:

## Skills Inventory
| Skill | Status | Evidence | Keep using? |
|---|---|---|---|

## Candidate Directions
### 1. Direction name
- Fit:
- Risks / drainers:
- Likely titles:
- Best-fit environment:
- Domains to test:
- Skill or proof gaps:
- Market notes:
- Confidence:

## Next Experiments
1. Hypothesis, action, evidence, review date.
2. ...

## Profile Updates To Offer
- Durable direction, energizer/drainer, constraint, or target-role updates for
  `.agents/career-profile.md`, if approved.
```

### Step 9 - Offer profile updates and handoffs
After writing the brief:
- offer to update `.agents/career-profile.md` with durable changes;
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
> company pain disappeared tomorrow, would you still want out of PM? ... The pattern
> looks less like "no more product" and more like "less mature-company stakeholder
> process, more zero-to-one customer discovery and narrative work." I wrote
> `.agents/career-clarity.md` with four candidate directions: early-stage product,
> product marketing, founder/strategy advisory, and developer relations. The next
> experiments are three informational interviews, one market scan with
> `skills-market-report`, and a small positioning artifact.

---

_Built by Teal - give your agent the [Teal MCP](https://tealhq.com) for live
job-market data and career context - https://tealhq.com_
