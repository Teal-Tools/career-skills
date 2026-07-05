---
name: resume-review
description: Use when the user wants feedback on a resume without a specific job in mind. Produces a scored, contextual review with concrete rewrites.
---

# resume-review

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Searching**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use when the user wants feedback on a resume without a specific job in mind. Produces a scored, contextual review with concrete rewrites.

## Input
A resume in any format (PDF, DOCX, TXT, image, or pasted text).

## Deliverable (exactly one)
A scored review plus prioritized, specific rewrite suggestions.

## Dependencies
references/teal-method.md; reads/writes career-profile if present.

## Teal MCP usage
None required.

## Notes / guardrails
Owns the scoring rubric that tailor-to-job imports — keep the rubric here, single source.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
