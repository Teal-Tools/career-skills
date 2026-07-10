# `.agents/career-profile.md` — Schema

This defines the persistent context file `career-profile` writes and every other skill
reads. Keep it human-readable markdown (not JSON) so users can edit it and any CLI can
parse it. The sections map directly to the outputs of Teal's self-discovery method
(Work Style, Values → Motivation → Vision, Skills Matrix, the Blurb), so that whatever
`career-profile` and `career-clarity` produce lands in a shape every other skill can
read.

## Sections

```markdown
# Career Profile

## Identity
- Name, current title, company, location, years of experience

## Work Style
- Teal Work Style sequence, most-to-least (Director / Connector / Producer-Supporter / Protector)
- What energizes the user based on that sequence; environments/roles that fit it
- (from career-profile / career-clarity; may be self-reported if no assessment taken)

## Values → Motivation → Vision
- Top 3 values (e.g. Environment, Relationships, Identity, Income, Balance, Purpose)
- The motivation ("why") under each — the core driver
- One-line vision for the next role / chapter
- (from career-clarity)

## Skills
- Skills Matrix (2x2: is/isn't a skill x want more/want less):
  - Energizers (skill + want more) — what to get hired for; the focus
  - Assets (skill + want less) — use if needed
  - Potentials (not yet a skill + want more) — develop toward
  - Drainers (not a skill + want less) — avoid
- Natural strengths vs. acquired skills; general (transferable) vs. specific
- (from career-profile capabilities dump / career-clarity / skills-market-report)

## History
- Roles (company, title, dates, scope, headline achievements) — the capabilities-dump output

## Blurb
- The user's portable narrative: Experience + a memorable Achievement + Skills + Work
  Style strengths. Reused as resume summary, LinkedIn About, networking intro, and the
  "tell me about yourself" opener.
- (drafted here; refined by resume-review / interview-prep / network-maintenance)

## Current situation
- Current role summary, level, comp (base / equity / bonus), satisfaction

## Direction
- Target role(s) / title(s), target comp, timeline, mode (searching/pivoting/growing/thriving)
- Shift difficulty if pivoting: easy (industry+function) / moderate (function+skills) / hard (knowledge+skills)

## Running toward / running from
- Motivations pulling forward vs pushing away (from career-clarity)

## Constraints
- Location, remote/hybrid, comp floor, non-negotiables

## Wins log pointer
- Link/reference to accumulated wins (from win-log)

## Meta
- Last updated, which skills last touched it
- Sources ingested (e.g. LinkedIn export, resume v3.pdf, live fetch) — provenance
- Open questions / to-confirm — a running list of thin spots and unresolved items
```

### The `to-confirm` convention
Anything uncertain or unverified is written inline as `to-confirm` (e.g.
`- Base comp: $180k to-confirm`) and also collected under Meta → Open questions. This
lets a thin profile stay honest — nothing is fabricated to fill a blank — and gives
future runs (and `career-checkin`) a punch-list of what to chase down.

## Read/write contract
- **Every skill reads this first** (if present).
- **Writers:**
  - `career-profile` — all sections (owns Identity, Work Style, Skills, History, Blurb).
  - `career-clarity` — Work Style, Values → Motivation → Vision, Skills (Skills
    Matrix), Direction, Running toward/from.
  - `win-log` — Wins log pointer (and surfaces achievements that strengthen History/Blurb).
  - `career-checkin` — Meta, drift notes, and updates to Current situation / Direction.
  - `earn-more-plan` — target comp, constraints, selected trajectory (if approved).
- Any skill that learns something durable **offers** to update the relevant section — it
  does not silently overwrite.
- **Merge behavior:** preserve user edits; append/merge rather than clobber. When a
  field already has a value, propose the change and show old → new rather than
  overwriting silently. Carry `to-confirm` and `metric TODO` markers forward until
  resolved.

### File location
`.agents/career-profile.md` in the user's working directory. Every skill looks there
first; if absent, the skill proceeds from pasted/described context and offers to create
the profile.
