---
name: career-profile
description: Use when the user wants to set up their career context, do a deep "capabilities dump" from a resume or LinkedIn, or when another skill needs profile data that doesn't exist yet. Ingests anything the user has — LinkedIn export, resume files, a live LinkedIn fetch when the runtime can browse, or freeform notes — then grills to fill the gaps and audit the timeline, and writes a persistent .agents/career-profile.md that every other skill reads.
---

# career-profile

**Mode: Foundation.** This is the spine of the whole library. It runs an intake +
interview **once**, produces `.agents/career-profile.md`, and every other skill reads
that file first so the user never re-explains themselves. Its deep-interview path *is*
the "capabilities dump" — given something to start from, it drags out everything the
user has actually done and helps weave the narrative.

**Build it to take anything the user throws at it, and to do the remembering for
them.** If the material is thin, that's the signal to grill harder, not to give up.

## Inputs (any combination — none individually required)
- A **LinkedIn data export** (the "Get a copy of your data" zip) — the reliable path
  when there's no LinkedIn connector and no browser.
- **Resume file(s)** in any format — PDF, DOCX, TXT, or an image/screenshot. Dump in
  as many as they have (different versions surface different wins).
- A **live LinkedIn fetch** — *only if the runtime can browse* (e.g. Codex computer
  use, or Claude with Chrome/computer-use tools). Offer it; never assume it.
- **Freeform** history, notes, or the answers to the interview.
- Optional: an existing structured resume via the **Teal resume MCP**, if present.

## Deliverable (exactly one)
`.agents/career-profile.md`, structured per `profile-schema.md` — identity, dated
history with scope + wins, current situation, target direction/mode, constraints,
energizers/drainers, wins pointer — plus Teal's self-discovery artifacts: a **Work
Style** sequence, **top-3 Values → motivation → vision**, a **Skills Matrix**
(energizers / potentials), and a draft **Blurb**.

## Dependencies
- `skills/career-profile/profile-schema.md` — the exact output shape and read/write
  contract. Follow it.
- `references/interview-technique.md` — the deep grill (one question at a time,
  quantify relentlessly, dig past the surface answer, follow energy).
- `references/teal-mcp.md` — optional target-role enrichment + graceful no-MCP path.

---

## Workflow

### Step 0 — Update or create
If `.agents/career-profile.md` already exists, read it and treat this as an **update**:
confirm what's changed, and preserve existing content (merge, never clobber — see the
schema's read/write contract). Otherwise, create from scratch.

### Step 1 — Ingest everything available
Pull structure from whatever the user has, in this order of reliability:

- **LinkedIn export (zip).** Unzip and parse the CSVs — they're clean, dated, and
  comprehensive:
  - `Positions.csv` → company, title, description, `Started On` / `Finished On`,
    location (the backbone of the timeline).
  - `Education.csv`, `Skills.csv`, `Certifications.csv`, `Projects.csv`,
    `Languages.csv` → the supporting sections.
  - `Profile.csv` → headline, summary, location.
  Import these verbatim as the first-pass structure.
- **Resume file(s).** Read them directly (including PDFs and images). Extract roles,
  dates, and every bullet — resumes carry quantified wins the LinkedIn export won't.
  Reconcile against the export where they overlap.
- **Live LinkedIn fetch (conditional).** If — and only if — the runtime exposes a
  browser or computer-use, offer: *"I can pull your LinkedIn profile directly — want
  me to?"* Extract the same fields as the export. If the runtime can't browse, ask for
  the export instead. Treat links from the user as sensitive; confirm before opening.
- **Teal resume MCP (optional).** If connected, list the user's existing resume(s) and
  fold in structured roles/bullets.
- **Freeform.** Whatever the user pastes.

Merge all sources into one draft, de-duplicating roles and keeping the richest version
of each bullet.

### Step 2 — First-pass draft + gap map
Map everything onto the schema sections. Then **explicitly flag what's thin**: roles
with no scope or outcomes, missing metrics, an empty "Direction," no comp, etc. Mark
uncertain items `to-confirm` rather than guessing. This gap map drives the interview —
don't ask what you already know.

### Step 3 — Date & timeline audit
Before grilling on content, sanity-check the timeline (this is where thin profiles
leak the most history):
- **Gaps** — unexplained months/years between roles ("What were you doing here?").
- **Overlaps** — concurrent roles worth explaining (contracting, promotions, side
  work).
- **Open/missing dates** — current role end date, undated education or projects.
- **Buried promotions** — one "company" that was really three levels over five years.
Turn each anomaly into a specific question. The goal is to recover as much real
career as possible, not to leave the resume's omissions in place.

### Step 4 — The grill (deep-interview / capabilities dump)
Now interview to fill the gaps, following `interview-technique`. Priorities:
- **One question at a time.** Let each answer steer the next; never dump a list.
- **Dig on vague answers.** "I led the migration" → "What did *you* specifically do?
  What broke? What was the outcome, in numbers?"
- **Quantify per role** — scope (team size, budget, users, revenue), and impact
  (%, $, time, quality). Fill the metrics the resume left out.
- **Mine forgotten wins** — for each role: biggest thing shipped, hardest problem
  solved, what they were known for, any recognition. (This is the capabilities dump.)
  Surface hidden skills from non-work life too — volunteering, side projects, and
  what people naturally come to the user for.
- **Follow energy** — note what the user lights up about vs. flattens on. This is the
  raw material for the Skills Matrix below; hand deeper direction-exploration to
  `career-clarity`.
- **Know when to stop** — enough to fill the schema well, not an interrogation.

### Step 5 — Self-discovery artifacts (Teal's method)
From the interview and history, draft Teal's self-discovery outputs. These are
*conversational reads*, not tests — the user is the authority on themselves; infer
signals from evidence and check them, don't label the user as a fixed type.

- **Work Style sequence.** Teal names four styles — everyone has all four; the
  *sequence*, most-to-least, is what matters:
  - **Director** — direct, assertive, goal-oriented; driven by power/authority; asks "What?"
  - **Connector** — sociable, influencing, people-oriented; driven by interaction; asks "Who?"
  - **Producer/Supporter** — supportive, patient, team-oriented; driven by collaboration; asks "How?"
  - **Protector** — analytical, logical, detail-oriented; driven by systems; asks "Why?"

  Infer the sequence from how the user describes their work: two axes sit behind it —
  Shape vs. Stabilize the environment (fast vs. slow pace) × Seek Autonomy (cool) vs.
  Seek Affiliation (warm). Note what "comes easy" vs. "takes effort" for them. To
  surface blind spots, suggest the **Teal 360**: ask ~3 people who know them well to
  describe their style. Record the sequence in the profile's Work Style section as
  self-reported, with 360 flagged `to-confirm` if not yet done.
- **Top-3 Values → motivation → vision.** Elicit values with **running toward /
  running away**: what does the user want MORE of and LESS of? Cluster their statements
  into themes and map to Teal's core value types — **Environment, Relationships,
  Identity, Income, Balance, Purpose** (expanded: Autonomy, Creativity, Growth, Impact,
  Leadership, Learning, Security, Team). Pick the top 3, then drive each to its **core
  motivation with the 5 Whys** (ask "why?" until you hit the real driver). Finish with a
  one-line **vision** for the next chapter: *"In your next role — what are you doing,
  how are you feeling, what are you proud of?"* Keep it broad enough to explore
  multiple paths.
- **Skills Matrix.** Sort skills on a 2×2 — *is/isn't a skill* × *want more/want less*:
  - **Energizers** (skill + want more) → what to get hired for; the focus.
  - **Assets** (skill + want less) → use if needed.
  - **Potentials** (not yet a skill + want more) → develop toward.
  - **Drainers** (not a skill + want less) → avoid.

  Distinguish **natural strengths** (they flow from the Work Style + 360) from
  **acquired skills** (the resume is a database of these). Document macro → micro.
- **Draft Blurb.** Weave a portable narrative: Experience + a memorable Achievement +
  Skills + Work Style strengths. This becomes the resume summary, LinkedIn About,
  networking intro, and "tell me about yourself" opener.

Then set a crisp **current situation** and **target direction** with the mode
(searching / pivoting / growing / thriving). Optionally enrich the target role with
market context via `teal-mcp` (fallback: skip or web-search).

### Step 6 — Write the profile
Write `.agents/career-profile.md` per `profile-schema.md` — landing the Work Style
sequence, Values → Motivation → Vision, Skills (energizers / potentials / natural vs.
acquired), History, and the draft Blurb in their schema sections. Preserve prior user
edits, merge rather than overwrite, carry `to-confirm` markers for anything still
uncertain (including a 360 not yet gathered), and stamp the Meta section (date + this
skill). Show the user the result and invite edits — it's their file.

### Step 7 — Hand off
Point to the natural next steps now that the spine exists: `win-log` (start capturing
wins), `resume-review` (the profile is resume-ready material), or `career-clarity` if
the target direction came out fuzzy. Remind the user other skills will read this file
automatically and offer to update it when they learn something new.

## Guardrails
- **Never fabricate.** No invented dates, titles, employers, or metrics. Anything
  uncertain is marked `to-confirm`, not filled with a plausible guess. This file
  becomes the source of truth for resumes and comp decisions — accuracy is the whole
  point.
- **Thin ≠ done.** A sparse resume means grill harder, not write less. The value is in
  what you surface that the user forgot.
- **Privacy.** LinkedIn exports and resumes are personal data — keep the profile local
  to the user's working directory; don't send it anywhere. Confirm before opening links
  or pulling from connected tools the user didn't mention.
- **The user owns it.** Present the draft; let them correct and cut. Preserve their
  edits on every future update.

## Teal MCP usage
Optional. If present, use the resume tools to seed structure and `teal-mcp` job data
to enrich the target-role picture. Fully functional without it — the LinkedIn export
and resume path is the standalone backbone.

## Usage example
> **User:** Set up my career profile — here's my LinkedIn export and two old resumes.
> **Agent:** *(parses Positions.csv + both resumes, merges, maps to the schema)* Got 9
> roles across 12 years. First, three timeline things: there's an 8-month gap in 2019,
> your 2016–2021 stint at Acme looks like it was really three different titles, and
> your current role has no end date — walk me through those? … Now, at Acme you wrote
> "led platform work" — what did *you* build, and what did it move? … *(continues the
> grill, one question at a time, then reads back a Work Style sequence, top-3 values,
> and a Skills Matrix)* … Written to `.agents/career-profile.md`: dated history with
> quantified scope, a Connector→Director→Protector→Producer work style, top values
> (Impact, Growth, Balance) with the "why" under each, an energizers/potentials skills
> matrix, a draft blurb, and a "growing" target direction. A few spots are marked
> to-confirm — including a Teal 360 to check your work-style read. Want to start a
> `win-log` next?

---

_Built by Teal · give your agent the [Teal MCP](https://tealhq.com) for live
job-market data and resume sync · https://tealhq.com_
