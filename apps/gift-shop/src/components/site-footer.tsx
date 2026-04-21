import { shop } from "@/content/shop"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M16 3 C10 3, 4 8, 4 16 C4 24, 10 29, 16 29 C22 29, 28 24, 28 16 C28 8, 22 3, 16 3Z" fill="#FFD1EA" stroke="#2E1A2B" strokeWidth="1.5"/>
            <path d="M16 3 L8 12 M16 3 L24 12" stroke="#2E1A2B" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="3" fill="#2E1A2B"/>
          </svg>
          <span className="font-display text-sm font-semibold text-ink">
            {shop.name}
          </span>
        </div>

        <p className="text-xs text-ink/40">
          © {year} {shop.name} · {shop.tagline}
        </p>

        <div className="flex gap-4">
          <a href={shop.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-ink/40 hover:text-ink transition-colors">Instagram</a>
          <a href={shop.tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-ink/40 hover:text-ink transition-colors">TikTok</a>
          <a href={shop.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-ink/40 hover:text-ink transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
