import type { Config } from '@react-router/dev/config';
import { PAGES } from './app/site';

// Static site: no server at runtime. Every public route is rendered to real HTML at build time
// (good for SEO and LCP) and then hydrated by React.
export default {
  ssr: false,
  prerender: [...new Set(PAGES.flatMap((p) => [p.en, 'fr' in p ? p.fr : p.en]))],
} satisfies Config;
