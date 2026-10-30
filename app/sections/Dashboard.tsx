import { Clock, DollarSign, TrendingUp, Wallet } from 'lucide-react';
import { Container } from '~/components/Container';
import type { Home } from '~/content/types';
import type { Lang } from '~/site';

// Decorative mock of the product, hidden from assistive tech. Bars: [series1, series2, series3]
// in % of the chart height; months after the 6th are "future" and render muted.
const BARS = [
  [22, 24, 16],
  [26, 30, 22],
  [24, 28, 30],
  [28, 34, 26],
  [30, 38, 22],
  [24, 36, 28],
  [48],
  [40],
  [60],
  [44],
  [52],
  [36],
];
const SERIES = ['bg-[var(--cat-4)]', 'bg-[var(--cat-2)]', 'bg-[var(--cat-10)]'];
const STAT_STYLES = [
  { Icon: DollarSign, tone: 'text-brand-blue bg-brand-blue/10' },
  { Icon: TrendingUp, tone: 'text-status-spent bg-status-spent/10' },
  { Icon: Clock, tone: 'text-status-committed bg-status-committed/10' },
  { Icon: Wallet, tone: 'text-status-remaining bg-status-remaining/10' },
];

export function Dashboard({ t, lang }: { t: Home['dashboard']; lang: Lang }) {
  const month = new Intl.DateTimeFormat(lang, { month: 'short' });
  const months = Array.from({ length: 12 }, (_, i) => month.format(new Date(2026, i, 1)));
  return (
    <section className="surface-tint pb-section">
      <Container>
        <div
          className="rounded-2xl border border-t-4 bg-card p-4 shadow-xl sm:p-6"
          style={{ borderTopColor: 'var(--brand-blue)' }}
          aria-hidden="true"
        >
          <p className="flex items-center gap-2 font-bold">
            {t.title}
            <span className="rounded bg-foreground px-1.5 py-0.5 text-[10px] text-background">
              {t.live}
            </span>
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {t.stats.map((s, i) => {
              const { Icon, tone } = STAT_STYLES[i];
              return (
                <div key={s.label} className="rounded-xl border p-3 sm:p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <span className={`grid size-6 place-items-center rounded-md ${tone}`}>
                      <Icon className="size-3.5" />
                    </span>
                  </div>
                  <p className="mt-1 text-xl font-bold sm:text-2xl">{s.value}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{s.note}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex gap-1 rounded-lg bg-muted p-1 text-xs sm:w-fit">
            {t.tabs.map((tab, i) => (
              <span
                key={tab}
                className={`rounded-md px-3 py-1.5 ${i === 0 ? 'bg-card font-bold shadow-sm' : 'text-muted-foreground'}`}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-bold">{t.chart}</p>
            <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
              {t.filters.map((f) => (
                <span key={f} className="rounded-md border px-2.5 py-1">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex h-44 items-end gap-1.5 sm:h-56 sm:gap-3">
            {BARS.map((bar, i) => (
              <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                <div className="flex h-full w-full max-w-6 flex-col-reverse justify-start overflow-hidden rounded-sm">
                  {bar.length === 1 ? (
                    <div className="bg-muted-foreground/25" style={{ height: `${bar[0]}%` }} />
                  ) : (
                    bar.map((h, j) => (
                      <div key={j} className={SERIES[j]} style={{ height: `${h}%` }} />
                    ))
                  )}
                </div>
                <span className="text-[9px] text-muted-foreground sm:text-[10px]">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
