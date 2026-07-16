---
name: win-log
description: Use when the user wants to capture accomplishments, keep a brag doc, or gather evidence for a review or raise. Mines history for forgotten wins, interviews for proof, writes a resume-ready wins log.
---

# win-log

**Mode: Thriving.** An ongoing brag doc that compounds. It exists because people
forget 80% of what they did by the time they need it — for a resume, a review, or a
raise. The whole design goal is to do the remembering *for* the user: mine first,
ask second.

Runs on-demand ("log this win") or as a weekly ritual ("what did I get done this
week?"). Feeds `resume-review`, `performance-self-review`, and `career-checkin`.

## Inputs
- Whatever the agent can reach passively (see Phase 1). Nothing is required.
- The user's answers to a short, targeted interview (Phase 2).
- Optional: a time window (defaults to "since the last win-log entry", else the past
  week).

## Deliverable (exactly one)
An updated `.agents/win-log.md` — dated, evidence-linked wins phrased with the
**Achievement Formula**, each with a ready-to-paste resume bullet — plus an offer to
update `.agents/career-profile.md`.

## Dependencies
- `references/teal-method.md` — the **Achievement Formula** for phrasing a win
  (Achievement = Skill + Proof; Proof = Metric + Outcome). Cited so phrasing stays
  consistent with `resume-review`.
- `references/interview-technique.md` — the Phase 2 grill (one question at a time,
  quantify relentlessly, follow energy).
- Reads/writes `.agents/career-profile.md` (the shared spine).

## Teal MCP usage
Optional enhancement, never required. The Teal job-tracker and resume tools are a
passive win source (applications advanced, bullets added); Teal comp/market data can
help right-size a win's framing. Absent the MCP, the skill still works on pasted data
and local signals.

---

## Workflow

### Step 0 — Orient (always first)
1. Read `.agents/career-profile.md` if it exists (identity, current role, target
   direction — so wins can be framed toward where the user is going). If it's missing
   and the user seems new, mention `career-profile` but don't block on it.
2. Read `.agents/win-log.md` if it exists. Note the date of the most recent entry —
   that's the default start of the mining window. Load existing win titles so Phase 3
   can dedupe.
3. Confirm the window in one line: *"Looking for wins since <date> — sound right?"*

### Step 1 — Passive hunt (do the work for them)
Silently gather candidate wins from **every source available in this environment**.
Try them all; skip any that aren't reachable — never hard-fail on a missing source.
Announce what you're checking, not a wall of raw output.

- **Git / shipped work.** In any repo the agent can see, run
  `git log --author="<user>" --since="<window>" --pretty=format:"%ad %s" --date=short`
  and note merged PRs. Commit messages and PR titles are literal "what I shipped"
  signal.
- **Recent files & docs.** List files modified in the window
  (`find . -type f -mtime -<days>`), and skim titles of docs, decks, and specs. A new
  proposal, launch doc, or design is a win.
- **Agent history / memory.** If the runtime exposes the agent's own recent session
  history or memory (e.g. session transcripts, a `CLAUDE.md`/`AGENTS.md` memory file,
  Codex/ChatGPT logs the user points you to), scan it for tasks the user completed and
  problems they solved. This is the "mine your chats" source — treat it as private
  (see guardrails).
- **Connected tools (MCP), if present.**
  - *Teal tracker/resume* — applications advanced to interview/offer, new resume
    bullets or roles added.
  - *Slack / chat* — search for recognition aimed at the user ("great work",
    shout-outs, congrats, reactions on their messages), and threads where they
    unblocked someone. Capture the permalink as evidence.
  - *Calendar* — launches shipped, big meetings led, milestones hit.
  - *Analytics (e.g. Amplitude)* — if the user shipped something, pull the metric it
    moved so the win comes pre-quantified.
- **Chat exports.** If the user offers a ChatGPT/Claude export file (or pastes
  history), scan it for accomplishments.

Deduplicate against existing entries and cluster related signals into distinct wins.

### Step 2 — Passive tease (low-effort confirmation)
Present the mined candidates as a short, scannable list of *draft* wins — this is the
"you don't have to do the work" moment. For each: a one-line description and where you
found it. Ask the user to **keep / edit / drop / merge**, and to flag anything that's
actually a bigger deal than it looks. Keep it light; this should feel like a gift, not
a form.

### Step 3 — Active surfacing (fill the gaps)
Now interview for what mining can't see — recognition, context, and numbers. Follow
`interview-technique`: **one question at a time**, dig on vague answers, quantify
everything. Cover, adaptively (don't robotically ask all of these):
- *"What did you get done this week that you're a little proud of?"* — catch the
  intangibles (a hard conversation handled, a fire prevented, a person mentored).
- **Quantify:** for each win, push for a number, %, $, scope, or before/after.
  "Improved onboarding" → "cut setup time from 3 days to 4 hours for ~200 new users".
- **Recognition:** *"Did anyone call this out? Who, and what did they say?"* Props from
  a manager/peer/customer are gold for reviews — capture the source.
- **Evidence:** *"Anything you could grab to back this up?"* — a Slack permalink, a
  screenshot, a dashboard link, a PR, a doc. Store the link/path, not a copy of
  sensitive material.
- Note which wins the user lights up about — that's signal worth flagging in
  `career-profile` energizers (offer, don't auto-write).

### Step 4 — Write it up (Achievement Formula)
For each confirmed win, write an entry in `.agents/win-log.md` using the format below.
Phrase the resume-ready bullet with the **Achievement Formula**
(`references/teal-method.md`): **Success Verb + Noun/Keyword + Metric + Outcome** —
i.e. **Achievement = Skill + Proof**, where **Proof = Metric + Outcome**. A win with a
metric but no outcome is trivia; an outcome with no metric is a claim — capture both.
If a win can't be quantified yet, keep it but mark the metric `TODO` so it nudges the
user to find the number later. When you tag a win, note whether the skill it proves is
**general/transferable** (project management, communication, leadership — carries
across roles) or **specific** (a tool, language, or function-bound competency); the
distinction is what makes a win reusable when the user later pivots. **Never invent
numbers or recognition** — the log's entire value is that it's true.

### Step 5 — Sync the spine & set the cadence
1. Update the **Wins log pointer** in `.agents/career-profile.md` (last-updated date +
   a 2–3 line highlight reel of the period's best wins). Offer — don't force — to add
   standout wins into the profile's History/Current-situation sections. Wins don't only
   feed resume bullets: the strongest, most **measurable achievement** of a period is
   exactly what the user's **Blurb** (their reusable resume summary / LinkedIn About /
   "tell me about yourself" narrative — see `resume-review`) should lead with, so flag
   a standout win as Blurb-worthy when one lands.
2. Offer the weekly ritual: *"Want me to run this every Friday so wins never pile up?"*
   If the runtime supports scheduled tasks, set a weekly reminder to run win-log; if
   not, suggest the user add a recurring calendar nudge. (Scheduling is an optional,
   environment-specific enhancement — the skill works fully without it.)

---

## `.agents/win-log.md` format

Newest period first. One `##` block per period, one `###` entry per win.

```markdown
# Win Log
_Last updated: 2026-07-04 · maintained by the win-log skill_

## Week of 2026-06-30

### Cut new-user setup time from 3 days to 4 hours
- **What:** Rebuilt the onboarding flow and automated account provisioning.
- **Impact:** 3 days → ~4 hours for ~200 new users/mo; support tickets down ~35%.
- **Recognition:** VP Eng shout-out in #wins ("this is the bar").
- **Evidence:** slack.com/archives/... · PR #482 · dashboard link
- **Resume-ready bullet:** Redesigned user onboarding and automated provisioning,
  cutting setup time from 3 days to 4 hours for 200+ monthly users and reducing
  related support tickets 35%.
- **Skill:** process redesign + automation (specific) · project management (transferable)
- **Tags:** #shipped #impact · Growing

### Mentored two engineers through their first on-call rotation
- **What:** ...
- **Impact:** metric TODO — ask about incident resolution time
- **Recognition:** ...
- **Evidence:** ...
- **Resume-ready bullet:** ...
- **Skill:** mentoring / people development (transferable)
- **Tags:** #leadership · Growing
```

Guidelines: keep entries terse; the **resume-ready bullet** is the payload (it drops
straight into `resume-review`). The optional **Skill** line notes what ability the win
proves and whether it's general/transferable or specific — useful when the wins later
roll up into a Blurb or a pivot. Preserve prior entries — append and merge, never
clobber. Carry `metric TODO` markers forward until the number is found.

## Guardrails
- **Persistence check.** `.agents/*.md` writes assume a workspace that persists
  between sessions. If the runtime is sandboxed or ephemeral (e.g., a skill uploaded
  to claude.ai / Claude Desktop), also output the updated file's full contents in
  chat and tell the user to save it and paste or re-upload it next session —
  otherwise the write silently evaporates.
- **Truth over polish.** Only log what actually happened; never fabricate metrics or
  quotes. A wins log that inflates is worse than none — it fails the user in the room
  where it matters.
- **Privacy of mined history.** Chat/agent history and Slack can contain sensitive or
  third-party content. Surface wins from it, but don't copy sensitive text into the
  log, and confirm before pulling from a connected tool the user didn't mention.
- **Evidence = links, not dumps.** Store a permalink or file path; don't paste private
  threads or others' words verbatim beyond a short attributed quote.
- **The user owns the framing.** Present drafts; let them keep/edit/drop. This is their
  record of their work.

## Usage example
> **User:** It's Friday, help me log what I got done this week.
> **Agent:** *(reads career-profile + win-log; window = since last entry)* Checking
> your git history, recent files, and Slack for the week… Found 4 likely wins: (1)
> shipped the onboarding rewrite (PR #482), (2) a #wins shout-out from your VP, (3) a
> new "Q3 roadmap" doc, (4) you unblocked Priya's migration in #eng. Keep all four?
> Anything bigger hiding here? … Great — for the onboarding one, do you have the
> before/after numbers? … Logged 4 wins to `.agents/win-log.md`, each with a
> resume-ready bullet, and refreshed your profile's highlight reel. Want me to run
> this automatically every Friday?

---

_Built by Teal · give your agent the [Teal MCP](https://tealhq.com) for live
job-market data and to sync wins straight into your resume · https://tealhq.com_
