# Career Growth Roadmap

This roadmap focuses the repo on the Growing and Thriving wedge: the tools people
use while they are employed, trying to grow, stay honest with themselves, and keep
optionality alive.

The rule remains: **one skill = one job-to-be-done with one distinct deliverable**.
Do not add a new skill when the workflow belongs inside an existing deliverable.

## Current state

Built enough to use:
- `career-profile` - shared career context and capabilities dump.
- `win-log` - ongoing evidence capture and resume-ready wins.
- `comp-analysis` - market-backed compensation report.
- `earn-more-plan` - interactive money strategy report with three trajectories.
- `career-checkin` - periodic reality check, evidence audit, drift flags, next moves.
- `performance-self-review` - evidence-backed review draft with calibration notes.
- `career-clarity` - pivot interview, candidate directions, market notes, experiments.
- `skills-market-report` - market skill-gap report and proof-building roadmap.

Still stubs:
- Searching: `resume-review`, `tailor-to-job`, `interview-prep`, `offer-review`,
  `job-application`.
- Growing: `difficult-conversation`.
- Thriving: `network-maintenance`.

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

## Near-term build order

1. **Harden the shared layer.**
   - Finish `references/teal-method.md`.
   - Finish `references/teal-mcp.md`.
   - Keep `scripts/validate.mjs` green and extend it when new structure rules become
     important.

2. **Complete the growth spine.**
   - Build `difficult-conversation`: turns a clear desired outcome into framing,
     talking points, anticipated pushback, and follow-up notes.
   - Build `network-maintenance`: creates a reconnect list and lightweight outreach
     drafts from profile/context.

3. **Fill table-stakes search flows.**
   - Build `resume-review`, then `tailor-to-job`, then `interview-prep`.
   - Build `offer-review` after `comp-analysis` and `difficult-conversation`.
   - Leave `job-application` last because it depends most on computer-use runtime
     details.

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
