import { getUpcomingHolidays } from "@/lib/active-holiday"
import { waLink } from "@/lib/whatsapp"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BadgeSticker } from "@/components/ui/badge-sticker"

function formatDate(holiday: { window: (year: number) => { end: Date } }): string {
  const now = new Date()
  const { end } = holiday.window(now.getFullYear())
  const target = end < now ? holiday.window(now.getFullYear() + 1).end : end
  return target.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
  })
}

const stripColors = [
  "bg-rose/30 border-rose",
  "bg-bubblegum/30 border-bubblegum",
  "bg-lilac/30 border-lilac",
]

export function HolidayStrip() {
  const upcoming = getUpcomingHolidays(new Date(), 3)

  if (upcoming.length === 0) return null

  return (
    <section className="relative overflow-hidden bg-ribbon py-14 sm:py-16">
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFD1EA 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex items-center justify-between gap-4 sm:mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-paper/50">
              Próximas fechas
            </span>
            <h2 className="font-display text-2xl font-bold text-paper sm:text-4xl">
              Prepárate a tiempo
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {upcoming.map((holiday, i) => (
            <div
              key={holiday.id}
              className={`relative flex flex-col gap-4 rounded-[14px] border-[1.5px] p-5 sm:p-6 ${stripColors[i % stripColors.length]}`}
            >
              <div className="flex items-start justify-between">
                <BadgeSticker rotate={i % 2 === 0 ? -2 : 1} className="text-xs">
                  {formatDate({ window: holiday.window })}
                </BadgeSticker>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-paper">
                  {holiday.nameEs}
                </h3>
                <p className="mt-1 text-sm text-paper/60">{holiday.nameEn}</p>
              </div>
              <WhatsAppButton
                href={waLink(holiday.whatsappMessage)}
                variant="secondary"
                size="sm"
                className="mt-auto w-full justify-center bg-paper/95"
              >
                Prepárate
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
