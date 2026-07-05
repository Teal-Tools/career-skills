// validate.mjs — [SPEC] structure/frontmatter linter for the skills library.
// Not yet implemented. Intended checks (build this out early, it pays for itself):
//
//   1. Every skills/<name>/SKILL.md has valid frontmatter with `name` + `description`.
//   2. `name` matches its directory name.
//   3. `description` includes trigger phrasing ("Use when…").
//   4. No SKILL.md uses CLI-specific features in its core path.
//   5. Cross-references in skills point at references/ files that actually exist.
//   6. Each skill declares inputs, a single deliverable, dependencies, and MCP
//      usage with a fallback.
//
// Run: node scripts/validate.mjs
//
// TODO: implement. Keep it dependency-free (plain Node, no build step) so it runs
// anywhere the skills do.

console.log("validate.mjs is a stub — see CLAUDE.md §9 for the rules to enforce.");
process.exit(0);
