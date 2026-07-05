# Decisions

A running log of what's **locked** and what's still **open**. When you resolve an open
decision, move it up to Locked with a date and a one-line rationale.

## Locked

- **Org / namespace:** `Teal-Tools/career-skills`. Public. MIT. Presented as an
  official Teal open-source project (matches the org's existing public repo).
- **Repo name:** `career-skills` for discovery. "Thriving" / four-mode language is the
  *narrative* in README and marketing, not the repo name.
- **Architecture:** hybrid — discrete, individually-installable skills unified by the
  `career-profile` shared-context document. Installable à la carte or as one plugin.
- **Foundation:** `career-profile` is built first; every skill reads it; it absorbs the
  "capabilities dump" idea as its deep-interview path.
- **Compatibility:** author once against the LCD skill spec (`name`+`description`
  frontmatter); canonical `AGENTS.md`; thin per-CLI wrappers; symlink `skills/` into
  each CLI dir (fallback: sync script). Targets: Claude Code, Cowork, Codex, OpenClaw,
  Hermes.
- **MCP posture:** Teal MCP is an *enhancement layer*, never a hard dependency. Every
  skill works standalone with pasted data.
- **Resolution rule:** one skill = one JTBD + one deliverable. `resume-review` and
  `tailor-to-job` kept separate but share the rubric. `comp-analysis` and
  `skills-market-report` kept separate but share `teal-mcp.md`.
- **Positioning:** cover Searching competently; **lead with Growing + Thriving**. Do
  not try to out-job-search career-ops. Stay light — no dashboard, no scanners.
- **GTM:** repo is top-of-funnel for the MCP and Teal; each skill is its own
  LinkedIn/YouTube artifact; light Teal footer on each skill.
- **Versioning/install:** semver + rename map in VERSIONS.md; install via
  `npx skills add`, plugin marketplace, and git clone.

## Open (resolve before v1 ships)

1. **Thriving in v1 or fast-follow?** Recommendation: ship ≥2 Thriving skills
   (`win-log` + `career-checkin`) in v1 so the four-quadrant story is complete.
2. **`resume-review` / `tailor-to-job` final merge call?** Recommendation: keep
   separate, share rubric. Revisit only if behavior converges.
3. **Symlink vs. sync script** — decided by the §6 compatibility spike. Record the
   result here.
4. **Exact plugin-marketplace schema** — verify `.claude-plugin/marketplace.json`
   against the current spec during the spike; update the stub.
