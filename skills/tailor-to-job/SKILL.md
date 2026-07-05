---
name: tailor-to-job
description: Use when the user has a resume AND a specific job description and wants the resume matched/tailored to it. Produces a tailored resume and a match assessment.
---

# tailor-to-job

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Searching**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use when the user has a resume AND a specific job description and wants the resume matched/tailored to it. Produces a tailored resume and a match assessment.

## Input
A resume + a target job description.

## Deliverable (exactly one)
A tailored resume/bullets plus a match assessment (gaps, emphasis changes).

## Dependencies
Imports resume-review's rubric; references/teal-method.md; career-profile; optional references/teal-mcp.md.

## Teal MCP usage
Optional — validate emphasis against what the market asks for the role.

## Notes / guardrails
Do NOT duplicate resume-review's rubric; import it.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
