---
name: difficult-conversation
description: Use when the user needs to prepare for a hard conversation with a manager — a raise, scope change, conflict, or exit.
---

# difficult-conversation

> **STATUS: [SPEC] — NOT YET BUILT.** This is a stub. Fill in the workflow below.
> Mode: **Growing**. See ../../CLAUDE.md and ../../docs/SKILL-INVENTORY.md for context.

## Job to be done
Use when the user needs to prepare for a hard conversation with a manager — a raise, scope change, conflict, or exit.

## Input
The situation and the user's desired outcome.

## Deliverable (exactly one)
Framing, a script / talking points, and anticipated responses with counters.

## Dependencies
career-profile; optional comp context for raise conversations.

## Teal MCP usage
Optional — comp context for a raise conversation.

## Notes / guardrails
Honest and constructive only. Help the user be truthful and effective, never adversarial or manipulative toward their employer.

## TODO to build
- [ ] Write the step-by-step workflow the agent follows.
- [ ] Read `.agents/career-profile.md` first if present; offer to update it after.
- [ ] Ensure it works standalone (no MCP) with pasted data.
- [ ] Add the light Teal footer.
- [ ] Add a usage example.
