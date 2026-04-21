"use client"

import Image from "next/image"
import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroClient } from "@/components/hero/hero-client"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { defaultHero } from "@/content/holidays"
import { homeContent } from "@/content/home"
import { getActiveHoliday } from "@/lib/active-holiday"
import { withBasePath } from "@/lib/base-path"
import { shop } from "@/content/shop"
import { waLink } from "@/lib/whatsapp"

function productSpan(size: (typeof homeContent.products)[number]["size"]) {
  if (size === "large") {
    return "sm:col-span-2 sm:row-span-2"
  }

  if (size === "medium") {
    return "sm:col-span-2"
  }

  return ""
}

export default function HomePage() {
  const activeHoliday = getActiveHoliday(new Date())
  const hero = activeHoliday ?? defaultHero

  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
    )

    for (const element of reveals) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip bg-[color:var(--page-bg)] text-[color:var(--page-ink)]">
      <div aria-hidden="true" className="paper-noise fixed inset-0 z-0" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {homeContent.floatingDecorations.map((item) => (
          <span key={`${item.className}-${item.symbol}`} className={item.className}>
            {item.symbol}
          </span>
        ))}
        <span className="shape-blob left-[-8rem] top-[10rem] h-56 w-56 bg-[color:var(--shape-one)]" />
        <span className="shape-blob right-[-5rem] top-[32rem] h-64 w-64 bg-[color:var(--shape-two)]" />
        <span className="shape-blob bottom-[18rem] left-[42%] h-72 w-72 bg-[color:var(--shape-three)]" />
      </div>

      <SiteHeader />

      <main className="relative z-10 pb-16">
        <section id="hero" className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 pt-6 sm:px-6 lg:px-8 lg:pt-10">
          <div className="hero-ribbon stagger-in relative overflow-hidden">
            <div className="hero-ribbon-rail hero-ribbon-rail-top" />
            <div className="hero-ribbon-rail hero-ribbon-rail-bottom" />
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative z-10 px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pb-14">
                <div className="flex flex-wrap items-center gap-3 text-[0.64rem] font-black uppercase tracking-[0.28em] text-[color:var(--page-ink)]/66">
                  <span className="rounded-full border-[2px] border-[color:var(--line)] bg-[color:var(--chip-bg)] px-4 py-2">
                    {homeContent.hero.eyebrow}
                  </span>
                  <span id="hero-holiday-badge" className="rounded-full border-[2px] border-[color:var(--line)] bg-[color:var(--card-yellow)] px-4 py-2">
                    {activeHoliday?.nameEs ?? "Siempre hay algo bonito que envolver"}
                  </span>
                </div>

                <div className="mt-6 max-w-3xl">
                  <p className="font-script text-3xl text-[color:var(--accent-strong)] sm:text-4xl">{homeContent.hero.scriptLead}</p>
                  <h1 className="mt-2 font-display text-[clamp(3.1rem,10vw,7.2rem)] leading-[0.88] tracking-[-0.05em] text-[color:var(--page-ink)]">
                    {homeContent.brand.name}
                  </h1>
                  <p className="mt-2 text-lg font-semibold text-[color:var(--page-ink)]/78 sm:text-2xl">{homeContent.hero.tagline}</p>
                  <h2 id="hero-title" className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[color:var(--page-ink)]">
                    {hero.headlineEs}
                  </h2>
                  <p id="hero-subheadline" className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--page-ink)]/76 sm:text-base">
                    {hero.subheadlineEs}
                  </p>
                  <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                    <WhatsAppButton
                      href={waLink(hero.whatsappMessage)}
                      variant="primary"
                      size="lg"
                      className="w-full rounded-[1.1rem] border-[3px] border-[color:var(--line)] shadow-[8px_8px_0_var(--shadow-strong)] sm:w-auto"
                      data-whatsapp-link="true"
                    >
                      Escríbenos por WhatsApp
                    </WhatsAppButton>
                    <a
                      href={shop.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-14 items-center justify-center rounded-[1.1rem] border-[3px] border-[color:var(--line)] bg-[color:var(--card-blue)] px-6 text-sm font-black uppercase tracking-[0.16em] shadow-[6px_6px_0_var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-1"
                    >
                      Cómo llegar
                    </a>
                  </div>
                  <div className="mt-7 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--page-ink)]/65">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--line)] bg-[color:var(--card-yellow)]">
                      ★
                    </span>
                    {homeContent.hero.highlightLabel}
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {homeContent.hero.featureChips.map((chip) => (
                    <div
                      key={`${chip.title}-${chip.detail}`}
                      className={`${chip.tilt} rounded-[1.3rem] border-[2px] border-[color:var(--line)] ${chip.tone} p-4`}
                    >
                      <div className="font-script text-2xl">{chip.title}</div>
                      <div className="mt-1 text-xs font-black uppercase tracking-[0.18em]">{chip.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden border-t-[3px] border-[color:var(--line)] lg:min-h-full lg:border-l-[3px] lg:border-t-0">
                <Image
                  src={withBasePath(hero.image)}
                  alt={hero.headlineEs}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,10,18,0.02),rgba(16,10,18,0.32))]" />
                <div className="absolute left-4 top-4 rotate-[-4deg] rounded-[1rem] border-[2px] border-[color:var(--line)] bg-[color:var(--page-bg)] px-4 py-3 text-[0.72rem] font-black uppercase tracking-[0.2em] shadow-[5px_5px_0_var(--shadow-soft)]">
                  Promo de temporada
                </div>
                <div className="absolute bottom-4 right-4 max-w-[18rem] rotate-[3deg] rounded-[1.2rem] border-[2px] border-[color:var(--line)] bg-[color:var(--card-pink)] px-4 py-3 shadow-[5px_5px_0_var(--shadow-soft)]">
                  <div className="font-script text-2xl text-[color:var(--accent-strong)]">{homeContent.hero.locale}</div>
                  <div className="mt-1 text-xs font-black uppercase tracking-[0.18em]">campaña automática por temporada</div>
                </div>
              </div>
            </div>

            <HeroClient buildTimeHolidayId={activeHoliday?.id ?? null} />
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="hidden lg:block" />

            <aside className="grid gap-5 lg:-mt-14">
              <div className="sticker-card rotate-[3deg] bg-[color:var(--card-yellow)]">
                <div className="mb-3 text-[0.62rem] font-black uppercase tracking-[0.32em] text-[color:var(--page-ink)]/68">
                  {homeContent.hero.sideCards.favoritesTitle}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {homeContent.hero.sideCards.favorites.map((favorite) => (
                    <div key={favorite.label} className={`rounded-[1.4rem] ${favorite.tone} p-4 text-center`}>
                      <div className="text-5xl">{favorite.emoji}</div>
                      <div className="mt-3 text-xs font-black uppercase tracking-[0.16em]">{favorite.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sticker-card -rotate-[2deg] bg-[color:var(--card-lilac)]">
                <div className="font-script text-3xl text-[color:var(--accent-strong)]">{homeContent.hero.sideCards.manifestoTitle}</div>
                <p className="mt-3 text-sm leading-7 text-[color:var(--page-ink)]/76">{homeContent.hero.sideCards.manifestoText}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[0.64rem] font-black uppercase tracking-[0.2em]">
                  {homeContent.hero.sideCards.manifestoTags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[color:var(--chip-bg)] px-3 py-2">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="sticker-card rotate-[1.5deg] bg-[color:var(--card-coral)] text-[color:var(--accent-ink)]">
                <div className="text-[0.62rem] font-black uppercase tracking-[0.32em]">{homeContent.hero.sideCards.bundleEyebrow}</div>
                <div className="mt-2 font-display text-4xl leading-none">{homeContent.hero.sideCards.bundleTitle}</div>
                <p className="mt-2 text-sm font-semibold">{homeContent.hero.sideCards.bundleText}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="marquee-shell mt-8">
          <div className="marquee-track">
            {[...homeContent.marqueeItems, ...homeContent.marqueeItems, ...homeContent.marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section
          id="featured"
          data-reveal
          className="reveal-section mx-auto mt-14 w-full max-w-[1440px] px-4 sm:px-6 lg:px-8"
        >
          <div className="section-heading">
            <p className="font-script text-3xl text-[color:var(--accent-strong)]">{homeContent.featured.scriptLead}</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-4xl font-display text-[clamp(2.7rem,7vw,5.6rem)] leading-[0.92] tracking-[-0.05em]">
                {homeContent.featured.title}
              </h2>
              <p className="max-w-md text-sm leading-7 text-[color:var(--page-ink)]/72">{homeContent.featured.description}</p>
            </div>
          </div>

          <div className="mt-8 grid auto-rows-[170px] grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
            {homeContent.products.map((product, index) => (
              <article
                key={product.name}
                className={[
                  "product-card",
                  product.tone,
                  product.tilt,
                  productSpan(product.size),
                  index % 3 === 0 ? "origin-bottom" : "origin-top",
                ].join(" ")}
              >
                {product.badge ? <span className="product-badge">{product.badge}</span> : null}
                <div className="product-emoji">{product.emoji}</div>
                <div className="mt-auto">
                  <div className="font-script text-2xl leading-none text-[color:var(--accent-strong)]">{product.price}</div>
                  <h3 className="mt-2 font-display text-[1.45rem] leading-tight tracking-[-0.04em]">{product.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--page-ink)]/70">
                    {product.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          data-reveal
          className="reveal-section mx-auto mt-18 grid w-full max-w-[1440px] gap-6 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
        >
          <div className="sticker-card rotate-[-2deg] bg-[color:var(--card-blue)]">
            <div className="text-[0.62rem] font-black uppercase tracking-[0.32em] text-[color:var(--page-ink)]/68">{homeContent.about.eyebrow}</div>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.05em]">
              {homeContent.about.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--page-ink)]/78">{homeContent.about.body}</p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[color:var(--line)] bg-[color:var(--about-panel)] p-6 shadow-[12px_12px_0_var(--shadow-soft)] sm:p-8">
            <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[1.6rem] border-[2px] border-dashed border-[color:var(--line)] bg-[color:var(--card-peach)] p-5">
                <div className="font-script text-[clamp(2rem,4vw,3.6rem)] leading-none text-[color:var(--accent-strong)]">
                  {homeContent.about.quote}
                </div>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--page-ink)]/64">
                  {homeContent.about.quoteNote}
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.4rem] bg-[color:var(--card-pink)] p-5">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-[color:var(--page-ink)]/62">{homeContent.about.sideEyebrow}</div>
                  <p className="mt-3 text-sm leading-7">{homeContent.about.sideBody}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {homeContent.about.stats.map((stat) => (
                    <div key={stat.label} className={`rounded-[1.4rem] ${stat.tone} p-5 text-center`}>
                      <div className="font-display text-4xl">{stat.value}</div>
                      <div className="mt-2 text-xs font-black uppercase tracking-[0.18em]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-reveal
          className="reveal-section mx-auto mt-18 w-full max-w-[1440px] px-4 sm:px-6 lg:px-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div id="location" className="relative overflow-hidden rounded-[2rem] border-[3px] border-[color:var(--line)] bg-[color:var(--card-lilac)] p-6 shadow-[12px_12px_0_var(--shadow-soft)] sm:p-8">
              <p className="font-script text-3xl text-[color:var(--accent-strong)]">{homeContent.location.eyebrow}</p>
              <h2 className="mt-2 font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.05em]">
                {homeContent.location.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--page-ink)]/78">{homeContent.location.description}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.5rem] border-[2px] border-[color:var(--line)] bg-[color:var(--card-peach)] p-5">
                  <div className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[color:var(--page-ink)]/62">
                    {homeContent.location.addressEyebrow}
                  </div>
                  <div className="mt-3 text-lg font-bold leading-7">
                    {shop.address.street}
                    <br />
                    {shop.address.neighborhood}, {shop.address.city}
                    <br />
                    C.P. {shop.address.postalCode}
                  </div>
                  <a
                    href={shop.mapDirectionsUrl}
                    className="mt-5 inline-flex rounded-[1rem] border-[2px] border-[color:var(--line)] bg-[color:var(--card-yellow)] px-4 py-3 text-sm font-black uppercase tracking-[0.16em] shadow-[4px_4px_0_var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-1"
                  >
                    {homeContent.location.directionsLabel}
                  </a>
                </div>

                <div className="rounded-[1.5rem] border-[2px] border-[color:var(--line)] bg-[color:var(--card-mint)] p-5">
                  <div className="text-[0.68rem] font-black uppercase tracking-[0.28em] text-[color:var(--page-ink)]/62">
                    {homeContent.location.hoursEyebrow}
                  </div>
                  <div className="mt-3 grid gap-3">
                    {shop.hours.map((slot) => (
                      <div key={slot.label} className="flex items-center justify-between gap-4 rounded-[1rem] bg-[color:var(--chip-bg)] px-4 py-3">
                        <span className="text-sm font-black uppercase tracking-[0.12em]">{slot.label}</span>
                        <span className="text-sm font-semibold">{slot.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border-[3px] border-[color:var(--line)] bg-[color:var(--card-blue)] shadow-[12px_12px_0_var(--shadow-soft)]">
              <iframe
                title="Mapa de Gift Shop"
                src={shop.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[420px] w-full"
              />
            </div>
          </div>
        </section>

        <section
          id="printing"
          data-reveal
          className="reveal-section mx-auto mt-18 w-full max-w-[1440px] px-4 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-[2.2rem] border-[3px] border-[color:var(--line)] bg-[color:var(--newsletter-panel)] px-5 py-8 shadow-[14px_14px_0_var(--shadow-strong)] sm:px-8 sm:py-10">
            <div aria-hidden="true" className="dots-divider absolute inset-x-0 top-0 h-5" />
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <p className="font-script text-3xl text-[color:var(--accent-strong)]">{homeContent.printing.scriptLead}</p>
                <h2 className="mt-2 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.94] tracking-[-0.05em]">
                  {homeContent.printing.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--page-ink)]/76 sm:text-base">
                  {homeContent.printing.description}
                </p>
              </div>
              <div className="grid gap-4 rounded-[1.7rem] border-[2px] border-[color:var(--line)] bg-[color:var(--newsletter-card)] p-4 sm:p-5">
                <div className="grid gap-3">
                  {homeContent.printing.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-[1rem] border-[2px] border-dashed border-[color:var(--line)] bg-white/35 px-4 py-3 text-sm font-semibold leading-6 text-[color:var(--page-ink)]/78"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
                <a
                  href={`mailto:${shop.email}?subject=${encodeURIComponent("Impresiones y fotocopias")}&body=${encodeURIComponent("Hola, les envío mis archivos para imprimir o fotocopiar.\n\nDetalles:\n- Cantidad:\n- Color o blanco y negro:\n- Tamaño:\n- Indicaciones extra:\n")}`}
                  className="newsletter-button inline-flex items-center justify-center rounded-[1rem] border-[3px] border-[color:var(--line)] bg-[color:var(--cta-bg)] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[color:var(--cta-ink)] shadow-[8px_8px_0_var(--shadow-strong)]"
                >
                  {homeContent.printing.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-18 border-t-[3px] border-[color:var(--line)] bg-[color:var(--footer-bg)]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="font-display text-3xl tracking-[-0.05em]">{homeContent.brand.name}</div>
            <p className="mt-2 text-sm font-semibold text-[color:var(--page-ink)]/72">{homeContent.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {homeContent.footer.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`inline-flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-[color:var(--line)] text-sm font-black uppercase tracking-[0.16em] shadow-[4px_4px_0_var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-1 ${link.color}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <WhatsAppFAB href={waLink(hero.whatsappMessage)} />
    </div>
  )
}
