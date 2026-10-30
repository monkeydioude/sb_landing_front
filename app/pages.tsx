import { Container } from '~/components/Container';
import { content } from '~/content';
import { buildMeta } from '~/lib/seo';
import { Dashboard } from '~/sections/Dashboard';
import { FinalCta } from '~/sections/FinalCta';
import { FreeMarketers } from '~/sections/FreeMarketers';
import { Gaps } from '~/sections/Gaps';
import { Hero } from '~/sections/Hero';
import { Integrations } from '~/sections/Integrations';
import { Testimonial } from '~/sections/Testimonial';
import { TrustBar } from '~/sections/TrustBar';
import type { Lang, PageId } from '~/site';

/** Shared page bodies and meta; the thin route files only bind a language to them. */
export const metaFor = (page: 'home' | 'features' | 'pricing' | 'demo' | 'contact', lang: Lang) => {
  const { title, description } = content[lang][page];
  return buildMeta({ page: page as PageId, lang, title, description });
};

export function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang].home;
  return (
    <>
      <Hero t={t} />
      <Dashboard t={t.dashboard} lang={lang} />
      <TrustBar t={t.trust} />
      <FreeMarketers t={t.free} />
      <Gaps t={t.gaps} lang={lang} />
      <Integrations t={t.integrations} />
      <Testimonial t={t.quote} />
      <FinalCta t={t.final} />
    </>
  );
}

export function SimplePage({
  page,
  lang,
}: {
  page: 'features' | 'pricing' | 'demo' | 'contact';
  lang: Lang;
}) {
  const t = content[lang][page];
  return (
    <Container className="pt-page pb-section text-center">
      <h1 className="mx-auto max-w-3xl text-title font-bold tracking-tight text-balance">{t.h1}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t.sub}</p>
    </Container>
  );
}
