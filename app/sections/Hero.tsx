import { Accent } from '~/components/Accent';
import { BeforeAfterArt } from '~/components/BeforeAfterArt';
import { Container } from '~/components/Container';
import { Button } from '~/components/ui/button';
import type { Home } from '~/content/types';
import { APP_URL } from '~/site';

export function Hero({ t }: { t: Home }) {
  return (
    <section className="surface-tint">
      <Container className="grid items-center gap-8 pt-page pb-section lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="animate-fade-up inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-blue">
            {t.badge}
          </span>
          <h1 className="mt-5 text-display font-bold tracking-tight text-balance">
            <Accent text={t.h1} />
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground [--delay:100ms]">
            {t.sub}
          </p>
          <div className="animate-fade-up mt-8 [--delay:200ms]">
            <Button asChild size="lg">
              <a href={`${APP_URL}/signup`}>{t.cta} →</a>
            </Button>
          </div>
        </div>
        <HeroVisual t={t.hero} />
      </Container>
    </section>
  );
}

function HeroVisual({ t }: { t: Home['hero'] }) {
  return (
    <div className="animate-fade-up relative overflow-hidden rounded-2xl border bg-card shadow-xl [--delay:150ms]">
      <div className="relative grid h-56 grid-cols-2 sm:h-72">
        <BeforeAfterArt className="absolute inset-0 size-full" />
        <div className="relative p-3">
          <span className="inline-block max-w-full rounded-md bg-black/55 px-2 py-1 text-[11px] text-white backdrop-blur-sm">
            {t.before}
          </span>
        </div>
        <div className="relative p-3 text-right">
          <span className="inline-block rounded-md bg-brand-blue text-brand-blue-foreground px-2 py-1 text-[11px] font-bold">
            {t.after}
          </span>
        </div>
      </div>
      <div className="relative m-4 -mt-10 rounded-xl border bg-card p-4 shadow-lg">
        <div className="flex items-end justify-between text-sm">
          <div>
            <p className="text-xs text-muted-foreground">{t.runway}</p>
            <p className="text-2xl font-bold">{t.runwayValue}</p>
          </div>
          <p className="text-xs font-bold text-brand-blue">{t.committed}</p>
        </div>
        <div className="mt-3 h-2 rounded-full bg-muted">
          <div className="h-2 w-[78%] rounded-full bg-brand-blue" />
        </div>
      </div>
    </div>
  );
}
