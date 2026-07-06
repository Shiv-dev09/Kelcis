# Kelcis — company website

Production website for Kelcis, a Dubai-based technology consultancy
(Freshworks consulting, managed services, integrations, automation,
customer support and success).

Design direction: boutique consulting, not IT services — cream and ink
surfaces, warm bronze gradients with grain, bold grotesque headlines,
editorial serif support copy, wireframe line illustrations. Inspired by
the restraint of award-winning consulting/PE sites; original in
execution.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens in `app/globals.css`
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals, reduced-motion aware
- Fonts via `next/font`: Archivo (headlines), Newsreader (editorial serif),
  Space Grotesk (logo wordmark only)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Architecture

```
app/                    # App Router pages (one folder per route)
  services/[slug]/      # Service detail pages, statically generated
  legal/                # Privacy, terms
brand/                  # Brand assets + guidelines (source of truth for the mark)
components/
  brand/                # KelcisMark, KelcisLockup — the logo, inline SVG
  forms/                # ContactForm
  graphics/             # Wireframe line illustrations (stroke-only SVG)
  layout/               # SiteHeader, SiteFooter, PageIntro
  marketing/            # Homepage sections, each self-contained
  motion/               # Reveal — the single scroll-animation primitive
  ui/                   # Clock, ArrowLong
content/                # All copy, typed. Edit words here, not in JSX.
```

Conventions:

- Copy lives in `content/*.ts`; components take typed props.
- The logo is never redrawn — `components/brand/KelcisMark.tsx` is the
  master geometry, tinted via `currentColor`.
- One motion primitive (`Reveal`) keeps animation consistent and cheap;
  it renders static markup under `prefers-reduced-motion`.
- Color tokens (`cream`, `ink`, `bronze`, `oat`, `ash`, `sand`, tile
  surfaces) are defined once in `app/globals.css` under `@theme`.

## Deployment (Vercel)

1. Push to GitHub and import the repository in Vercel.
2. Framework preset: Next.js — no custom configuration needed.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain (see
   `.env.example`).

`sitemap.xml`, `robots.txt`, per-page metadata and OpenGraph tags are
generated from the App Router (`app/sitemap.ts`, `app/robots.ts`).

## Accessibility & performance

- Semantic landmarks, skip link, focus-visible states, labelled controls
- `prefers-reduced-motion` respected globally
- Fonts self-hosted via `next/font` (no layout shift, no third-party requests)
- No client JavaScript beyond the header menu, clock, form and reveals
