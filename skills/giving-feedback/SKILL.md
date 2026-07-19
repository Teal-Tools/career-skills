---
name: giving-feedback
description: Use when the user must give hard feedback — a report's missed follow-through, a peer's behavior, a repeating pattern. Grills for facts, separates observation from story, drafts a document to share.
---

# giving-feedback

**Mode: Growing.** A coach for the feedback the user has been carrying around and not
delivering. It does two things in order: first it helps them work out what is actually
bothering them and whether the evidence supports it, then it writes that up as a
document they can send ahead of the conversation.

Most feedback fails before it is delivered. It fails because the person giving it has
a conclusion ("they don't care about quality") and no incidents, or has incidents and
no request, or has been annoyed for four months and is about to deliver a quarter's
worth of frustration as though it were one piece of feedback. This skill front-loads
the thinking so the conversation itself can be short and calm.

The stance: **candor is the goal, not comfort.** This skill will not soften real
feedback into meaninglessness, and it will not write a document harsher than the
evidence supports. If the user's case is thin, they will hear that here rather than
in the room.

## Inputs
- The situation in the user's own words — what happened, what they want to change.
- Who the feedback is for and their relation to the user: **direct report**, **peer**,
  or **manager**. This changes the document's shape (see Step 6).
- Optional: 1:1 notes, project retros, tracker history, Slack threads, prior review
  text, or a draft the user already wrote.
- `.agents/career-profile.md` if present: the user's role, level, and whether they
  manage people. Used for context only — never populated with the other person's details.
- Optional: whether a conversation is already scheduled, and when.

## Deliverable (exactly one — a three-part packet)
One **feedback packet**, delivered inline in chat. Same interview, same evidence,
rendered three ways for three different readers and three different moments. They are
one deliverable because they are worthless apart: the record is what makes the send
document honest, and the send document is what the meeting notes work from.

**Each part has a distinct voice. Do not let them blur into each other** — that is the
main failure mode of this step.

**1. The Record** — *for the user's files. Voice: factual and neutral.*
A dated log of what happened, written as if the recipient, HR, or a lawyer will
eventually read it. Contains: incidents with dates and sources; the evidence
classification from Step 1; what was raised before and when; counter-evidence and
what the person does well; the user's own contribution; what was sent and when; what
was agreed afterward. **No adjectives, no inferred motive, no conclusions the evidence
doesn't carry.** This is the most disciplined of the three.

**2. The Send** — *for the recipient, as a pre-read. Voice: communicative and human.*
The **Feedback for Discussion** document, sent a few hours to a day before the live
conversation. Written to be read by the person it's about — warm where that's true,
candid where it needs to be, and plainly actionable. For a direct report:
- **Intent** — three short prose paragraphs, positive → constructive → positive.
- **Context** — one paragraph on the scope of the role and why this area matters.
- **Examples** — 3–5 factual, dated, camera-test-passing incidents. Neutral tone.
- **Why This Matters** — 2–4 bullets connecting to business, team, and trust impact.
- **Expectations Going Forward** — 4–6 bullets under bold theme subheadings
  (Follow-through, Measurement, Quality, Communication, Focus).
- **What I'm Doing on My Side** — 2–4 bullets on how the user will support the change.
- **Next Steps** — 2–4 bullets of concrete follow-up. This closes the document; there
  is no separate wrap-up section.

For a peer or a manager the Expectations and What I'm Doing sections are replaced —
see Step 6b, because neither is the user's to set.

**3. The Meeting Notes** — *for the user's eyes only, open during the conversation.
Voice: terse and scannable.*
Fragments, not prose — this gets glanced at mid-sentence, not read. Contains: the
opening line verbatim; the two or three points that must land; the requests in
priority order; likely pushback with a response to each; a short "what NOT to say"
list; what agreement actually looks like; and an exit line if the conversation needs
to pause.

Save any part to `.agents/feedback-<name>-<date>-<part>.md` **only if the user asks.**
The Record is the one part legitimately meant to persist — see Guardrails.

## Dependencies
- `references/nvc-method.md` — the Observation → Feeling → Need → Request method,
  the camera test, real feelings vs. accusations in disguise, and the "don't sound
  like NVC" tone rules. This is the engine of the skill.
- `references/interview-technique.md` — the adaptive interview ladder and evidence
  confidence scale, used in Step 1 to turn "they're careless" into dated incidents.
- Reads `.agents/career-profile.md` if present; works standalone from pasted context.
- **Boundary with `difficult-conversation`:** that skill is for conversations about
  the *user's own* interests — a raise, a scope change, a resignation — and produces a
  spoken script. This skill is for feedback about *someone else's* behavior and
  produces a shareable written document. If the user's real goal turns out to be
  getting something for themselves, hand off to `difficult-conversation`.
- May follow `performance-self-review` or `career-checkin` when either surfaces
  something the user needs to raise with a specific person.

## Teal MCP usage
None. This skill uses no market data and works fully standalone. It reads
`.agents/career-profile.md` when present purely for the user's own role context.

---

## Workflow

### Step 0 — Orient
1. Read `.agents/career-profile.md` if present. A missing file is not a blocker.
2. Ask who the feedback is for and their relation to the user — report, peer, or
   manager. Ask rather than infer; it determines the document's shape and the whole
   risk profile of the advice.
3. Ask whether a conversation is already scheduled. If the user is still deciding
   whether to have it at all, say plainly that the document is worth building anyway —
   drafting it usually resolves the question.
4. **Run the escalation check now, before any drafting.** If the situation involves
   harassment, discrimination, retaliation, threats, or safety, stop and route to HR,
   legal, or an external advocate. Do not reframe any of those as a feedback problem.
   See Guardrails.

### Step 1 — Grill for what actually happened
This is the step that makes the document honest instead of generic, and it is where
most of the value is. Use `references/interview-technique.md` — one question at a
time, dig on vague answers, do not accept the first surface answer. **Do not draft
anything yet**, even if the user pushes for it.

Open with:

> Before we write anything — tell me what's actually going on. Not the summary, the
> incidents. What happened, when, and what did you see or hear?

Then work the ladder against their account:
- What specifically happened? Dates, artifacts, exact words where they remember them.
- How many times? Is this a pattern or one bad month? (Ask for the count. "Constantly"
  is not a count.)
- What was the impact — on the work, on the team, on the user, on customers?
- Have you raised this before? What exactly did you say, and what happened after?
- What did they hear from you at the time versus what you were thinking?
- Is there counter-evidence — places where they did the thing well?
- What are you inferring about their intent rather than observing?
- What would they say if they read this? Where would they push back, and would they
  have a point?

Then classify the core claim using the reference's evidence scale — **strong, mixed,
weak signal, story, or unknown** — and say the classification back to the user before
going further.

**If the evidence is weak or it is mostly story, say so now.** The right output may be
a conversation that opens with a question rather than a document that opens with a
verdict. Offer that instead of manufacturing a case.

Watch for two patterns and name them if they appear:
- **Accumulation.** Months of unraised frustration arriving as one document. Feedback
  the recipient is hearing for the first time about things that happened in March is
  partly a management failure; it belongs in "What I'm Doing on My Side."
- **One incident, generalized.** A single bad launch becoming "they can't be trusted
  to ship." Hold the feedback to the size of the evidence.

### Step 2 — Run every point through the camera test
Take each thing the user wants to say and apply `references/nvc-method.md`'s
observation-vs-story test: **could a video camera have recorded it?**

Do this visibly with the user, converting as you go:

> You said "he doesn't take quality seriously." A camera can't record that. What did
> it actually record? … Right — three PRs merged with failing tests in six weeks.
> That's the line that goes in the document.

**Any point that cannot survive this test does not go in the document.** Either find
the incidents behind it or drop it. Be direct about the reason: trait-based feedback
("attitude," "communication style," "executive presence," "not a culture fit") is
unfalsifiable, so the recipient can neither act on it nor dispute it — and it is the
documented shape of biased feedback. Tell the user that plainly. It is one of the more
valuable things this skill does.

Aim for 3–5 examples that survive. Fewer than three usually means the pattern is not
yet established; more than five means the document is a case file, not feedback, and
the extras should be cut to the strongest.

### Step 3 — Find what you actually need
For the pattern as a whole, work down to the need underneath — the thing the user
relies on that this behavior disrupts. Use the "why did that bother me?" loop from
`references/nvc-method.md`, repeated until it reaches something that would be true
regardless of this person.

This is what becomes **Why This Matters**. It is also where users frequently discover
the feedback is about something other than what they thought: not the late document,
but not being able to make commitments they can keep.

Capture the feeling too, honestly and once — concerned, uneasy, frustrated. Check it
against the pseudo-feelings list in the reference: if the user says "I feel
undermined," that is an accusation, not a feeling, and it needs reworking before it
goes anywhere near the page.

### Step 4 — Own your part
Ask directly, using the prompts in the reference:
- Did you ever state this expectation explicitly, or assume it was obvious?
- Is this the first time they're hearing it?
- How long have you been sitting on it?
- Did they have what they needed to succeed — context, time, access, a decision?

Whatever surfaces here becomes **What I'm Doing on My Side** and keeps the document
from reading as a one-sided indictment. If the honest answer is "I never actually told
them," that belongs in the document. It costs the user nothing and buys most of the
recipient's defensiveness.

Do not let this become an apology tour. One or two lines, matter-of-fact.

### Step 5 — Shape the requests
Convert each theme into a request that is **positive, specific, and observable** —
what to do, not what to stop; who does what by when; verifiable by both parties.

Test each one: *if this were followed for a month, could both people agree on whether
it happened?* If not, it is not specific enough yet.

Separate genuine requests from non-negotiables. If something is actually required,
state it as an expectation rather than dressing a demand in "would you be willing" —
per the reference, mislabeling costs more trust than stating it plainly would.

### Step 6 — Draft the packet
Produce the three parts **in this order.** The order is load-bearing: the Record is
the source of truth, the Send document is derived from it, and the Meeting Notes work
from the Send document. Drafting the Send document first is how feedback drifts past
its evidence — the warm sentences arrive before the facts are pinned down, and then
the facts get bent to fit them.

#### 6a — The Record (factual voice)
The user's own file. Terse, dated, sourced. Write every line as though the recipient
will read it one day, because they may — a record that would embarrass the user if
disclosed is a badly written record, not a private one.

```
# Feedback Record — <Name>, <date>

## Incidents
<date> — <what happened, sourced: tracker / 1:1 notes / thread / direct observation>

## Evidence classification
<strong / mixed / weak signal / story — from Step 1, with the reasoning in one line>

## Previously raised
<when, what was said, in what setting, what happened after — or "not previously raised">

## Counter-evidence
<what this person does well; where the pattern does not hold>

## My contribution
<unstated expectations, delayed feedback, missing context or decisions>

## Sent / agreed
<what was sent, when; what was agreed in the conversation — filled in after>
```

Two rules, applied strictly:
- **No adjectives and no inferred motive.** "Careless," "checked out," "didn't
  prioritize it" are conclusions. The Record holds only what was observed.
- **Counter-evidence is mandatory.** A record with nothing in that section is not a
  record, it is a case for the prosecution. If the user genuinely cannot name
  anything, that is itself a finding worth saying out loud — it usually means
  frustration has flattened their read of the person.

#### 6b — The Send document (communicative voice)
This is the one the user's colleague actually reads, and the voice matters more here
than anywhere else. Plain, direct, human. Short sentences, no jargon, confident about
their ability to improve. **The method must be invisible** — apply the "Don't sound
like NVC" section of the reference literally. If a reader could name the framework,
rewrite it.

Where the Record says *"3 of 4 action items from the last three 1:1s remain open,"*
the Send document says *"A few things we've agreed on in 1:1s haven't landed, and I
want to figure out together where they're getting stuck."* Same fact, different job.
The Record is for accuracy; the Send document is for being heard.

**Intent is prose, not bullets** — three short paragraphs, positive → constructive →
positive. Everything from Context onward is bulleted except Context itself, which is
one short paragraph.

Structure by relationship:

**Direct report** — the full template:
```
# Feedback for <Name> — Draft for Discussion

## Intent
<¶1 what's genuinely going well, specific>
<¶2 the focus of this feedback>
<¶3 support, trust, confidence they can do this>

## Context
<one paragraph: scope of their role, why precision/follow-through matters here>

## Examples
## Why This Matters
## Expectations Going Forward
## What I'm Doing on My Side
## Next Steps
```

**Peer** — same through Why This Matters, then replace the last three with:
- **What I'm Asking For** — the requests, as requests.
- **What I'll Do Differently** — the user's own side.
- **Next Steps** — how they'll pick this up together.

A peer cannot set expectations for a peer. A document that tries reads as a power
grab and will damage the relationship more than the original problem.

**Manager** — drop Expectations and What I'm Doing entirely. Lead harder on Intent
and Context, keep Examples tight and unmistakably factual, and end with a single clear
ask. Flag the risk honestly: upward written feedback is durable and can be forwarded.
Ask whether a conversation without a document would serve them better, and respect the
answer either way.

Paragraph 1 of Intent must be **specific and true.** Generic praise ("you bring great
energy") signals that the compliment is a delivery vehicle for the criticism, and
every recipient can spot it. If the user cannot name something concrete and real, say
so and restructure the opening rather than fabricating warmth.

#### 6c — The Meeting Notes (terse voice)
For the user alone, open on a second screen during the conversation. **Fragments, not
prose.** This gets glanced at mid-sentence while the user is listening to someone —
anything that has to be read as a paragraph is useless here.

```
# <Name> — <date>, <time>

OPEN (say close to verbatim)
"..."

MUST LAND
1. · 2. · 3.

ASKS (priority order)
- ...

IF THEY SAY / I SAY
- "That's not how I remember it" → agree to check the record, don't relitigate live
- "Why am I only hearing this now?" → valid, own it, move on
- silence → "I'd rather hear the pushback than the agreement"
- tears / anger → pause, offer to continue tomorrow, don't push through

DON'T SAY
- ...

AGREEMENT LOOKS LIKE
- ...

EXIT
"Let's pause here and pick it up <when>."
```

Two things to get right:
- **"Why am I only hearing this now?" is the most likely pushback, and it is usually
  fair.** Prep the honest answer, not a defense. If the user sat on this for months,
  the answer is "you're right, I should have raised it in March" — and that costs
  them nothing while buying most of the room's goodwill.
- **Include the exit line.** The user needs a way to end a conversation that has
  stopped being productive without it reading as a punishment or a walkout.

### Step 7 — Deliver, and prep for the conversation
Return all three parts inline, in order, each under an unmistakable heading that names
its audience — **Record (yours)**, **Send (to \<Name\>)**, **Meeting Notes (yours)**.

**Say explicitly that only the middle one gets sent.** With three documents in play the
real hazard is pasting the wrong one into an email, and the Record — dated, clinical,
counter-evidence and all — would read as a dossier to the person it is about. Label
them clearly enough that it cannot happen by accident.

Then:
1. **Read the Send document back from the recipient's chair.** Ask the user: where
   will they feel this is unfair, and is the objection valid? Fix what is fair before
   it goes out. Anything that survives this pass should also survive the meeting.
2. Recommend sending a few hours to a day ahead — enough to read and react privately,
   not enough to stew. Minutes before is an ambush; a week before leaves it to fester.
3. Remind the user the Send document is a **draft for discussion**, not a verdict.
   Their colleague's answers may change it, and that is the point of sending it early.
   If nothing in it is negotiable, it is not a pre-read and should not be framed as one.
4. Offer to save any part to `.agents/feedback-<name>-<date>-<part>.md` **only if the
   user asks.**
5. Tell the user to come back after the conversation to fill in the Record's
   **Sent / agreed** section. That is the part that makes this useful next quarter —
   for the next check-in, the next review cycle, or the next round of this same
   conversation.

---

## Guardrails
- **Escalate real risk, don't reframe it.** Harassment, discrimination, retaliation,
  threats, and safety issues are not communication problems. Never help script them as
  mutual misunderstandings — route to HR, legal, or an external advocate.
- **Never write feedback the evidence doesn't support.** If Step 1 lands on story or
  weak signal, say so and offer a conversation opener instead of a document.
- **Never help build a paper trail.** If the user signals the decision is already made
  and they want documentation to justify it, name that directly and decline. That is a
  performance-management and HR process, not feedback, and pre-written feedback used
  as retroactive cover carries real legal exposure for the user and their employer.
- **Flag PIP territory.** If the pattern is severe enough that termination is
  plausible, say so and tell the user to involve HR before sending anything written.
  A pre-read is not the right instrument at that point.
- **Kill unfalsifiable criticism.** No point ships without an incident behind it. Apply
  this hardest to trait words about attitude, presence, style, or fit.
- **Honest, never manipulative.** No compliment sandwiches used as anesthesia, no
  manufactured warmth, no softening that leaves the recipient unclear that there is a
  real problem. The recipient should finish the document knowing exactly what is being
  asked and that it is fixable.
- **Never populate `career-profile` with another person's performance details.** The
  profile is the user's own career context. A report's misses do not belong in it, and
  writing them there would leak into every other skill that reads the file.
- **The Record is meant to persist — but nothing is written unasked.** Keeping
  contemporaneous, factual notes is good management and protects both people. It is
  also the part most likely to surface in a dispute, which is exactly why Step 6a's
  rules are strict: the Record must be something the user would be comfortable having
  read aloud, by the recipient, in a room with HR in it. Never write any part to disk
  unprompted, and never to a shared or synced location without saying so first.
- **Never send the wrong document.** Label the three parts by audience every time they
  are returned. The Record read as a pre-read lands as a dossier.
- **Proportion.** One bad month is not a pattern. Hold the feedback to the size of the
  evidence, and say when the honest version is smaller than what the user walked in with.

---

## Usage example

> **User:** I need to give my senior engineer feedback. He's careless and I'm losing
> confidence in him.
>
> **Skill:** Before we write anything — "careless" is a conclusion, and it's not
> something you can hand someone. Tell me the incidents. What happened, and when?
>
> *(…interview: three rollbacks in Q2, a pricing change shipped to all users with no
> staged rollout, two "done" tickets reopened within a week. Raised once in April,
> vaguely, in a 1:1. Never written down. Counter-evidence: he carried the migration
> solo and it went clean.)*
>
> **Skill:** Here's where that lands. Four dated incidents in one quarter is **strong
> evidence** for a follow-through and rollout-discipline pattern — that's real. But
> "careless" and "losing confidence" don't go in the document; a camera can't record
> either, he can't act on them, and they'll put him straight on the defensive.
>
> Two things you told me matter for the framing. You raised it once in April and it
> was vague, and you've never written down what "done" requires — so some of this is
> him hearing it clearly for the first time. That goes in *What I'm Doing on My Side*,
> not because it's generous, but because it's true and it'll cost you nothing.
>
> The migration goes in Intent. It's specific and real, which is the only kind of
> opening paragraph that works.
>
> Three documents below. **Only the middle one goes to him.**
>
> **Record (yours)** — four incidents with dates and sources, evidence marked strong,
> the April conversation logged as previously-raised-but-vague, the migration under
> counter-evidence, your missing definition-of-done under my contribution. Neutral
> throughout; nothing in it you'd mind him reading.
>
> **Send (the pre-read)** — Intent, Context, four examples, why it matters, five
> expectations under Follow-through / Rollout discipline / Communication, your side,
> next steps.
>
> **Meeting Notes (yours)** — opening line, the three points that must land, and
> prepped answers for the two you'll actually get: "that's not how the pricing thing
> went" and "why am I only hearing this now?" The second one is fair. Say so and move
> on — arguing it is how this becomes a bad conversation.
>
> Read the Send document's Examples as if you were him: which would you argue with? …
> Send it the day before, not an hour before. Want any of these saved, or chat only?

---

_Built by Teal — the whole career, not just the job search — https://tealhq.com_
