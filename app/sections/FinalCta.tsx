import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import { Button } from '~/components/ui/button';
import type { Home } from '~/content/types';
import { APP_URL } from '~/site';

export function FinalCta({ t }: { t: Home['final'] }) {
  return (
    <section className="surface-tint relative overflow-hidden pt-section text-center">
      <Container>
        <h2 className="text-heading font-bold tracking-tight text-balance">
          <Accent text={t.title} />
        </h2>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href={`${APP_URL}/signup`}>{t.cta} →</a>
          </Button>
        </div>
      </Container>
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="mt-12 block h-20 w-full sm:h-28 lg:h-36"
        aria-hidden="true"
      >
        <path
          d="M0 70 C 240 130 480 130 720 70 S 1200 10 1440 70 V140 H0 Z"
          fill="color-mix(in oklab, var(--brand-blue) 14%, transparent)"
        />
        <path
          d="M0 95 C 300 40 560 40 820 95 S 1230 130 1440 90 V140 H0 Z"
          fill="color-mix(in oklab, var(--brand-green) 14%, transparent)"
        />
      </svg>
    </section>
  );
}
