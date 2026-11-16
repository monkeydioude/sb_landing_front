import { Link } from 'react-router';
import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import { Button } from '~/components/ui/button';
import type { Demo } from '~/content/types';
import { APP_URL, pathFor, type Lang } from '~/site';

export function DemoHero({ t, lang }: { t: Demo; lang: Lang }) {
  return (
    <section>
      <Container className="pt-page pb-10 text-center lg:pb-14">
        <span className="animate-fade-up inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-blue uppercase">
          {t.badge}
        </span>
        <h1 className="animate-fade-up mx-auto mt-5 max-w-3xl text-title font-bold tracking-tight text-balance [--delay:80ms]">
          <Accent text={t.h1} />
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground [--delay:160ms]">
          {t.sub}
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-3 [--delay:240ms]">
          <Button asChild size="lg">
            <a href={`${APP_URL}/signup`}>{t.ctaPrimary} →</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to={pathFor('contact', lang)}>{t.ctaSecondary}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
