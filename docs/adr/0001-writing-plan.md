# ADR-0001 Implementation Plan

## Goal

Implement ADR-0001 by generating reviewable Instagram campaign content from
`apps/gift-shop/src/content/holidays.ts` on a weekly GitHub Actions schedule.

## Scope

In scope:

- Add a `socialMediaPost` field to each holiday entry
- Build deterministic holiday selection logic based on the current date
- Reuse existing holiday hero assets
- Generate a reviewable campaign manifest in CI
- Schedule the workflow for every Sunday

Out of scope:

- Direct Instagram publishing
- LLM-generated captions
- New image rendering or design tooling

## Deliverables

1. Updated holiday content model in `apps/gift-shop/src/content/holidays.ts`
2. Script to select the active holiday and write campaign output
3. GitHub Actions workflow to run weekly and on demand
4. Documentation for manual reruns and artifact review

## Work Plan

### 1. Extend the content model

- Add `socialMediaPost: string` to the `Holiday` type
- Populate `socialMediaPost` for every holiday entry
- Keep copy short enough for Instagram-first use

### 2. Define deterministic holiday selection

- Evaluate each holiday window for the execution date
- Filter to holidays whose window includes that date
- If no holiday is active, exit successfully with a clear summary
- If multiple holidays are active, choose one by:
  - holiday type priority: `major`, `cultural`, `common`, `optional`
  - earliest ending window as the tie-breaker
  - stable `id` ordering as the final tie-breaker

### 3. Generate campaign output

- Import `holidays.ts` directly from a script
- Resolve the selected holiday’s image path
- Validate required fields:
  - `id`
  - `nameEs`
  - `image`
  - `socialMediaPost`
  - active window
- Write a manifest file such as `generated/instagram/<date>-<holiday-id>.json`
- Include in the manifest:
  - execution date
  - selected holiday id and names
  - holiday type
  - campaign window start and end
  - social media post text
  - image path

### 4. Add workflow automation

- Create a GitHub Actions workflow
- Trigger on:
  - weekly schedule every Sunday
  - `workflow_dispatch` for manual reruns
- Install dependencies and run the generation script
- Upload the generated manifest as a workflow artifact
- Emit a short workflow summary indicating:
  - whether a holiday was active
  - which holiday was selected
  - where the artifact can be found

### 5. Document usage

- Document how to rerun the workflow manually
- Document how holiday selection works
- Document where generated artifacts live
- Document that v1 stops at generation and review

## Testing Plan

- Unit test holiday selection for:
  - no active holidays
  - one active holiday
  - overlapping windows
  - dynamic dates such as Father’s Day
- Test manifest generation with a fixed explicit date
- Validate that missing `socialMediaPost` fails generation for active holidays
- Smoke test the workflow locally if the repo already has an accepted workflow
  test pattern; otherwise validate by manual `workflow_dispatch`

## Rollout Plan

1. Ship the content model and generation script
2. Add tests for selection and manifest output
3. Add the workflow with weekly schedule and manual dispatch
4. Run one manual dispatch for a known active date
5. Review generated artifact format before relying on the Sunday schedule

## Open Questions

- Should generated manifests stay as CI artifacts only, or also be committed to
  the repo in a follow-up?
- Should the workflow summary include the full post text, or only the artifact
  link and holiday metadata?
- Do any existing hero assets need a follow-up resize/export pass for Instagram?
