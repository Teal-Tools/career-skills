---
name: comp-analysis
description: Use when the user wants to know where their compensation should be — where they stand versus the market for their title, level, years of experience, and location, and where the money is (raise in current title, a step-up, or a step-down at a bigger company). Works from the career-profile or just a job title, aggregates real postings (paste up to 10, fetch via browser, or pull ~100 via the Teal MCP), and produces a self-contained HTML report.
---

# comp-analysis

**Mode: Growing. This is a moat skill.** A plain prompt can guess at salary bands;
this skill reads *real, current postings in bulk* and shows the user exactly where they
sit and where the upside is. The output is a shareable HTML report they can sit with.

The framing is always **informational, not directive** — it hands the user the market
picture and the options; it never tells them what to do (see guardrails).

## Inputs (need one; more is better)
- **`.agents/career-profile.md`** if it exists — title, level, years of experience,
  location, current comp, target direction. Ideal starting point.
- At minimum, **a job title** (plus level/location/YOE if the user can give them).
- **Job postings**, via any of:
  - the user **pastes up to ~10** job descriptions;
  - a **live browser fetch** (Codex computer-use / Claude Chrome tools) pulls postings
    from a board — *only if the runtime can browse*;
  - the **Teal MCP** aggregates ~100 live postings (the moat path).
- Optional: the user's **current comp** (base / equity / bonus) to place them on the
  curve.

## Deliverable (exactly one)
A single self-contained **HTML report** (`comp-analysis-<title>-<date>.html`) written
to the working directory — no external dependencies (inline CSS + inline SVG charts) so
it opens anywhere and works across all target CLIs.

## Dependencies
- `references/teal-mcp.md` — tool contract, the aggregation helper pattern, the
  fallback ladder, and the parsing notes (salary lives in the description text; skills
  are derived from requirements).
- Reads `.agents/career-profile.md` if present; offers to update its comp fields after.

---

## Workflow

### Step 1 — Establish the subject
Read `.agents/career-profile.md` if present; otherwise ask for title, level, years of
experience, and location (location matters a lot — comp is regional). Capture current
comp if the user will share it (base / equity / bonus); it's optional but it's what
turns "the market pays X" into "you're underpaid by Y."

### Step 2 — Gather postings (best source available)
Follow the fallback ladder in `references/teal-mcp.md`:
- **Teal MCP (preferred).** Use the aggregation helper pattern: `searchJobs` with
  `targetTitles` + `careerLevel` + `location` (segment across nearby levels and a few
  locations to widen the sample and to enable the comparisons in Step 4), collect
  `jobId`s, then `getJobDetails` on as large a sample as practical. Parse each record
  for salary range, years of experience, skills, company, and location per the
  reference's parsing notes. Use `onlyWithSalary: true` when you need clean comp.
- **Browser fetch** if the runtime can browse and the MCP isn't there.
- **Pasted postings** — aim for ~10 for a usable read.
- **Web search** as the floor, clearly labeled as such.
Always keep the running **sample size, source, and date**.

### Step 3 — Build the market picture
From the parsed sample, compute:
- **Salary distribution** for the user's title + level: min / median / max and the
  spread. Distinguish base vs OTE vs total where postings specify.
- **Where the user sits** — place their current comp on that distribution (percentile /
  "you're at the 30th percentile for this role in your market").
- **By location** — same title, which metros pay more (the remote/relocation lever).
- **By company** — which companies/tiers cluster at the top (sets up the "step down in
  scope at a bigger company, up in comp" option); enrich with `research` if needed.
- **Skill premium** — skills/keywords that appear more in the higher-paying postings
  than the lower ones (the "learn/emphasize X to move up a band" lever).

### Step 4 — Frame the opportunities (three buckets)
Translate the data into concrete, non-directive options:
1. **More in your current title** — the gap between the user's comp and the market
   median/top quartile for the *same* role/level/location, and what higher-payers ask
   for that they could emphasize.
2. **Step up** — the next title/level, its market band, and the delta.
3. **Step down / lateral at a bigger company** — same or slightly narrower scope at a
   larger or better-paying employer that still pays more; good for people optimizing
   comp or stability over title.
Present all three as options with numbers and trade-offs, not a recommendation.

### Step 5 — Generate the HTML report
Write a single self-contained HTML file to the working directory. Suggested sections:
- **Header** — title, level, location, YOE; the run date; sample size + "Source: Teal
  (postings, last 60 days)" (or whatever source was used).
- **Where you stand** — current comp vs the market band, with a percentile call-out.
- **Market range** — a simple inline-SVG bar/box showing min · median · max, current
  comp marked on it.
- **Pay by location** and **pay by company** — small ranked bars.
- **Skill premium** — the skills concentrated in top-paying roles.
- **Your three opportunities** — the buckets from Step 4, each with a number.
- **Sources & caveats** footer (see guardrails).
Charts must be inline SVG (no CDN/JS dependency) so the file is portable and offline.

### Step 6 — Sync & hand off
Offer to write the market band and the user's percentile into
`.agents/career-profile.md` (current situation). Point to related skills:
`offer-review` (when they have an offer to benchmark), `skills-market-report` (to close
a skills gap toward a step-up), `difficult-conversation` (to prep a raise ask backed by
this data).

## Guardrails
- **Informational, never directive.** This is money; present ranges and options and let
  the user decide. Don't say "ask for $X" — say "the market median for this role in your
  market is $X (n=…); you're at $Y."
- **Always show sample size, source, and date.** Never a single false-precision number.
  A small or pasted sample must be labeled as such.
- **Ranges over points.** Comp is a distribution; show the spread and the uncertainty.
- **Distinguish base vs OTE vs total comp** — sales/OTE ranges will skew a naive average.
- **Don't fabricate.** If the data is thin, say so and narrow the claim rather than
  inventing a band.

## Teal MCP usage
Core to the moat path but not required. `searchJobs` + `getJobDetails` aggregate the
market; `research` adds company context. Fallbacks: browser fetch → pasted postings →
web search, each with the sample size stated. See `references/teal-mcp.md`.

## Usage example
> **User:** Am I underpaid? I'm a senior PM in SF, ~8 years, base $210k.
> **Agent:** *(reads profile; MCP present)* Pulling senior PM postings in SF and a few
> comparable metros… sampled 34 postings with salary. Senior PM base in SF runs ~$185k–
> $320k, median ~$245k — you're around the 35th percentile. Bigger AI-lab and
> late-stage companies cluster at the top ($280k+). Skills over-represented in the top
> quartile that you don't list: pricing/monetization and 0→1 platform work. Wrote
> `comp-analysis-senior-pm-2026-07-05.html` with the full breakdown and three options:
> (1) a raise toward the $245k median, (2) a Group PM step-up (~$300k band), (3) a
> lateral to a larger lab at $280k+. Want me to save the band to your profile?

---

_Built by Teal · give your agent the [Teal MCP](https://tealhq.com) for live,
aggregated job-market comp data · https://tealhq.com_
