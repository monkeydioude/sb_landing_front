import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Home } from '~/content/types';
import { ACTUAL_MONTHS, NA_CHILDREN, REGIONS, type Cell } from '~/content/demoBudget';
import { cn } from '~/lib/cn';
import type { Format } from './format';

const sumCells = (rows: Cell[][]): Cell[] =>
  rows[0].map((_, m) => ({
    budget: rows.reduce((s, r) => s + r[m].budget, 0),
    actual: rows.reduce((s, r) => s + r[m].actual, 0),
  }));
const total = (cells: Cell[]): Cell => ({
  budget: cells.reduce((s, c) => s + c.budget, 0),
  actual: cells.reduce((s, c) => s + c.actual, 0),
});

function Figures({ cell, fmt }: { cell: Cell; fmt: Format }) {
  const pct = cell.budget ? Math.round((cell.actual / cell.budget) * 100) : null;
  return (
    <div className="text-right tabular-nums">
      <div className="text-[11px] text-muted-foreground">{fmt.num(cell.budget)}</div>
      <div className="font-bold">
        {fmt.num(cell.actual)}
        {pct !== null && (
          <span
            className={cn(
              'ml-1 text-[11px] font-normal',
              pct <= 100 ? 'text-status-remaining' : 'text-status-spent',
            )}
          >
            ({pct}%)
          </span>
        )}
      </div>
    </div>
  );
}

const Level = ({ n }: { n: number }) => (
  <span className="grid size-5 shrink-0 place-items-center rounded-md border bg-brand-blue/10 text-[10px] font-bold text-brand-blue">
    {n}
  </span>
);

export function CategoryTable({ t, fmt }: { t: Home['dashboard']['categories']; fmt: Format }) {
  const [open, setOpen] = useState(true);
  const months = fmt.months(ACTUAL_MONTHS);
  const kids = Object.values(NA_CHILDREN);
  const north = sumCells(kids);
  const others = Object.values(REGIONS);
  const all = sumCells([north, ...others]);

  // A plain function, not a component: a component declared here would be a new type on every render and
  // remount every row (replaying the row animation each time the parent re-renders, e.g. on the tab timer).
  const renderRow = ({
    id,
    n,
    name,
    cells,
    level,
    tone,
    lead,
  }: {
    id: string;
    n: number; // position in the table, for the stagger
    name: string;
    cells: Cell[];
    level: number;
    tone?: string;
    lead?: React.ReactNode;
  }) => (
    <tr
      key={id}
      className={cn('row-in border-t', tone)}
      style={{ '--i': n } as React.CSSProperties}
    >
      <th
        scope="row"
        className={cn(
          'sticky left-0 z-10 min-w-48 px-3 py-1.5 text-left font-normal',
          tone ?? 'bg-card',
        )}
      >
        <span className={cn('flex items-center gap-2', level === 2 && 'pl-6')}>
          {lead}
          <Level n={level} />
          <span className={level === 1 ? 'font-bold' : ''}>{name}</span>
        </span>
      </th>
      {cells.map((c, i) => (
        <td key={i} className="px-3 py-1.5">
          <Figures cell={c} fmt={fmt} />
        </td>
      ))}
      <td className="px-3 py-1.5">
        <Figures cell={total(cells)} fmt={fmt} />
      </td>
    </tr>
  );

  return (
    <div>
      <div className="fade-in flex flex-wrap items-center justify-between gap-3" aria-hidden="true">
        <p className="text-sm font-bold">{t.title}</p>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-md border border-brand-blue/30 bg-brand-blue/10 px-2.5 py-1.5 font-bold text-brand-blue">
            {t.currency}
          </span>
          <span className="flex gap-1 rounded-lg bg-muted p-1">
            <span className="rounded-md bg-card px-3 py-1 font-bold shadow-sm">{t.periods[0]}</span>
            <span className="px-3 py-1 text-muted-foreground">{t.periods[1]}</span>
          </span>
        </div>
      </div>

      <div className="mt-3 overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <thead>
            <tr className="text-[11px] tracking-wide text-muted-foreground uppercase">
              <th
                scope="col"
                className="sticky left-0 z-10 bg-card px-3 py-2 text-left font-normal normal-case"
              >
                {t.category}
              </th>
              {months.map((m) => (
                <th key={m} scope="col" className="px-3 py-2 text-right font-normal">
                  {m}
                </th>
              ))}
              <th scope="col" className="px-3 py-2 text-right font-normal">
                {t.total}
              </th>
            </tr>
          </thead>
          <tbody>
            {renderRow({
              id: 'north',
              n: 0,
              name: t.north,
              cells: north,
              level: 1,
              tone: 'bg-muted/60',
              lead: (
                <button
                  type="button"
                  aria-expanded={open}
                  aria-label={t.expand}
                  onClick={() => setOpen((o) => !o)}
                  className="grid size-5 place-items-center rounded hover:bg-accent"
                >
                  {open ? (
                    <ChevronDown className="size-4" aria-hidden />
                  ) : (
                    <ChevronRight className="size-4" aria-hidden />
                  )}
                </button>
              ),
            })}
            {open &&
              kids.map((cells, i) =>
                renderRow({ id: `kid-${i}`, n: i + 1, name: t.children[i], cells, level: 2 }),
              )}
            {others.map((cells, i) =>
              renderRow({
                id: `other-${i}`,
                n: kids.length + 1 + i,
                name: t.others[i],
                cells,
                level: 1,
                tone: i % 2 === 0 ? 'bg-muted/30' : undefined,
              }),
            )}
            <tr
              className="row-in border-t bg-muted/60 font-bold"
              style={{ '--i': kids.length + 1 + others.length } as React.CSSProperties}
            >
              <th scope="row" className="sticky left-0 z-10 bg-muted px-3 py-2 text-left">
                {t.totalRow}
              </th>
              {all.map((c, i) => (
                <td key={i} className="px-3 py-1.5">
                  <Figures cell={c} fmt={fmt} />
                </td>
              ))}
              <td className="px-3 py-1.5">
                <Figures cell={total(all)} fmt={fmt} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p
        className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground"
        aria-hidden="true"
      >
        {t.legend}
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-status-remaining" /> {t.within}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-status-spent" /> {t.over}
        </span>
      </p>
    </div>
  );
}
