---
name: interview-prep
description: Use when the user has an interview coming up — "help me prep," "what will they ask," "build a story bank." Takes a resume + target JD; produces likely questions and an evidence-backed STAR story bank.
---

# interview-prep

**Mode: Searching.** By the time someone has a resume tailored to a posting, the
next failure mode isn't "wrong resume" — it's walking into the room with generic
answers, or freezing on the exact gap the JD quietly flagged. This skill turns a
resume + JD into a set of likely questions and a **STAR story bank** built from the
user's *real* history, with the honest answer to their weakest spots prepped in
advance rather than discovered live in the interview.

It picks up naturally where `tailor-to-job` leaves off: that skill already parsed
the JD into required/preferred qualifications and scored genuine vs. framing gaps —
exactly the material an interviewer is most likely to probe. When that output
exists, this skill reuses it instead of re-deriving it. When it doesn't, this skill
works standalone from a resume + JD alone.

## Teal's interview method

The prep is grounded in how Teal thinks about interviewing. Two ideas anchor
everything below.

**The 5 stages of the hiring process.** An interview isn't one event — it's a
sequence, and each stage has its own goal. Prep for the *stage the user is actually
in*, not a generic "interview":

1. **Scheduling** — make the right first impression (responsiveness, logistics,
   tone before you've said a word about the job).
2. **Screening** — prove you're qualified (usually a recruiter or phone screen;
   clear the bar, don't oversell).
3. **Vetting** — show you're the *best* candidate (the competitive middle rounds).
4. **Assessing** — demonstrate *how* you'd do the job (case, panel, take-home, or
   working session).
5. **Signing off** — final approval (fit and confidence for the final decision-maker).

The overarching goal at every stage is the same: **build enough trust to advance to
the next stage.** Prep is about earning the next conversation, not winning the whole
thing in one answer.

**Know the hiring team's roles.** Different people in the loop want different things:
- **Recruiter (HR)** — measured on speed and pipeline; wants a qualified, low-friction
  candidate who won't stall the process.
- **Hiring Manager** — the person the user would report to; wants proof the user can
  do the job and be good to work with.
- **Final Approver** — a skip-level or cross-functional leader doing a fit check;
  wants confidence, not a deep skills re-test.

## Inputs
- A **resume** and the **target job description** (pasted text, file, or link the
  agent can fetch). Same parsing rule as `tailor-to-job` — ask for pasted text if
  extraction looks garbled rather than prepping against a mangled read.
- **Company name**, if known — sharpens the likely-questions list and unlocks the
  optional research step.
- Optional, and preferred when present:
  - **A `tailor-to-job` output** for this same JD — either a saved
    `tailored-resume-<company>-<date>.md` file or the match assessment from that
    session (Required/Preferred Qualifications Covered, and the genuine-vs-framing
    gap list). If found, use it directly rather than re-parsing the JD from scratch.
  - **`.agents/win-log.md`** — a rich source of pre-evidenced stories. A win-log
    entry's What/Impact/Evidence already maps onto STAR's Situation/Task/Action/
    Result, so check it before asking the user to reconstruct stories from memory.
  - **`.agents/career-profile.md`** — history, target direction, and level, for
    context on which stories fit the seniority this interview is testing for.

## Deliverable (exactly one)
An **interview prep document**: likely questions mapped to the competencies they
test, a STAR story bank built from real evidence, and a short set of company/role
prep notes. Walked through in chat as the deliverable; offer to save it as
`interview-prep-<company>-<date>.md` in the working directory for the user to
review before the interview — matching the file-optional pattern the other
Searching skills use.

## Dependencies
- **`references/interview-technique.md`** — specifically its **"Interview-prep"**
  branch pattern: build credible stories, not generic answers; ask "which story
  best proves this competency"; ladder through Situation/Task/Action/Result/lesson;
  ask "where might an interviewer poke holes"; produce an interview-length spoken
  version; stop once the likely competencies are covered with evidence-backed
  answers. This skill does not invent a different interview method — it applies
  this one.
- **`tailor-to-job` output** (optional) — reuses its parsed JD requirements and,
  critically, its **genuine-vs-framing gap classification** so this skill doesn't
  re-litigate that judgment call.
- **`.agents/win-log.md`** (optional) — the preferred raw material for stories,
  since entries are already evidenced (What/Impact/Evidence/resume bullet).
- **`.agents/career-profile.md`** (optional) — history and target level for context.

## Teal MCP usage
Optional only. This skill is fully standalone from resume + JD text. When the Teal
MCP is available, use `research` (Exa-backed) to pull factual company/role context —
size, stage, funding, recent public news, product area — to sharpen the prep notes
and the likely-questions list (e.g., a recent layoff or pivot is fair game to ask
about; an unconfirmed rumor is not). See `references/teal-mcp.md`. Skip this step
silently with no penalty if the MCP isn't available or the company isn't identifiable
online — never substitute speculation for it.

---

## Workflow

### Step 1 — Orient
Read `.agents/career-profile.md` and `.agents/win-log.md` if present. Look for an
existing `tailor-to-job` output for this JD (a `tailored-resume-<company>-<date>.md`
file, or ask the user if they ran that skill and have the match assessment handy).
If none exists, get the resume and JD directly and proceed standalone — this skill
must not block on `tailor-to-job` having been run first. Confirm the company/role
and interview stage in one line, mapped to Teal's **5 stages** (Scheduling,
Screening, Vetting, Assessing, Signing Off) and who the user is meeting (recruiter,
hiring manager, or final approver). The stage and the interviewer's role shape how
many questions to prep, at what depth, and toward whose goal — a recruiter screen and
a hiring-manager panel want different things.

### Step 2 — Derive the competency list (the Interview Prep Formula)
Use Teal's **Interview Prep Formula: Resume + Job Posting + Employer = Prepared.**
The three inputs each generate questions: the resume tells you what they'll probe in
*your* history, the job posting tells you what they need proof of, and the employer
tells you the context and priorities behind the ask.

If a `tailor-to-job` match assessment exists, reuse its parsed **required
qualifications**, **preferred qualifications**, and **core responsibilities**
directly rather than re-parsing the JD. If it doesn't, parse the JD yourself into
the same structure (required quals, preferred quals, responsibilities, repeated
keywords). Then apply the formula's core move: **turn each JD line into a likely
question** — "Tell me about your experience with…" or "Give me an example of when
you…" — so the question bank is visibly derived from the posting, not generic.
Translate this list plus the role/company type into the **competencies** a real
interview loop is likely to test — e.g. ownership, cross-functional influence,
handling ambiguity, a failure/lesson-learned question, conflict, scope and impact,
plus anything the JD explicitly foregrounds (a specific technical skill, a domain, a
leadership scope). List the likely questions against each competency, not as a
generic bank but visibly derived from *this* JD.

### Step 3 — Surface and prioritize the gaps
This is the differentiator — don't skip it. If a `tailor-to-job` gap list exists,
pull out every **genuine gap** it flagged (real, unmet or under-level requirements)
and every **framing gap** (real experience, just not surfaced in JD language). These
are exactly what a sharp interviewer probes, so they get prepped *first*, not left
to chance:
- For each **genuine gap**, prep an honest answer: what adjacent experience bridges
  it, what the user has done to start closing it (a course, a side project, scoped
  exposure), and how to say "I haven't done exactly this, but here's the closest
  thing and here's how I'd ramp" without overclaiming. Never write an answer that
  implies the gap doesn't exist.
- For each **framing gap**, make sure the story bank (Step 5) includes the story
  that actually demonstrates the underlying experience in the interviewer's terms.
If no `tailor-to-job` output exists, do a lighter version of this pass yourself from
the raw JD: name the one or two spots where the resume looks thinnest against what's
required, and treat those as priority prep, same as above.

### Step 4 — Mine win-log for story raw material
Check `.agents/win-log.md` for entries that map to the Step 2 competencies. A
win-log entry's **What → Situation/Task**, **Impact → Result**, and **Evidence** are
already most of a STAR answer — reuse them rather than asking the user to
reconstruct from memory. Also scan the resume itself (and the tailored bullets from
`tailor-to-job`, if available) for bullets that imply a strong but unwritten story.
Note which competencies now have a real candidate story and which are still open.

### Step 5 — Fill the gaps via interview
For any competency without a solid story from Step 4, run
`references/interview-technique.md`'s **Interview-prep branch**, one question at a
time: "Which story best proves this competency?" → the STAR ladder (situation,
task, action, result, lesson) → "Where might an interviewer poke holes?" → "What
version is short enough for a live interview?" Dig on vague answers exactly as the
reference specifies — don't accept "I led the project" without who, what broke, and
what changed. Stop per the reference's stop condition: once the likely competencies
are covered with evidence-backed STAR answers, not before and not past it.

### Step 6 — Write each story bank entry (STAR and CAR)
Teal teaches two structures for answering behavioral questions. Build each story in
**STAR** — **Situation / Task / Action / Result** — as the full reconstruction, then
tighten it into **CAR** — **Context / Action / Result** — for the spoken version. CAR
is Teal's preferred, tighter form: it drops straight to the setting, what the user
did, and what happened, so the answer lands in the time an interviewer actually gives.
Keep the STAR version as the source of truth (it captures the Task/stakes for
follow-ups) and lead the live answer with CAR.

For every story — sourced from win-log, resume, or the Step 5 interview — write:
- **Situation / Task / Action / Result**, with the Result quantified wherever the
  user can confirm a real number (the same Metric + Outcome proof that
  `teal-method.md`'s Achievement Formula uses for resume bullets — one line, don't
  re-explain the framework here).
- **The CAR spoken version** — the tightened Context / Action / Result cut, the
  30–90 second version tuned for how it actually needs to sound out loud, not the
  full STAR reconstruction used to build it.
- **Where an interviewer might poke holes** — the honest weak point or likely
  follow-up, so the user isn't caught flat-footed.
- Which **competency/question** it answers, so the mapping from Step 2 is explicit.

### Step 7 — The Blurb, styling the interviewer, and the thank-you
Three Teal moves that bracket the actual answers:

**Open with the Blurb.** For "tell me about yourself," don't wing it — use the user's
**Blurb** (their short, reusable professional summary from `career-profile`, if
present; draft one here if not). It should land in ~30 seconds: who they are, what
they're known for, and why this role. This is the first-impression answer that sets
the frame for everything after.

**Style the interviewer.** Empathy is a skill here — infer the interviewer's **Work
Style** from how they run the conversation and adapt to it. Teal's four styles:
- **Style 1 — Director:** be direct, fast, results-first. Get to the outcome.
- **Style 2 — Connector:** be warm, enthusiastic, personable. Rapport matters to them.
- **Style 3 — Producer:** show you're easy to work with — collaborative, low-ego,
  a good teammate.
- **Style 4 — Protector:** bring data, detail, and proof. They want rigor and
  evidence, not vibes.
If the user knows the interviewer's role (recruiter vs. hiring manager) or has a read
on their style, note which style to lean into per person. Don't fabricate a style
from nothing — offer it as an adaptive lens, not a fixed profile.

**Prep the thank-you.** End every stage with a **thank-you** that is specific (name
one real thing from the conversation), timely (same day), and typo-free. This is part
of building trust to advance to the next stage — draft a short template the user can
personalize after the interview.

### Step 8 — Company/role prep notes (optional)
If the company is known and the Teal MCP (or browsing) is available, use `research`
to pull factual context — size, stage, recent product/news, funding — worth knowing
walking in. Cite it plainly as researched fact, not insider knowledge or guesswork.
If no source is available, skip this section rather than filling it with generic
or speculative filler.

### Step 9 — Assemble and deliver
Present, in order: the Blurb, likely questions by competency, the STAR/CAR story bank
(gap-driven stories called out first), styling notes, the prep notes, and a
thank-you template. Ask if the user wants it saved as
`interview-prep-<company>-<date>.md`. Offer to log any new story surfaced here back
into `.agents/win-log.md` so it's captured for future use, and note in
`.agents/career-profile.md` (with permission) that this interview is in motion if
the profile tracks active pursuits.

## Guardrails
- **Never fabricate a story or a number.** Every STAR entry must come from
  something the user actually confirmed happened — mined from win-log/resume or
  surfaced live in Step 5. Do not invent a plausible-sounding outcome to round out
  a weak story.
- **If a competency has no real story, say so plainly.** Don't manufacture one to
  fill the bank. Tell the user directly: "there's no strong story for X yet — here's
  the closest thing, and it's not a full match" so they walk in knowing where
  they're exposed rather than discovering it live.
- **Gaps get named, not smoothed over.** Genuine gaps from `tailor-to-job` (or
  found fresh) get an honest bridging answer, never a rewritten story that implies
  the gap doesn't exist.
- **Company research must be factual and sourced, never speculative.** No "insider"
  claims, no guessing at culture or interviewer intent from vibes. If it can't be
  sourced, leave it out.
- **The user owns every story.** Present drafts of STAR entries and the spoken
  version; let the user edit, tighten, or reject before treating anything as final.

## Usage example
> **User:** I have a Staff PM interview at Acme on Thursday — help me prep. *(has
> already run tailor-to-job on this JD last week)*
> **Agent:** *(reads career-profile, win-log, and finds
> `tailored-resume-acme-2026-06-28.md` with a match assessment)* Reusing your JD
> Match breakdown: two flagged gaps — "6+ years B2B SaaS PM" (genuine, you're at 4)
> and "owns pricing strategy" (framing — you have adjacent packaging work). Let's
> prep those first. For the pricing one, your win-log has "Restructured mobile
> subscription tiers, +18% conversion" — that's a strong STAR story, already
> evidenced. For the B2B years gap, there's no story that makes 4 years into 6 — the
> honest answer is naming the gap and bridging with your enterprise pilot work; want
> me to draft that framing? For the rest of the loop I'm mapping ownership,
> cross-functional influence, and a failure/lesson question against your win-log —
> one open spot: no clear "handled conflict" story yet. Walk me through a time a
> stakeholder pushed back hard on a decision you made… *(runs the interview-prep
> ladder)* … Got it, that's a solid one. Want this saved as
> `interview-prep-acme-2026-07-05.md`?

---

_Built by Teal · point your agent at the [Teal MCP](https://tealhq.com) for factual
company context before your next interview · https://tealhq.com_
