import { Check } from 'lucide-react';
import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import type { Features } from '~/content/types';
import type { Lang } from '~/site';
import { Sandbox } from './Sandbox';

export function FeaturesHero({ t, lang }: { t: Features; lang: Lang }) {
  return (
    <section className="surface-tint">
      <Container className="grid items-center gap-10 pt-page pb-section lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <p className="animate-fade-up flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-wider">
            <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-brand-blue">
              {t.badge}
            </span>
            <span className="rounded-full border bg-card px-3 py-1 font-normal text-muted-foreground">
              {t.version}
            </span>
          </p>
          <h1 className="mt-5 text-display font-bold tracking-tight text-balance">
            <Accent text={t.h1} />
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground [--delay:100ms]">
            {t.sub}
          </p>
          <ul className="animate-fade-up mt-6 flex flex-wrap gap-2 [--delay:150ms]">
            {t.chips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-bold"
              >
                <Check className="size-3.5 text-brand-green" aria-hidden /> {chip}
              </li>
            ))}
          </ul>
          <dl className="animate-fade-up mt-10 grid grid-cols-3 gap-4 [--delay:200ms]">
            {t.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dd className="order-1 text-2xl font-bold tracking-tight sm:text-3xl">{s.value}</dd>
                <dt className="order-2 mt-1 text-xs text-muted-foreground">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <Sandbox t={t.sandbox} lang={lang} />
      </Container>
    </section>
  );
}
