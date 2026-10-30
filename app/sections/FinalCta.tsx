import { Link } from 'react-router';
import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import { Waves } from '~/components/Waves';
import { Button } from '~/components/ui/button';
import { APP_URL, pathFor, type Lang } from '~/site';

type Props = {
  t: { title: string; cta: string; sub?: string; secondary?: string };
  lang: Lang;
};

export function FinalCta({ t, lang }: Props) {
  return (
    <section className="surface-tint relative overflow-hidden pt-section text-center">
      <Container className="reveal">
        <h2 className="text-heading font-bold tracking-tight text-balance">
          <Accent text={t.title} />
        </h2>
        {t.sub && <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{t.sub}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href={`${APP_URL}/signup`}>{t.cta} →</a>
          </Button>
          {t.secondary && (
            <Button asChild size="lg" variant="outline">
              <Link to={pathFor('demo', lang)}>{t.secondary}</Link>
            </Button>
          )}
        </div>
      </Container>
      <Waves />
    </section>
  );
}
