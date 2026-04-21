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

        <div className="flex items-center gap-4">
          <a
            href={shop.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink/40 transition-colors hover:text-ink"
          >
            <span className="sr-only">Instagram</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.75 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.5A4 4 0 1 0 16 12a4 4 0 0 0-4-4Z" />
            </svg>
          </a>
          <a
            href={shop.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-ink/40 transition-colors hover:text-ink"
          >
            <span className="sr-only">TikTok</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14.5 3c.57 1.64 1.63 2.97 3.22 3.78.88.45 1.8.67 2.78.72v3.18a9.2 9.2 0 0 1-4.5-1.2v6.24a6.22 6.22 0 1 1-5.17-6.13v3.27a3.1 3.1 0 1 0 2.05 2.92V3h1.62Z" />
            </svg>
          </a>
          <a
            href={shop.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-ink/40 transition-colors hover:text-ink"
          >
            <span className="sr-only">Facebook</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 22v-8.25h2.77l.42-3.22H13.5V8.47c0-.93.27-1.56 1.6-1.56h1.7V4.03c-.3-.04-1.3-.13-2.48-.13-2.45 0-4.12 1.45-4.12 4.39v2.24H7.5v3.22h2.7V22h3.3Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
