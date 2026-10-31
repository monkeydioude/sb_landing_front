import { Container } from '~/components/Container';

export const meta = () => [
  { title: 'Page not found - Spendbaker' },
  { name: 'robots', content: 'noindex' },
];

export default function Route() {
  return (
    <Container className="pt-page pb-section text-center">
      <h1 className="text-title font-bold">404</h1>
      <p className="mt-4 text-muted-foreground">This page does not exist.</p>
    </Container>
  );
}
