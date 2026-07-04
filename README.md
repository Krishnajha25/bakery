# bakeologgyyy

Landing page for the bakeologgyyy home bakery — Next.js (App Router) + TypeScript, no UI dependencies. Design: "warm patisserie editorial" (cream / cocoa / caramel, Fraunces + Karla via `next/font`).

## Run

```bash
npm install
npm run dev
```

## Where things live

- `src/lib/site.ts` — all content/config: links, menu items, prices, ticker. Edit here, not in components.
- `src/components/` — one component per section (`Hero`, `Menu`, `About`, …).
- `src/app/globals.css` — full design system (CSS variables in `:root`).
- `src/components/Reveal.tsx` — the only client component (scroll-reveal via IntersectionObserver).

## Photos

Real photos from the @bakeologgyyy Instagram live in `public/photos/` (curated, renamed). `public/photos-raw/` holds all 16 originals pulled from the profile — safe to delete or keep for swapping. Images are referenced from `src/lib/site.ts`.

## SEO / AEO

Targeted at local search ("bakery near me" from Vasai-Virar) and AI answer engines:

- `src/lib/seo.ts` — JSON-LD `@graph`: `Bakery` (LocalBusiness) with full menu + INR prices + `areaServed` (Vasai, Virar, Nalasopara, Naigaon), `FAQPage`, `WebSite`
- `src/app/layout.tsx` — local-keyword metadata, Open Graph (`public/og.jpg`), geo meta tags
- `src/app/sitemap.ts` / `src/app/robots.ts` — robots deliberately allows AI crawlers (GPTBot, ClaudeBot, etc.) so the bakery surfaces in AI assistants
- FAQ section on the page mirrors the FAQPage schema (Google requires visible content)

**IMPORTANT — domain:** canonical URLs, sitemap and schema use `NEXT_PUBLIC_SITE_URL` (fallback is a placeholder). Set it in `.env`/hosting config once the domain exists, e.g. `NEXT_PUBLIC_SITE_URL=https://bakeology.in`

After deploying: verify the site in [Google Search Console](https://search.google.com/search-console) and submit the sitemap; test rich results at https://search.google.com/test/rich-results. The single biggest local-SEO win beyond the site itself: create a **Google Business Profile** for Bakeology (home bakery, Vasai-Virar service area) and link this site + Instagram from it.

## Before going live

- [ ] Testimonials in `Testimonials.tsx` are placeholders.
- [ ] Menu item descriptions were written by us — have the baker confirm them.
- [ ] Consider replacing `photos/cookies-n-cream.jpg` and the Biscoff card image (currently the assorted-box shot) with dedicated single-cookie photos when available.

Menu, prices (₹) and WhatsApp number come from the printed menu; location, FSSAI status and 1–2 day pre-order from the Instagram bio (July 2026).
