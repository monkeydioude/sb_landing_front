# sb_landing_front

Marketing site for spendbaker.com. Vite + React 19 + Tailwind 4 + React Router 7 (framework mode,
`ssr: false`): every route is prerendered to static HTML at build time, then hydrated.

- `npm run dev` / `npm run build` (output in `build/client`, plus `sitemap.xml` and `robots.txt`)
- Add a page: add it to `PAGES` in `app/site.ts`, a route in `app/routes.ts`, a file in `app/routes/`.
  The prerender list, hreflang links and sitemap follow automatically.
- Copy lives in `app/content/{en,fr}.ts`; SEO tags come from `app/lib/seo.ts`.
- Brand tokens: `app/styles/tokens.css` (copied from sb_front).

## Contact form (demo request)

`/contact` (FR: `/contactez-nous`) has a form that sends a JSON `POST` to the URL in the
`VITE_CONTACT_ENDPOINT` env var (copy `.env.model` to `.env`; Vite inlines it at build time, so set it
before `npm run build`). If it is empty the form shows its error message and logs to the console.

The endpoint must allow CORS from the site origin (the browser sends a preflight because of
`Content-Type: application/json`) and answer any 2xx on success. Request body:

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "company": "Analytical Engines",
  "role": "Head of Growth",
  "teamSize": "21-50",
  "adSpend": "€50k - €250k",
  "platforms": ["Google Ads", "LinkedIn Ads"],
  "message": "Approvals across regions, please.",
  "consent": true,
  "lang": "en",
  "source": "website-contact"
}
```

`name`, `email`, `company` and `consent` (always `true`) are required; `role`, `teamSize`, `adSpend`
and `message` may be empty strings, `platforms` may be empty. `teamSize`, `adSpend` and `platforms`
carry the visible (translated) option labels. A hidden `website` honeypot field stops simple bots
client-side: those submissions are never sent. Validate and rate-limit server-side too.
