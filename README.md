# PashaCommerce

Agency website for PashaCommerce, a TikTok Shop–focused ecommerce agency in Lahore, Pakistan.
It's built with Next.js 16 (App Router) and Tailwind CSS v4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Where to edit things

| What | File |
| --- | --- |
| Colours, fonts, spacing, max-width (global CSS variables) | `src/app/globals.css` (`:root`) |
| Business info: phone, WhatsApp, email, address, socials | `src/data/site.ts` |
| Services and what's included | `src/data/services.ts` |
| Portfolio and case studies | `src/data/portfolio.ts` |
| Stats, process, testimonials, FAQ | `src/data/content.ts` |
| Placeholder photos | `src/data/images.ts` |

## Before launch

- **Portfolio:** `src/data/portfolio.ts` holds sample case studies. Replace them with real client work, or delete them.
  A page is generated automatically at `/portfolio/<slug>` for each entry.
- **Stats and testimonials:** the figures and quotes in `src/data/content.ts` are placeholders.
- **Photos:** placeholder photos are loaded from Unsplash. To use your own, add them to `public/images/` and update the paths in `src/data/images.ts`.
- **Social links:** fill in `site.socials` in `src/data/site.ts`. Empty links are hidden.

The contact form doesn't need a backend.
It builds the visitor's message and opens it in WhatsApp or their email app, addressed to PashaCommerce.
