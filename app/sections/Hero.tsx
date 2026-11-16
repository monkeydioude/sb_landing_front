import { ArrowRight } from 'lucide-react';
import { Accent } from '~/components/Accent';
import afterLarge from '~/assets/photos/hero-after-800.webp';
import afterSmall from '~/assets/photos/hero-after-400.webp';
import beforeLarge from '~/assets/photos/hero-before-800.webp';
import beforeSmall from '~/assets/photos/hero-before-400.webp';
import { Container } from '~/components/Container';
import { Button } from '~/components/ui/button';
import type { Home } from '~/content/types';
import { APP_URL } from '~/site';

export function Hero({ t }: { t: Home }) {
  return (
    <section className="surface-tint">
      <Container className="grid items-center gap-8 pt-page pb-section lg:grid-cols-2 lg:gap-12">
        <div>
          {/* SEO: the keyword line is the page's only <h1>; the big headline below is an <h2> styled as before. */}
          <h1 className="animate-fade-up inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-blue uppercase">
            {t.badge}
          </h1>
          <h2 className="mt-5 text-display font-bold tracking-tight text-balance">
            <Accent text={t.h1} />
          </h2>
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
      <div className="relative grid h-56 grid-cols-2 gap-[3px] bg-white sm:h-72">
        <Photo
          small={beforeSmall}
          large={beforeLarge}
          alt={t.beforeAlt}
          className="object-[50%_20%]"
          chip={
            <span className="inline-block max-w-full rounded-md bg-black/55 px-2 py-1 text-[11px] text-white backdrop-blur-sm">
              {t.before}
            </span>
          }
        />
        <Photo
          small={afterSmall}
          large={afterLarge}
          alt={t.afterAlt}
          className="object-[50%_15%]"
          chip={
            <span className="inline-block rounded-md bg-brand-blue px-2 py-1 text-[11px] font-bold text-brand-blue-foreground">
              {t.after}
            </span>
          }
          right
        />
        <span
          className="absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg"
          aria-hidden
        >
          <ArrowRight className="size-4" />
        </span>
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

/** One half of the before/after photo. Hero images load eagerly: they are the largest thing above the fold. */
function Photo({
  small,
  large,
  alt,
  className,
  chip,
  right,
}: {
  small: string;
  large: string;
  alt: string;
  className?: string;
  chip: React.ReactNode;
  right?: boolean;
}) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={small}
        srcSet={`${small} 400w, ${large} 800w`}
        sizes="(min-width: 1024px) 290px, (min-width: 640px) 380px, 175px"
        alt={alt}
        width={400}
        height={440}
        fetchPriority="high"
        decoding="async"
        className={`size-full object-cover ${className ?? ''}`}
      />
      <div className={`absolute top-0 p-3 ${right ? 'right-0 text-right' : 'left-0'}`}>{chip}</div>
    </div>
  );
}
