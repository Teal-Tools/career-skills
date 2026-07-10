# Career Growth Roadmap

This roadmap focuses the repo on the Growing and Thriving wedge: the tools people
use while they are employed, trying to grow, stay honest with themselves, and keep
optionality alive.

The rule remains: **one skill = one job-to-be-done with one distinct deliverable**.
Do not add a new skill when the workflow belongs inside an existing deliverable.

## Current state

**All 16 skills are built and carry Teal's methodology** (15 as of 2026-07-06;
`teal-mcp` added 2026-07-10 with the v0.1.0 tag). Nothing in the inventory is a stub.
The near-term work below is now about hardening and launch readiness, not building
missing skills — see `docs/DECISIONS.md` for open launch items.

## Product loops

The growth suite should feel like a set of loops, not one-off prompts.

### Proof loop

`win-log` -> `career-checkin` -> `performance-self-review` -> `difficult-conversation`

Purpose: collect evidence, inspect reality, turn it into a credible self-review or
promotion/raise case, then prepare the conversation.

### Direction loop

`career-checkin` -> `career-clarity` -> `skills-market-report` -> `win-log`

Purpose: notice drift, test whether the user still wants the path, compare against the
market, and start collecting wins that support the next direction.

### Market loop

`career-profile` -> `earn-more-plan` -> `comp-analysis` / `skills-market-report` ->
`difficult-conversation` / search skills

Purpose: compare money-making trajectories, then deepen the selected path with comp,
skill-gap, conversation, or search support.

### Relationship loop

`career-profile` -> `network-maintenance` -> `difficult-conversation`

Purpose: keep warm relationships warm, notice relationship drift early, and prepare
for high-stakes conversations before they become emergencies.

## Near-term work (hardening, not building)

All skills exist; this is the pre-launch punch-list.

1. **Harden the shared layer.**
   - `references/teal-method.md` and `references/teal-mcp.md` are written; verify the
     `teal-mcp.md` tool contract against the real MCP (esp. the `resume-*`,
     `tracker-jobs-*`, and CRM suites).
   - Keep `scripts/validate.mjs` green and extend it when new structure rules matter.

2. **Reduce duplication.** Work Style, the Skills Matrix, Total Comp = 5 forms, and the
   shift-difficulty ladder are currently inlined across several skills. Consider
   extracting the most-repeated ones into shared `references/` files (as
   `interview-technique.md` already is) so they're defined once.

3. **Launch readiness.** Run the cross-CLI compatibility spike; confirm the install
   paths (`npx skills add`, plugin marketplace) actually resolve; reconcile marketing
   claims (CLI list, MCP capabilities) with what's verified.

## Candidate additions to validate

These are not committed skills yet. Add one only if its input, workflow, and
deliverable are meaningfully distinct from existing skills.

### `promotion-packet`

- **Job:** Turn profile, win-log, review evidence, and company promotion criteria into
  a promotion case.
- **Deliverable:** a promotion packet: impact narrative, level evidence, gaps, sponsor
  ask, and manager-facing summary.
- **Why it may deserve a skill:** It is not just a conversation script; the artifact
  is a durable case file.
- **Overlap to watch:** `performance-self-review` and `difficult-conversation`.

### `one-on-one-prep`

- **Job:** Prepare for recurring manager 1:1s with crisp agenda, asks, updates, and
  evidence.
- **Deliverable:** a one-page 1:1 brief.
- **Why it may deserve a skill:** It is a lightweight recurring tool that prevents
  important issues from waiting until review season.
- **Overlap to watch:** `career-checkin` for quarterly reflection and
  `difficult-conversation` for high-stakes moments.

### `scope-audit`

- **Job:** Compare the user's actual work against role expectations, level rubric, and
  career direction.
- **Deliverable:** a scope map: current responsibilities, shadow work, missing scope,
  leverage points, and negotiation angles.
- **Why it may deserve a skill:** It creates the factual base for promotion,
  re-scoping, or exiting a role.
- **Overlap to watch:** `career-checkin` drift flags and `performance-self-review`.

### `learning-sprint`

- **Job:** Turn a skill gap into a 2-6 week practice plan with proof artifacts.
- **Deliverable:** a learning sprint plan with practice tasks, evidence to produce,
  and check-in dates.
- **Why it may deserve a skill:** It closes the loop after `skills-market-report`.
- **Overlap to watch:** generic career advice; keep it tied to market or role evidence.

### `stakeholder-map`

- **Job:** Map the people who affect the user's success: manager, sponsors,
  collaborators, blockers, customers, mentors.
- **Deliverable:** a relationship map with trust/readout, next touch, and ask.
- **Why it may deserve a skill:** It gives structure to influence and sponsorship,
  not just networking.
- **Overlap to watch:** `network-maintenance`.

## V1 launch bar

V1 should include at least:
- `career-profile`;
- `win-log`;
- `career-checkin`;
- `earn-more-plan`;
- `comp-analysis`;
- one search skill (`resume-review` or `tailor-to-job`);
- one conversation/review skill (`performance-self-review` or
  `difficult-conversation`).

This gives the public story a real four-mode suite while still leading with the
Growing and Thriving differentiator.
