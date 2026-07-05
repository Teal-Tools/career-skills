---
name: performance-self-review
description: Use when the user wants to prepare an honest self-assessment or performance review. Runs a grill-me interview, then drafts a candid self-review.
---

# performance-self-review

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Growing**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use when the user wants to prepare an honest self-assessment or performance review. Runs a grill-me interview, then drafts a candid self-review.

## Input
An adaptive interview; win-log / career-profile if present.

## Deliverable (exactly one)
A candid self-review draft (strengths, gaps, evidence, goals).

## Dependencies
references/interview-technique.md; win-log.

## Teal MCP usage
None required.

## Notes / guardrails
Push for honesty and evidence; be constructive, never harsh or manipulative.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
