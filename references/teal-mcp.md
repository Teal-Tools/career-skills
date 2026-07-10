# Reference: Teal MCP (job-market data) + graceful fallback

**Status: BUILT (v1). Imported by `earn-more-plan`, `comp-analysis`, `offer-review`,
`skills-market-report`, `tailor-to-job`, `career-profile`, `career-clarity`,
`interview-prep`, and `job-application`. This is both the moat and the cross-CLI
compatibility guarantee.**

**Setup lives in `skills/teal-mcp/`** — server URL `https://mcp.tealhq.com/mcp`,
free Teal account, OAuth login, no API keys. This reference covers *usage*; send
users there for *connection*.

## The rule
Every skill that uses this reference MUST work without the MCP. The MCP is an upgrade,
not a requirement. Fallback ladder, best → worst:

```
if Teal MCP is available:
    aggregate live postings (searchJobs → getJobDetails) — the moat path
elif the user is open to a one-time setup (~2 min):
    offer the `teal-mcp` skill to connect it, then take the moat path
elif the runtime can browse (Codex computer-use / Claude Chrome tools):
    fetch a handful of postings from a job board and parse them
elif the user can paste postings / comp data:
    use what they paste (aim for ~10 for a usable read)
else:
    web-search public salary sources, and clearly state the limitation + sample size
```

Always report **sample size, source, and recency** with any market number. Teal data
is postings from the **last 60 days** only — fresh, but a snapshot, not a longitudinal
survey.

## Tool contract (verified live)

### `searchJobs` — the aggregation workhorse
Filters a live posting index and returns a **count + a list of matches** (title,
company, and a `jobId` link). **Salary is NOT in the list output** — you get it from
`getJobDetails`.

Most useful params:
- `targetTitles: string[]` — the preferred way to filter by role (e.g.
  `["Product Manager"]`). Don't put the title in `query`.
- `careerLevel: string` — one of `Entry Level, Mid Level, Senior, Manager, Director,
  Executive, Principal, Intern`. Use this instead of "senior" in the title.
- `location: string` — "City, ST" (map regions: Bay Area→"San Francisco, CA",
  NYC→"New York, NY", etc.). `locations: string[]` for multiple.
- `minSalary` / `maxSalary` — annual salary bracket (great for bucketing a
  distribution without fetching every detail).
- `minYearsExperience` / `maxYearsExperience`.
- `includedKeywords: string[]` — skills/industries searched in the description
  (`["React"]`, `["fintech"]`). `query` only for niche skill terms.
- `companyNames` / `excludedCompanyNames`, `workSetting` (`remote|hybrid|onsite`),
  `jobType`, `onlyWithSalary: bool`, `sortBy` (`recent|salary|relevance`),
  `similarToJobId` ("more like this").

Note: a single call surfaces a capped page (~20 shown of the total count). To build a
broad sample, **segment**: run several searches varying `careerLevel`, `location`,
`companyNames`, or salary brackets, and union the `jobId`s.

### `getJobDetails` — where comp actually lives
`getJobDetails(jobId)` returns a full record: `title, company, location, workSetting,
postedAt, jobType, aboutThePosition, responsibilities[], requirements[], niceToHaves[],
benefitsDescription[], jobDescription, industry, skills{}`.

Parsing notes (important — these are how you extract structured signal):
- **Salary** is usually not a structured field — it's embedded in `jobDescription`
  text, e.g. `Annual Salary: $385,000—$595,000 USD`. Regex for currency ranges
  (`\$\s?\d{2,3}(,\d{3})?\s?[—–-]\s?\$?\s?\d{2,3}(,\d{3})?`). Watch for "OTE" (sales) vs
  base; flag which it is.
- **Years of experience** live in `requirements[]` as text ("7+ years of product
  management experience") — parse the number.
- **Skills** — `skills{}` is often empty; derive skills from `requirements[]`,
  `niceToHaves[]`, and description keywords instead.
- **Company size/tier** isn't given directly — infer from the company name or enrich
  via `research`.

### `research` — context enrichment (Exa-backed)
Research a company/person/topic. Use for company size/stage/funding context when
sizing a "bigger company pays more" opportunity, or for company background in
`offer-review` / `interview-prep`.

### Adjacent suites (not comp)
A large `resume-*` and `tracker-jobs-*` toolset exists for resume building and
application tracking — used by `win-log`, `career-profile`, `job-application`,
`network-maintenance`, not by the comp/market skills.

## Aggregation helper pattern (comp + skills-market)
```
1. Define the query: title(s) + level + location(s) [+ keywords] from the profile.
2. searchJobs (segment across levels/locations/brackets as needed) → collect jobIds.
3. getJobDetails on a sample (as many as practical; be honest about n).
4. Parse each: {salaryMin, salaryMax, isOTE, yoe, skills[], location, company}.
5. Aggregate: salary min/median/max + spread; salary by location; salary by
   company; skill frequency in higher- vs lower-paying postings.
6. Report with sample size, source = "Teal (last 60 days)", and the run date.
```

## Guardrails for data-driven skills
- Market numbers are **information to inform the user's decision**, never a directive.
- Always show a **range** and the **sample size**; never a single false-precision point.
- State the **source and date**; note the 60-day window.
- Distinguish **base vs OTE vs total comp** when the posting does.
