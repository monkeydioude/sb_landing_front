import { Container } from '~/components/Container';
import { content } from '~/content';
import { buildMeta } from '~/lib/seo';
import { LegalDocument } from '~/sections/legal/LegalDocument';
import { ContactHero } from '~/sections/contact/ContactHero';
import { FeaturesCta } from '~/sections/features/FeaturesCta';
import { FeaturesHero } from '~/sections/features/FeaturesHero';
import { Architecture, Construction, Operations, Reporting } from '~/sections/features/Groups';
import { Assurances } from '~/sections/Assurances';
import { Dashboard } from '~/sections/Dashboard';
import { Faq } from '~/sections/Faq';
import { FinalCta } from '~/sections/FinalCta';
import { FreeMarketers } from '~/sections/FreeMarketers';
import { Gaps } from '~/sections/Gaps';
import { Hero } from '~/sections/Hero';
import { Integrations } from '~/sections/Integrations';
import { Testimonial } from '~/sections/Testimonial';
import { PricingPlans } from '~/sections/PricingPlans';
import { TrustBar } from '~/sections/TrustBar';
import { terms } from '~/content/legal';
import { privacyPolicy } from '~/content/privacy';
import type { Lang, PageId } from '~/site';

/** Shared page bodies and meta; the thin route files only bind a language to them. */
export const metaFor = (page: 'home' | 'features' | 'pricing' | 'demo' | 'contact', lang: Lang) => {
  const { title, description } = content[lang][page];
  return buildMeta({ page: page as PageId, lang, title, description });
};

export function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang].home;
  return (
    <div className="fx gradient-icons">
      <Hero t={t} />
      <Dashboard t={t.dashboard} lang={lang} />
      <TrustBar t={t.trust} />
      <FreeMarketers t={t.free} />
      <Gaps t={t.gaps} lang={lang} />
      <Integrations t={t.integrations} />
      <Testimonial t={t.quote} />
      <FinalCta t={t.final} lang={lang} />
    </div>
  );
}

export function SimplePage({ page, lang }: { page: 'features' | 'demo' | 'contact'; lang: Lang }) {
  const t = content[lang][page];
  return (
    <Container className="fx pt-page pb-section text-center">
      <h1 className="mx-auto max-w-3xl text-title font-bold tracking-tight text-balance">{t.h1}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t.sub}</p>
    </Container>
  );
}

export function PricingPage({ lang }: { lang: Lang }) {
  const t = content[lang].pricing;
  return (
    <div className="fx surface-tint gradient-icons">
      <PricingPlans t={t} lang={lang} />
      <Assurances items={t.assurances} />
      <Faq t={t.faq} />
      <FinalCta t={t.final} lang={lang} />
    </div>
  );
}

/** FAQPage structured data for the pricing page (answers still empty are left out). */
export const pricingFaqMeta = (lang: Lang) => {
  const items = content[lang].pricing.faq.items.filter((i) => i.a);
  return [
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((i) => ({
          '@type': 'Question',
          name: i.q,
          acceptedAnswer: { '@type': 'Answer', text: i.a },
        })),
      },
    },
  ];
};

export function FeaturesPage({ lang }: { lang: Lang }) {
  const t = content[lang].features;
  return (
    <div className="fx gradient-icons">
      <FeaturesHero t={t} lang={lang} />
      <Architecture t={t.architecture} />
      <Construction t={t.construction} />
      <Operations t={t.operations} />
      <Reporting t={t.reporting} />
      <FeaturesCta t={t.cta} lang={lang} />
    </div>
  );
}

export function ContactPage({ lang }: { lang: Lang }) {
  return (
    <div className="fx gradient-icons">
      <ContactHero t={content[lang].contact} lang={lang} />
    </div>
  );
}

export function LegalPage({ lang }: { lang: Lang }) {
  return <LegalDocument doc={terms[lang]} lang={lang} />;
}

const LEGAL_DESCRIPTION: Record<Lang, string> = {
  en: 'Terms and Conditions of Use of the Spendbaker marketing budget management platform: accounts, acceptable use, pricing, data, liability and termination.',
  fr: 'Conditions Générales d’Utilisation de la plateforme de gestion de budget marketing Spendbaker : comptes, utilisation, tarifs, données, responsabilité et résiliation.',
};
const LEGAL_TITLE: Record<Lang, string> = {
  en: 'Terms and Conditions of Use - Spendbaker',
  fr: 'Conditions Générales d’Utilisation - Spendbaker',
};
export const legalMeta = (lang: Lang) =>
  buildMeta({
    page: 'legal',
    lang,
    title: LEGAL_TITLE[lang],
    description: LEGAL_DESCRIPTION[lang],
  });

/** The Privacy Policy exists in English only for now; it is shown at /privacy whichever language the visitor browses in. */
export function PrivacyPage() {
  return <LegalDocument doc={privacyPolicy} lang="en" />;
}

export const privacyMeta = () =>
  buildMeta({
    page: 'privacy',
    lang: 'en',
    title: 'Privacy Policy - Spendbaker',
    description:
      'How Spendbaker collects, uses and protects your personal data: ads platform data, AI assistant processing, retention and deletion, security, processors, cookies and GDPR.',
  });
