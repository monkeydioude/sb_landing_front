import type { Config } from '@react-router/dev/config';
import { PAGES } from './app/site';

// Static site: no server at runtime. Every public route is rendered to real HTML at build time
// (good for SEO and LCP) and then hydrated by React.
//
// BASE_PATH is for hosting under a sub-path, e.g. the GitHub Pages preview ('/sb_landing_front/'). Leave it
// unset for a domain root (spendbaker.com).
const basename = process.env.BASE_PATH || '/';

export default {
  basename,
  ssr: false,
  prerender: [...new Set(PAGES.flatMap((p) => [p.en, 'fr' in p ? p.fr : p.en]))],
} satisfies Config;
