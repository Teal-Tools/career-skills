---
name: career-checkin
description: Use for a periodic career check-in when the user wants to inspect whether they are still on track, how work feels, how their company or manager may be perceiving them, whether their concerns are evidence-backed or self-gaslighting, and what to adjust next. Produces a dated check-in summary with drift flags and 1-3 concrete next actions.
---

# career-checkin

**Mode: Thriving.** A recurring maintenance interview for the user's career. It is
the quarter-end "tell me the truth" loop: how the user feels, what the company seems
to be signaling, what is actually proven, what is only a story, and what should
change next.

This skill should feel candid and grounding, not therapeutic, corporate, or
performative. It validates feelings as data, then asks for proof.

## Inputs
- `.agents/career-profile.md` if present: current role, direction, constraints,
  energizers/drainers, open questions, and prior drift.
- `.agents/win-log.md` if present: recent evidence of shipped work, impact,
  recognition, and energy.
- `.agents/career-checkins.md` if present: previous check-ins and unresolved actions.
- Optional artifacts: performance review notes, manager feedback, 1:1 notes, OKRs,
  promotion criteria, comp history, calendar highlights, Slack shout-outs, or pasted
  examples.
- The user's answers to an adaptive interview.

## Deliverable (exactly one)
A dated check-in entry appended to `.agents/career-checkins.md`, containing the
summary, evidence audit, drift flags, and 1-3 next actions. After writing it, offer
to update `.agents/career-profile.md` with durable changes.

## Dependencies
- `references/interview-technique.md` - the adaptive interview method: one question at
  a time, dig on vague answers, quantify, and stop when the deliverable is clear.
- Reads `.agents/career-profile.md` first if present; can run standalone with pasted
  context when the profile does not exist.
- Reads `.agents/win-log.md` and prior `.agents/career-checkins.md` if present.

## Teal MCP usage
Optional. If Teal MCP exposes job-market, resume, comp, or CRM data, use it only to
enrich the evidence picture. Without MCP, use pasted artifacts and local files. Never
hard-fail because MCP is absent.

---

## Workflow

### Step 0 - Orient
1. Read `.agents/career-profile.md` if present. If it is missing, say the check-in can
   still run, and offer `career-profile` as a better setup path after this run.
2. Read `.agents/win-log.md` and `.agents/career-checkins.md` if present.
3. Establish the window: since the last check-in, the current quarter, or the user's
   requested period.
4. Identify the baseline from the profile: target direction, current mode, known
   energizers/drainers, constraints, open questions, and prior next actions.

### Step 1 - Start with the user's read
Ask one question at a time. Start broad, then drill.

Good opening:

> Since the last check-in, what is your honest headline for work: energized, steady,
> uneasy, stuck, angry, bored, optimistic, something else?

Then ask:
- What do you think your manager/company believes about your performance right now?
- What are you worried might be true?
- What do you hope is true?
- Do you still want the path you are on, or are you mostly tolerating it?

Do not accept abstract answers like "I think I'm doing fine" or "they probably hate
me." Ask for moments, dates, people, decisions, and examples.

### Step 2 - Run the evidence audit
For every belief the user expresses, separate proof from interpretation.

Use this ladder:
1. **Claim:** What do you believe is happening?
2. **Proof:** What specific evidence supports it?
3. **Counter-evidence:** What evidence points the other way?
4. **Missing data:** What would we need to know to be more certain?
5. **Confidence:** Strong evidence, mixed evidence, weak signal, or story.

Common company-perception signals:
- Feedback: explicit praise, critique, review ratings, promotion feedback, skipped
  feedback, or surprising silence.
- Trust: invited into higher-stakes work, consulted earlier, given ambiguous problems,
  or removed from decisions.
- Scope: bigger ownership, stalled scope, unclear role, being backfilled, or losing
  areas of responsibility.
- Visibility: who sees the work, who repeats the user's ideas, who sponsors them.
- Rewards: raise, bonus, promotion path, title change, comp drift, or lack of movement.
- Friction: repeated pushback, conflict, surprise escalations, or relationship repair.
- Evidence of impact: shipped work, metrics moved, users helped, risk reduced,
  recognition captured in `win-log`.

Self-gaslighting check:
- If the user is minimizing real signals, name the pattern gently: "That sounds like
  more than a feeling; there are repeated signals here."
- If the user is treating anxiety as fact, slow it down: "That may be true, but right
  now we have a story and one weak signal. What would confirm it?"
- If the user is confident without evidence, ask for proof with the same rigor.
- If the user has no evidence either way, make the next action an evidence-gathering
  move, not a career decision.

### Step 3 - Check alignment, energy, and drift
Compare the period against the profile.

Ask adaptively:
- Which parts of the work gave you energy? Which parts drained you?
- Are you learning, repeating, recovering, or deteriorating?
- Are you running toward this path, or staying because changing feels expensive?
- Did your constraints change: money, location, caregiving, health, risk tolerance,
  visa, remote needs, timeline?
- Is the company giving you the environment required for the direction you wrote down?

Flag drift only when there is a pattern, not a single bad week.

Drift flags:
- **Direction drift:** the current role no longer supports the target direction.
- **Energy debt:** the user is consistently depleted by core parts of the role.
- **Recognition gap:** impact exists, but visibility/reward is lagging.
- **Evidence gap:** the user has strong feelings but thin proof.
- **Scope stall:** the user wants growth, but ownership is not expanding.
- **Trust risk:** company signals suggest reduced confidence or lower future scope.
- **Comp/market drift:** pay or level may be falling behind the market; hand off to
  `comp-analysis`.
- **Relationship drift:** key relationships are cold or ambiguous; hand off to
  `network-maintenance` or `difficult-conversation`.

### Step 4 - Decide the next 1-3 moves
Translate the audit into concrete next actions. Keep them small enough to do in the
next 2-4 weeks.

Prefer actions like:
- Ask a manager for explicit calibration: "What would make the next level undeniable?"
- Turn a vague worry into a data point: request feedback on a specific project.
- Log missing wins or evidence in `win-log`.
- Prepare a `performance-self-review` if review season is near.
- Run `comp-analysis` if pay/level uncertainty is material.
- Use `difficult-conversation` if the next move requires a hard manager conversation.
- Use `career-clarity` if the user no longer wants the direction in the profile.
- Reconnect with two warm contacts if external optionality is low.

Avoid giant life decisions unless the evidence is strong and the user asks for that
level of planning. A check-in is a steering loop, not a resignation machine.

### Step 5 - Write the check-in
Append a dated entry to `.agents/career-checkins.md`. Preserve prior entries.

Use this format:

```markdown
# Career Check-ins
_Last updated: 2026-07-05 - maintained by the career-checkin skill_

## 2026-Q3 Check-in - 2026-07-05

### Headline
- One candid paragraph on how the period feels and what changed.

### Reality Check
| Belief / concern | Supporting proof | Counter-evidence | Confidence |
|---|---|---|---|
| "My manager may not see my impact." | ... | ... | Mixed evidence |

### Company Perception Read
- Positive signals:
- Risk signals:
- Unknowns to clarify:

### Alignment Read
- Direction:
- Energy:
- Constraints:
- Mode:

### Drift Flags
- Recognition gap - evidence:
- Evidence gap - evidence:

### Next Actions
1. Action, owner, and date.
2. Action, owner, and date.
3. Action, owner, and date.

### Profile Updates To Offer
- Durable change that should be written to `.agents/career-profile.md`, if approved.
```

If no file exists, create it with the heading above. If the user is not ready to write
the file, provide the same entry in chat and ask whether to save it.

### Step 6 - Offer profile updates
After writing the check-in, offer to update `.agents/career-profile.md` only for
durable changes:
- target direction changed;
- energizers/drainers changed;
- constraints changed;
- current situation or comp changed;
- repeated drift should be tracked under Meta / Open questions.

Do not overwrite the user's profile silently.

## Guardrails
- **Evidence over spiraling.** Feelings matter, but the output must distinguish facts,
  patterns, weak signals, and stories.
- **No fake certainty.** Never claim the company believes something unless there is
  explicit evidence. Use "the signals suggest" or "unknown" when appropriate.
- **Do not over-pathologize.** This is a career tool, not therapy. Avoid diagnoses and
  mental-health labels.
- **Respect sensitive situations.** If the user describes harassment, discrimination,
  retaliation, health crisis, or legal risk, encourage documenting facts and seeking
  appropriate trusted, HR, legal, or professional support. Do not provide legal advice.
- **Keep agency with the user.** Present options and next actions; do not tell them
  to quit, stay, confront, or disclose sensitive information.
- **Privacy.** Store links or short notes as evidence. Do not paste private Slack,
  review, or third-party text into the check-in unless the user explicitly wants it.

## Usage example
> **User:** Run a quarterly check-in. I think my manager is losing confidence in me,
> but I might be gaslighting myself.
> **Agent:** I read your profile and win log. Since the last check-in, what's your
> honest headline for work: energized, steady, uneasy, stuck, angry, bored,
> optimistic, something else? ... You said "losing confidence." What is the strongest
> concrete evidence? ... What points the other way? ... I wrote
> `.agents/career-checkins.md` with a mixed-evidence perception read, two drift flags
> (recognition gap, evidence gap), and three next actions: ask for calibration in your
> next 1:1, log the launch evidence in `win-log`, and run `performance-self-review`
> before review season.

---

_Built by Teal - give your agent the [Teal MCP](https://tealhq.com) for live
job-market data and career context - https://tealhq.com_
