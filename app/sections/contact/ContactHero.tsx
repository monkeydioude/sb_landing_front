import { CalendarCheck, Plug, Route } from 'lucide-react';
import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import type { Contact } from '~/content/types';
import type { Lang } from '~/site';
import { ContactForm } from './ContactForm';

const ICONS = [CalendarCheck, Plug, Route];

export function ContactHero({ t, lang }: { t: Contact; lang: Lang }) {
  return (
    <section className="surface-tint">
      <Container className="grid items-start gap-10 pt-page pb-section lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div className="lg:pt-6">
          <span className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-blue uppercase">
            {t.badge}
          </span>
          <h1 className="mt-5 text-display font-bold tracking-tight text-balance">
            <Accent text={t.h1} />
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.sub}</p>

          <h2 className="mt-10 text-sm font-bold">{t.benefitsTitle}</h2>
          <ul className="mt-4 space-y-4">
            {t.benefits.map((b, i) => {
              const Icon = ICONS[i];
              return (
                <li
                  key={b.title}
                  className="hover-lift animate-fade-up flex gap-4 rounded-xl border bg-card p-4 shadow-sm"
                  style={{ '--delay': `${150 + i * 80}ms` } as React.CSSProperties}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-blue/10">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <ContactForm t={t.form} lang={lang} />
      </Container>
    </section>
  );
}
