import { Container } from '~/components/Container';
import { buildMeta } from '~/lib/seo';

export const meta = () =>
  buildMeta({
    page: 'blog',
    lang: 'en',
    title: 'Blog - Spendbaker',
    description: 'Spendbaker blog.',
  });

export default function Route() {
  return (
    <Container className="pt-page pb-section">
      <h1 className="text-title font-bold">Blog</h1>
      <p className="mt-4 text-muted-foreground">Content to be migrated from spendbaker.com.</p>
    </Container>
  );
}
