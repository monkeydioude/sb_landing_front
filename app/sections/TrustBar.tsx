import { Star } from 'lucide-react';
import { Container } from '~/components/Container';
import type { Home } from '~/content/types';

export function TrustBar({ t }: { t: Home['trust'] }) {
  return (
    <section className="border-y bg-card py-8 sm:py-10">
      <Container className="text-center">
        <p className="text-sm font-bold">{t.label}</p>
        <p className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="flex text-status-committed" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-3.5 fill-current" />
            ))}
          </span>
          {t.rating}
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold tracking-wider text-muted-foreground sm:gap-x-12">
          {t.logos.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
