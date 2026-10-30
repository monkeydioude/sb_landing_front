import { index, route, type RouteConfig } from '@react-router/dev/routes';

// Paths mirror the live spendbaker.com URLs (see PAGES in site.ts) so existing SEO carries over.
export default [
  index('routes/home.tsx', { id: 'home-en' }),
  route('fr', 'routes/home.fr.tsx'),
  route('features', 'routes/features.tsx', { id: 'features-en' }),
  route('fonctionnalites', 'routes/features.fr.tsx'),
  route('pricing', 'routes/pricing.tsx', { id: 'pricing-en' }),
  route('prix', 'routes/pricing.fr.tsx'),
  route('demo', 'routes/demo.tsx', { id: 'demo-en' }),
  route('demonstration', 'routes/demo.fr.tsx'),
  route('contact', 'routes/contact.tsx', { id: 'contact-en' }),
  route('contactez-nous', 'routes/contact.fr.tsx'),
  route('privacy', 'routes/privacy.tsx'),
  route('legal', 'routes/legal.tsx'),
  route('blog', 'routes/blog.tsx'),
  route('*', 'routes/404.tsx'),
] satisfies RouteConfig;
