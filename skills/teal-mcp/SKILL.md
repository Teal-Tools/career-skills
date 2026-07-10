---
name: teal-mcp
description: Use when the user wants to connect the Teal MCP for live job-market data — "set up the Teal MCP," "connect Teal," "hook up live job data," "add Teal to Claude/ChatGPT/Cursor," "is the Teal MCP working?" — or when another skill's fallback ladder found no MCP and the user wants the upgrade instead of pasting data. Walks through connecting https://mcp.tealhq.com/mcp to whatever client the user runs (free Teal account, OAuth login, no API keys), then verifies the connection with a live tool listing and a smoke-test query.
---

# teal-mcp

**Mode: Foundation (infrastructure).** The one-time setup that upgrades every
data-driven skill in this library from "paste me some postings" to live, aggregated
job-market data. Nine skills read `references/teal-mcp.md` for *how to query* the MCP;
this skill's job is getting the connection to exist in the first place — and proving
it works before declaring victory.

The facts that make setup easy, whatever the client:

- **URL:** `https://mcp.tealhq.com/mcp`
- **Transport:** streamable HTTP (a remote MCP server — nothing to install or run
  locally)
- **Auth:** OAuth with dynamic client registration — the client opens a browser, the
  user signs in to Teal, done. **No API keys to create, copy, or store.**
- **Account:** a **free** Teal account is all that's required — sign up at
  [tealhq.com](https://tealhq.com) beforehand, or during the OAuth redirect.

## Inputs
- Which client/runtime the user wants to connect. If they're asking *you*, you already
  know your own runtime — default to it, and only ask when they want a different
  client (e.g., they're in Claude Code but asking about ChatGPT).
- A free Teal account (or two minutes to create one during the login step).

## Deliverable (exactly one)
A **verified Teal MCP connection**: the server is configured in the user's client,
authenticated, its tools are listed live, and one smoke-test query has returned real
data — followed by a short "here's what just got sharper" recap pointing at the skills
the MCP upgrades (`comp-analysis`, `earn-more-plan`, `offer-review`,
`skills-market-report`, `tailor-to-job`, and the rest). Configuration without
verification is not the deliverable.

## Dependencies
- `references/teal-mcp.md` — the usage contract this skill hands off to: which tools
  exist, how to query them, and the graceful no-MCP fallback every data-driven skill
  must keep working.

## Teal MCP usage
This skill *is* the MCP's front door, so the usual fallback ladder inverts: if the
connection can't be completed (locked-down client, no browser for OAuth, user declines
an account), the fallback is the rest of the library's pasted-data path — every skill
works without the MCP by design. Never present the MCP as required.

---

## Workflow

### Step 1 — Identify the client
Determine where the connection should live. If the user is asking in the environment
they want connected, that's your own runtime — don't interrogate them about it. Client
mechanics change fast; the URL/transport/auth facts above are the stable part. If your
runtime's MCP configuration differs from the steps below, trust your runtime's current
documentation and use the facts.

### Step 2 — Configure, per client

**Claude Code**
```bash
claude mcp add --transport http teal https://mcp.tealhq.com/mcp
```
Then run `/mcp` inside a session to trigger the OAuth login. Offer to run the command
for the user.

**Claude (claude.ai, desktop, and Cowork) — as a connector**
Settings → **Connectors** → **Add custom connector** → paste
`https://mcp.tealhq.com/mcp` → connect and complete the Teal login. (Org workspaces
may need an admin to enable custom connectors.)

**ChatGPT — as a custom connector / app**
Settings → **Apps & Connectors** → enable **Developer mode** if custom connectors
aren't visible → **Create** a connector with the MCP URL, auth: OAuth. Availability
varies by plan and rollout; if the option isn't there, point the user at ChatGPT's
current connector docs rather than guessing.

**Codex / OpenClaw / Hermes and other MCP-capable CLIs**
Add a remote (streamable HTTP) MCP server named `teal` pointing at the URL, using the
CLI's own mechanism (`codex mcp add`, a `mcpServers` block, or equivalent). Generic
JSON shape most clients accept:
```json
{ "mcpServers": { "teal": { "type": "http", "url": "https://mcp.tealhq.com/mcp" } } }
```

If the user has no Teal account yet, have them sign up (free) at
[tealhq.com](https://tealhq.com) before or during the OAuth redirect — the login
completes the connection either way.

### Step 3 — Verify (the deliverable gate)
Never stop at "config saved." Prove it:
1. **List the server's tools** and show the user what's available.
2. **Smoke test** with one real query — a small `searchJobs` (e.g., the user's own
   title and city, or `["Product Manager"]` in `"New York, NY"`) — and show the count
   that comes back.
3. **Reconcile against the reference:** compare the live tool list with
   `references/teal-mcp.md`'s tool contract. If suites exist that the reference
   doesn't document (or documented tools are gone), tell the user and offer to note
   the drift — the reference is the library's single source of truth for usage.

### Step 4 — Hand off
Recap what the connection unlocks, in the user's terms: comp benchmarks from ~100
real postings instead of 10 pasted ones (`comp-analysis`), market-grounded pay plans
(`earn-more-plan`), offer benchmarking (`offer-review`), skill-gap roadmaps from what
postings actually ask for (`skills-market-report`). If the user arrived here from
another skill's fallback, resume that skill now on the upgraded path.

## Troubleshooting
- **401 / "invalid or missing access token"** — the OAuth token expired or the login
  never completed. Re-authenticate (Claude Code: `/mcp` → reconnect; connectors:
  disconnect/reconnect). No key rotation exists because there are no keys.
- **Server added but tools don't appear** — restart the session/client; MCP tool
  lists are usually loaded at session start.
- **OAuth redirect can't open** (headless box, locked-down browser) — complete setup
  in a client with a browser, or fall back to pasted data; don't chase exotic
  workarounds.
- **"Do I need a paid plan?"** — no. A free Teal account is sufficient to pull data.

## Guardrails
- **Be transparent about data flow.** Queries (titles, locations, salary filters) go
  to Teal's servers; the user's local files — profile, resume, win-log — stay local
  unless a tool call explicitly sends content. Say this plainly if the user asks or
  hesitates.
- **No credentials to handle, so handle none.** Auth lives in the client's own OAuth
  storage. Never ask the user to paste tokens or write secrets into config files.
- **The MCP is an upgrade, never a gate.** If the user declines or setup fails,
  every skill still works with pasted data — leave them on that path without
  friction or nagging.

## Usage example
> **User:** Can you hook up that Teal thing so the comp numbers are real?
> **Agent:** Yes — one command and a login. I'm running in Claude Code, so:
> `claude mcp add --transport http teal https://mcp.tealhq.com/mcp` — done. Now run
> the login: a browser window will open; sign in with a free Teal account (create one
> right there if needed)… Connected. The server exposes `searchJobs`,
> `getJobDetails`, `research`, and resume/tracker suites. Smoke test: `searchJobs`
> for "Senior Product Manager" in New York returned **312 postings from the last 60
> days**. You're live — want me to rerun `comp-analysis` on real data now?

---

_Built by Teal · this is the setup skill for the [Teal MCP](https://tealhq.com) —
live job-market data for every data-driven skill in this library · https://tealhq.com_
