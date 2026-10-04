# Digibahn

**Engineering the AI-Native Enterprise.**

A premium marketing + capabilities website for a next-generation technology company operating as a **technology integrator, AI-native product studio and AI engineering lab**. Built around an original visual concept — **The Intelligence Layer** — the enterprise stack gaining a new layer: intelligence.

The design is editorial and minimal: large typography, generous whitespace, a restrained monochrome palette with a single electric-blue accent, and purposeful motion that communicates systems and intelligence (node networks, flowing architecture, agent-to-system communication, and a signature scroll moment where the enterprise stack "becomes intelligent").

---

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | Next.js 16 (App Router, RSC)            |
| Language       | TypeScript (strict)                     |
| UI             | React 19                                |
| Styling        | Tailwind CSS 3.4 + design tokens        |
| Motion         | Framer Motion 12 (reduced-motion aware) |
| Fonts          | Inter (sans) + IBM Plex Mono (mono)     |

Everything renders as static / SSG — all routes prerender to HTML, so the site is fast, cacheable and has **0 production dependency vulnerabilities**.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (prerenders every route)
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## Project structure

```
src/
  app/                     # App Router routes
    layout.tsx             # fonts, nav, footer, Organization JSON-LD
    page.tsx               # homepage (full narrative)
    capabilities/          # overview + [slug] detail (6 capabilities)
    ai-lab/                # AI Engineering Lab
    work/                  # case studies as engineering records
    industries/            # industries + approach framework
    insights/              # "Intelligence / Notes" + [slug] articles
    about/                 # team, philosophy, engagement model
    contact/               # "What are you trying to build?" form
    legal/privacy/
    sitemap.ts, robots.ts  # SEO
  components/
    layout/                # nav, footer
    home/                  # homepage sections
    visuals/               # IntelligenceField, ArchitectureStack, SignatureScroll
    capabilities/, lab/, insights/, contact/
    ui/                    # Section, PageHeader, CtaBand, Faq, Wordmark
    motion/                # Reveal / RevealLines primitives
  lib/
    site.ts                # name, nav, contact, social
    content.ts             # all copy & data (single source of truth)
    seo.tsx                # metadata + JSON-LD helpers
```

## Design system

Defined as tokens in `tailwind.config.ts` and `src/app/globals.css`.

- **Near black** `#090909` · **Off white** `#F4F3EF`
- **Text** `#111111` / on dark `#F5F5F2` · **Muted** `#777777` · **Borders** `#D9D9D4`
- **Accent (Electric Blue)** `#4C6FFF` — used only for active intelligence, connection and data-flow (≈10% of the surface)
- Fluid editorial type scale (`text-display`, `text-h1`…`text-label`), 1600px max shell, fluid gutters and section rhythm.

## Accessibility & performance

- Semantic HTML, skip-to-content link, keyboard-accessible nav, FAQ accordion and forms.
- Every animation respects `prefers-reduced-motion` (static fallbacks throughout).
- Fonts via `next/font` (self-hosted, no layout shift). Static prerendering for Core Web Vitals.

## SEO & AEO (answer-engine optimization)

- Per-page metadata + canonical URLs, Open Graph / Twitter cards, `sitemap.xml`, `robots.txt`.
- Structured data: `Organization`, `Service` (per capability), `Article` (per insight), `FAQPage`.
- Plain-language explainers ("What is an AI-native enterprise?", "What is RAG?" …) in `content.ts`, rendered as an on-page FAQ and exposed as FAQ schema for generative search.

## Customization

- **Company identity**, contact and social live in `src/lib/site.ts` (the name `Digibahn` was taken from the repository; change it in one place).
- **All copy and data** live in `src/lib/content.ts` — capabilities, research, case studies, industries, insights, FAQ.
- **Set the production domain** (`SITE.domain`) so canonical URLs, sitemap and JSON-LD resolve correctly.
- The **contact form** is client-only in this build (no data leaves the browser). Wire `src/components/contact/contact-form.tsx` to your backend, email service or CRM to go live.
