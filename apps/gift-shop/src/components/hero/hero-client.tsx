"use client"

import { useEffect } from "react"
import { getActiveHoliday, getHolidayById } from "@/lib/active-holiday"
import { defaultHero } from "@/content/holidays"
import { waLink } from "@/lib/whatsapp"
import { withBasePath } from "@/lib/base-path"

interface HeroClientProps {
  buildTimeHolidayId: string | null
}

export function HeroClient({ buildTimeHolidayId }: HeroClientProps) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const forceId = params.get("holiday")

    const active = forceId
      ? getHolidayById(forceId)
      : getActiveHoliday(new Date())
    const hero = active ?? defaultHero
    const runtimeId = active?.id ?? null

    if (runtimeId === buildTimeHolidayId) return

    const badgeEl = document.querySelector<HTMLElement>("#hero-holiday-badge")
    const headlineEl = document.querySelector<HTMLElement>("#hero-title")
    const subheadlineEl = document.querySelector<HTMLElement>("#hero-subheadline")
    const imageLabelEl = document.querySelector<HTMLElement>("#hero-image-label")
    const ctaEls = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("a[href^='https://wa.me/']"),
    )
    const imgEl = document.querySelector<HTMLImageElement>("#hero img")

    if (badgeEl) {
      badgeEl.textContent = active?.nameEs ?? "Siempre hay algo bonito que envolver"
    }
    if (headlineEl) headlineEl.textContent = hero.headlineEs
    if (subheadlineEl) subheadlineEl.textContent = hero.subheadlineEs
    if (imageLabelEl) imageLabelEl.textContent = hero.headlineEs
    for (const ctaEl of ctaEls) {
      ctaEl.href = waLink(hero.whatsappMessage)
    }
    if (imgEl) {
      imgEl.classList.add("animate-crossfade")
      imgEl.src = withBasePath(hero.image)
      imgEl.alt = hero.headlineEs
    }
  }, [buildTimeHolidayId])

  return null
}
