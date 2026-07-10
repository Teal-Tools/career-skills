# Reference: The Teal Achievement Formula (resume bullet & wins framework)

Teal's method for writing resume bullets and logging wins. Imported by
`resume-review`, `tailor-to-job`, and `win-log`. Use this framing verbatim rather than
inventing a scoring scheme — it is the opinion Teal teaches.

## The premise Teal starts from

**Companies want to hire you for what you *did*, not for what you *want to do*.** You
have to prove you have done it, or can do it. Every line on a resume is either evidence
of an ability or filler — and the most common mistake is listing daily
responsibilities ("Responsible for…", "Worked on…") with no proof of results.

An **achievement** is empirical proof that you have an ability. That's the bar every
bullet has to clear.

## The Achievement Formula

**Achievement = Skill + Proof**, and **Proof = Metric + Outcome.**

Written out as a resume bullet, that becomes:

> **Success Verb + Noun/Keyword + Metric + Outcome**

- **Success Verb** — a strong, specific, active verb for what you did (Led, Built, Cut,
  Grew, Negotiated, Launched, Automated, Prevented). Never open with "Responsible for"
  or "Worked on."
- **Noun / Keyword** — *what* you did it to, in the language a reader (and the target
  posting) uses: the system, program, team, campaign, process, product.
- **Metric** — the number that makes it real: a count, a percent, a dollar figure, a
  time, a before/after, a rank. This is the part people skip, and it's the part that
  proves the skill.
- **Outcome** — *so what?* The result that mattered to the business or the people you
  served. A metric with no outcome is trivia; an outcome with no metric is a claim.

**Example:** *"Organized an onboarding event for 500 prospective members that generated
90 qualified leads."* Skill = event organizing; Proof = 500 attendees (metric) → 90
leads (outcome).

## Surfacing achievements (the prompts)

Most people undersell because they only remember the task, not the result. Prompt for
proof: Did you **solve a problem**? **Save money or time**? **Improve** something that
was broken? **Train, mentor, or manage** people? **Create** something new? **Exceed** a
goal or target? Each "yes" is an achievement waiting to be quantified.

## Skill first, then proof — and make transferability explicit

Teal splits skills into two kinds, and the distinction changes how you write the bullet:

- **General (transferable) skills** carry across functions — project management,
  research, communication, adaptability.
- **Specific skills** are bound to a function — Python, SEO, wireframing, financial
  modeling.

**Employers will not assume your skills transfer — you have to make the connection for
them.** When you're repackaging past experience for a different role, name the general
skill and attach the proof, so the reader doesn't have to do the translation.

## Good vs. weak bullets

| Weak (task only) | Achievement Formula (skill + proof) |
|---|---|
| "Responsible for onboarding improvements." | "Redesigned new-user onboarding for a 200-signup/month flow, cutting setup time from 3 days to 4 hours." |
| "Helped grow the sales team." | "Hired and ramped 6 AEs in 2 quarters, growing the team from 4 to 10 while holding ramp-to-quota under 60 days." |
| "Worked on a database migration." | "Led a zero-downtime migration of an 8TB production database serving 40k daily users, cutting query latency 45%." |
| "Improved customer support process." | "Rebuilt support triage across a 12-person team, reducing first-response time from 6 hours to 45 minutes." |

Weak bullets have the verb and maybe the noun but skip the metric and outcome — the two
parts that actually prove the skill.

## Applying it

- **One bullet, one achievement.** Don't stack two wins in one line — split them.
- **Verb first**, always. Lead with what you did, not what you were responsible for.
- **If the metric is genuinely unknown, keep the bullet and flag it** `metric TODO`
  (see `win-log`) rather than dropping the bullet or inventing a number. Never
  fabricate a figure.
- **Tense:** past tense for past roles, present tense for the current role.
- **Length:** one line on a resume (~200 characters). Win-log entries can run longer,
  carrying the full skill/metric/outcome breakdown plus a distilled resume-ready bullet.

## Quantifying without fabricating (the fallback ladder)

The metric is the part people skip — usually because they don't remember the exact
number, not because there wasn't one. Never invent a figure, but don't drop the bullet
either. Walk down this ladder and stop at the first rung the user can defend in an
interview:

1. **Exact number** — "grew ARR from $1.2M to $1.6M." Best; use when known.
2. **Honest range** — "managed a $3–5M annual budget," "led a team of 8–12 depending
   on project." A defensible range beats a fake-precise point.
3. **Hedged estimate** — "approximately doubled lead generation," "cut processing time
   by roughly half." Only if the user can explain how they'd estimate it.
4. **Comparison or rank** — "ranked #2 of 15 reps," "converted 35% of leads vs. a 20%
   team average." Relative numbers are often easier to recall and just as convincing.
5. **Qualitative proof** — "promoted twice in 18 months," "selected to lead the pilot
   based on track record." Recognition is evidence too.
6. **`metric TODO`** — flag it and ask (see `win-log`). The bullet ships with skill and
   outcome in place; the number gets hunted down later.

Anti-patterns to flag, not encourage:
- **Quantified trivia** — "attended 47 meetings per month" is a number, not an
  achievement. If the metric doesn't prove a skill, cut it.
- **Suspicious precision** — "improved efficiency by exactly 37.5%" reads as
  manufactured. "Roughly 35–40%" is more credible *and* more honest.
- **Metric without context** — "managed $10M budget" says less than "managed $10M
  annual marketing budget, the company's largest, at 4.2x ROI." Context is what makes
  a number mean something.
- **One note repeated** — five revenue bullets in a row is one achievement type told
  five times. Vary the proof: revenue, cost, time, scale, quality.

## The ATS myth (say this plainly when it comes up)

Modern applicant tracking systems are databases and keyword filters, not the
"resume-rejecting robots" folklore suggests. The famous "75% of resumes are
auto-rejected by ATS" statistic traces to a vendor (Preptel) that went out of business
in 2013 — no study supports it, and the humans who run these systems say the opposite
(Greenhouse's CEO: "The idea that the ATS is this mythical, genius, AI-infused tool is
crazy"). Auto-rejections that do happen come from recruiter-defined knockout questions
(work authorization, required license), not algorithmic judgment of resume quality.
Give accurate guidance:

- **True:** an ATS lets recruiters filter and search by keyword, skill, title, and
  years of experience. If you don't mirror the language the posting uses (in real
  bullets and a skills section), a human may never search you up.
- **True:** unusual formatting can break parsing and scramble your content. The real
  mechanical breakers: **text boxes** (garbled or reordered output), **text embedded in
  images** (invisible to the parser), **contact info placed only in a header/footer**
  (many systems skip those regions entirely — keep it in the document body),
  **non-standard section names** ("My Professional Journey" instead of "Work
  Experience"), and **scanned/image-based PDFs**. Multi-column layouts are a
  *degradation*, not a rejection — parse accuracy drops a few points versus
  single-column — so single-column is the safe default, not a superstition.
- **False:** there is no secret algorithm that auto-rejects resumes below a score in the
  way the myth claims. Invisible keyword-stuffing (white text, hidden repetition)
  doesn't fool a real recruiter — parsed text loses its color, so the recruiter sees it
  plainly — and reads as dishonest. PDFs parse fine in modern systems (and preserve
  formatting better than DOCX); any standard professional font is safe.
- **Guidance to give:** mirror the posting's language naturally (title, tools, skills)
  in genuine achievement bullets and a skills section; use standard section headers and
  a single-column, text-based layout; save in the format the application asks for
  (usually PDF unless told otherwise). No gimmicks needed.
