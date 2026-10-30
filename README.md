# sb_landing_front

Marketing site for spendbaker.com. Vite + React 19 + Tailwind 4 + React Router 7 (framework mode,
`ssr: false`): every route is prerendered to static HTML at build time, then hydrated.

- `npm run dev` / `npm run build` (output in `build/client`, plus `sitemap.xml` and `robots.txt`)
- Add a page: add it to `PAGES` in `app/site.ts`, a route in `app/routes.ts`, a file in `app/routes/`.
  The prerender list, hreflang links and sitemap follow automatically.
- Copy lives in `app/content/{en,fr}.ts`; SEO tags come from `app/lib/seo.ts`.
- Brand tokens: `app/styles/tokens.css` (copied from sb_front).
