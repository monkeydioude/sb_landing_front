import { BarChart3 } from 'lucide-react';
import { useState } from 'react';
import type { Home } from '~/content/types';
import { ACTUAL_MONTHS, BUDGET, SPEND } from '~/content/demoBudget';
import { cn } from '~/lib/cn';
import type { Format } from './format';

type Period = 'month' | 'quarter' | 'year';
const PERIODS: Period[] = ['month', 'quarter', 'year'];
const SERIES = ['bg-[var(--cat-1)]', 'bg-[var(--cat-2)]', 'bg-[var(--cat-3)]', 'bg-[var(--cat-4)]'];

const sum = (a: number[]) => a.reduce((x, y) => x + y, 0);
const add = (rows: number[][]) => rows[0].map((_, i) => sum(rows.map((r) => r[i])));

/** A "nice" axis maximum at or above `v` (1, 2, 2.5, 5 or 10 times a power of ten). */
function niceMax(v: number) {
  const p = 10 ** Math.floor(Math.log10(v));
  const n = v / p;
  return p * (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10);
}

type Group = { label: string; budget: number; spend: number[]; committed: boolean };

function groupsFor(period: Period, t: Home['dashboard']['overview'], months: string[]): Group[] {
  if (period === 'month') {
    return SPEND.map((spend, i) => ({
      label: months[i],
      budget: BUDGET[i],
      spend,
      committed: i >= ACTUAL_MONTHS,
    }));
  }
  const size = period === 'quarter' ? 3 : 12;
  return Array.from({ length: 12 / size }, (_, g) => {
    const from = g * size;
    const idx = Array.from({ length: size }, (_, i) => from + i);
    return {
      label: period === 'quarter' ? `${t.quarter}${g + 1}` : '2026',
      budget: sum(idx.map((i) => BUDGET[i])),
      spend: add(idx.map((i) => SPEND[i])),
      committed: false,
    };
  });
}

export function OverviewChart({ t, fmt }: { t: Home['dashboard']['overview']; fmt: Format }) {
  const [period, setPeriod] = useState<Period>('month');
  const groups = groupsFor(period, t, fmt.months(12));
  const max = niceMax(Math.max(...groups.map((g) => Math.max(g.budget, sum(g.spend)))));
  const ticks = [0, 1, 2, 3, 4].map((i) => (max * i) / 4);

  return (
    <div className="flex flex-1 flex-col">
      <div className="fade-in flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-bold">
          <BarChart3 className="size-4" aria-hidden /> {t.title}
        </p>
        <div
          role="group"
          aria-label={t.title}
          className="flex gap-1 rounded-lg bg-muted p-0.5 text-xs"
        >
          {PERIODS.map((p, i) => (
            <button
              key={p}
              type="button"
              aria-pressed={period === p}
              onClick={() => setPeriod(p)}
              className={cn(
                'rounded-md px-3 py-1 transition-colors',
                period === p
                  ? 'bg-card font-bold shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {t.periods[i]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-1 gap-2" role="img" aria-label={t.label}>
        <div className="flex w-9 shrink-0 flex-col-reverse justify-between pb-[26px] text-right text-[10px] text-muted-foreground sm:w-11">
          {ticks.map((v) => (
            <span key={v} className="leading-none">
              {v === 0 ? '0' : fmt.compact(v)}
            </span>
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="relative min-h-40 flex-1 sm:min-h-44">
            <div className="absolute inset-0 flex flex-col justify-between" aria-hidden="true">
              {ticks.map((v) => (
                <span key={v} className="border-t border-dashed border-border" />
              ))}
            </div>
            <div className="relative flex h-full items-end gap-1 sm:gap-2">
              {groups.map((g, n) => {
                const total = sum(g.spend);
                return (
                  <div
                    key={g.label}
                    className="flex h-full min-w-0 flex-1 items-end justify-center gap-[2px] sm:gap-1"
                  >
                    <div
                      className="bar-rise flex w-1/2 max-w-7 flex-col-reverse overflow-hidden rounded-t-sm"
                      style={{ height: `${(total / max) * 100}%`, '--i': n } as React.CSSProperties}
                    >
                      {g.spend.map((v, i) => (
                        <div
                          key={i}
                          className={cn(SERIES[i], g.committed && 'opacity-55')}
                          style={{ height: `${(v / total) * 100}%` }}
                        />
                      ))}
                    </div>
                    <div
                      className="bar-rise bar-rise-late w-1/2 max-w-7 rounded-t-sm bg-muted-foreground/20"
                      style={
                        { height: `${(g.budget / max) * 100}%`, '--i': n } as React.CSSProperties
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-2 flex gap-1 sm:gap-2" aria-hidden="true">
            {groups.map((g) => (
              <span
                key={g.label}
                className="min-w-0 flex-1 truncate text-center text-[9px] text-muted-foreground sm:text-[11px]"
              >
                {g.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ul
        className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 border-t pt-3 text-[11px] text-muted-foreground"
        aria-hidden="true"
      >
        <li className="flex items-center gap-1.5">
          <span className="h-3 w-5 rounded-sm bg-muted-foreground/20" /> {t.budget}
        </li>
        <li className="flex items-center gap-1.5">
          <span className="h-3 w-5 rounded-sm bg-[var(--cat-1)] opacity-55" /> {t.committed}
        </li>
        {t.regions.map((r, i) => (
          <li key={r} className="flex items-center gap-1.5 font-bold">
            <span className={cn('size-2.5 rounded-full', SERIES[i])} /> {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
