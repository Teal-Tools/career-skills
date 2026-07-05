<div align="center">

# Career Skills

**AI agent skills for every stage of your career — searching, pivoting, growing, and thriving.**

Runs on Claude Code · Claude Cowork · Codex · OpenClaw · Hermes

`npx skills add Teal-Tools/career-skills`

Built by [Teal](https://tealhq.com)

</div>

---

> **Status: early scaffold.** This repo is under active construction. The
> architecture and skill inventory are locked; the skills themselves are being
> built. See [`docs/`](./docs) for the full design and [`CLAUDE.md`](./CLAUDE.md)
> for the build brief.

## What this is

A library of composable **skills** an AI agent runs to help you do a specific,
real thing in your career. Not a chatbot. Not a course. Each skill does one job and
produces one clear deliverable — review a resume, prep for an interview, benchmark
your comp, run an honest self-review, keep your network warm.

Skills work standalone with information you paste in, and get sharper when connected
to the **[Teal MCP](https://tealhq.com)** for live, aggregated job-market data.

## The four modes

Every skill belongs to one of four modes — the state you're in with your career.
**Thriving** is the equilibrium; the other three are paths back to it.

| Mode | You are… | Skills |
|------|----------|--------|
| **🔍 Searching** | looking for a new role | resume-review · tailor-to-job · interview-prep · offer-review · job-application |
| **🧭 Pivoting** | changing direction | career-clarity · skills-market-report |
| **📈 Growing** | advancing where you are | comp-analysis · performance-self-review · difficult-conversation |
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
        resume-review   career-clarity  comp-analysis    win-log
             ↓             ↓             performance-     career-checkin
        tailor-to-job   skills-market-  self-review      network-
             ↓          report          difficult-       maintenance
        interview-prep     ↑            conversation
        offer-review       │                ↑
        job-application    └──── Teal MCP ───┘   (live job-market data,
                                                  with graceful fallback)
```

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

## Design docs

- [`CLAUDE.md`](./CLAUDE.md) — the build brief (read first if you're contributing)
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — layout, resolution rule, diagram
- [`docs/SKILL-INVENTORY.md`](./docs/SKILL-INVENTORY.md) — every skill, described
- [`docs/DECISIONS.md`](./docs/DECISIONS.md) — what's locked, what's open

## License

MIT — see [`LICENSE`](./LICENSE).

---

<div align="center">

Built by **[Teal](https://tealhq.com)** — the AI-powered career platform.
Connect the Teal MCP to power these skills with live market data.

</div>
