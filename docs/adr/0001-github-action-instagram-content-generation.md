# ADR-0001: Generate Instagram Campaign Assets from Holiday Content with GitHub Actions

## Status

Proposed

## Date

2026-04-21

## Context

Gift Shop already maintains a structured holiday marketing calendar in
`apps/gift-shop/src/content/holidays.ts`. Each holiday entry includes:

- Stable identifiers
- Spanish and English names
- Marketing headline and subheadline
- A hero image path
- A social-media post body
- A WhatsApp CTA message
- A computed campaign window

The team wants to use that source of truth to generate Instagram post content
without introducing a second manually maintained campaign calendar.

The main architectural constraint is that Instagram publishing is not the same
as content generation:

- Fully automated publishing requires an Instagram Business or Creator account
  connected to a Facebook Page
- Publishing also requires Meta app setup and durable token management
- Instagram media creation requires a publicly reachable media URL at publish
  time
- Those external dependencies increase operational and credential complexity
  compared with simple content generation

The near-term need is to reliably produce a reviewable post package for the
current or next holiday from repository data. That package should be suitable
for manual posting now and should not block a future move to API-based
publishing.

## Decision Drivers

- Reuse `apps/gift-shop/src/content/holidays.ts` as the single source of truth
- Keep the first version low-ops and repository-centric
- Avoid coupling initial delivery to Meta API approvals and token rotation
- Keep campaign copy deterministic and version-controlled in the repo
- Support scheduled execution with no dedicated server
- Produce output that is easy to review before posting
- Leave a clear upgrade path to future automated publishing

## Considered Options

### Option 1: GitHub Actions generates post assets only from repository content

- **Pros**: No dedicated infrastructure, runs on schedule, works from repo
  content, easier secret management, no Meta dependency for v1, produces a
  reviewable artifact, and avoids nondeterministic copy generation
- **Cons**: Posting remains manual, content must be maintained in
  `holidays.ts`, generated media still needs a human review and upload step

### Option 2: GitHub Actions generates copy with an LLM and publishes artifacts

- **Pros**: Reduces manual authoring effort and can vary captions automatically
- **Cons**: Requires prompt tuning, introduces nondeterministic copy quality,
  needs API credentials, adds brand-voice drift risk, and makes content review
  less predictable

### Option 3: GitHub Actions generates and publishes directly to Instagram

- **Pros**: Fully automated end-to-end flow once configured
- **Cons**: Requires Business/Creator account setup, Facebook Page linkage,
  long-lived token lifecycle, public media hosting, higher failure surface,
  harder to test locally, higher blast radius for content mistakes

### Option 4: Manual content authoring outside the repo

- **Pros**: No engineering work
- **Cons**: Duplicates holiday data, inconsistent tone, no audit trail, no
  automation, more operational drag for recurring campaigns

## Decision

Use a **GitHub Actions workflow** to generate Instagram campaign assets from
`apps/gift-shop/src/content/holidays.ts`, reuse the existing holiday hero
assets, and keep **publishing out of scope for the first iteration**.

The workflow should:

1. Run on a **weekly schedule every Sunday**
2. Determine whether the execution date falls **within the window** of any
   holiday entry
3. If no holiday is active, exit without producing campaign content
4. If one or more holidays are active, build a normalized campaign payload from
   the selected holiday entry using only repository data
5. Reuse the configured holiday hero image as the media source
6. Produce a reviewable output artifact, for example:
   - social-media post text
   - holiday metadata
   - selected image reference
   - manifest JSON or markdown summary

This ADR intentionally stops at generation and review. If the team later wants
direct publishing, that should be handled in a follow-up ADR covering Meta
account prerequisites, token rotation, media hosting, moderation, and rollback
behavior.

## Rationale

This choice preserves the strongest part of the current system: structured
holiday content already lives in version control and is maintained with the app.
GitHub Actions is the lightest automation environment that can run on a
schedule, consume repository code, and emit artifacts without adding a new
service.

Separating generation from publishing is the key architectural boundary. It
lets the team validate the holiday selection logic, repository-owned marketing
copy, and image mapping before taking on the harder operational problem of
publishing into Meta's ecosystem.

This also reduces risk. A bad campaign payload is an artifact to review; a bad
campaign payload in a fully automated publisher is an external-facing incident.

Keeping the social copy in `holidays.ts` is the second key boundary. It makes
the workflow deterministic, easy to review in pull requests, and independent of
prompt behavior, model availability, or secret-backed content generation at
runtime.

## Consequences

### Positive

- `holidays.ts` remains the campaign source of truth
- No dedicated server or cron host is required
- The team can review generated content before posting
- The workflow is easy to schedule and rerun
- Future Instagram API publishing can reuse the generated payload format
- Existing hero assets can be used without adding an image-rendering system

### Negative

- Posting is still a manual step in v1
- `holidays.ts` becomes responsible for another piece of marketing content
- Existing hero assets may not always match Instagram-friendly aspect ratios or
  composition needs

### Risks

- The workflow may select the wrong holiday if multiple windows overlap and
  tie-breaking is underspecified
- A Sunday-only schedule may miss late content changes unless the workflow is
  rerun manually
- A repository image path may not directly correspond to a usable downloadable
  asset in the workflow runtime

### Mitigations

- Define deterministic holiday selection rules, including tie-breaking
- Add a `socialMediaPost` field to each holiday entry and validate that it is
  present for active campaigns
- Add a validation step that fails if the referenced image file cannot be
  resolved or rendered
- Store generated outputs as workflow artifacts or commit them in a reviewable
  branch rather than publishing automatically

## Implementation Notes

- Create a script that imports `apps/gift-shop/src/content/holidays.ts` instead
  of duplicating the data in JSON
- Extend the `Holiday` type with a `socialMediaPost` field
- Schedule the workflow for every Sunday
- Keep the workflow input-oriented:
  - optional explicit `holidayId`
  - optional explicit `date`
  - scheduled mode for the current date
- Emit a stable machine-readable manifest, for example `generated/instagram/*.json`
- Reuse the existing `image` field as the source asset rather than introducing a
  separate image pool
- For overlapping windows, prefer an explicit priority order such as `major`,
  then `cultural`, then `common`, then `optional`, and then use the earliest
  ending active window as the tie-breaker
- No LLM or external content-generation credentials are required in v1

## Follow-Up Decisions

- Whether existing hero assets need an Instagram-specific export or resize step
- Whether generated artifacts should live only in CI artifacts or in the repo
- Whether manual review happens in pull requests, workflow summaries, or both
- Whether a later phase should add Instagram Graph API publishing

## Related Decisions

- None yet

## References

- Holiday content source: `apps/gift-shop/src/content/holidays.ts`
- Future integration target: Instagram Graph API for Business or Creator
  accounts connected to a Facebook Page
