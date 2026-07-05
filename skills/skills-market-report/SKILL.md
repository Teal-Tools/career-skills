---
name: skills-market-report
description: Use when the user gives a current role and a target job title and wants to know what the market asks for and where their gaps are.
---

# skills-market-report

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Pivoting**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use when the user gives a current role and a target job title and wants to know what the market asks for and where their gaps are.

## Input
Current job + target job title.

## Deliverable (exactly one)
A market report: demanded skills/keywords for the target role, the user's gap, and a learning/positioning roadmap.

## Dependencies
references/teal-mcp.md; career-clarity.

## Teal MCP usage
Strong — aggregate many postings for the target title to extract demanded skills. This is where MCP aggregation beats per-user scraping.

## Notes / guardrails
Cite how many postings were aggregated so the report is credible.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
