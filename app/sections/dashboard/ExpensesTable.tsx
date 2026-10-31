import { ChevronLeft, ChevronRight, Download, Plus, Search } from 'lucide-react';
import type { Home } from '~/content/types';
import { cn } from '~/lib/cn';
import type { Format } from './format';

const STATUS = {
  committed: 'border-brand-blue/20 bg-brand-blue/10 text-brand-blue',
  spent: 'border-status-remaining/25 bg-status-remaining/10 text-status-remaining',
};

export function ExpensesTable({ t, fmt }: { t: Home['dashboard']['expenses']; fmt: Format }) {
  const [user, vendor, category, description, amount, status, start, end] = t.columns;
  return (
    <div>
      {/* The toolbar is a picture of the product, not working controls. The Plus icon is forced white because
          the page-wide gradient icon stroke would disappear on this gradient button. */}
      <div className="fade-in flex flex-wrap items-center justify-between gap-3" aria-hidden="true">
        <p className="text-sm font-bold">{t.title}</p>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-1.5 text-white">
            <Plus className="size-3.5" style={{ stroke: 'white' }} /> {t.add}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-brand-blue/20 bg-brand-blue/10 px-3 py-1.5 text-brand-blue">
            <Download className="size-3.5" /> {t.export}
          </span>
        </div>
      </div>
      <div
        className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground"
        aria-hidden="true"
      >
        <span className="flex w-52 items-center gap-2 rounded-lg border bg-input-background px-3 py-2">
          <Search className="size-3.5" /> {t.search}
        </span>
        <span className="flex items-center gap-2">
          <span className="size-4 rounded border bg-input-background" /> {t.mine}
        </span>
      </div>

      <div className="mt-3 overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <thead>
            <tr className="text-xs text-muted-foreground">
              {[user, vendor, category, description, amount, status, start, end].map((h) => (
                <th key={h} scope="col" className="px-3 py-2 text-left font-normal">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r, n) => (
              <tr
                key={r.vendor + r.start + r.amount}
                className="row-in border-t"
                style={{ '--i': n } as React.CSSProperties}
              >
                <td className="px-3 py-1.5">
                  <span className="grid size-7 place-items-center rounded-full bg-gradient-primary text-[11px] font-bold text-white">
                    {r.user}
                  </span>
                </td>
                <td className="px-3 py-1.5">{r.vendor}</td>
                <td className="px-3 py-1.5">
                  <span className="flex items-center gap-2.5">
                    <span className="grid size-6 shrink-0 place-items-center rounded-md border border-status-committed/30 bg-status-committed/10 text-[11px] font-bold text-status-committed">
                      3
                    </span>
                    <span>
                      <span className="block font-bold">{r.category}</span>
                      <span className="block text-xs text-muted-foreground">{r.path}</span>
                    </span>
                  </span>
                </td>
                <td className="px-3 py-1.5 text-muted-foreground">{r.description || '—'}</td>
                <td className="px-3 py-1.5 whitespace-nowrap tabular-nums">{fmt.eur(r.amount)}</td>
                <td className="px-3 py-1.5">
                  <span className={cn('rounded-md border px-2 py-0.5 text-xs', STATUS[r.status])}>
                    {t.status[r.status]}
                  </span>
                </td>
                <td className="px-3 py-1.5 whitespace-nowrap tabular-nums">{fmt.date(r.start)}</td>
                <td className="px-3 py-1.5 whitespace-nowrap tabular-nums">{fmt.date(r.end)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground"
        aria-hidden="true"
      >
        <span className="flex items-center gap-3">
          {t.rowsPerPage}
          <span className="rounded-lg border bg-input-background px-3 py-1.5 text-foreground">
            10
          </span>
          {t.range}
        </span>
        <span className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg border">
            <ChevronLeft className="size-3.5" />
          </span>
          1 / 18
          <span className="grid size-7 place-items-center rounded-lg border">
            <ChevronRight className="size-3.5" />
          </span>
        </span>
      </div>
    </div>
  );
}
