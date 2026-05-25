import { existsSync } from "node:fs"
import path from "node:path"

import { holidays, type Holiday, type HolidayWindow } from "@/content/holidays"

const holidayTypePriority: Record<Holiday["type"], number> = {
  major: 0,
  cultural: 1,
  common: 2,
  optional: 3,
}

export type InstagramCampaignManifest = {
  generatedAt: string
  executionDate: string
  holiday: {
    id: string
    nameEs: string
    nameEn: string
    type: Holiday["type"]
    headlineEs: string
    subheadlineEs: string
    socialMediaPost: string
    whatsappMessage: string
  }
  window: {
    start: string
    end: string
  }
  image: {
    appPath: string
    filePath: string
  }
}

export function atLocalNoon(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day, 12, 0, 0, 0)
}

export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function parseDateInput(input: string): Date {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input)

  if (!match) {
    throw new Error(`Invalid date "${input}". Expected YYYY-MM-DD.`)
  }

  const [, yearText, monthText, dayText] = match
  const year = Number(yearText)
  const month = Number(monthText)
  const day = Number(dayText)
  const parsed = atLocalNoon(year, month, day)

  if (
    parsed.getFullYear() !== year ||
    parsed.getMonth() !== month - 1 ||
    parsed.getDate() !== day
  ) {
    throw new Error(`Invalid calendar date "${input}".`)
  }

  return parsed
}

export function resolveExecutionDate(input?: string, now = new Date()): Date {
  if (input) {
    return parseDateInput(input)
  }

  return atLocalNoon(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
  )
}

export function isDateWithinWindow(date: Date, window: HolidayWindow): boolean {
  return date >= window.start && date <= window.end
}

export function getHolidayWindowForDate(holiday: Holiday, date: Date): HolidayWindow {
  return holiday.window(date.getFullYear())
}

export function getActiveHolidays(date: Date, items = holidays): Holiday[] {
  return items.filter((holiday) =>
    isDateWithinWindow(date, getHolidayWindowForDate(holiday, date)),
  )
}

export function compareHolidaysForPriority(a: Holiday, b: Holiday, date: Date): number {
  const typePriority = holidayTypePriority[a.type] - holidayTypePriority[b.type]

  if (typePriority !== 0) {
    return typePriority
  }

  const aWindow = getHolidayWindowForDate(a, date)
  const bWindow = getHolidayWindowForDate(b, date)
  const endDifference = aWindow.end.getTime() - bWindow.end.getTime()

  if (endDifference !== 0) {
    return endDifference
  }

  return a.id.localeCompare(b.id)
}

export function selectHolidayForDate(date: Date, items = holidays): Holiday | null {
  const active = getActiveHolidays(date, items)

  if (active.length === 0) {
    return null
  }

  return [...active].sort((a, b) => compareHolidaysForPriority(a, b, date))[0]
}

export function resolveImageFilePath(appRoot: string, imagePath: string): string {
  return path.join(appRoot, "public", imagePath.replace(/^\//, ""))
}

export function assertHolidayReadyForCampaign(
  holiday: Holiday,
  date: Date,
  appRoot: string,
): { imageFilePath: string; window: HolidayWindow } {
  const window = getHolidayWindowForDate(holiday, date)

  if (!isDateWithinWindow(date, window)) {
    throw new Error(
      `Holiday "${holiday.id}" is not active for ${formatDate(date)}.`,
    )
  }

  if (!holiday.socialMediaPost.trim()) {
    throw new Error(`Holiday "${holiday.id}" is missing socialMediaPost.`)
  }

  const imageFilePath = resolveImageFilePath(appRoot, holiday.image)

  if (!existsSync(imageFilePath)) {
    throw new Error(
      `Holiday "${holiday.id}" image does not exist at ${imageFilePath}.`,
    )
  }

  return { imageFilePath, window }
}

export function buildInstagramCampaignManifest(
  holiday: Holiday,
  date: Date,
  appRoot: string,
): InstagramCampaignManifest {
  const { imageFilePath, window } = assertHolidayReadyForCampaign(
    holiday,
    date,
    appRoot,
  )

  return {
    generatedAt: new Date().toISOString(),
    executionDate: formatDate(date),
    holiday: {
      id: holiday.id,
      nameEs: holiday.nameEs,
      nameEn: holiday.nameEn,
      type: holiday.type,
      headlineEs: holiday.headlineEs,
      subheadlineEs: holiday.subheadlineEs,
      socialMediaPost: holiday.socialMediaPost,
      whatsappMessage: holiday.whatsappMessage,
    },
    window: {
      start: formatDate(window.start),
      end: formatDate(window.end),
    },
    image: {
      appPath: holiday.image,
      filePath: imageFilePath,
    },
  }
}
