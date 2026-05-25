import assert from "node:assert/strict"
import { describe, test } from "node:test"

import type { Holiday } from "@/content/holidays"

import {
  atLocalNoon,
  buildInstagramCampaignManifest,
  formatDate,
  parseDateInput,
  selectHolidayForDate,
} from "@/lib/instagram-campaign"

function createHoliday(
  overrides: Partial<Holiday> & Pick<Holiday, "id" | "type">,
): Holiday {
  return {
    id: overrides.id,
    nameEs: overrides.nameEs ?? overrides.id,
    nameEn: overrides.nameEn ?? overrides.id,
    type: overrides.type,
    image: overrides.image ?? "/hero/madres.svg",
    headlineEs: overrides.headlineEs ?? "Headline",
    subheadlineEs: overrides.subheadlineEs ?? "Subheadline",
    socialMediaPost: overrides.socialMediaPost ?? "Post text",
    whatsappMessage: overrides.whatsappMessage ?? "WhatsApp",
    window:
      overrides.window ??
      ((year) => ({
        start: atLocalNoon(year, 5, 1),
        end: atLocalNoon(year, 5, 31),
      })),
  }
}

describe("instagram campaign selection", () => {
  test("parses explicit dates without timezone drift", () => {
    assert.equal(formatDate(parseDateInput("2026-05-10")), "2026-05-10")
  })

  test("returns null when no holiday is active", () => {
    const date = atLocalNoon(2026, 3, 1)
    const holidays: Holiday[] = [
      createHoliday({
        id: "one",
        type: "major",
        window: (year) => ({
          start: atLocalNoon(year, 1, 1),
          end: atLocalNoon(year, 1, 5),
        }),
      }),
    ]

    assert.equal(selectHolidayForDate(date, holidays), null)
  })

  test("prefers higher-priority holiday types when windows overlap", () => {
    const date = atLocalNoon(2026, 5, 10)
    const holidays: Holiday[] = [
      createHoliday({
        id: "common-holiday",
        type: "common",
      }),
      createHoliday({
        id: "major-holiday",
        type: "major",
      }),
    ]

    assert.equal(selectHolidayForDate(date, holidays)?.id, "major-holiday")
  })

  test("uses earliest ending window as the tie-breaker", () => {
    const date = atLocalNoon(2026, 5, 10)
    const holidays: Holiday[] = [
      createHoliday({
        id: "later",
        type: "major",
        window: (year) => ({
          start: atLocalNoon(year, 5, 1),
          end: atLocalNoon(year, 5, 20),
        }),
      }),
      createHoliday({
        id: "earlier",
        type: "major",
        window: (year) => ({
          start: atLocalNoon(year, 5, 1),
          end: atLocalNoon(year, 5, 15),
        }),
      }),
    ]

    assert.equal(selectHolidayForDate(date, holidays)?.id, "earlier")
  })

  test("builds a manifest for a real active holiday", () => {
    const appRoot = new URL("../..", import.meta.url).pathname
    const date = atLocalNoon(2026, 5, 10)
    const holiday = createHoliday({
      id: "madres",
      type: "major",
      image: "/hero/madres.svg",
      socialMediaPost: "Texto para redes",
      window: (year) => ({
        start: atLocalNoon(year, 5, 1),
        end: atLocalNoon(year, 5, 10),
      }),
    })

    const manifest = buildInstagramCampaignManifest(holiday, date, appRoot)

    assert.equal(manifest.holiday.id, "madres")
    assert.equal(manifest.holiday.socialMediaPost, "Texto para redes")
    assert.equal(manifest.image.appPath, "/hero/madres.svg")
    assert.equal(manifest.window.end, "2026-05-10")
  })
})
