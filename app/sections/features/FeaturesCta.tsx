import { Lock, Timer, CreditCard } from 'lucide-react';
import { Link } from 'react-router';
import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import { Waves } from '~/components/Waves';
import { Button } from '~/components/ui/button';
import type { Features } from '~/content/types';
import { APP_URL, pathFor, type Lang } from '~/site';

const PERK_ICONS = [CreditCard, Timer, Lock];

export function FeaturesCta({ t, lang }: { t: Features['cta']; lang: Lang }) {
  return (
    <section className="surface-tint relative overflow-hidden pt-section text-center">
      <Container className="reveal">
        <p className="mx-auto w-fit rounded-full border bg-card px-3 py-1 text-[11px] font-bold tracking-wider text-brand-blue">
          {t.tag}
        </p>
        <h2 className="mt-5 text-heading font-bold tracking-tight text-balance">
          <Accent text={t.title} />
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{t.sub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href={`${APP_URL}/signup`}>{t.primary} →</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to={pathFor('demo', lang)}>{t.secondary}</Link>
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
          {t.perks.map((perk, i) => {
            const Icon = PERK_ICONS[i];
            return (
              <li key={perk} className="flex items-center gap-1.5">
                <Icon className="size-3.5" aria-hidden /> {perk}
              </li>
            );
          })}
        </ul>
      </Container>
      <Waves />
    </section>
  );
}
