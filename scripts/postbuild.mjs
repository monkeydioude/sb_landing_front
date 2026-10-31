// After `react-router build`: flatten the output for a sub-path deploy, then write sitemap.xml, robots.txt
// and 404.html into build/client. Configured by the same env vars as the build:
//   BASE_PATH      '/sb_landing_front/' on the GitHub Pages preview; unset for a domain root
//   VITE_SITE_URL  public URL of this build; default https://spendbaker.com
//   VITE_NOINDEX   'true' on previews: robots.txt disallows everything and the sitemap is skipped
import {
  copyFileSync,
  cpSync,
  existsSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { join, relative } from 'node:path';

const SITE_URL = (process.env.VITE_SITE_URL || 'https://spendbaker.com').replace(/\/$/, '');
const NOINDEX = process.env.VITE_NOINDEX === 'true';
const root = 'build/client';
const NOT_PAGES = new Set(['/__spa-fallback', '/404']);

// With a base path, React Router writes the pages under build/client/<sub>/ while assets stay in
// build/client/. GitHub Pages serves the artifact at /<sub>/, so move the pages up next to the assets.
const sub = (process.env.BASE_PATH || '/').replace(/^\/|\/$/g, '');
if (sub && existsSync(join(root, sub))) {
  cpSync(join(root, sub), root, { recursive: true });
  rmSync(join(root, sub), { recursive: true });
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const paths = walk(root)
  .filter((f) => f.endsWith('.html'))
  .map(
    (f) =>
      '/' +
      relative(root, f)
        .replace(/(^|\/)index\.html$/, '')
        .replace(/\.html$/, ''),
  )
  .map((p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p))
  .filter((p) => !NOT_PAGES.has(p))
  .sort();

if (NOINDEX) {
  writeFileSync(join(root, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  rmSync(join(root, 'sitemap.xml'), { force: true });
} else {
  const day = new Date().toISOString().slice(0, 10);
  const loc = (p) => (p === '/' ? SITE_URL + '/' : SITE_URL + p);
  writeFileSync(
    join(root, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
      .map((p) => `  <url><loc>${loc(p)}</loc><lastmod>${day}</lastmod></url>`)
      .join('\n')}\n</urlset>\n`,
  );
  writeFileSync(
    join(root, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  );
}

// GitHub Pages serves 404.html for unknown URLs; the SPA fallback renders our "page not found" route.
if (existsSync(join(root, '__spa-fallback.html')))
  copyFileSync(join(root, '__spa-fallback.html'), join(root, '404.html'));

console.log(
  `${NOINDEX ? 'noindex build (no sitemap)' : `sitemap.xml: ${paths.length} urls`}\n${paths.join('\n')}`,
);
