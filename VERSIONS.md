# Versions

Semantic versioning. This file also carries a **rename map** so that when skills
are consolidated or renamed, old install paths still resolve.

## [Unreleased]
- Initial scaffold: architecture, 15 skill specs, three shared references, brief.
- Added `earn-more-plan` as a cross-mode money strategy skill with an interactive
  HTML report deliverable.
- Nothing shipped yet.

## Rename map
_(empty — populate when skills are renamed or merged; format below)_

| Old skill path | New skill path | Since version |
|----------------|----------------|---------------|
| _example: skills/old-name_ | _skills/new-name_ | _v0.2.0_ |

## Release checklist (for later)
- [ ] All shipped skills pass `scripts/validate.mjs`
- [ ] Compatibility verified across target CLIs (see CLAUDE.md §6)
- [ ] README four-mode table matches the shipped skill set
- [ ] `.claude-plugin/marketplace.json` lists shipped skills
- [ ] Tag with semver, update this changelog
