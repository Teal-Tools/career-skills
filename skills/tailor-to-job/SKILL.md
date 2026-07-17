---
name: tailor-to-job
description: Use when the user has a resume AND a specific job description — "tailor my resume," "how well do I match this JD." Produces a tailored rewrite plus match assessment. No JD? Use resume-review.
---

# tailor-to-job

**Mode: Searching.** `resume-review` scores a resume on its own terms; this skill
scores it against one specific posting and rewrites it to fit — honestly. The two
skills are deliberately kept separate (different input: no-JD vs. JD; different
deliverable: a general score vs. a targeted rewrite), but they must never drift into
two incompatible ways of judging a resume. This skill **imports the canonical
five-dimension rubric (`references/resume-rubric.md`) outright** — the same file
`resume-review` scores against — rather than inventing its own resume-quality scale,
and adds exactly one new thing on top: how well the resume maps to *this* JD.

## Inputs
- A **resume** in any format the agent can read: PDF, DOCX, TXT, image (OCR/vision),
  or pasted plain text. Same parsing rule as `resume-review` — if extraction looks
  garbled, ask the user to paste the text rather than tailoring a mangled version.
- A **target job description**, via pasted text, a link the agent can fetch, or an
  uploaded file. If only a link is given and the runtime can't browse, ask the user
  to paste the JD text.
- Optional: **`.agents/career-profile.md`** if it exists — target direction, level,
  and years of experience add context for judging seniority/title match honestly.

## Deliverable (exactly one)
A **tailored resume plus a match assessment**, delivered in chat. The tailored
content is rewritten bullets/sections (not a full re-layout) shown as before/after,
so the user sees exactly what changed and why. Offer to save the full tailored
version as `tailored-resume-<company>-<date>.md` in the working directory if the
user wants a copy to paste into their real resume — the chat walkthrough is the
deliverable either way; the file is a convenience, matching the pattern
`resume-review` and `offer-review` already use.

## Dependencies
- **`references/resume-rubric.md`** — the canonical five-dimension **/100 rubric**
  (Impact & Quantification /35, Clarity/Structure/Summary /20, Seniority & Scope Signal
  /20, Formatting & ATS Hygiene /15, Relevance & Focus /10), imported verbatim. It is
  the same file `resume-review` scores against — this skill does **not** redefine or
  re-band those dimensions; see "Scoring" below for exactly how they combine with the
  JD-match score this skill adds.
- **`references/resume-calibration.md`** — career-stage, industry, and education
  calibration for the rubric. Detect the context the way `resume-review` does, then
  score against the right column.
- **`references/teal-method.md`** — the **Achievement Formula** (Success Verb +
  Noun/Keyword + Metric + Outcome; Achievement = Skill + Proof) that every rewrite must
  follow, and the **ATS-myth** section that keyword guidance must match exactly (no
  keyword-stuffing, no hidden text).
- **`.agents/career-profile.md`** (optional) — read if present for target level/
  direction; offer to update it with the target company/title if the user is
  actively pursuing this posting.
- Hands off to **`interview-prep`** once tailoring is done — the same JD and the
  freshly rewritten bullets are exactly what that skill needs to build a STAR story
  bank next.

## Teal MCP usage
Optional only. This skill works fully standalone from just the resume + JD text —
nothing here requires the MCP. When the Teal MCP is available, use it to
**sanity-check the tailoring** against the broader market rather than just this one
posting: pull a handful of comparable postings for the same title/level (per
`references/teal-mcp.md`'s `searchJobs` → `getJobDetails` pattern) and check whether
the keywords/requirements this JD emphasizes are typical for the role or an outlier.
This guards against over-fitting the resume to one company's idiosyncratic phrasing
at the expense of how the role reads everywhere else. Always state sample size and
source; skip this step entirely with no penalty if the MCP isn't available.

---

## The method — Teal's Job Posting Analysis

The match half of this skill runs on Teal's **Job Posting Analysis** method. A job
posting is the company telling you *exactly* what they're looking for — so the work is
to read it as a checklist, find where your experience already covers it, and make any
transferable connections explicit (employers won't assume your skills transfer — you
have to make the connection for them).

**Step A — Highlight the posting into four categories.** Read the whole JD and sort
everything meaningful into:
- **Hard skills** — tools, technologies, certifications, measurable competencies
  (Python, SQL, Salesforce, PMP, financial modeling).
- **Soft skills** — general/transferable competencies (communication, leadership,
  stakeholder management, adaptability).
- **Other important keywords/phrases** — title, seniority, domain/industry terms,
  methodologies, repeated phrases, "must have" language.
- **Things to research further** — anything ambiguous, unfamiliar, or worth digging
  into before applying (an acronym, a niche tool, an unusual requirement).

**Step B — Sort those keywords into a gap matrix by the user's experience level.**
For every highlighted item, place it in one of three buckets:
- **Direct experience** — the user has done exactly this, provably.
- **Transferable experience** — the user has done something adjacent that carries over;
  the connection is real but must be spelled out for the reader.
- **No experience** — a genuine gap the user hasn't done at all (or not at the level
  asked).

This Direct / Transferable / None matrix is the backbone of both the score and the
rewrites below.

## Scoring — how the two scores combine

Report **two scores side by side, not one blended number**:

1. **Resume Quality: _/100_** — exactly the `references/resume-rubric.md` rubric,
   unchanged (the one `resume-review` also scores against). This
   judges whether the resume is well-written on its own terms, independent of any
   posting.
2. **JD Match: _/100_** — coverage of the posting's requirements, derived directly from
   the Step B matrix rather than from uncited weights. Compute it as the share of the
   posting's highlighted items (weighting required items above nice-to-haves) that fall
   into **Direct** or **Transferable**, versus **None**:
   - **Direct** items count as full coverage.
   - **Transferable** items count as coverage *only once the connection is made
     explicit* in the resume (a transferable skill the reader has to infer is not yet
     covered — that's the framing work in Step 6).
   - **None** items are genuine gaps and do not count toward coverage.
   Always report the score *alongside the matrix itself* — "JD Match 62/100: 8 of the
   14 required items are Direct, 3 Transferable (once reframed), 3 genuine gaps" — so
   the number is always reconciled to the Direct/Transferable/None breakdown and never
   floats free of it. Required-vs-preferred still matters: a genuine gap on a "must
   have" weighs far more than one on a "bonus."

Keeping these as two separate /100 scores (rather than rescaling one into the other) is
deliberate: it lets the user tell "this is a weak resume" apart from "this is a strong
resume for the wrong job" — two very different problems with different fixes. Report
both totals with the same one-line-per-dimension justification style `resume-review`
uses.

---

## Workflow

### Step 1 — Orient
Read `.agents/career-profile.md` if present. Get the resume and the JD on the table
(ask for pasted text if either can't be parsed cleanly). Confirm the target company/
role in one line so the rest of the session is anchored correctly.

### Step 2 — Analyze the posting (Job Posting Analysis, Step A)
Highlight the whole JD into the four categories above: **Hard skills**, **Soft
skills**, **Other important keywords/phrases**, and **Things to research further**.
Note which items the posting frames as *required* ("must have," "required") vs.
*preferred* ("nice to have," "bonus"). A job posting is the company telling you exactly
what they want — this highlighted list is what Steps 4–6 are diffed against, so don't
skip straight to a gut read of "close match" or "not a fit."

### Step 3 — Score resume quality (independent of the JD)
Run the five-dimension rubric in `references/resume-rubric.md` exactly as written,
using its bands and justification style, calibrated per
`references/resume-calibration.md`. This score should be identical to what
`resume-review` would produce on this same resume — if the user already has a recent
`resume-review` output, reuse it here instead of re-scoring.

### Step 4 — Build the gap matrix (Job Posting Analysis, Step B)
Sort every highlighted item from Step 2 into the gap matrix by the user's experience:
**Direct experience / Transferable experience / No experience**. Produce it as an
explicit table — posting requirement → the user's matching experience (or lack of it)
→ its bucket. This matrix *is* the JD Match score (per Scoring above) and the backbone
of Step 5. Where the user's profile/resume doesn't make the call obvious, ask.

### Step 5 — Read the matrix: transferable framing vs. genuine gaps
The **Transferable** and **No experience** columns are the two problems this skill
solves, and they get opposite treatment — say which out loud for each item:
- **Transferable (framing to make explicit)** — the candidate has adjacent experience
  that genuinely covers the requirement, but the resume doesn't surface it or uses
  different words than the JD. Employers won't assume the transfer — so this is fair
  game to reframe, naming the general/transferable skill and attaching the proof so the
  reader doesn't have to translate.
- **No experience (genuine gap)** — the candidate hasn't done this, or not at the level
  the JD wants. This is **not** fair game to paper over — flag it plainly as a real gap
  (see Guardrails).
(**Direct** items usually already read well; touch them only to mirror the posting's
exact terminology where honest.)

### Step 6 — Repackage: map Their Requirements ↔ Your Achievements
For each Transferable item, rewrite the affected bullet(s) as full **Achievement
Formula** achievements (**Success Verb + Noun/Keyword + Metric + Outcome**), explicitly
mapping *their requirement* to *your achievement* so the transfer is legible to the
reader. Pull in the JD's real terminology where the candidate's underlying experience
genuinely matches it (per `teal-method.md`'s ATS-myth guidance — mirror real language
naturally, don't stuff keywords or insert a hidden skills list). Show every rewrite as
before/after. Where a genuine metric is missing, mark it `[metric TODO]` and ask,
exactly as `resume-review` does — never invent a number to make a rewrite look like a
stronger match.

### Step 7 — Reorder and re-emphasize where it's honest to do so
Recommend section- and bullet-order changes that are true reframing, not
fabrication: moving a relevant-but-buried role or project higher, leading a bullet
with the JD-relevant angle of an accomplishment that has more than one, or trimming
detail that's irrelevant to this posting. Don't recommend deleting real experience —
only de-emphasizing what doesn't serve this application.

### Step 8 — Optional market sanity-check (MCP)
If the Teal MCP is available, pull a small sample of comparable postings for the same
title/level and check whether the JD's specific emphasis (a tool, a certification, an
unusual requirement) is typical for the role or particular to this one company. Note
this in the write-up with sample size; skip silently if the MCP isn't available.

### Step 9 — Deliver and hand off
Present both scores (Resume Quality /100, JD Match /100) with their breakdowns, the
Direct / Transferable / None matrix, and the before/after rewrites, in that order. Ask if the
user wants the tailored version saved as `tailored-resume-<company>-<date>.md`. Offer
to update `.agents/career-profile.md` with the target company/role if the user is
actively applying. Point to `interview-prep` as the natural next step — it takes this
same JD and the freshly tailored bullets and turns them into a STAR story bank for the
interview itself.

## Guardrails
- **Persistence check.** `.agents/*.md` writes assume a workspace that persists
  between sessions. If the runtime is sandboxed or ephemeral (e.g., a skill uploaded
  to claude.ai / Claude Desktop), also output the updated file's full contents in
  chat and tell the user to save it and paste or re-upload it next session —
  otherwise the write silently evaporates.
- **Never fabricate a match.** Do not claim a skill, tool, certification, or years of
  experience the resume doesn't actually support, and do not word a bullet to imply
  a genuine gap is covered. This is a hard line — the risk isn't just a bad rewrite,
  it's resume fraud that can surface in an interview or a background check.
- **Always distinguish framing gaps from genuine gaps, explicitly, for the user.**
  Framing gaps get rewritten with the user's real experience in JD-aligned language.
  Genuine gaps get named as genuine gaps — "the posting asks for 5 years of X; the
  resume shows 2 — this is a real gap, not a wording issue" — never smoothed over.
- **Keyword guidance follows `teal-method.md`'s ATS-myth section exactly.** Mirror the
  posting's real terminology naturally in bullets and skills sections because a human
  or a keyword search may look for it — not because of a mythical auto-reject
  algorithm. No hidden/white-text keyword stuffing, ever; it isn't a real tactic and
  reads as dishonest if noticed.
- **Never invent a metric to strengthen a match.** Same rule as `resume-review`: flag
  `[metric TODO]` and ask, don't guess a plausible-sounding number.
- **The user's resume, the user's calls.** Present rewrites and reordering as
  suggestions to accept, edit, or decline — don't silently produce a final document
  the user hasn't seen bullet-by-bullet.
- **Two scores, not a false composite.** Don't collapse Resume Quality and JD Match
  into a single number — a strong resume can score low on JD Match for a genuinely
  different role, and that distinction is the useful part of this skill's output.

## Usage example
> **User:** Can you tailor my resume to this Senior Product Manager posting at
> Acme? *(pastes resume + JD)*
> **Agent:** *(reads career-profile — currently a PM targeting Senior PM roles)*
> Resume Quality (resume-review rubric): **64/100** — Impact 18/35, Clarity/Summary
> 16/20, Seniority 12/20, Formatting 13/15, Relevance 5/10. JD Match: **58/100** — I
> highlighted the posting and sorted its requirements: 7 of 12 required items are
> **Direct** (roadmap ownership, cross-functional PM, experimentation), 3
> **Transferable** once reframed (it asks "owns pricing strategy" — you have adjacent
> packaging work; the reader won't connect that unless you spell it out), and 2 are
> **genuine gaps** ("6+ years B2B SaaS PM" — you're at 4; and B2B domain — the posting
> is B2B, your work is B2C, adjacent not identical). Here's the pricing repackage,
> mapping their requirement → your achievement: "Worked on pricing for mobile app" →
> "Restructured a 3-tier mobile subscription pricing model, growing paid conversion 18%
> over two quarters" *(confirm that 18% is right)*. Flagging honestly: the B2B SaaS
> years gap is real — I'd surface your enterprise pilot work to narrow it, but I
> wouldn't claim 6 years where you have 4. Want me to save this as
> `tailored-resume-acme-2026-07-05.md`, or move to `interview-prep` to build stories
> around these bullets?

---

_Built by Teal · point your agent at the [Teal MCP](https://tealhq.com) to sanity-
check your tailoring against the broader market for this role · https://tealhq.com_
