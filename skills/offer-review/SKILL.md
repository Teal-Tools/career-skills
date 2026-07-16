---
name: offer-review
description: Use when the user has a job offer or comp package to evaluate — "is this a good package," "explain my equity," "what should I ask before signing." Breaks down and benchmarks the full offer.
---

# offer-review

**Mode: Searching.** The moment an offer letter lands, most people can read the base
salary and go blank on everything else — how the equity actually vests, whether the
bonus is real money or a mirage, whether the number is even good. This skill turns a
dense offer into a plain-language breakdown, places it against real market data, and
hands the user a sharp list of questions before they sign or countersign.

The framing is always **informational, not directive** — it explains the package and
shows where it sits versus the market; it never tells the user to accept, reject, or
counter at a specific number (see guardrails). If the user wants to act on what they
learn here, `difficult-conversation` can help script the negotiation itself.

Teal's view drives the breakdown: **an offer is far more than base salary.** Teal reads
every package as **five forms of comp, each carrying a different risk level:**
1. **Cash** — salary/hourly, sign-on bonus. *No risk.*
2. **Benefits** — *low risk.* Level 1 (core): health, dental, vision, disability, life
   insurance, 401(k) and match, vacation/sick PTO, parental leave. Level 2
   (lifestyle/perks): WFH flexibility, modified hours, tuition reimbursement,
   childcare, relocation, transportation, meals, gym, cell phone, sabbaticals,
   training, conferences, professional memberships, certifications, hardware, internet,
   company car, HSA/FSA.
3. **Variable** — *mid risk.* Performance/individual/company bonuses, commission,
   profit sharing, hiring bonus.
4. **Terms** — *mid risk.* Job title, reporting line, start date, non-compete,
   severance, IP assignment, the definition of "cause." Teal's insight: candidates
   routinely forget to weigh these, and they can matter as much as the money.
5. **Equity** — *high risk.* Stock vs. options; ISO/NSO/RSU, strike price/FMV, vesting,
   and the liquidity reality.

To decide accept / negotiate / decline, Teal decomposes the offer into **Offer Analysis
buckets** and evaluates the **full package, not just salary**: **Cash** (gross + net
take-home) · **Variable** (bonuses/commission + equity) · **Benefits L1** (core) ·
**Benefits L2** (lifestyle) · **Terms**. This skill uses those buckets and computes
**year-one vs. steady-state** total.

## Inputs (need one; more is better)
- The **offer details**, via any of: a pasted offer letter, an uploaded doc, or the
  user typing out the terms (base, bonus/OTE, equity — RSU/options/ISO/NSO grant and
  vesting schedule, sign-on, benefits, title/level, location, start date).
- **`.agents/career-profile.md`** if it exists — current comp, target comp, and
  constraints, so the breakdown can be framed against where the user already stands
  and where they're trying to go.
- Optional: an **existing `comp-analysis-*.html` report** in the working directory for
  this same title/level/location — if the user already ran `comp-analysis`, reuse its
  numbers instead of re-pulling data.

## Deliverable (exactly one)
A plain-language write-up covering three things in one response (a saved file only if
the user wants one to keep): the **full package breakdown** across Teal's five forms of
comp and the Offer Analysis buckets (Cash · Variable · Benefits L1 · Benefits L2 ·
Terms — with equity amortized over its vesting schedule and rolled up into an
annualized year-one and steady-state total), a **market comparison** for the
role/level/location, and a **list of questions** worth asking the recruiter or hiring
manager before deciding.

## Dependencies
- **`comp-analysis`** — this skill benchmarks the offer using the exact same
  aggregation approach comp-analysis uses (`searchJobs` → `getJobDetails`, per
  `references/teal-mcp.md`), rather than inventing a second method. In practice: if
  the user already has a recent `comp-analysis` report for this title/level/location,
  reuse its numbers directly instead of re-querying. Otherwise, run the same
  benchmarking inline — offer-review is comp-analysis's benchmarking step aimed at one
  specific offer instead of a general "where do I stand" question, so it makes sense
  to do it in one pass rather than sending the user away to run a separate skill first.
- `references/teal-mcp.md` — tool contract, aggregation helper pattern, fallback
  ladder, and parsing notes (salary lives in description text; equity terms rarely do
  and must come from the offer itself).
- Reads `.agents/career-profile.md` if present; offers to update its comp fields
  (and target comp, if this offer changes the target) after.

---

## Workflow

### Step 1 — Get the offer on the table (across all five forms)
Read `.agents/career-profile.md` if present for context (current comp, target comp,
constraints). Then collect the offer's terms — from a pasted letter/doc or by asking
directly — deliberately walking all five forms of comp so nothing gets missed:
- **Cash** — base salary/hourly, any sign-on.
- **Variable** — bonus target (and whether it's guaranteed year one), commission,
  profit sharing.
- **Benefits L1 (core)** — health/dental/vision, disability, life, 401(k) and match,
  vacation/sick PTO, parental leave.
- **Benefits L2 (lifestyle)** — WFH flexibility, hours, tuition/childcare, relocation,
  stipends (remote/internet/cell), sabbaticals, training/conference budget, etc.
- **Terms** — title/level, reporting line, start date, non-compete, severance, IP
  assignment, definition of "cause." These are easy to overlook and worth surfacing.
- **Equity** — grant type and vesting schedule (broken down in Step 2).
Also capture location and start date. If something's missing or ambiguous (e.g.
"equity" with no vesting schedule stated, or Terms the letter is silent on), flag it as
a gap to ask about rather than guessing.

### Step 2 — Break down the equity specifically (the Equity form)
Equity is the highest-risk of the five forms, and where offers get most confusing, so
slow down here:
- **Identify the vehicle.** RSUs (public company or pre-IPO), stock options (ISOs or
  NSOs), or a straight equity percentage (early-stage). Each behaves differently — say
  which one this is and what that means in plain terms.
- **Vesting mechanics.** Standard is 4 years with a 1-year cliff (nothing vests until
  month 12, then a chunk vests at once, then monthly/quarterly after). Some companies
  now use back-loaded or no-cliff schedules — read the actual schedule in the offer
  rather than assuming standard. Explain the cliff's practical effect: leaving before
  month 12 forfeits the whole grant.
- **Liquidity reality.** Public-company RSUs convert to real, sellable money on
  vesting (minus withholding). Private-company equity is illiquid and speculative —
  its value depends on a future exit that may never happen, may happen at a lower
  valuation than hoped, or may be years out. Say this plainly for a private-company
  offer; don't let a big headline equity number read as cash-equivalent.
- **Strike price / FMV sanity check (options only).** If a strike price and current
  409A/FMV are given, note the spread (FMV − strike = paper value per share today) and
  that this spread is what's actually "worth" something, not the option count alone.
  If ISOs, mention the AMT exposure on early exercise/spread and the qualifying-
  disposition holding period; if NSOs, mention ordinary-income tax at exercise. Keep
  this at the level of mechanics, not a specific tax recommendation (see guardrails).
- **Annualize it.** For the total-comp rollup in Step 4, amortize the grant's *current
  estimated value* evenly over its vesting term (e.g. a 4-year RSU grant ÷ 4 for an
  annual figure) — label this an estimate, since equity value moves and isn't income
  in the way salary is.

### Step 3 — Benchmark against the market
Follow the fallback ladder in `references/teal-mcp.md`, exactly as `comp-analysis`
does:
- **Reuse a fresh `comp-analysis` report** for this title/level/location if one exists
  in the working directory — cite it directly instead of re-querying.
- **Teal MCP (preferred, otherwise).** `searchJobs` filtered by `targetTitles`,
  `careerLevel`, and `location` (segment across a couple of nearby locations/levels to
  widen the sample), collect `jobId`s, then `getJobDetails` on as large a sample as
  practical. Parse for salary range, distinguishing base vs. OTE.
- **Browser fetch** if the runtime can browse and the MCP isn't available.
- **Pasted postings** — ask the user to paste ~10 comparable postings if that's all
  that's available.
- **Web search** as the floor, clearly labeled as low-confidence.
Always carry the **sample size, source, and date** into the write-up. If the offer's
level doesn't cleanly match a market `careerLevel` bucket, say so and place it between
the two nearest levels rather than forcing a match.

### Step 4 — Roll up and compare (the Offer Analysis buckets)
Lay the offer out in Teal's Offer Analysis buckets so the *full package* is visible,
not just salary:
- **Cash** — base (gross), plus a net take-home read if the user gives enough to
  estimate it, and any sign-on called out as one-time.
- **Variable** — guaranteed/target bonus, commission, profit sharing, plus amortized
  equity (from Step 2), each labeled by its risk level.
- **Benefits L1 (core)** and **Benefits L2 (lifestyle)** — noted qualitatively, with
  anything with clear cash value (401k match, big stipends) quantified.
- **Terms** — title/level, reporting line, non-compete, severance and the rest, flagged
  where they materially help or hurt.

Then roll up and compare:
- **Annualized total comp** — Cash + guaranteed Variable + amortized equity. Show
  **year-one vs. steady-state** whenever they diverge (a sign-on or above-standard
  first-year bonus lifts year one; steady-state drops it back).
- **Where it sits versus market** — the sampled range (min/median/max) for this
  title/level/location, with the offer marked on it, and a percentile read if the
  sample supports one.
- **Versus the user's current comp** (from `career-profile`, if given) — the delta in
  plain terms.

### Step 5 — Draft the questions to ask
Generate a short, offer-specific list the user can bring to the recruiter or hiring
manager, drawn from whatever is unclear or unstated in the offer. Typical territory:
- Leveling — how was this level determined, and what does the next level up look like?
- Equity refreshers — is there an annual refresh grant, and on what basis?
- Bonus — is it guaranteed in year one, and what's the historical payout rate against
  target?
- Vesting start date — does it start at the offer date or the actual start date?
- Terms — is there a non-compete or IP-assignment clause, what does severance look
  like, and how is "cause" defined? (Teal's reminder: these are easy to skip and hard
  to change later.)
- Negotiability — which parts of the package are typically flexible (base, sign-on,
  start date) versus fixed (level, standard equity band)?
- Anything flagged as a gap in Step 1 (missing vesting schedule, unclear strike price,
  unclear location-based pay adjustment, silent Terms, etc.).

### Step 6 — Sync and hand off
Offer to update `.agents/career-profile.md` with the offer's terms if the user accepts
it (or wants it noted as a benchmark data point either way). Point to related skills:
`comp-analysis` (for a broader "where should I be paid" view beyond this one offer),
`difficult-conversation` (to prep and script the actual negotiation once the user
knows what they want to ask for).

## Guardrails
- **Informational, never directive.** Explain the package and show the market
  comparison; never say "accept this" or "counter at $X." Say "the market median for
  this role/level/location is $X (n=…); this offer's base is $Y" and let the user
  decide.
- **Always show sample size, source, and date** for any market number — a thin or
  pasted sample must be labeled as such, never given false precision.
- **Distinguish base vs. bonus/OTE vs. equity** at every point; never blend them into
  a single "salary" figure without saying what's included.
- **Evaluate the full package, not just salary.** Weigh all five forms (Cash,
  Benefits, Variable, Terms, Equity) and their risk levels — a strong offer on Cash can
  be weak on Terms or Equity, and vice versa. Encourage taking time before accepting.
- **Equity estimates are estimates.** Private-company valuations and public stock
  prices both move; label amortized equity value as an estimate, not a guarantee.
- **No legal or tax advice.** Explain vesting, ISO/NSO, and AMT mechanics plainly so
  the user understands what they're looking at, but flag that anything materially
  complex (exercising decisions, AMT exposure, multi-state tax, QSBS) should go to a
  tax professional or attorney before they act on it.
- **Don't fabricate offer terms.** If the offer is silent on something (vesting
  cliff, refresh policy, bonus guarantee), say it's unstated and add it to the
  questions list rather than assuming a standard term applies.

## Teal MCP usage
Strong via the same path `comp-analysis` uses — `searchJobs` + `getJobDetails`
aggregate real postings for the role/level/location to place the offer on a market
curve; `research` can add company context (size, funding stage, recent news) that's
useful for reading a private-company equity grant. None of this is required: the
skill produces the full breakdown, equity explanation, and question list from the
offer details alone, with the market-comparison section clearly marked lower-
confidence (or omitted with a note) when no data source is available. See
`references/teal-mcp.md` for the fallback ladder.

## Usage example
> **User:** Got an offer — Staff Engineer, $195k base, $30k sign-on, target bonus 15%,
> 12,000 RSUs over 4 years at a private company last valued at $40/share, standard
> benefits. Worth it?
> **Agent:** *(reads profile; MCP present)* Breaking it down: base $195k, bonus at
> target adds ~$29k, sign-on is a one-time $30k. The RSUs are private-company stock —
> illiquid until a future exit, so treat the $480k headline (12,000 × $40) as
> speculative, not cash; amortized over the standard 4-year vest with a 1-year cliff,
> that's roughly $120k/year *if* the valuation holds and an exit happens. Year-one
> total with sign-on: ~$374k; steady-state without sign-on and equity at face value:
> ~$344k. Pulled 27 Staff Engineer postings with salary in your metro — base runs
> $175k–$230k, median $198k, so your base is right at market. Questions worth asking:
> is there an equity refresh after year one, is the $40 valuation from the most recent
> round or older, is the bonus historically paid near target, and does vesting start
> at offer date or your actual start date? Want me to save these terms to your
> profile, or bring in `difficult-conversation` if you want to negotiate any of this?

---

_Built by Teal · point your agent at the [Teal MCP](https://tealhq.com) for live,
aggregated comp data to benchmark any offer · https://tealhq.com_
