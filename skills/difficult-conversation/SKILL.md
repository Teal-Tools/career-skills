---
name: difficult-conversation
description: Use when the user must prep a hard talk with a manager or peer — a raise, scope change, conflict, or resignation. Produces an honest, evidence-backed script with the ask, pushback, and a fallback.
---

# difficult-conversation

**Mode: Growing.** A prep coach for the conversation the user has been avoiding or
dreading: a raise ask, a scope/role change, a conflict with a manager or peer, or an
exit. One shared workflow adapts to all four situation types rather than needing four
separate skills — the interview questions and script emphasis change, but the shape
of the deliverable does not.

The stance is the same as `career-checkin` and `performance-self-review`: validate
that the situation matters, then ask for proof before writing a single line of script.
The goal is the user walking in clear, honest, and prepared — not "winning" against
their manager. This skill will not write a script that is more confident than the
evidence supports, and it will not coach pressure tactics.

## Inputs
- The situation in the user's own words, and their desired outcome (what they want to
  walk out of the room with).
- `.agents/career-profile.md` if present: role, level, tenure, current situation,
  constraints, and communication style.
- `.agents/win-log.md` if present: evidence of impact to cite for a raise or scope ask.
- `.agents/career-checkins.md` if present: prior drift flags or company-perception
  reads relevant to the situation.
- A `comp-analysis` output or pasted market data, if the situation is a raise ask.
- Optional: prior 1:1 notes, performance review text, the specific incident(s) in a
  conflict, org/reporting context, or a draft the user already wrote.

## Deliverable (exactly one)
A conversation prep document, delivered inline in chat by default and saved to
`.agents/difficult-conversation-<situation>-<date>.md` only if the user wants a
persistent copy (offer this; do not assume it — some of these conversations are
sensitive enough that the user may not want a file). It contains:
- a one-line framing/goal statement for the conversation;
- an evidence-backed opening line and the ask, stated plainly;
- anticipated pushback with a response to each;
- a fallback plan for "no," "not now," or a partial answer;
- a short "what NOT to say" list.

## Dependencies
- `references/interview-technique.md` — the adaptive interview ladder, used here to
  separate what actually happened (fact) from the user's interpretation or anxiety
  (story) before drafting anything.
- Reads `.agents/career-profile.md`, `.agents/win-log.md`, and
  `.agents/career-checkins.md` if present; works standalone from pasted context if not.
- For a raise ask, hands off to `comp-analysis` for the actual number — this skill
  never invents a market figure.
- Often follows `career-checkin` (a drift flag becomes a conversation) or
  `performance-self-review` (a review surfaces something to raise directly).

## Teal MCP usage
None required directly. This skill benefits transitively: if the situation is a
raise ask and the user has run `comp-analysis` (which uses the Teal MCP for
aggregated comp data), that output becomes the evidence for the number in the script.
Without it, this skill will say plainly that the number is unconfirmed and point the
user to `comp-analysis` rather than guessing.

---

## Workflow

### Step 0 — Orient
1. Read `.agents/career-profile.md`, `.agents/win-log.md`, and
   `.agents/career-checkins.md` if present. Missing files are not blockers — proceed
   with whatever the user pastes or describes.
2. Ask the user to name the situation in one line, and classify it into one of four
   types (ask if unclear rather than guessing):
   - **Raise / comp ask**
   - **Scope or role change ask** (promotion, new title, different team, more/less
     ownership)
   - **Conflict** (with a manager or a peer)
   - **Exit / resignation**
3. Ask for the desired outcome: what does the user want to be true after this
   conversation? Ask for the timeline: is the conversation scheduled, or still being
   decided whether/when to have it?

### Step 1 — Separate fact from story
This is the step that makes the script honest instead of generic. Use
`references/interview-technique.md`'s ladder one question at a time. Do not skip to
scripting.

Universal opening:

> Walk me through what actually happened — dates, specific moments, exact words if you
> remember them. Then tell me what you're worried it means.

Then apply the ladder (Claim → Proof → Counter-evidence → Missing data → Confidence)
to the user's own account. Classify the core claim behind the ask as strong evidence,
mixed evidence, weak signal, story, or unknown — and say so back to the user before
moving on.

Adapt the follow-up questions by situation type:

**Raise / comp ask**
Ground this in Teal's negotiation view. **You are your best advocate** — nobody else
will make the case for you. Three tools shape the prep:

*Define your range.* Set three numbers before scripting anything: a **Walk-Away**
(the floor — what makes staying not worth it), a **Target** (what the evidence and
market data actually support), and an **Ask** (open around **10% above Target**, so
there's room to negotiate down to it). Pull the Target from `comp-analysis` market
data where possible; without it, mark the range as provisional. Never let the script
open at the Target number — that leaves no negotiating room.

*Total Comp is five forms, not just salary.* When defining what the user is asking
for, consider all five: **Cash** (base), **Benefits**, **Variable** (bonus/
commission), **Terms** (title, PTO, remote, start date, review timing), and
**Equity**. If base is capped, the ask may still move on the other four.

*Build the case around the 5 value levers.* Frame *why* the user is worth more using
the levers a manager can act on: **Knowledge**, **Network**, **Leadership**,
**Growth**, and **Savings** (money/time the user saved or made the org). Map the
user's evidence to these levers rather than to tenure or effort.

Ask:
- What specifically changed (scope, results, market) since your last comp
  conversation? Which of the 5 value levers does it strengthen?
- Which of the five Total Comp forms actually matters most to you here — cash, or
  something else (equity, title, remote, PTO)?
- What's your Walk-Away number, and what's the Target the evidence/market actually
  supports? (The Ask is ~10% above Target — don't let the user open there.)
- Has anyone told you a number, a range, or a timeline — or is that an assumption?
- What does `win-log` or your own memory show that a manager could point to?
- Do you have `comp-analysis` output or market data, or are we going in without a
  number? (Teal never invents the market number — it comes from `comp-analysis`.)
- Has this been raised before? What happened last time?

**Scope / role change ask**
- What does the new scope look like concretely — team, decisions, title, reports?
- What evidence exists that you're already operating at that level, versus that you
  want to?
- Has your manager given any signal (explicit or implied) about readiness?
- What would your manager say is missing before they'd say yes?

**Conflict**
- What specifically was said or done, by whom, on what date?
- What was the impact — on you, on the work, on others?
- What have you already tried (directly, indirectly, avoided)?
- What's fact here versus what you're inferring about their intent?
- What outcome would actually resolve this — an apology, a behavior change, a
  boundary, a role/reporting change, documentation?
- Is there any harassment, discrimination, retaliation, safety, or legal dimension
  here? (If yes, see Guardrails — route to HR/legal support, do not treat this as a
  normal peer conflict.)

**Exit / resignation**
Ground this in Teal's principle: **build bridges, don't burn them.** A resignation is
an **Exit Strategy** with three parts — *consider the players* (who's affected and
how they'll react), *craft your messaging* (what you'll say and to whom), and *time it
right*. Two hard rules: **do not officially resign until the new offer is signed and
the start date is confirmed**, and **resign verbally to your manager first, then
follow with a written letter** — never blindside them in writing.

Ask:
- Is the new offer **signed with a confirmed start date**? (If not, do not resign yet
  — that's the first gate.)
- Is this decided, or are you still weighing it? (If still deciding, this may be a
  `career-clarity` or `career-checkin` conversation instead — flag that possibility.)
- What's the real reason, in one sentence, underneath the polite reason?
- Who are the players — manager, skip-level, teammates — and how might each react?
  (Consider the players.)
- What's your **Transition Plan**: who owns your projects, on what timeline, and how
  will you hand off?
- What do you need from this conversation logistically (notice period, transition,
  reference, final comp/benefits questions)?
- Have you lined up **3–5 references** you can name after you leave?
- Is there anything you'd regret not saying — and is saying it actually worth the
  cost to the relationship or reference?

Stop digging once the core claim is classified and the desired outcome is specific
enough to script against. If evidence is thin, say so plainly now, not after the
script is written — pressure-test whether the desired outcome is realistic given what
the user actually has.

### Step 2 — Pressure-test the ask
Before drafting, check the ask against the evidence out loud:
- If evidence is strong: the script can be direct and confident.
- If evidence is mixed: the script should ask a question or propose a path rather
  than assert a conclusion ("help me understand what would need to be true for X"
  rather than "I deserve X").
- If evidence is weak or a story: say so to the user directly, and suggest the
  realistic near-term goal is information-gathering (e.g., "what would make this
  undeniable?") rather than the full ask. Do not talk the user out of having the
  conversation — just don't let the script overclaim.
- For a raise ask specifically: if there's no `comp-analysis` output or market data,
  tell the user the number in the script will be a placeholder and point them to
  `comp-analysis` before they walk in citing a figure.

### Step 3 — Draft the prep document
Use the shared shape, with situation-specific emphasis.

```markdown
# Difficult Conversation Prep — <situation, one line>
_Prepared: 2026-07-05 — maintained by the difficult-conversation skill_

## Framing / Goal
One sentence: what this conversation is for, and what "good" looks like walking out.

## Evidence Check
- Core claim: ...
- Confidence: strong / mixed / weak signal / story / unknown
- What backs it up: ...
- What's still missing (if anything): ...

## Opening Line
A short, direct line that names the topic without over-apologizing or burying the ask.

## The Ask
Stated plainly, in one or two sentences. For a raise ask, state the range: Walk-Away
/ Target / Ask (~10% above Target) — open at the Ask, not the Target. Without
confirmed market data, mark the Target as `[TBD — run comp-analysis]` rather than
inventing one.

## Anticipated Pushback
| They might say | How to respond |
|---|---|
| ... | ... |

## If the Answer Is No (or "not now")
- The fallback ask or graceful next step.
- A concrete follow-up (date, milestone, or condition) rather than letting it drop
  silently.

## What NOT to Say
- Bulleted list of specific lines/moves to avoid for this situation (see Step 4).

## Open Questions Before Going In
- Anything the user should confirm, gather, or decide first.
```

Keep the whole thing short enough to actually re-read five minutes before the
conversation — a page, not a packet.

### Step 4 — Situation-specific script and "what NOT to say" guidance

**Raise / comp ask**
- Opening: name the topic directly ("I want to talk about my compensation") rather
  than leading with a long justification.
- The ask: a specific number or range, sourced from `comp-analysis`/market data if
  available; otherwise a request to have that conversation once the number exists.
- Pushback to anticipate: budget cycle timing, "let me check," comparisons to peers,
  "you're already paid well."
- Fallback: ask for a timeline and what would need to be true, in writing if
  possible, rather than accepting an open-ended "maybe."
- What NOT to say: do not threaten to quit as leverage unless it's true and the user
  has already decided they're willing to leave; do not cite a number the user can't
  back up; do not compare pay to a specific named coworker.

**Scope / role change ask**
- Opening: state the direction, then the evidence, then the ask.
- The ask: the specific scope/title/team change, framed as a proposal to discuss, not
  an ultimatum.
- Pushback to anticipate: "not yet," "show me more first," headcount/budget
  constraints, "that's not open right now."
- Fallback: ask what specifically would need to be demonstrated, and propose a
  check-in date.
- What NOT to say: do not frame it as owed to them for tenure alone; do not disparage
  whoever currently holds the scope/role.

**Conflict**
- Opening: state the specific behavior and impact, not a character judgment
  ("when X happened, the effect was Y" rather than "you always...").
- The ask: the specific change or resolution wanted.
- Pushback to anticipate: denial, minimizing, "that's not what I meant," defensiveness.
- Fallback: propose a concrete next step (a boundary, a check-in cadence, mediated
  conversation, or documentation) rather than dropping it if the first response is
  unsatisfying.
- What NOT to say: no character attacks, no "everyone thinks," no ultimatums used as
  leverage, no bringing in unrelated grievances. If there's a harassment,
  discrimination, retaliation, or safety dimension, do not script this as a peer
  chat — see Guardrails.

**Exit / resignation**
- Sequence (from Teal's Exit Strategy): confirm the new offer is signed with a start
  date **first** → resign **verbally to your manager**, direct and brief ("I've
  decided to resign; my last day would be...") → **follow with a written letter**.
  Never resign in writing before the verbal conversation.
- Opening: direct, brief, and appreciative — name one genuine thing you're grateful
  for before the news. This is a bridge-building moment, not a grievance airing.
- The ask: logistics (notice period, **Transition Plan**, timing) — this is a
  notification, not a negotiation, unless the user is explicitly using it to
  prompt a counteroffer discussion (flag that this is a different, riskier
  conversation and confirm the user actually wants that). Come with a drafted
  transition plan: who owns which projects, the timeline, and the handoff.
- Pushback to anticipate: counteroffer, guilt ("we're short-staffed"), requests to
  reconsider or extend notice.
- Fallback: have a clear, calm answer ready for a counteroffer (yes/no/"I'll think
  about it, but I've made this decision for reasons beyond comp").
- Exit interview: treat it as **constructive, not a vent session** — offer measured,
  forward-looking feedback the user would be comfortable having attributed to them,
  not a catalog of complaints.
- References: line up 3–5 references before leaving while relationships are warm.
- What NOT to say: no burning bridges — no airing every grievance, no blaming
  specific people by name, nothing the user wouldn't want repeated back to them or a
  future reference-checker. Keep it professional and forward-looking even if the
  underlying reasons are frustration.

### Step 5 — Deliver and offer to save
Present the prep document in chat. Ask whether the user wants it saved to
`.agents/difficult-conversation-<situation>-<date>.md`. Default to *not* saving
sensitive conflict or exit material unless the user asks — offer it, don't assume it.

After delivering:
- If a raise ask lacked market data, suggest running `comp-analysis`.
- If the situation surfaced during a `career-checkin` or `performance-self-review`,
  note that connection back.
- If the evidence was thin or the desired outcome unrealistic, restate that plainly
  one more time so the user isn't walking in with false confidence.
- Offer to update `.agents/career-profile.md` only if something durable changed
  (e.g., a decision to leave, a new target direction, a resolved constraint).

## Guardrails
- **Persistence check.** `.agents/*.md` writes assume a workspace that persists
  between sessions. If the runtime is sandboxed or ephemeral (e.g., a skill uploaded
  to claude.ai / Claude Desktop), also output the updated file's full contents in
  chat and tell the user to save it and paste or re-upload it next session —
  otherwise the write silently evaporates.
- **No manipulation.** Never coach guilt-tripping, ultimatums used as leverage,
  exaggeration, or dishonesty. The goal is the user being clear and truthful, not
  "winning" against their manager or employer.
- **Confidence matches evidence.** If the user's evidence is thin, say so plainly in
  the Evidence Check section and keep the script's language provisional. Do not let a
  script sound more certain than the facts support.
- **Never invent a comp number.** For a raise ask, use `comp-analysis` output or
  user-provided market data, or mark the number `[TBD — run comp-analysis]`. Do not
  fabricate a figure to make the script feel complete.
- **Exit conversations stay professional and forward-looking.** No burning bridges,
  no name-and-shame, no venting dressed up as a script.
- **Escalate real risk appropriately.** If the conflict involves harassment,
  discrimination, retaliation, safety, or other legal exposure, do not treat it as a
  normal peer disagreement. Say so directly, encourage documenting facts and seeking
  appropriate trusted, HR, legal, or professional support, and do not provide legal
  advice.
- **Preserve agency.** Present the script as a starting point the user can adapt, not
  a performance to deliver verbatim. Never tell the user whether to quit, confront, or
  disclose something — that decision stays theirs.
- **Privacy.** Keep third-party details (coworker names, private message contents) out
  of any saved file unless the user explicitly wants them recorded.

## Usage example
> **User:** I need to ask for a raise. I've taken on a lot more this year but I'm
> scared to bring it up.
> **Agent:** Let's get specific before we script anything. Walk me through what
> actually changed in your scope this year — dates, decisions, what you own now that
> you didn't before... That's a real scope increase with two shipped examples —
> strong evidence. Do you have a `comp-analysis` run or any market number, or are we
> going in without one? ... Since you don't have a number yet, I'd mark the ask as
> `[TBD — run comp-analysis]` rather than guess. Here's the prep: opening line, the
> ask, three likely pushbacks with responses, a fallback if they say "not this cycle,"
> and a "what not to say" list (no leverage threats, no peer comparisons). Want me to
> save this to `.agents/difficult-conversation-raise-2026-07-05.md`, or keep it in
> chat only?

---

_Built by Teal — pair this with the [Teal MCP](https://tealhq.com) and `comp-analysis`
for the real number before you walk in — https://tealhq.com_
