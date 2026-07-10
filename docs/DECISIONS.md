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
  `skills-market-report` kept separate but share `teal-mcp.md`. `earn-more-plan` is
  separate because it compares multiple money trajectories in one interactive report.
- **Positioning:** cover Searching competently; **lead with Growing + Thriving**. Do
  not try to out-job-search career-ops. Stay light — no dashboard, no scanners.
- **GTM:** repo is top-of-funnel for the MCP and Teal; each skill is its own
  LinkedIn/YouTube artifact; light Teal footer on each skill.
- **Versioning/install:** semver + rename map in VERSIONS.md; install via
  `npx skills add`, plugin marketplace, and git clone.
- **Thriving ships in v1:** decided 2026-07-05. Ship at least `win-log` and
  `career-checkin` in v1 so the four-mode story is real at launch, not a promise.
- **Symlink vs. sync script:** decided 2026-07-05 — symlinks (`.claude/skills` and
  `.agents/skills` → `skills/`) are the default; `scripts/sync.mjs` mirrors
  (copies) `skills/` into each target instead, for Windows/CI/zip flows where
  symlinks are fragile. Same strategy either way, per CLAUDE.md §6.
- **All skills built:** as of 2026-07-05, every skill in the inventory has a full
  `SKILL.md` (no remaining `[SPEC]` stubs). 2026-07-10: `teal-mcp` (MCP setup +
  verification) added as skill #16; **v0.1.0 tagged** — see `VERSIONS.md`.
- **Plugin-marketplace schema (resolved 2026-07-09):** `.claude-plugin/marketplace.json`
  verified against the official plugin-marketplace docs — schema-valid as-is; the spec
  **auto-discovers `skills/` from the plugin root** and does not want skills enumerated
  in the manifest, so "list the shipped skills" was a non-requirement. Optional
  polish (a `plugin.json`, `homepage`/`license` fields, a `renames` map) noted for
  later.
- **Teal methodology pulled in (2026-07-06):** the skills now carry Teal's actual
  frameworks rather than placeholder stand-ins. `references/teal-method.md` is the
  **Achievement Formula** (Skill + Proof; Proof = Metric + Outcome; bullet = Success
  Verb + Noun/Keyword + Metric + Outcome) — the earlier invented "Task/Execution/
  Amplifier/Lift" draft is gone. `skills/career-profile/profile-schema.md` is locked
  (no `[SPEC]`) around Teal's self-discovery outputs (Work Style, Values → Motivation
  → Vision, Skills Matrix, Blurb). Comp/offer use Total Comp = 5 forms; resume/JD use
  the Achievement Formula + Job Posting Analysis; self-discovery uses Work Style /
  Values / Skills Matrix / 4 G's; interview/network/growth carry the 5 hiring stages,
  the +2/+7/+14 cadence, Career Health, and the shift-difficulty ladder. See
  `docs/TEAL-INPUT-AUDIT.md` (internal — do not publish) for the source mapping.

## Open (resolve before v1 ships)

1. **`resume-review` / `tailor-to-job` final merge call?** Recommendation: keep
   separate, share rubric. Revisit only if behavior converges.
2. **Cross-CLI compatibility spike (§6) not yet run.** README claims the library
   "runs on" Claude Code, Cowork, Codex, OpenClaw, and Hermes, but the symlink-vs-sync
   spike has not been executed on those targets or on Windows. Verify before making the
   five-CLI claim publicly.
3. **Unverified Teal MCP tool suites.** Skills and footers reference `resume-*`,
   `tracker-jobs-*`, and "Teal CRM" MCP tools that `references/teal-mcp.md` names but
   does not document. Resolution path exists: run the `teal-mcp` skill with a real
   Teal login — its verify step lists the live tools and reconciles them against the
   reference. Until then, confirm they exist or soften the capability promises.
4. **`docs/TEAL-INPUT-AUDIT.md` is tracked but internal.** Remove it from the repo
   (and from git history) before any public push, or explicitly bless it as
   publishable.
