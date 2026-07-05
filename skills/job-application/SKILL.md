---
name: job-application
description: Use when the user wants an application form filled out using computer use (Codex/Cowork). Build this LAST — most environment-dependent.
---

# job-application

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Searching**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use when the user wants an application form filled out using computer use (Codex/Cowork). Build this LAST — most environment-dependent.

## Input
A target application URL/form, plus career-profile and a tailored resume.

## Deliverable (exactly one)
A completed or draft application.

## Dependencies
career-profile; tailor-to-job.

## Teal MCP usage
None required.

## Notes / guardrails
Requires computer-use-capable environment. Always let the user review before submit.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
