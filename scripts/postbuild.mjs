// Generates sitemap.xml and robots.txt from the prerendered HTML in build/client.
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const SITE_URL = 'https://spendbaker.com';
const root = 'build/client';
const NOT_PAGES = new Set(['/__spa-fallback', '/404']);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const paths = walk(root)
  .filter((f) => f.endsWith('.html'))
  .map((f) => '/' + relative(root, f).replace(/(^|\/)index\.html$/, '').replace(/\.html$/, ''))
  .map((p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p))
  .filter((p) => !NOT_PAGES.has(p))
  .sort();

const day = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${day}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
writeFileSync(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`sitemap.xml: ${paths.length} urls\n${paths.join('\n')}`);
