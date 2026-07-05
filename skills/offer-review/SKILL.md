---
name: offer-review
description: Use when the user has a job offer or comp package and wants it evaluated, explained, or benchmarked against the market.
---

# offer-review

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Searching**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use when the user has a job offer or comp package and wants it evaluated, explained, or benchmarked against the market.

## Input
An offer letter and/or full comp details (base, equity, bonus, benefits).

## Deliverable (exactly one)
A plain-language breakdown, a market comparison, and questions to ask before signing.

## Dependencies
comp-analysis; references/teal-mcp.md.

## Teal MCP usage
Strong — benchmark the offer against aggregated comp for the role/level/geography.

## Notes / guardrails
This is money advice: present ranges and sources, never a directive to accept/reject.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
