import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Button } from '~/components/ui/button';
import { content } from '~/content';
import { cn } from '~/lib/cn';
import { APP_URL, pathFor, translatedPath, type Lang } from '~/site';
import { Container } from './Container';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

// The full nav fits from `lg` (1024px) up; below that it lives in the burger menu.
export function Header({ lang }: { lang: Lang }) {
  const t = content[lang].nav;
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const other: Lang = lang === 'fr' ? 'en' : 'fr';
  const otherPath = translatedPath(pathname, other);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const langLink = (className: string) =>
    otherPath && (
      <a
        href={otherPath}
        hrefLang={other}
        lang={other}
        className={cn(
          'rounded-md px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase transition-colors hover:bg-accent hover:text-accent-foreground',
          className,
        )}
      >
        {other}
      </a>
    );

  return (
    <header className="sticky top-0 z-30 -mb-[var(--header-h)] h-[var(--header-h)] pt-3">
      <Container>
        <div className="rounded-2xl border bg-card shadow-sm">
          <div className="flex h-14 items-center gap-4 px-4 lg:gap-8">
            <Logo to={pathFor('home', lang)} />
            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              <NavItem to={pathFor('features', lang)}>{t.features}</NavItem>
              <NavItem to={pathFor('pricing', lang)}>{t.pricing}</NavItem>
              <NavItem to={pathFor('demo', lang)}>{t.demo}</NavItem>
            </nav>
            <div className="ml-auto flex items-center gap-1">
              <nav aria-label="Secondary" className="hidden items-center gap-1 lg:flex">
                <NavItem to={pathFor('contact', lang)}>{t.contact}</NavItem>
                <a href={`${APP_URL}/login`} className={navLinkClass}>
                  {t.login}
                </a>
              </nav>
              {langLink('hidden lg:inline-flex')}
              <ThemeToggle label={t.theme} />
              <Button asChild className="ml-1 hidden sm:inline-flex">
                <a href={`${APP_URL}/signup`}>{t.cta}</a>
              </Button>
              <button
                type="button"
                className="grid size-9 place-items-center rounded-md hover:bg-accent lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={t.menu}
                onClick={() => setOpen((o) => !o)}
              >
                {open ? (
                  <X className="size-5" aria-hidden />
                ) : (
                  <Menu className="size-5" aria-hidden />
                )}
              </button>
            </div>
          </div>
          {open && (
            <div id="mobile-menu" className="border-t p-3 lg:hidden">
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                <NavItem to={pathFor('features', lang)} block>
                  {t.features}
                </NavItem>
                <NavItem to={pathFor('pricing', lang)} block>
                  {t.pricing}
                </NavItem>
                <NavItem to={pathFor('demo', lang)} block>
                  {t.demo}
                </NavItem>
                <NavItem to={pathFor('contact', lang)} block>
                  {t.contact}
                </NavItem>
                <a href={`${APP_URL}/login`} className={cn(navLinkClass, 'block')}>
                  {t.login}
                </a>
              </nav>
              <div className="mt-3 flex items-center gap-2">
                <Button asChild className="flex-1 sm:hidden">
                  <a href={`${APP_URL}/signup`}>{t.cta}</a>
                </Button>
                {langLink('ml-auto')}
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}

const navLinkClass =
  'rounded-md border border-transparent px-3.5 py-2 text-sm text-foreground/75 transition-colors hover:bg-accent hover:text-foreground';

/**
 * Same states as the sb_front sidebar: soft background on hover, and the selected page gets the
 * brand-gradient border (a padding-box fill over a border-box gradient) with semibold text.
 */
function NavItem({
  to,
  children,
  block,
}: {
  to: string;
  children: React.ReactNode;
  block?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          navLinkClass,
          block && 'block',
          isActive && [
            'font-semibold text-foreground hover:bg-transparent',
            '[background-image:linear-gradient(var(--card),var(--card)),linear-gradient(135deg,#4285f4,#33c483)]',
            '[background-origin:padding-box,border-box]',
            '[background-clip:padding-box,border-box]',
          ],
        )
      }
    >
      {children}
    </NavLink>
  );
}
