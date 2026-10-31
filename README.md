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

## Deploying

**Production (spendbaker.com):** `Dockerfile.prod` builds the site and serves `build/client` with `thumb`. No
build variables are needed except `VITE_CONTACT_ENDPOINT` (see "Contact form").

**Preview on GitHub Pages:** `.github/workflows/deploy.yml` publishes to
`https://<owner>.github.io/<repo>/` on every push to `main` (and on demand from the Actions tab). It is a
preview, not the real site: the build is `noindex`, `robots.txt` disallows everything, there is no sitemap, and
canonical/hreflang URLs point at the preview. One-time setup (repo admin): Settings, Pages, Source =
"GitHub Actions". Optional: repository variable `CONTACT_ENDPOINT` for the demo form.

Build variables (read at build time):

| Variable | Default | Purpose |
|---|---|---|
| `BASE_PATH` | `/` | Sub-path hosting, e.g. `/sb_landing_front/`. Sets the router basename and Vite `base`. |
| `VITE_SITE_URL` | `https://spendbaker.com` | Public URL of the build (canonical, hreflang, Open Graph, sitemap). No trailing slash. |
| `VITE_NOINDEX` | unset | `true` adds `<meta name="robots" content="noindex, nofollow">` and a disallow-all `robots.txt`. |
| `VITE_CONTACT_ENDPOINT` | unset | Where the demo-request form posts. |

Try the preview build locally:

```sh
BASE_PATH=/sb_landing_front/ VITE_SITE_URL=http://localhost:4175/sb_landing_front VITE_NOINDEX=true npm run build
npx serve -l 4175 build   # then serve build/client under /sb_landing_front/ (any static server that maps it)
```

GitHub Pages limits: no server redirects (the old site's `/policy` and `/article/...` URLs need Cloudflare rules
or meta-refresh pages), unknown URLs get `404.html` (our "page not found" screen), and `/pricing` is
redirected to `/pricing/`.
