"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { homeContent } from "@/content/home"

export function SiteHeader() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1440px] rounded-[1.75rem] border-[3px] border-[color:var(--line)] bg-[color:var(--header-bg)]/92 px-4 py-3 shadow-[8px_8px_0_var(--shadow-soft)] backdrop-blur-md sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-[1rem] border-[2px] border-[color:var(--line)] bg-[color:var(--card-pink)] text-2xl shadow-[4px_4px_0_var(--shadow-soft)]">
              ✿
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-[1.55rem] leading-none tracking-[-0.05em]">{homeContent.brand.name}</div>
              <div className="font-script text-lg leading-none text-[color:var(--accent-strong)]">{homeContent.brand.headerAccent}</div>
            </div>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            <nav className="flex items-center gap-5">
              {homeContent.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-black uppercase tracking-[0.18em] text-[color:var(--page-ink)]/72 transition-colors hover:text-[color:var(--accent-strong)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 rounded-full border-[2px] border-[color:var(--line)] bg-[color:var(--chip-bg)] p-1">
              {homeContent.themeOptions.map((option) => {
                const active = mounted && theme === option.value

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTheme(option.value)}
                    className={[
                      "rounded-full px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.18em] transition-all duration-200",
                      active
                        ? "bg-[color:var(--accent-strong)] text-[color:var(--accent-ink)]"
                        : "text-[color:var(--page-ink)]/68 hover:bg-[color:var(--card-yellow)]",
                    ].join(" ")}
                    aria-pressed={active}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] border-[2px] border-[color:var(--line)] bg-[color:var(--card-yellow)] text-[color:var(--page-ink)] shadow-[4px_4px_0_var(--shadow-soft)] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Abrir o cerrar menú de navegación"
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-[3px] w-6 rounded-full bg-current transition-transform ${menuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
              <span className={`h-[3px] w-6 rounded-full bg-current transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-[3px] w-6 rounded-full bg-current transition-transform ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 lg:hidden ${menuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="min-h-0">
            <div className="rounded-[1.5rem] border-[2px] border-[color:var(--line)] bg-[color:var(--menu-bg)] p-4">
              <nav className="grid gap-3">
                {homeContent.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-[1rem] bg-[color:var(--chip-bg)] px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-[color:var(--page-ink)] shadow-[3px_3px_0_var(--shadow-soft)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-4">
                <div className="mb-2 text-[0.62rem] font-black uppercase tracking-[0.28em] text-[color:var(--page-ink)]/60">{homeContent.brand.mobileThemePrompt}</div>
                <div className="grid grid-cols-2 gap-2">
                  {homeContent.themeOptions.map((option) => {
                    const active = mounted && theme === option.value

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setTheme(option.value)}
                        className={[
                          "rounded-[1rem] border-[2px] px-3 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all duration-200",
                          active
                            ? "border-[color:var(--accent-strong)] bg-[color:var(--accent-strong)] text-[color:var(--accent-ink)]"
                            : "border-[color:var(--line)] bg-[color:var(--card-lilac)] text-[color:var(--page-ink)]",
                        ].join(" ")}
                        aria-pressed={active}
                      >
                        {option.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
