# Gift Shop App

Next.js 16 app in the gift-shop monorepo.

## Dev Commands

```bash
bun run dev      # start dev server (Turbopack default, port 3000)
bun run build    # static export to ./out/
bun run lint     # ESLint
bun run type-check  # TypeScript check
```

## App Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (ThemeProvider, fonts, OG metadata)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind CSS v4 entry point
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── theme-provider.tsx  # next-themes wrapper ("use client")
│   └── blocks/             # Shared app-level blocks (metric-card, etc.)
└── content/
    └── about.ts            # About page data — edit content here, not in page.tsx
```

## Key Rules

- Dev script is `next dev` — no `--turbopack` or `--webpack` flags
- No `tailwind.config.ts` — Tailwind v4 configured in `globals.css`
- No `opengraph-image.tsx` — use static `public/opengraph.png` (1200x630)
- Image paths in components: prefix with `process.env.NEXT_PUBLIC_REPO_NAME` basePath helper
- All content extracted to `src/content/` — never hardcode in page.tsx

## Deployment

GitHub Pages via static export. `NEXT_PUBLIC_REPO_NAME` env var is set by GitHub Actions.
Local dev runs without the env var (no basePath).
Replace `public/opengraph.png` with a real 1200x630 OG image before deploying.

## Adding Components

```bash
cd packages/ui && bunx shadcn@latest add <component>
```

Then export from `packages/ui/src/index.ts` and import via `@repo/ui`.
