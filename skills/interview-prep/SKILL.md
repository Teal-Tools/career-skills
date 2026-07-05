---
name: interview-prep
description: Use when the user gives a resume and a job description and wants to prepare for an interview. Builds likely questions and a STAR story bank.
---

# interview-prep

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Searching**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use when the user gives a resume and a job description and wants to prepare for an interview. Builds likely questions and a STAR story bank.

## Input
A resume + JD (+ company name if known).

## Deliverable (exactly one)
Likely questions, a STAR/story bank drawn from the user's history, and prep notes.

## Dependencies
references/interview-technique.md; tailor-to-job output; career-profile.

## Teal MCP usage
Optional — company/role context.

## Notes / guardrails
Draw stories from career-profile so the user isn't re-entering their history.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
