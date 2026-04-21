# Gift Shop — Monorepo

## Structure

```
gift-shop/
├── apps/
│   └── gift-shop/          # Next.js 16 app
├── packages/
│   ├── utils/              # @repo/utils — cn(), Zod schemas, shared types
│   ├── tsconfig/           # @repo/tsconfig — shared TS configs
│   ├── ui/                 # @repo/ui — shadcn/ui component library
│   └── eslint-config/      # @repo/eslint-config
├── tooling/
│   └── theme.css           # Shared OKLCH design tokens (@theme directive)
├── package.json            # Bun workspaces
├── CITATION.cff
├── LICENSE
└── justfile
```

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.x (App Router only) |
| React | React | 19.x |
| Runtime | Bun | 1.1+ |
| Language | TypeScript | 5.6+ strict |
| CSS | Tailwind CSS | 4.x (no tailwind.config.ts) |
| Components | shadcn/ui | new-york style |
| Icons | lucide-react | only icon library |
| Theming | next-themes | class-based dark mode |
| Forms | React Hook Form + Zod | never Formik/Yup |
| Toasts | sonner | never react-hot-toast |
| Animation | tailwindcss-animate | Framer Motion only if needed |

## Code Style (enforced, never deviate)

- 2-space indentation
- Double quotes
- No semicolons
- `import type` for type-only imports
- kebab-case for file names
- PascalCase for components
- camelCase for functions and variables
- Design tokens over hardcoded color/spacing values
- `"use client"` only on interactive components

## Component Architecture (three layers)

1. **Base UI** (`packages/ui/`) — shadcn/ui + Radix primitives, no business logic
2. **App components** (`apps/gift-shop/src/components/`) — business compositions, feature subdirs
3. **Pages** (`apps/gift-shop/src/app/`) — App Router pages, minimal logic

## Data/Format Separation

- **Data** → `apps/gift-shop/src/content/` (`.ts` or `.json`)
- **Format** → `src/components/` + `src/app/`
- Never hardcode content in page components

## Commands

```bash
bun run dev          # dev all apps
bun run build        # build packages then apps
bun run lint         # lint all workspaces
bun run type-check   # type-check all workspaces
bun run test         # run tests

# In packages/ui/
bunx shadcn@latest add <component>   # add shadcn component
```

## Anti-patterns (never do)

- Never use `pages/` directory — App Router only
- Never install Radix UI directly — use shadcn/ui
- Never use CSS Modules or styled-components
- Never create `tailwind.config.ts` — v4 uses CSS config
- Never use `--webpack` or `--turbopack` flags in dev
- Never use dynamic OG image routes with static export
- Never hardcode image paths without basePath helper
- Never put business logic in page.tsx files
- Never hardcode content in page components — extract to `src/content/`
- Never use Formik or Yup
- Never use `var`

## Tailwind CSS v4 Rules

- `@import "tailwindcss"` in globals.css (not @tailwind directives)
- `@plugin` replaces the plugins array
- `@theme inline` maps CSS vars to utility classes
- `@source` for monorepo packages
- `@tailwindcss/postcss` is the PostCSS plugin

## Deployment

GitHub Pages via static export. `NEXT_PUBLIC_REPO_NAME` env var drives basePath/assetPrefix.
Enable: repo Settings → Pages → Source → "GitHub Actions".
