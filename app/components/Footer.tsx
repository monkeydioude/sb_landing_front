import { Link } from 'react-router';
import { content } from '~/content';
import { pathFor, type Lang } from '~/site';
import { Container } from './Container';

export function Footer({ lang }: { lang: Lang }) {
  const t = content[lang].footer;
  return (
    <footer className="border-t bg-card text-sm text-muted-foreground">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6">
        <p>{t.copyright}</p>
        <nav aria-label="Legal" className="flex gap-6">
          <Link to={pathFor('legal', lang)} className="hover:text-foreground">
            {t.legal}
          </Link>
          <Link to="/privacy" className="hover:text-foreground">
            {t.privacy}
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
