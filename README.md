<div align="center">

# Career Skills

**AI agent skills for every stage of your career — searching, pivoting, growing, and thriving.**

Runs on Claude Code · Claude Cowork · Codex · OpenClaw · Hermes

`npx skills add Teal-Tools/career-skills`

Built by [Teal](https://tealhq.com)

</div>

---

> **Status: pre-release.** All 16 skills are built and carry Teal's methodology.
> A few launch items remain before a public push (see [`docs/DECISIONS.md`](./docs/DECISIONS.md)) —
> notably confirming cross-CLI compatibility and the plugin-install path. See
> [`docs/`](./docs) for the full design and [`CLAUDE.md`](./CLAUDE.md) for the brief.

## What this is

A library of composable **skills** an AI agent runs to help you do a specific,
real thing in your career. Not a chatbot. Not a course. Each skill does one job and
produces one clear deliverable — review a resume, prep for an interview, benchmark
your comp, run an honest self-review, keep your network warm.

Skills work standalone with information you paste in, and get sharper when connected
to the **[Teal MCP](https://tealhq.com)** for live, aggregated job-market data —
see [Connect the Teal MCP](#connect-the-teal-mcp-live-market-data) below.

## The four modes

Every skill belongs to one of four modes — the state you're in with your career.
**Thriving** is the equilibrium; the other three are paths back to it.

| Mode | You are… | Skills |
|------|----------|--------|
| **🔍 Searching** | looking for a new role | resume-review · tailor-to-job · interview-prep · offer-review · job-application |
| **🧭 Pivoting** | changing direction | career-clarity · skills-market-report |
| **📈 Growing** | advancing where you are | earn-more-plan · comp-analysis · performance-self-review · difficult-conversation |
| **🌱 Thriving** | maintaining a healthy career | career-checkin · win-log · network-maintenance |

At the center sits **`career-profile`** — a one-time interview that builds a
persistent profile every other skill reads from, so you never re-explain yourself.

## How it fits together

```
                          ┌───────────────────┐
                          │   career-profile   │  ← read by everything,
                          │  (shared context)  │     written by several
                          └─────────┬─────────┘
             ┌──────────────┬───────┴───────┬───────────────┐
        🔍 SEARCHING    🧭 PIVOTING     📈 GROWING       🌱 THRIVING
        resume-review   career-clarity  earn-more-plan   win-log
             ↓             ↓             comp-analysis    career-checkin
        tailor-to-job   skills-market-  performance-     network-
             ↓          report          self-review      maintenance
        interview-prep     ↑            difficult-
        offer-review       │            conversation
        job-application    └──── Teal MCP ───┘   (live job-market data,
                                                  with graceful fallback)
```

## Skill inventory

Use a skill by asking your agent for it directly, for example:
`Use $career-profile to set up my career context` or
`Use $earn-more-plan to compare ways I could make more money`.

### Foundation

| Skill | What it is for | Example use |
|------|----------------|-------------|
| `career-profile` | Creates the persistent `.agents/career-profile.md` context every other skill reads. Best first step if the user has a resume, LinkedIn export, or messy career history. | `Use $career-profile to build my profile from my resume and LinkedIn export.` |
| `teal-mcp` | Connects the Teal MCP (live job-market data) to your client — free account, OAuth login, no API keys — and verifies it with a real query. | `Use $teal-mcp to hook up live job-market data.` |

### Money / Cross-mode

| Skill | What it is for | Example use |
|------|----------------|-------------|
| `earn-more-plan` | Compares three realistic ways to make more money: grow on the current path, change market/company/location, or build/pivot into higher upside. Produces an interactive HTML report. | `Use $earn-more-plan to show me three paths to higher compensation with my constraints.` |

### Searching

| Skill | What it is for | Example use |
|------|----------------|-------------|
| `resume-review` | Reviews a resume without a specific job description and gives scored, concrete rewrite suggestions. | `Use $resume-review to review this resume and tell me what to fix first.` |
| `tailor-to-job` | Matches and rewrites a resume against a specific job description. | `Use $tailor-to-job with my resume and this job posting.` |
| `interview-prep` | Builds likely interview questions, prep notes, and a STAR story bank from a resume and job description. | `Use $interview-prep to prepare me for this PM interview.` |
| `offer-review` | Breaks down an offer or compensation package and benchmarks it against market context when data is available. | `Use $offer-review to evaluate this offer letter and equity package.` |
| `job-application` | Uses computer/browser tools to help fill out a job application from profile and tailored materials. | `Use $job-application to draft this application form from my profile.` |

### Pivoting

| Skill | What it is for | Example use |
|------|----------------|-------------|
| `career-clarity` | Runs an adaptive interview around energizers, drainers, values, workstyle, skills, domains, company stage, and constraints to identify candidate directions. | `Use $career-clarity to figure out whether I want a new role, a new company, or a bigger pivot.` |
| `skills-market-report` | Uses job-market data to compare a target role against the user's current skills and create a 30/60/90 proof-building roadmap. | `Use $skills-market-report to see what product marketing roles require and where my gaps are.` |

### Growing

| Skill | What it is for | Example use |
|------|----------------|-------------|
| `comp-analysis` | Benchmarks current compensation against market data for a role, level, and location. | `Use $comp-analysis to tell me where my senior PM comp sits in the market.` |
| `performance-self-review` | Turns wins, feedback, misses, and goals into an honest performance self-review draft with evidence and calibration notes. | `Use $performance-self-review to draft my midyear self-assessment.` |
| `difficult-conversation` | Prepares framing, talking points, and anticipated responses for a hard manager conversation: raise, scope, conflict, or exit. | `Use $difficult-conversation to prepare for asking my manager about promotion scope.` |

### Thriving

| Skill | What it is for | Example use |
|------|----------------|-------------|
| `career-checkin` | Runs a periodic reality check: how work feels, how the company may perceive the user, what is evidence vs. story, and what to adjust next. | `Use $career-checkin to help me figure out if I am on track or gaslighting myself.` |
| `win-log` | Maintains an evidence-backed brag doc with dated wins and resume-ready bullets. | `Use $win-log to capture what I got done this week.` |
| `network-maintenance` | Helps keep professional relationships warm with a prioritized reconnect list and light outreach drafts. | `Use $network-maintenance to figure out who I should reconnect with this month.` |

## Install

```bash
# Add the whole library
npx skills add Teal-Tools/career-skills

# Or install as a Claude Code plugin (marketplace)
# see .claude-plugin/marketplace.json

# Or just clone it
git clone https://github.com/Teal-Tools/career-skills
```

Skills are also installable individually — grab only the ones you need.

## Connect the Teal MCP (live market data)

Every data-driven skill works with data you paste in — and gets much sharper connected
to the **Teal MCP**: live, aggregated job postings (last 60 days) powering comp
benchmarks, offer reviews, skill-gap reports, and pay plans.

All you need is a **free [Teal](https://tealhq.com) account** and the server URL:

```
https://mcp.tealhq.com/mcp
```

- **Claude Code:** `claude mcp add --transport http teal https://mcp.tealhq.com/mcp`,
  then `/mcp` to log in
- **Claude (claude.ai / desktop / Cowork):** Settings → Connectors → Add custom
  connector → paste the URL
- **ChatGPT:** Settings → Apps & Connectors → create a custom connector with the URL
  (enable Developer mode if it's not visible)
- **Codex, OpenClaw, Hermes & other MCP clients:** add a remote (streamable HTTP)
  server named `teal` pointing at the URL

Auth is a browser OAuth login — no API keys. Or just ask your agent:
`Use $teal-mcp to set up live job-market data` — it configures, authenticates, and
verifies the connection for you.

## Design docs

- [`CLAUDE.md`](./CLAUDE.md) — the build brief (read first if you're contributing)
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — layout, resolution rule, diagram
- [`docs/SKILL-INVENTORY.md`](./docs/SKILL-INVENTORY.md) — every skill, described
- [`docs/ROADMAP.md`](./docs/ROADMAP.md) — build order and candidate growth skills
- [`docs/DECISIONS.md`](./docs/DECISIONS.md) — what's locked, what's open

## License

MIT — see [`LICENSE`](./LICENSE).

---

<div align="center">

Built by **[Teal](https://tealhq.com)** — the AI-powered career platform.
Connect the Teal MCP to power these skills with live market data.

</div>
