/**
 * Public origin (plus base path, if any) of this build; canonical URLs, hreflang, Open Graph and the sitemap
 * are built from it. Defaults to production. The GitHub Pages preview sets VITE_SITE_URL, see deploy.yml.
 * `import.meta.env` is optional-chained because react-router.config.ts also imports this file in plain Node.
 */
export const SITE_URL: string = (
  import.meta.env?.VITE_SITE_URL || 'https://spendbaker.com'
).replace(/\/$/, '');
export const SITE_NAME = 'Spendbaker';
export const APP_URL = 'https://app.spendbaker.com';

export type Lang = 'en' | 'fr';

/**
 * Single source of truth for every public page. `routes.ts`, the prerender list, the sitemap
 * and the hreflang links are all derived from it. A page with `alt` has a translation.
 */
export const PAGES = [
  { id: 'home', en: '/', fr: '/fr' },
  { id: 'features', en: '/features', fr: '/fonctionnalites' },
  { id: 'pricing', en: '/pricing', fr: '/prix' },
  { id: 'demo', en: '/demo', fr: '/demonstration' },
  { id: 'contact', en: '/contact', fr: '/contactez-nous' },
  { id: 'privacy', en: '/privacy' },
  { id: 'legal', en: '/legal', fr: '/cgu' },
  { id: 'blog', en: '/blog' },
] as const;

export type PageId = (typeof PAGES)[number]['id'];

const FR_PATHS: Set<string> = new Set(PAGES.flatMap((p) => ('fr' in p ? [p.fr] : [])));

/** `/fr/` and `/fr` are the same page. */
const normalize = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

export const langFromPath = (pathname: string): Lang =>
  FR_PATHS.has(normalize(pathname)) ? 'fr' : 'en';

/** Path of the same page in another language, or null when no translation exists. */
export function translatedPath(pathname: string, to: Lang): string | null {
  const path = normalize(pathname);
  const page = PAGES.find((p) => p.en === path || ('fr' in p && p.fr === path));
  if (!page) return null;
  return to === 'fr' ? ('fr' in page ? page.fr : null) : page.en;
}

export const pathFor = (id: PageId, lang: Lang): string => {
  const page = PAGES.find((p) => p.id === id)!;
  return lang === 'fr' && 'fr' in page ? page.fr : page.en;
};
