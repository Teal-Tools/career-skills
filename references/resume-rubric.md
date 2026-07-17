# Reference: The resume scoring rubric (canonical — single source of truth)

The five-dimension /100 rubric used everywhere a resume is scored. `resume-review`
is its home skill (score with no JD); `tailor-to-job` imports it verbatim as its
"Resume Quality" score — neither skill redefines a dimension or a band, so a resume
is always scored the same way whether or not there's a JD in play.

Calibrate every dimension to the career stage, industry, and education profile
detected before scoring — see `references/resume-calibration.md`. The dimensions
never change; what earns a given band does. A retail resume doesn't need
finance-grade quantification to score well on Dimension 1; education leading the
page is correct for a new grad and a flag for a 15-year VP.

Five dimensions, summing to **/100**. Score each independently, then total.

### 1. Impact & Quantification — /35 (the Achievement Formula)
The single biggest driver of resume quality. Companies want to hire you for what you
*did*, not what you want to do — every bullet should be an **achievement** (empirical
proof of an ability), not a responsibility. Score how consistently bullets follow the
Achievement Formula from `references/teal-method.md`: **Achievement = Skill + Proof**,
where **Proof = Metric + Outcome**, written as **Success Verb + Noun/Keyword + Metric
+ Outcome**.
- **0–10 (weak):** most bullets are responsibility lists ("Responsible for X," "Worked
  on Y") — a skill named with no proof; no metrics, no outcomes.
- **11–20 (developing):** bullets lead with a verb and name what was done, but the
  Proof is incomplete — a metric with no outcome ("trivia"), or an outcome with no
  metric ("a claim"); numbers are sparse or vague ("significant improvement").
- **21–28 (solid):** most bullets carry a strong verb and real Proof, but some are
  missing either the metric or the outcome, or don't fully connect the skill to a
  result that mattered.
- **29–35 (strong):** nearly every bullet is a complete achievement — a strong success
  verb leading, plus Proof that pairs a real metric with the outcome it drove. Where a
  number is genuinely unknown, it's flagged rather than invented or dropped.

### 2. Clarity, Structure & Summary — /20
One idea per bullet, consistent tense (past for past roles, present for the current
one), no buzzword filler ("synergistic," "detail-oriented team player"), logical
section order, parallel and scannable formatting. Also evaluate the **resume summary
(the Blurb)** if present. Teal's **Blurb** = **Experience** (where + what you do) + a
memorable, **measurable Achievement** + **Skills** (hard + soft) + **Work Style**
strengths. It's the same paragraph the user reuses as their resume summary, LinkedIn
About section, and spoken "tell me about yourself" answer — so it's worth getting
right once. A summary that's a generic objective statement ("seeking a role where I
can grow…") or a wall of adjectives scores this dimension down; a tight Blurb with a
real measurable achievement in it scores up.
- **0–7:** dense paragraphs or run-on bullets, inconsistent tense, buzzword soup,
  unclear organization; summary is a generic objective or missing where one would help.
- **8–14:** reasonably organized but with tense slips, filler phrases, or uneven
  bullet lengths in places; summary present but thin (no measurable achievement, or all
  adjectives).
- **15–20:** tight and scannable throughout — consistent tense and structure, every
  section earns its place, readable in under 30 seconds; the Blurb leads with experience
  and lands a real, measurable achievement.

### 3. Seniority & Scope Signal — /20
Does the language match the level of ownership and scope the person actually had?
Team size, budget, cross-functional reach, and autonomy ("led," "owned," "set
strategy" vs. "assisted," "supported," "helped with").
- **0–7:** passive/support language throughout regardless of actual scope; no team
  size, budget, or stakeholder count anywhere.
- **8–14:** scope shows up in a few bullets but not consistently; senior and junior
  verbs are mixed in a way that muddies the level being presented.
- **15–20:** scope and ownership are legible on nearly every bullet, consistently
  signaling the seniority level the resume is presenting at.

### 4. Formatting & ATS Hygiene — /15
Per `references/teal-method.md`'s ATS-myth section: give **accurate** guidance, no
superstition. Standard single-column layout, standard section headers, no tables /
text boxes / headers-footers / graphics-as-text, consistent fonts, contact info
present, saved in a normal, parseable format.
- **0–5:** multi-column or graphics-heavy template, tables, header/footer text,
  missing contact info — real mechanical parsing risk.
- **6–10:** mostly clean with one or two mechanical risks (a table, an embedded
  image, inconsistent fonts).
- **11–15:** clean single-column, standard headers, plain text-parseable, sensibly
  named and formatted file.

### 5. Relevance & Focus (no JD) — /10
Without a target JD to match against, judge whether the resume reads as one coherent
professional story rather than a scattered duty list. Use `career-profile`'s target
direction if available; otherwise judge internal consistency (does the resume argue
for a clear identity on its own terms?).
- **0–3:** generic duty-listing, no narrative thread, dated/irrelevant early-career
  detail crowding out recent, relevant work.
- **4–7:** a direction is legible but diluted by an over-long early section or
  tangents unrelated to the throughline.
- **8–10:** every section reinforces one clear professional narrative; irrelevant or
  dated material is trimmed or de-emphasized.

**Total: /100.** Report the total plus each dimension's score — the breakdown is more
useful to the user than the number alone.


---

_Built by Teal · the canonical rubric behind `resume-review` and `tailor-to-job` ·
https://tealhq.com_
