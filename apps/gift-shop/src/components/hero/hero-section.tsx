import Image from "next/image"
import { getActiveHoliday } from "@/lib/active-holiday"
import { defaultHero } from "@/content/holidays"
import { waLink } from "@/lib/whatsapp"
import { withBasePath } from "@/lib/base-path"
import { shop } from "@/content/shop"
import { GradientBlobs } from "@/components/gradient-blobs"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroClient } from "./hero-client"

export function HeroSection() {
  const active = getActiveHoliday(new Date())
  const hero = active ?? defaultHero

  return (
    <section id="hero" className="relative min-h-[auto] overflow-hidden bg-paper">
      <GradientBlobs variant="hero" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:min-h-[90vh] lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        {/* Text column */}
        <div className="order-2 flex flex-col gap-5 lg:order-1 lg:gap-6">
          <div
            className="animate-hero-text"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bubblegum/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink/70">
              {shop.name}
            </span>
          </div>

          <h1
            className="animate-hero-text max-w-[12ch] font-display text-[2.9rem] font-bold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            {hero.headlineEs}
          </h1>

          <p
            className="animate-hero-text max-w-md text-base leading-relaxed text-ink/70 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {hero.subheadlineEs}
          </p>

          <div
            className="animate-hero-text flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <WhatsAppButton
              href={waLink(hero.whatsappMessage)}
              variant="primary"
              size="lg"
              className="animate-pulse-once w-full sm:w-auto"
            >
              Escríbenos ahora
            </WhatsAppButton>
            <a
              href={shop.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border-2 border-ink/20 bg-transparent px-6 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper sm:h-14 sm:w-auto sm:px-8 sm:text-base"
            >
              Cómo llegar
            </a>
          </div>
        </div>

        {/* Image column */}
        <div
          className="animate-hero-image order-1 relative aspect-[5/4] overflow-hidden rounded-[24px] border border-ink/10 shadow-2xl lg:order-2 lg:aspect-square"
          style={{ animationDelay: "180ms" }}
        >
          <Image
            src={withBasePath(hero.image)}
            alt={hero.headlineEs}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
        </div>
      </div>

      {/* Client hydrator — rechecks active holiday on mount */}
      <HeroClient buildTimeHolidayId={active?.id ?? null} />
    </section>
  )
}
