# Mac Hive (machive) website

Marketing site for Mac Hive: SaaS publisher (BillHive, AdHive) and web/mobile dev services.
Goal of the site: book discovery calls via the contact form.

## Stack

- Next.js 16 App Router, React 19, TypeScript strict
- Tailwind CSS v4 (`@theme` in `app/globals.css`, no `tailwind.config.js`)
- shadcn-style atoms in `components/ui`, icons from `lucide-react`
- Contact form: server action `app/actions.ts` → zod (`lib/validations.ts`) → Neon Postgres
  (`lib/db.ts`) + Resend email (`lib/email.ts`)
- Deployed on Vercel, `@vercel/speed-insights`
- Package manager: **pnpm** only

## Commands

```bash
pnpm dev      # local dev server
pnpm build    # production build, run before calling work done
pnpm lint     # eslint
```

Env vars (in `.env.local`, never committed): `DATABASE_URL`, `RESEND_API_KEY`, `NOTIFICATION_EMAIL`.

## Layout

- `app/` routes: `/`, `/services`, `/portfolio`, `/contact`, `/privacy`, `/terms`, plus
  `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`
- `components/layout/` Navbar, MobileNav, Footer
- `components/sections/` home page sections (Hero, ServicesSection, PricingSection, FAQSection...)
- `components/seo/JsonLd.tsx` structured data
- `docs/` PRD, wireframe, legacy rules; `ui-design/` original Stitch mockups (reference only)

## Conventions

- Server Components by default; `'use client'` only for interactive islands.
- PascalCase component files; one section per file in `components/sections/`.
- Keep SEO intact on every page change: `metadata` export, JSON-LD, sitemap entry.
- Mobile first. Check every UI change at phone width.
- Fonts are local: Alfa Slab One (`--font-alfa`) and Antic Slab (`--font-antic`) in
  `app/layout.tsx`. `docs/rules.md` still says Inter; it is out of date.

## Design work: Impeccable

The [Impeccable](https://github.com/pbakaus/impeccable) skill is installed in
`.claude/skills/impeccable` with its agents in `.claude/agents/impeccable-*`.
Use it for all visual/UI work on this site.

- First run: `/impeccable init` writes `PRODUCT.md` and `DESIGN.md` (design context).
  Once they exist they are the source of truth for brand and design; they override
  `docs/rules.md` and `.agent/rules/design_system.md`.
- Common moves: `/impeccable critique <page>`, `/impeccable audit <page>`,
  `/impeccable polish|bolder|quieter|distill <target>`, `/impeccable typeset`, `/impeccable layout`.
- Slop check from the terminal: `.claude/skills/impeccable/scripts/impeccable detect app components`
- Hooks in `.claude/settings.local.json` run the detector after edits to UI files and on stop.
  Fix what they flag before calling UI work done.
- Update: `npx impeccable update`. Broken setup: `/impeccable doctor`.

## Git

- Commit subject: `type(#issue): message` (lowercase, imperative). Ask for the issue number.
- Work on a branch, PR into `main`.
