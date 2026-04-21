import { holidays, type Holiday } from "@/content/holidays"

const TYPE_PRIORITY: Record<Holiday["type"], number> = {
  major: 0,
  cultural: 1,
  common: 2,
  optional: 3,
}

export function getActiveHoliday(now: Date = new Date()): Holiday | null {
  const year = now.getFullYear()
  const candidates = holidays
    .map((h) => ({ holiday: h, window: h.window(year) }))
    .filter(({ window }) => now >= window.start && now <= window.end)

  if (candidates.length === 0) return null

  candidates.sort((a, b) => {
    const endDiff = a.window.end.getTime() - b.window.end.getTime()
    if (endDiff !== 0) return endDiff
    return TYPE_PRIORITY[a.holiday.type] - TYPE_PRIORITY[b.holiday.type]
  })

  return candidates[0].holiday
}

export function getUpcomingHolidays(
  now: Date = new Date(),
  count = 3,
): Holiday[] {
  const year = now.getFullYear()
  const futures = holidays
    .flatMap((h) => {
      const thisYear = h.window(year)
      const nextYear = h.window(year + 1)
      return [
        { holiday: h, window: thisYear },
        { holiday: h, window: nextYear },
      ]
    })
    .filter(({ window }) => window.end >= now)
    .sort((a, b) => a.window.end.getTime() - b.window.end.getTime())

  const seen = new Set<string>()
  const unique: Holiday[] = []
  for (const { holiday } of futures) {
    if (seen.has(holiday.id)) continue
    seen.add(holiday.id)
    unique.push(holiday)
    if (unique.length >= count) break
  }
  return unique
}

export function getHolidayById(id: string): Holiday | null {
  return holidays.find((h) => h.id === id) ?? null
}
