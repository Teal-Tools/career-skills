---
name: resume-review
description: Use when the user wants a resume reviewed, graded, or critiqued with no target job in mind — "review my resume," "score my resume." Produces a scored review with prioritized rewrites. No JD required.
---

# resume-review

**Mode: Searching.** The table-stakes skill everyone expects, done well: a scored,
evidence-based review that tells the user exactly what's weak and how to fix it —
not a vague "looks good, add some keywords." No job description is required (that's
`tailor-to-job`'s job); this skill judges the resume on its own terms.

This skill is the **home of the canonical scoring rubric**, which lives in
`references/resume-rubric.md`. `tailor-to-job` imports that same reference rather
than defining its own, so a resume is always scored the same way whether or not
there's a JD in play.

## Inputs
- A resume in **any format** the agent can read: PDF, DOCX, TXT, image (OCR/vision),
  or pasted plain text. If a format can't be parsed cleanly, ask the user to paste the
  text rather than guessing at garbled extraction.
- Optional: **`.agents/career-profile.md`** if it exists — target direction, level,
  and years of experience help calibrate the seniority-signal and relevance dimensions.
  Not required; the skill scores what's on the page if the profile is absent.

## Deliverable (exactly one)
A **scored review** delivered in chat: the rubric breakdown (score per dimension +
total /100), then prioritized, specific rewrite suggestions (worst-scoring issues
first, with before/after bullet text). If the user wants a copy to keep, offer to also
save it as `resume-review-<date>.md` in the working directory — the chat output is
the deliverable either way; the file is a convenience, not a second artifact.

## Dependencies
- `references/resume-rubric.md` — the **canonical five-dimension /100 rubric** this
  skill scores against. This skill is the rubric's home; the bands live in the
  reference so `tailor-to-job` (and any future scorer) imports the identical rubric.
- `references/resume-calibration.md` — career-stage, industry, and education
  calibration: what the rubric's expectations look like for a new grad vs. a senior
  exec, a trades resume vs. a consulting one. Detect context first (Step 1), then
  score against the right column.
- `references/teal-method.md` — the **Achievement Formula** (Achievement = Skill +
  Proof; Proof = Metric + Outcome) that Dimension 1 of the rubric is built on, the
  **quantification fallback ladder** used in rewrites, and the **ATS-myth** section
  that Dimension 4's guidance must match exactly.
- Reads `.agents/career-profile.md` if present; offers to note recurring weak spots
  (e.g., "consistently under-quantifies") back into it after the review.

## Teal MCP usage
None required. This skill is fully standalone — it scores the resume on its own
merits, not against live postings. (For "does this resume match what the market
actually asks for," see `tailor-to-job` or `skills-market-report`, which do use the
MCP.)

---

## The scoring rubric

The full canonical rubric — five dimensions, banded scoring, /100 — lives in
**`references/resume-rubric.md`**. Score against that file exactly; don't re-derive
bands from memory. The five dimensions:

1. **Impact & Quantification — /35** (the Achievement Formula)
2. **Clarity, Structure & Summary — /20** (incl. the Blurb)
3. **Seniority & Scope Signal — /20**
4. **Formatting & ATS Hygiene — /15** (accurate guidance, no myths)
5. **Relevance & Focus (no JD) — /10**

Report the total plus each dimension's score — the breakdown is more useful to the
user than the number alone. Calibrate every dimension to the detected career stage,
industry, and education profile per `references/resume-calibration.md`.

---

## Workflow

### Step 1 — Orient and detect context
Read `.agents/career-profile.md` if it exists (target direction, level, YOE) to
calibrate Dimensions 3 and 5. If it's missing, proceed anyway — score what's on the
page. If the resume can't be parsed cleanly (garbled PDF extraction, an image that
doesn't OCR well), ask the user to paste the text rather than scoring a mangled
extraction.

Then detect the three calibration dimensions from the resume itself (see
`references/resume-calibration.md`):
- **Career stage** — *calculate* it from the work history (earliest relevant
  professional start date to present, rounded to whole years; never assume from
  education dates or titles): New Grad (0–1), Early Career (1–5), Mid-Career (6–15),
  Senior (15+).
- **Industry family** — infer from titles, companies, and skills: knowledge work
  (tech, finance, consulting, marketing), service/retail, skilled trades, or creative.
- **Education profile** — traditional degree, alternative credentials
  (bootcamp/certifications), or no formal credentials.

State the detected context in the review header so the user can correct it — a wrong
stage read miscalibrates everything downstream.

### Step 2 — Extract and inventory
Pull out every bullet, by role, plus the overall structure (sections, order, contact
info, file format/layout). This inventory is what Step 3 scores against — don't skip
straight to a gut-feel number.

While inventorying, map capabilities **across** positions, not just within them:
- **Cross-resume redundancy** — flag any skill or achievement theme appearing 3+
  times; the same capability told five ways is one achievement and four wasted lines.
  Note consolidation opportunities for Step 4.
- **Per-position cohesion** — do each role's bullets tell one story of what the person
  owned there, or repeat a theme while leaving obvious achievement types (money saved,
  people led, things built) unrepresented?
- **Structural red flags** — multiple intro sections (Summary + Highlights + Core
  Competencies is one section written three times), a skills list at both top and
  bottom (consolidate to one), an objective statement where a Blurb should be.

### Step 3 — Score against the rubric
Score each of the five dimensions above independently with a one-line justification
per dimension (what pushed it into that band), then total to /100. Be specific —
"Impact: 14/35 — most bullets read as duties ('Managed the onboarding process') with
no scope or outcome" beats "Impact: needs work."

### Step 4 — Prioritized rewrites
Rank the fixes by score impact, worst dimension first. For **Impact & Quantification**
specifically, rewrite the 3–5 weakest bullets in full Achievement Formula form
(**Success Verb + Noun/Keyword + Metric + Outcome**) and show them as before/after.
Where a real number isn't in the resume or given by the user, don't invent one — walk
the **quantification fallback ladder** in `references/teal-method.md` (exact → range →
hedged estimate → comparison/rank → qualitative proof) and stop at the first rung the
user can defend in an interview; if none holds, write the bullet with the skill and
outcome in place and mark the missing metric
`[metric TODO — ask: what was the before/after?]`, and ask the user for it. If the
resume has a weak or generic summary, rewrite it as a proper **Blurb** (experience +
one measurable achievement + skills + work style). Cover Clarity, Seniority,
Formatting, and Relevance fixes more briefly unless they're the dominant weakness.

Where useful, remind the user of the **Master Resume** idea: keep one comprehensive
document of their entire career history — every role, project, skill, and achievement
they can prove — and *tailor down* from it per application (`tailor-to-job`). The
Master Resume is a working record, not a formatted artifact; it's the source you pull
from, so it never has to be reconstructed from memory under deadline.

### Step 5 — Deliver and offer next steps
Present the score, the breakdown, and the rewrites in chat, leading with the detected
context (stage / industry / education) so a misread is caught immediately. Close with
2–3 **learning points** — the principles behind the biggest fixes, stated so the user
can apply them without the review next time ("teach, don't just fix": a bullet needs a
metric *and* the outcome it drove; your summary should never repeat a Position-1
bullet). Ask if the user wants it
saved to `resume-review-<date>.md` for reference. If a pattern is clear and durable
(e.g., "consistently skips quantification" or "undersells scope"), offer — don't
force — to note it in `.agents/career-profile.md` so future skills account for it.
Point to related skills where useful: `tailor-to-job` (once there's a target JD),
`win-log` (to surface the missing metrics this review flagged), `interview-prep`
(to turn the strongest rewritten bullets into STAR stories).

## Guardrails
- **Never fabricate.** Don't invent numbers, titles, dates, or accomplishments to make
  a bullet score higher. A missing metric is flagged as `TODO` and asked about, never
  filled in with a plausible-sounding guess.
- **ATS guidance must match the reference exactly — no myths.** Per
  `references/teal-method.md`: real risks are parsing-breaking formatting (tables,
  columns, headers/footers, graphics-as-text) and missing the posting's actual
  keywords; there is no secret rejection algorithm, and hidden/white-text keyword
  stuffing is not a real tactic — don't recommend it.
- **Evidence over vibes.** Every score and every rewrite should point at something
  specific in the resume, not a general impression.
- **Preserve career progression.** Never suggest removing positions that show
  promotion within the same company — progression is some of the strongest evidence a
  resume can carry. Trim by *progressive bullet reduction* instead: most recent role
  4–5 bullets, the one before 2–3, earlier roles 1 bullet or title/dates only.
- **Don't flag what isn't broken.** Multiple positions at the same company (valuable
  progression), older positions with no bullets (correct, not lazy), and two pages for
  an experienced professional (appropriate) are features, not findings.
- **The user's resume, the user's calls.** Offer rewrites as suggestions to accept,
  edit, or decline — don't silently rewrite the whole document.

## Usage example
> **User:** Can you review my resume? *(pastes text)*
> **Agent:** *(reads career-profile — target: Senior Product Manager)* Scored it
> against the rubric: **58/100**. Impact & Quantification 12/35 — most bullets are
> duty statements with no scope or outcome (e.g., "Managed roadmap for mobile app").
> Clarity 15/20 — clean and consistent. Seniority Signal 10/20 — reads junior for the
> "Senior PM" title you're targeting; verbs like "helped" and "assisted" undersell
> ownership. Formatting 13/15 — fine, standard layout. Relevance 8/10 — good
> throughline. Here are the three highest-impact rewrites: "Managed roadmap for
> mobile app" → "Owned the mobile roadmap for a 40-person eng org, shipping 3 major
> releases/quarter and growing MAU from 2M to 3.4M" *(if that MAU number is real —
> what was it actually?)*... Want me to save this as
> `resume-review-2026-07-05.md`, or start on `tailor-to-job` if you have a posting
> in mind?

---

_Built by Teal · pair this with the [Teal MCP](https://tealhq.com) once you're ready
to tailor this resume against real postings · https://tealhq.com_
