import { Clock, DollarSign, TrendingUp, Wallet } from 'lucide-react';
import { useId } from 'react';
import { Container } from '~/components/Container';
import type { Home } from '~/content/types';
import { cn } from '~/lib/cn';
import { useTabAutoplay } from '~/lib/useTabAutoplay';
import type { Lang } from '~/site';
import { CategoryTable } from './dashboard/CategoryTable';
import { ExpensesTable } from './dashboard/ExpensesTable';
import { makeFormat } from './dashboard/format';
import { OverviewChart } from './dashboard/OverviewChart';

// A picture of the product with invented figures (see content/demoBudget.ts). The stat cards stay on
// top; below them three tabs show the spend chart, the expenses list and the category spreadsheet.
const STAT_STYLES = [
  { Icon: DollarSign, tone: 'bg-brand-blue/10' },
  { Icon: TrendingUp, tone: 'bg-brand-blue/10' },
  { Icon: Clock, tone: 'bg-brand-blue/10' },
  { Icon: Wallet, tone: 'bg-brand-blue/10' },
];

const AUTO_MS = 3000;

export function Dashboard({ t, lang }: { t: Home['dashboard']; lang: Lang }) {
  const id = useId();
  // Starts on Expenses (index 1): it is the most human view (avatars), so it is the first thing that plays.
  // The autoplay then goes Expenses -> Categories -> Overview -> Expenses... (see useTabAutoplay)
  const {
    index: tab,
    choose,
    running,
    observeRef,
    interactionProps,
    animState,
  } = useTabAutoplay({
    count: t.tabs.length,
    interval: AUTO_MS,
    initial: 1,
  });
  const fmt = makeFormat(lang);

  function onKeyDown(e: React.KeyboardEvent) {
    const next = e.key === 'ArrowRight' ? tab + 1 : e.key === 'ArrowLeft' ? tab - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const i = (next + t.tabs.length) % t.tabs.length;
    choose(i);
    document.getElementById(`${id}-tab-${i}`)?.focus();
  }

  return (
    <section className="surface-tint pb-section">
      <Container>
        <div
          ref={observeRef}
          {...interactionProps}
          className="reveal rounded-2xl border border-t-4 bg-card p-3 shadow-xl sm:p-5"
          style={{ borderTopColor: 'var(--brand-blue)' }}
        >
          <p className="flex items-center gap-2 font-bold">
            {t.title}
            <span className="rounded bg-foreground px-1.5 py-0.5 text-[10px] text-background">
              {t.live}
            </span>
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
            {t.stats.map((s, i) => {
              const { Icon, tone } = STAT_STYLES[i];
              return (
                <div key={s.label} className="hover-lift rounded-xl border bg-card px-3 py-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <span className={`grid size-6 place-items-center rounded-md ${tone}`}>
                      <Icon className="size-3.5" aria-hidden />
                    </span>
                  </div>
                  <p className="text-lg font-bold sm:text-xl">{s.value}</p>
                  <p className="text-[11px] text-muted-foreground">{s.note}</p>
                </div>
              );
            })}
          </div>

          <div
            role="tablist"
            aria-label={t.title}
            onKeyDown={onKeyDown}
            className="mt-4 flex w-fit max-w-full gap-1 overflow-x-auto rounded-lg bg-muted p-0.5 text-xs"
          >
            {t.tabs.map((name, i) => (
              <button
                key={name}
                id={`${id}-tab-${i}`}
                type="button"
                role="tab"
                aria-selected={tab === i}
                aria-controls={`${id}-panel-${i}`}
                tabIndex={tab === i ? 0 : -1}
                onClick={() => choose(i)}
                className={cn(
                  'relative overflow-hidden rounded-md px-3 py-1 whitespace-nowrap transition-colors',
                  tab === i
                    ? 'bg-card font-bold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {name}
                {running && tab === i && (
                  <span
                    aria-hidden
                    className="tab-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-primary"
                    style={{ animationDuration: `${AUTO_MS}ms` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* All three panels are in the page HTML and share one grid cell, so the card is as tall as the
              tallest panel and switching tabs never moves the page. Inactive panels are invisible and inert. */}
          <div className="mt-4 grid">
            {[
              <OverviewChart key="o" t={t.overview} fmt={fmt} />,
              <ExpensesTable key="e" t={t.expenses} fmt={fmt} />,
              <CategoryTable key="c" t={t.categories} fmt={fmt} />,
            ].map((panel, i) => (
              <div
                key={i}
                id={`${id}-panel-${i}`}
                role="tabpanel"
                aria-labelledby={`${id}-tab-${i}`}
                inert={tab !== i}
                aria-hidden={tab !== i}
                data-anim={animState(i)}
                className={cn(
                  'col-start-1 row-start-1 flex flex-col',
                  tab !== i && 'pointer-events-none invisible',
                )}
              >
                {panel}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
