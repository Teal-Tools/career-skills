---
name: job-application
description: Use when the user wants to fill out or submit a job application for a specific posting. Drives the form via browser control where supported; otherwise produces a manual-fill answer checklist.
---

# job-application

**Mode: Searching.** This is the last step of the search funnel: the posting is
identified, the resume is tailored, and now someone has to actually get through the
form — contact fields, work-authorization questions, a resume upload, and usually at
least one free-response box. This skill walks that form end to end, backed by the
user's `career-profile` and a `tailor-to-job` resume, and stops at a final review
before anything is ever sent.

This is deliberately the **most environment-dependent** skill
in the library. Filling a real form requires either
browser/computer-use control (which most runtimes don't have) or a manual hand-off.
Both paths are first-class here — this is not a "computer-use or nothing" skill.

Three Teal artifacts make applications fast without cutting the tailoring corner:
- **Master Resume** — one comprehensive career document holding everything the user
  has done. You never submit it raw; you *tailor from* it for each posting.
- **Blurb** — the user's short, reusable professional summary, handy for "tell us
  about yourself" free-response boxes.
- **Common App** — a reusable bank of answers to the questions applications ask over
  and over (salary expectations, "why us," notice period, work authorization). Build
  it up over time so each new form is mostly copy-and-adjust, not from scratch.
Every application is still **tailored to the specific posting** via a Job Posting
Analysis (Teal's approach to matching a resume to a JD) — handed off to
`tailor-to-job` — never a generic one-size answer.

## Inputs
- The **target application** — a URL the agent can open (if the runtime can browse),
  or a description/paste of the form's fields if it can't (field labels, and any
  visible free-response questions).
- **`.agents/career-profile.md`**, required-ish — this is where standard fields live
  (name, location, links, current title, years of experience, work-authorization and
  other durable answers the user has previously stored). Without it, expect to ask
  for most fields directly and offer to save them for next time.
- A **tailored resume for this specific posting** — reuse a `tailor-to-job` output
  (`tailored-resume-<company>-<date>.md`) if one exists in the working directory. If
  it doesn't, and the user has the JD handy, produce one inline by running
  `tailor-to-job`'s workflow rather than attaching an untailored resume; if there's no
  JD available at all, fall back to the user's most recent resume as-is and say so.

## Deliverable (exactly one — state clearly which path was used)
- **(a) A completed application**, submitted or left sitting at a final-review-before-
  submit screen, when the runtime exposes computer-use. Submission only ever happens
  after the user explicitly confirms — see Guardrails. **or**
- **(b) A field-by-field answer draft** — a checklist mapping every visible form
  field to the exact answer/value to paste, plus the tailored resume and any files to
  attach — when no computer-use capability is available. This is a complete,
  ready-to-paste artifact, not a placeholder; it is the deliverable in its own right,
  not a lesser fallback.

Every response using this skill opens by naming which path it used and why, so the
user isn't left guessing whether anything was actually submitted.

## Dependencies
- **`career-profile`** — required for the standard fields (contact info, location,
  links, current title/years of experience, work-authorization status if stored, and
  any application-specific answers the user has previously saved). If a field the
  form asks for isn't in the profile yet, ask for it directly and offer to add it to
  `.agents/career-profile.md` so future applications don't re-ask.
- **`tailor-to-job`** — the source of the resume this skill attaches/pastes, plus the
  match assessment, which is useful context if the form asks a "why are you a fit"
  free-response question. Run it inline if no tailored version exists yet (see
  Inputs).
- Everything past this point is **environment-dependent by design** — the actual
  browser/form-filling mechanics vary by whichever computer-use capability the
  runtime exposes (Codex computer-use, Claude Cowork, Claude Chrome-style tools, or
  none at all). Per the library's lowest-common-denominator rule, the *core* workflow below
  (read profile → get tailored resume → map every field → review → confirm →
  act) is written environment-agnostically; only Step 3's branch is CLI-specific.

## Teal MCP usage
None required for the core workflow. Optional enhancement: if the Teal MCP exposes
its `tracker-jobs-*` application-tracking tools (see `references/teal-mcp.md`'s
"Adjacent suites" note), use them after a successful submission to log the
application (company, title, date, posting link) so it shows up in the user's
tracker automatically. Skip silently if the MCP or those tools aren't available —
nothing here depends on them.

---

## Workflow

### Step 1 — Confirm the target and get the resume on the table
Confirm the company, role, and posting (URL or pasted description) in one line so
the rest of the session is anchored correctly. Then get a tailored resume: reuse an
existing `tailored-resume-<company>-<date>.md` for this posting if present; otherwise
run `tailor-to-job` inline against the posting's JD (a Job Posting Analysis, tailoring
down from the user's **Master Resume**); otherwise fall back to the most recent resume
on hand and say plainly that it isn't tailored to this posting.

### Step 2 — Read the profile for standard fields
Read `.agents/career-profile.md` if present and pull whatever the form is likely to
ask for: full name, email, phone, location, LinkedIn/portfolio/GitHub links, current
title and company, years of experience, work-authorization/visa-sponsorship status,
and any previously-stored application-specific answers (e.g. salary expectations,
notice period, "how did you hear about us"). If the profile doesn't have a field yet,
that's expected — the schema doesn't enumerate every application field a form might
ask — just note it as something to ask the user directly in Step 4, and offer to save
the answer back to the profile in Step 8 so it doesn't have to be re-asked next time.

### Step 3 — Branch on computer-use capability
This is the one environment-specific fork in the workflow. Detect what the runtime
exposes and follow the best available path — never hard-fail because the ideal path
is missing:

```
if the runtime exposes computer-use (Codex computer-use / Claude Cowork /
    Claude Chrome-style browser tools):
    open the posting, locate the application form, and walk it field by field
    live in the browser — this is Deliverable (a)
else:
    ask the user to paste the form's field labels and any visible free-response
    questions (or describe them), and build the answer checklist against that —
    this is Deliverable (b)
```

State which branch is in play before doing anything else in this step.

### Step 4 — Map every field to an answer
Walk the form (live, or the described field list) top to bottom. For each field:
- **Standard fields** (name, email, phone, location, links, current title, work
  authorization) → pull from the profile.
- **Resume/cover-letter upload** → attach or paste the tailored resume from Step 1.
- **Free-response / essay questions** ("why do you want to work here," "describe a
  time you...") → draft a genuine answer using the profile's narrative, the user's
  **Blurb** for "tell us about yourself"-style boxes, any reusable **Common App**
  answers already stored, and the `tailor-to-job` match assessment where it's a real,
  honest fit — never invent an answer the profile and resume don't support. If there
  isn't enough material to draft a truthful answer, say so and leave a clear
  `[ANSWER NEEDED — <what's missing>]` placeholder rather than guessing.
- **Sensitive / demographic fields** (EEO, race/ethnicity, gender, disability status,
  veteran status) → handle per the dedicated guardrail below; do not treat these like
  ordinary fields.
- **Anything else with no clear source** → flag it explicitly as a gap and ask the
  user, rather than leaving it silently blank or making something up.

### Step 5 — Full review before anything final happens
Before submitting (computer-use path) or handing off the checklist (manual path),
present the *complete* set of answers exactly as they'll be entered/pasted — every
field, the attached resume, and every free-response answer in full, not summarized.
This is the user's last chance to catch a wrong phone number, an outdated title, or a
free-response answer that doesn't sound like them.

### Step 6 — Get explicit confirmation, then act
- **Computer-use path:** stop at the form's final review/submit screen. Ask the user,
  in plain language, to confirm submission — do not click submit until they say yes.
  If they want changes, go back to Step 4 for just those fields.
- **Manual path:** hand off the finished checklist (field → value, resume file,
  attachments) as the deliverable. There's nothing to "submit" on this path — the
  user pastes it in themselves, which is itself the safeguard.

### Step 7 — Optional: log the application
If the application was actually submitted and the Teal MCP's `tracker-jobs-*` tools
are available, log it (company, title, date, link) so it appears in the user's
tracker. Skip silently otherwise.

### Step 8 — Offer to update the profile (grow the Common App)
If anything durable came up that isn't in `.agents/career-profile.md` yet (a phone
number, a portfolio link, a work-authorization answer, a salary-expectation answer,
a reusable "why us" style paragraph), offer to add it so the next application doesn't
re-ask — this is how the user's **Common App** answer bank grows over time. Never add
sensitive/demographic answers unless the user explicitly asks for them to be stored
for this exact purpose (see Guardrails).

## Guardrails
- **Never auto-submit.** A submitted application can't be un-sent. Always stop at a
  final review and get the user's explicit, plain-language confirmation before the
  actual submit action, on every single application — no exceptions, no "looks fine,
  I'll just send it."
- **Never fabricate an answer.** Standard fields come from the profile; free-response
  answers must be genuinely supportable by the profile and resume. If the material
  isn't there, ask the user or leave an explicit `[ANSWER NEEDED]` placeholder —
  never invent a plausible-sounding answer to avoid an awkward gap.
- **Sensitive/demographic questions (EEO, race/ethnicity, gender, disability,
  veteran status) are handled carefully, not casually.** These are almost always
  voluntary on real applications. Never guess or infer an answer from the user's
  name, resume, or any other signal. Only fill one in if the user has explicitly
  stored an answer in their profile *for exactly this purpose* (not repurposed from
  some other field); otherwise select "prefer not to answer" where that option
  exists, or leave the field blank. If asked to fill these in on the fly, confirm the
  user actually wants to answer before entering anything.
- **Automation and site terms of service.** Some job boards and applicant-tracking
  systems restrict automated form-filling in their terms of service. This is worth
  knowing plainly on the computer-use path — flag it once, briefly, without being
  preachy about it, and let the user decide whether to proceed.
- **The user's application, the user's call.** Present the full set of answers before
  acting; don't submit or hand off a checklist the user hasn't seen field-by-field.
- **Never send profile data anywhere but the form itself.** Contact info, work
  authorization, and any stored sensitive answers are personal data — they go into
  this one application and nowhere else.

## Usage example
> **User:** Can you apply to this Senior Data Analyst role at Northwind for me?
> *(pastes the posting URL)*
> **Agent:** Confirming: Senior Data Analyst, Northwind, from the posting you pasted.
> *(reads career-profile; finds a `tailored-resume-northwind-2026-07-01.md` from an
> earlier `tailor-to-job` session — reusing it.)* This runtime doesn't expose browser/
> computer-use, so I'll build a manual-fill checklist instead of filling the form
> live — you'll paste these in yourself. Can you paste the form's field labels (or a
> screenshot description) so I map them correctly? *(user pastes the field list)*
> Here's the checklist: Name → "Jordan Alvarez" · Email/Phone/Location → from your
> profile · LinkedIn/Portfolio → from your profile · Resume → attach
> `tailored-resume-northwind-2026-07-01.md` · Work authorization → "Authorized to work
> in the US, no sponsorship needed" (from your profile) · "Why Northwind?" →
> drafted from your tailor-to-job match notes on their data-quality focus — read it
> over, it should sound like you · Salary expectation → your profile has no stored
> answer for this one, `[ANSWER NEEDED]` — what do you want to put? · Voluntary EEO
> section (race/ethnicity, gender, disability, veteran status) → left as "prefer not
> to answer" across the board since nothing's stored in your profile for this
> purpose — let me know if you'd rather answer any of these. Once you fill in the
> salary line, this is ready to paste in end to end. Want me to save your answer back
> to the profile for next time?

---

_Built by Teal · if the Teal MCP's application tracker is connected, submitted
applications can log there automatically · https://tealhq.com_
