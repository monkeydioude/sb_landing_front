import { useEffect } from 'react';
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router';
import { Footer } from '~/components/Footer';
import { GradientDefs } from '~/components/GradientDefs';
import { Header } from '~/components/Header';
import { organizationJsonLd } from '~/lib/seo';
import { applyTheme, themeInitScript } from '~/lib/theme';
import { langFromPath } from '~/site';
import './style.css';

// Vite's BASE_URL ('/' on the real domain, '/sb_landing_front/' on the GitHub Pages preview), trailing slash included.
const BASE = import.meta.env.BASE_URL;

export const links = () => [
  { rel: 'icon', href: `${BASE}favicon.svg`, type: 'image/svg+xml' },
  { rel: 'icon', href: `${BASE}favicon.ico`, sizes: '32x32 48x48' }, // fallback for browsers without SVG icons
  { rel: 'apple-touch-icon', href: `${BASE}apple-touch-icon.png` },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <html lang={langFromPath(pathname)} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        {import.meta.env.VITE_NOINDEX === 'true' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Meta />
        <Links />
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  const lang = langFromPath(useLocation().pathname);
  useEffect(applyTheme, []);
  return (
    <>
      <GradientDefs />
      <Header lang={lang} />
      <main>
        <Outlet />
      </main>
      <Footer lang={lang} />
    </>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;
  return (
    <main className="mx-auto max-w-xl px-gutter py-section text-center">
      <h1 className="text-title font-bold">{notFound ? '404' : 'Something went wrong'}</h1>
      <Link to="/" className="mt-6 inline-block text-brand-blue underline">
        spendbaker.com
      </Link>
    </main>
  );
}
