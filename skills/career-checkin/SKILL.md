---
name: career-checkin
description: Use for a periodic (e.g. quarterly) career check-in against the user's profile — are they still on track, and what should they adjust?
---

# career-checkin

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Thriving**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use for a periodic (e.g. quarterly) career check-in against the user's profile — are they still on track, and what should they adjust?

## Input
An existing career-profile plus a light interview.

## Deliverable (exactly one)
A check-in summary, drift flags, and 1-3 concrete next actions.

## Dependencies
career-profile; references/interview-technique.md.

## Teal MCP usage
Optional.

## Notes / guardrails
Ship in v1 alongside win-log so the Thriving quadrant isn't empty at launch.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
