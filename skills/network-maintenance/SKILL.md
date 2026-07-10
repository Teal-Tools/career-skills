---
name: network-maintenance
description: Use when the user wants to keep their professional network warm, catch up on relationships they've let go cold, figure out who to reconnect with and why, or draft a genuine outreach message before reaching out. Also use as a recurring monthly/quarterly relationship-upkeep ritual. Mines whatever contact history is reachable, prioritizes who's actually worth reaching out to now, and drafts short, specific, non-spammy messages the user sends themselves.
---

# network-maintenance

**Mode: Thriving.** Relationships decay by default — nobody schedules "stay in
touch," so warm contacts go cold until the user needs something, at which point
reaching out feels transactional and awkward for both sides. This skill exists to
close that gap before it opens: mine first, prioritize honestly, draft something a
real person would actually send.

Runs on-demand ("who should I reconnect with?") or as a recurring ritual (monthly or
quarterly). It never contacts anyone on the user's behalf — it prepares; the user
sends.

## Teal's networking system

Networking, in Teal's view, is **relationship management** — a system you maintain,
not a scramble you run when you need a job. A few principles ground everything below:

- **"It's not just who you know, it's who *they* know."** The real reach of a network
  is 2nd- and 3rd-degree — the people your contacts can introduce you to. Around
  **50% of people hear about jobs from friends** and about **37% from their
  professional network**, so warm relationships are the highest-yield channel there
  is.
- **Inbound vs. outbound.** Some connections come to you (inbound); most upkeep is
  outbound — you reaching out. This skill is mostly the outbound side, done well.
- **Mine your existing contacts first.** Family, friends, ex-colleagues, former
  classmates — people already know you. Start there before cold outreach.
- **Reciprocity is the point.** A healthy network is one you give to, not just draw
  from. Build reciprocity into every reach-out.

## Inputs
- Whatever the agent can reach passively (see Phase 1). Nothing is required.
- If nothing is connected: the user's own list of contacts — name, how they know
  them, and roughly how long since last contact is enough to start.
- Optional: a reason for the run ("I'm job-hunting again," "just doing my quarterly
  pass," "I owe someone a follow-up").

## Deliverable (exactly one)
An updated `.agents/network-maintenance.md` — a prioritized reconnect list (who, why
now, time since last contact, relationship value) plus a short, genuine outreach
draft for each contact the user wants to act on.

## Dependencies
- Reads `.agents/career-profile.md` if present — target direction and target
  companies/industries, so reconnects can be weighted toward where the user is
  actually headed, not just who's easiest to message.
- Reads `.agents/career-clarity.md` if present — candidate directions, for the same
  weighting when the profile's Direction section is thin.
- Writes/updates its own `.agents/network-maintenance.md`. Preserves prior entries;
  never clobbers.

## Teal MCP usage
Optional enhancement, never required. If Teal's CRM/relationship tools are exposed
via MCP, use them as a data source: saved contacts, connection dates, notes, and any
career-relevant signals Teal surfaces (a contact's job change, work anniversary,
shared history). Absent the MCP, the skill works fully from a user-supplied contact
list — it just does more of the remembering for the user when the data is there.
Never hard-fail because the MCP is missing.

---

## Workflow

### Step 0 — Orient
1. Read `.agents/career-profile.md` if present — pull Direction (target
   role/companies/industries) and Current situation, so relevance can be judged
   against where the user is actually going, not guessed at.
2. Read `.agents/career-clarity.md` if present for candidate directions, if the
   profile's Direction section is thin or absent.
3. Read `.agents/network-maintenance.md` if present. Note contacts already logged,
   their last status (drafted / sent / skipped), and any **owed follow-ups** flagged
   in a prior run — those carry forward until resolved.
4. Ask the reason for this run in one line if it isn't obvious: general upkeep,
   pre-job-search warmup, or "I owe someone a reply." This shifts prioritization
   weight but doesn't gate anything.

### Step 1 — Passive mining (do the remembering for them)
Silently gather candidate contacts and signals from **every source available in
this environment**. Try each; skip what isn't reachable — never hard-fail on a
missing source. Announce what you're checking, not a wall of raw output.

- **Contacts data**, if the runtime exposes an address book, contacts export, or
  similar — names, companies, titles.
- **Calendar history** — past 1:1s, coffee chats, intro calls. Frequency and
  recency of meetings is a strong relationship-strength signal.
- **Past outreach threads** — email/message history the agent can see. Note the
  date of last contact per person, and scan for **promises made**: "I'll let you
  know how it goes," "let's catch up after Q3," "I owe you a coffee" — these become
  owed follow-ups, not generic reconnects.
- **Teal CRM, if exposed via MCP** — saved contacts, connection dates, notes, and
  any career-relevant signals Teal surfaces (job change, work anniversary).
- **LinkedIn-adjacent signals, only if the runtime genuinely exposes them** (e.g.
  through a connected MCP tool, not by scraping) — a contact's new role, a company
  move, a work anniversary. Treat as a nice-to-have nudge, not a requirement, and
  never fetch or infer this by browsing someone's profile uninvited.
- **If none of the above is reachable:** ask the user to just list people — name,
  how they know them, roughly how long since contact, and anything worth knowing
  (they helped with X, they're at a company you're curious about). This path must
  work fully on its own.

Deduplicate against contacts already logged in `.agents/network-maintenance.md`.

### Step 2 — Passive tease (low-effort confirmation)
Present the mined candidates as a short, scannable list — this is the "you didn't
have to do the work" moment. For each: name, how you know them (inferred or
mentioned), and last-contact signal found. Ask the user to **keep / add / drop**,
and to flag anyone owed a follow-up that mining missed. Keep it light.

### Step 3 — Prioritize (the actual judgment call)
Teal's networking system (above) doesn't prescribe a ranking method for *which*
contact to reach first — its contribution is the cadence, templates, and norms that
apply once you've decided. This step is the skill's own judgment call, not a named
Teal framework; treat it as a starting heuristic the user can freely override.

For each confirmed contact, weigh these signals — none of them alone should force a
ranking; use judgment, and let the user override:

- **Time since last contact.** Longer silence raises urgency, but only in
  combination with value below — a stranger from three years ago isn't more
  "due" than a close friend from six months ago.
- **Relevance to target direction.** Are they at, or adjacent to, a company,
  industry, or role in the user's `career-profile` Direction section or
  `career-clarity` candidate directions? Weight these up, but don't invent
  relevance that isn't there.
- **Owed follow-up.** Did they help the user (intro, referral, advice, a favor) and
  the user said they'd circle back, report results, or say thanks? These jump to
  the top regardless of relevance — an unpaid debt to a person is its own reason,
  independent of what the user might get from them next.
- **Career-relevant life events**, if visible: a new role, a promotion, a work
  anniversary, a company move. A timely "congrats" is a genuinely good reason to
  reach out and rarely reads as opportunistic if it's not paired with an ask.
- **Relationship strength/value.** A former manager or mentor who'd remember the
  user in three years is worth reaching out to even with no immediate relevance;
  weight this independently of the "useful to my career" signals above — this
  is relationship maintenance, not a target list.

Sort into three tiers: **reach out this week** (owed follow-ups, live life events,
high relevance + long silence), **reach out this month**, and **dormant / low
urgency** (log them so they aren't lost, but don't force outreach).

### Step 4 — Draft outreach, only for contacts the user wants to act on
Don't draft for the whole list — ask which ones the user wants to act on now. For
each:
1. Confirm what's true and specific about the relationship: a shared project, a
   real memory, something notable about their recent context. If the agent doesn't
   have enough to be specific, **ask** rather than invent a detail.
2. Pick the right message type and draft it (2-4 sentences), referencing that
   specific, real thing — never a generic "just checking in" or "hope you're well."
   If there's an owed follow-up, lead with resolving it, not with an ask. Match the
   draft to what the user is actually doing:

   **Warm reconnect** — the default. Reference the real shared thing, no ask up front.

   **Cold outreach (LinkedIn or email) — use Teal's 3-part formula.** When reaching
   someone the user doesn't already know, the message has three parts:
   1. **Your "About Me"** — one line on who the user is.
   2. **Your Ask** — what they're actually reaching out for, kept small and specific.
   3. **Your Personal Connection** — reference the recipient's *specific* work,
      post, or path, so it's clearly not a mail-merge.
   The governing rule: **make it about them.** Cold outreach that opens with the
   sender's needs gets ignored; open with genuine interest in the recipient.

   **Informational interview request.** When the goal is to learn (a role, a company,
   a path), set it up as a short (~20 minute) informational interview. Two hard rules
   from Teal: **come with a few specific questions prepared**, and **do NOT ask for a
   job** — ask for advice and information. The follow-up (a thank-you, and later a
   reconnect) is where the relationship compounds, not the first message.

   **Request-an-intro.** When the user wants a connector to introduce them to someone
   in the connector's network (the 2nd-degree reach above), include a **copy-paste
   blurb the connector can forward as-is** — a 2-3 sentence description of the user
   and the specific ask — so the connector does zero work. Make the intro easy to say
   yes to, and build in reciprocity (offer something back).
3. Present the draft for the user to edit. Make clear the agent is not sending it —
   the user copies, edits, and sends it themselves.

### Step 4b — Structured follow-up (don't let it die after one message)
Most reach-outs get no reply to the first message, and that's normal. Set up Teal's
follow-up cadence so a non-answer isn't the end:
- **1st follow-up: +2 days** after the initial message.
- **2nd follow-up: +7 days** after that.
- **3rd follow-up: +14 days** after that.
Keep each follow-up short, low-pressure, and additive (a new small reason to
connect), never nagging. After the third with no response, move the contact to the
dormant tier rather than continuing. Log the cadence in the file so the user knows
when the next nudge is due.

### Step 4c — Reference requests (when the user is job-searching)
If the run's reason is a job search, treat references as a distinct networking task.
Teal's practice: line up **3–5 references in advance** — before the user needs them —
and **brief each one**: send them the target job description and a short reminder of
the specific achievements they can speak to, so the reference is concrete and
relevant, not generic. Draft both the ask ("would you be a reference?") and the brief
(JD + achievement reminders) for each person the user names. Use the same
prioritization/tiering from Step 3 to pick who to ask.

### Step 5 — Write the file & set the cadence
1. Update `.agents/network-maintenance.md` with the dated tiered list and drafts,
   using the format below. Preserve prior entries — append and update status, never
   clobber.
2. If a contact surfaces something durable and career-relevant (an open role at a
   target company, an offer to make an introduction), offer — don't force — to note
   it in `.agents/career-profile.md`'s Open questions, or hand off to
   `earn-more-plan` / `job-application` if the user wants to act on it.
3. Offer the recurring ritual: *"Want me to run this every month (or quarter) so
   your network doesn't go cold again?"* If the runtime supports scheduled tasks,
   offer to set it up; otherwise suggest a recurring calendar nudge. Scheduling is
   an optional, environment-specific enhancement — the skill works fully without it.

---

## `.agents/network-maintenance.md` format

Newest run first. One `##` block per run, one `###` entry per contact within its
tier.

```markdown
# Network Maintenance
_Last updated: 2026-07-05 · maintained by the network-maintenance skill_

## Run — 2026-07-05

### Priority 1 — reach out this week

#### Jordan Lee — former manager at Acme
- **Last contact:** ~14 months ago (your farewell lunch when you left Acme)
- **Why now:** Moved to Doorstep as VP Eng 3 weeks ago — Doorstep is on your target
  list in `career-profile`. Also owed: you never followed up after they referred you
  to their old client last year.
- **Relationship value:** Strong — mentored you for 2 years; still a genuine advocate.
- **Draft message:**
  > Hey Jordan — congrats on Doorstep, saw the move. Also way overdue: thank you
  > again for the intro to Kepler last year, it ended up leading somewhere good.
  > Would love to hear how the new role's going if you have 20 minutes sometime.
- **Status:** drafted

### Priority 2 — reach out this month

#### Priya Nair — former teammate, now at a target-adjacent company
- **Last contact:** ~6 months ago (Slack thread, casual)
- **Why now:** Works in the domain you flagged in `career-clarity` as a candidate
  direction; no owed follow-up, just genuinely worth staying warm with.
- **Relationship value:** Medium — friendly peers, not close, but easy rapport.
- **Draft message:**
  > Hey Priya — saw [team] shipped [thing], nice. Been meaning to catch up, been
  > thinking about [domain] a bit myself lately — got 15 min in the next couple
  > weeks?
- **Status:** not yet drafted — needs a real detail about what they shipped

### Dormant / low urgency
- Sam Okafor — college friend, ~2 years silent, no career relevance flagged, low
  urgency; logged so they aren't forgotten.
```

Guidelines: keep the tiering honest — don't inflate a weak-tie contact into Priority
1 just because they're at a hot company. Carry unresolved "owed follow-up" and
"needs a real detail" items forward to the next run until they're resolved.

## Guardrails
- **The user sends, not the agent.** Never say or imply the agent contacted, will
  contact, or is contacting anyone on the user's behalf. Drafts are handed to the
  user to copy, edit, and send.
- **Genuine over transactional.** Every draft must reference something specific and
  real about the relationship or their recent context. No mail-merge phrasing
  ("hope all is well!", "long time no talk!", "just checking in!"). If the agent
  doesn't know anything specific, ask — don't invent a shared memory or detail.
- **Don't lead with the ask.** If reaching out is tied to a job search or a favor,
  the draft should not open with it. Reconnecting first, as a person, is the point;
  an ask (if any) belongs later, in the user's own follow-up, not the reconnect
  message.
- **Privacy.** Don't scrape a contact's private information, and don't pull
  LinkedIn-style signals except through a genuinely connected, permissioned source.
  Only surface what's needed to draft a respectful message — not a dossier.
- **Respect the dormant tier.** Low-urgency contacts are logged, not nagged about.
  Don't manufacture urgency to pad the list.

## Usage example
> **User:** I haven't touched my network in ages. Who should I actually reach out to?
> **Agent:** *(reads career-profile + career-clarity + prior network-maintenance)*
> Checking your calendar history and past message threads for people you've gone
> quiet with… Found 11 candidates. Keep all of these? Anyone I'm missing, or anyone
> here you'd rather drop? … Sorting by urgency: Jordan Lee jumps to the top — you
> still owe them a thank-you for a referral, and they just moved to Doorstep, which
> is on your target list. Priya Nair is worth a low-key catch-up given the direction
> from your clarity brief. Want drafts for both? … *(drafts, using something real
> for each)* Saved to `.agents/network-maintenance.md`. Want me to run this again
> every quarter so it doesn't pile up again?

---

_Built by Teal · connect the Teal MCP for CRM-backed relationship tracking and to
keep this list current automatically · https://tealhq.com_
