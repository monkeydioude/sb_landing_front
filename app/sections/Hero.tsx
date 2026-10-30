import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import { Button } from '~/components/ui/button';
import type { Home } from '~/content/types';
import { APP_URL } from '~/site';

export function Hero({ t }: { t: Home }) {
  return (
    <section className="surface-tint">
      <Container className="grid items-center gap-8 pt-page pb-section lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-blue">
            {t.badge}
          </span>
          <h1 className="mt-5 text-display font-bold tracking-tight text-balance">
            <Accent text={t.h1} />
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.sub}</p>
          <div className="mt-8">
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

// TODO: replace the gradient panes with the hero photo from the Figma export (AVIF/WebP, eager,
// fetchpriority="high", explicit width/height).
function HeroVisual({ t }: { t: Home['hero'] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card shadow-xl">
      <div className="grid h-56 grid-cols-2 sm:h-72">
        <div className="bg-gradient-to-br from-slate-500 to-slate-800 p-3">
          <span className="inline-block max-w-full rounded-md bg-black/50 px-2 py-1 text-[11px] text-white">
            {t.before}
          </span>
        </div>
        <div className="bg-gradient-to-br from-brand-blue/60 to-brand-green/60 p-3 text-right">
          <span className="inline-block rounded-md bg-brand-blue px-2 py-1 text-[11px] font-bold text-white">
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
