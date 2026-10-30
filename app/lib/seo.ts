import { PAGES, SITE_NAME, SITE_URL, type Lang, type PageId } from '~/site';

type MetaInput = { page: PageId; lang: Lang; title: string; description: string; image?: string };

/** Absolute URL of a page in a given language. */
export function pageUrl(id: PageId, lang: Lang): string {
  const page = PAGES.find((p) => p.id === id)!;
  const path = lang === 'fr' && 'fr' in page ? page.fr : page.en;
  return SITE_URL + path;
}

/** Title, description, canonical, hreflang, Open Graph and Twitter tags for a route's `meta` export. */
export function buildMeta({ page, lang, title, description, image = '/og-image.png' }: MetaInput) {
  const page_ = PAGES.find((p) => p.id === page)!;
  const url = pageUrl(page, lang);
  const imageUrl = SITE_URL + image;
  const tags: Record<string, string>[] = [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: imageUrl },
    { property: 'og:locale', content: lang === 'fr' ? 'fr_FR' : 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];
  if ('fr' in page_) {
    tags.push(
      { tagName: 'link', rel: 'alternate', hrefLang: 'en', href: pageUrl(page, 'en') },
      { tagName: 'link', rel: 'alternate', hrefLang: 'fr', href: pageUrl(page, 'fr') },
      { tagName: 'link', rel: 'alternate', hrefLang: 'x-default', href: pageUrl(page, 'en') },
    );
  }
  return tags;
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
};
