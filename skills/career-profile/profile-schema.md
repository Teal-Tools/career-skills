# `.agents/career-profile.md` — Schema

**Status: [SPEC].** This defines the persistent context file `career-profile` writes
and every other skill reads. Keep it human-readable markdown (not JSON) so users can
edit it and any CLI can parse it.

## Proposed sections
```markdown
# Career Profile

## Identity
- Name, current title, company, location, years of experience

## History
- Roles (company, title, dates, scope, headline wins) — the capabilities-dump output

## Current situation
- Current role summary, level, comp (base / equity / bonus), satisfaction

## Direction
- Target role(s) / title(s), target comp, timeline, mode (searching/pivoting/growing/thriving)

## Energizers & drainers
- What lights the user up / flattens them (from career-clarity)

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
- **Writers:** `career-profile` (all), `career-clarity` (direction, energizers,
  running toward/from), `win-log` (wins), `career-checkin` (meta, drift).
- Any skill that learns something durable **offers** to update the relevant section —
  it does not silently overwrite.
- Preserve user edits; append/merge rather than clobber.

## TODO
- Finalize section list and field names.
- Define the merge/update behavior precisely.
- Decide file location convention across the five CLIs (confirm in the compat spike).
