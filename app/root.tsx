import { useEffect } from 'react';
import {
  isRouteErrorResponse,
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

export const links = () => [
  { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'apple-touch-icon', href: '/favicon.png' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <html lang={langFromPath(pathname)} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
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
      <a href="/" className="mt-6 inline-block text-brand-blue underline">
        spendbaker.com
      </a>
    </main>
  );
}
