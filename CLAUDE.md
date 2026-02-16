# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (also runs TypeScript type checking)
npm run start    # Start production server
npm run lint     # Run ESLint
```

There is no test runner configured in this project.

## Architecture Overview

This is a **dual-brand static marketing site** built with Next.js 16 App Router:

- **`/`** — NarenWebWorks (NWW) landing page: freelance software consultancy brand
- **`/clubcaddy`** — ClubCaddy product landing page: golf club management SaaS

All content is hardcoded static data — no APIs, no database, no environment variables needed.

## Two-Brand Theming System

The core architectural pattern is a dual-brand CSS theme system defined in `src/app/globals.css`:

- CSS custom properties on `:root` define both `--color-*` (ClubCaddy defaults) and `--nww-*` (NWW) variables
- `.theme-nww` and `.theme-clubcaddy` classes swap the active `--color-*` variables
- Components always reference `var(--color-primary)` etc. — the theme class on the parent determines which brand's colors are active
- **NWW primary:** `#B163FF` (violet); **ClubCaddy primary:** `#01941a` (green)
- When hardcoding colors in Tailwind classes (e.g. `text-[#B163FF]`), use the literal hex — CSS variable references don't work inside Tailwind's JIT bracket syntax

Component routing for the two brands:
- `src/components/nww/` — NWW-specific page sections
- `src/components/sections/` — ClubCaddy-specific page sections
- `src/components/layout/Navbar.tsx` + `Footer.tsx` — ClubCaddy layout
- `src/components/layout/NWWNavbar.tsx` + `NWWFooter.tsx` — NWW layout
- `src/components/shared/Logo.tsx` — Brand-aware: NWW renders text-only "NWW", ClubCaddy renders icon + text

## Key Data Files

All site content lives in:
- `src/lib/constants.ts` — Brand configs (`NWW_CONFIG`, `CLUBCADDY_CONFIG`), colors, nav links, footer links
- `src/data/features.ts` — ClubCaddy feature cards
- `src/data/pricing.ts` — Pricing tiers (INR)
- `src/data/navigation.ts` — Nav links, `whyUsReasons`, testimonials

When updating contact details, URLs, or copy — start in `constants.ts` and `src/data/`. Components pull from these rather than hardcoding values (with some exceptions like the location in `Footer.tsx`).

## Animation Pattern

`src/components/shared/AnimatedElement.tsx` wraps content with scroll-triggered CSS animations using `useInView` (`src/hooks/useInView.ts`). Supported animations: `fade-in`, `fade-in-left`, `fade-in-right`, `scale-in`. Delays are passed in milliseconds. The `useReducedMotion` hook disables animations when the OS `prefers-reduced-motion` is set.

## SEO

- `src/app/layout.tsx` — Root metadata (OpenGraph, Twitter cards, keywords)
- `src/lib/metadata.ts` — Shared metadata helpers
- `src/lib/schema.ts` — JSON-LD structured data
- `src/app/sitemap.ts` — Generates `/sitemap.xml`
- `src/app/robots.ts` — Generates `/robots.txt`

Legal pages (`/privacy-policy`, `/terms-of-service`, `/cookie-policy`) are static placeholder pages under `src/app/`.

## Path Alias

`@/*` maps to `src/*` — use this for all internal imports.
