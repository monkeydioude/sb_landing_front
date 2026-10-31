import { Check, Gauge } from 'lucide-react';
import { useId, useState } from 'react';
import { Button } from '~/components/ui/button';
import type { Features } from '~/content/types';
import { field, fieldBase } from '~/lib/field';
import { APP_URL, type Lang } from '~/site';

/** The hero's interactive card: the recommended daily cap is amount / days, recomputed live. */
export function Sandbox({ t, lang }: { t: Features['sandbox']; lang: Lang }) {
  const id = useId();
  const [name, setName] = useState(t.nameValue);
  const [amount, setAmount] = useState(250000);
  const [days, setDays] = useState(90);
  const [desc, setDesc] = useState(t.descValue);
  const money = new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });
  const dailyCap = amount > 0 ? Math.round(amount / days) : 0;

  return (
    <div className="animate-fade-up rounded-2xl border bg-card p-5 shadow-xl transition-shadow [--delay:150ms] focus-within:shadow-2xl sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-brand-green" aria-hidden />
          <div>
            <p className="text-sm font-bold">{t.title}</p>
            <p className="text-[11px] text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>
        <span className="rounded-md bg-brand-blue/10 px-2 py-1 text-[10px] font-bold tracking-wider text-brand-blue uppercase">
          {t.live}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <label
            htmlFor={`${id}-name`}
            className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase"
          >
            {t.nameLabel}
          </label>
          <input
            id={`${id}-name`}
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-amount`}
            className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase"
          >
            {t.budgetLabel}
          </label>
          <div className="flex gap-2">
            <span className={`${fieldBase} w-24 shrink-0 text-muted-foreground`}>
              {t.currencyValue}
            </span>
            <div className="relative flex-1">
              <input
                id={`${id}-amount`}
                type="number"
                min={0}
                step={1000}
                inputMode="numeric"
                className={`${field} pr-14 font-bold`}
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              />
              <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-[10px] text-muted-foreground">
                {t.cap}
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between text-[10px] font-bold tracking-wider uppercase">
            <label htmlFor={`${id}-days`}>{t.horizonLabel}</label>
            <span className="text-brand-blue">
              {days} {t.days} {t.quarter}
            </span>
          </div>
          <input
            id={`${id}-days`}
            type="range"
            min={30}
            max={180}
            step={10}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full accent-[var(--brand-blue)]"
          />
        </div>

        <div>
          <label
            htmlFor={`${id}-desc`}
            className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase"
          >
            {t.descLabel}
          </label>
          <textarea
            id={`${id}-desc`}
            rows={2}
            className={`${field} resize-none`}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between gap-3 rounded-xl bg-brand-blue/8 p-4">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
              <Gauge className="size-4.5" aria-hidden />
            </span>
            <div>
              <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                {t.recLabel}
              </p>
              <p className="text-xl font-bold" aria-live="polite">
                {money.format(dailyCap)}
                <span className="text-xs font-normal text-muted-foreground">{t.perDay}</span>
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
              {t.effLabel}
            </p>
            <p className="flex items-center justify-end gap-1 text-sm font-bold text-status-remaining">
              <Check className="size-3.5" aria-hidden /> {t.effValue}
            </p>
          </div>
        </div>
      </div>

      <Button asChild size="lg" className="mt-5 w-full">
        <a href={`${APP_URL}/signup`}>{t.cta} →</a>
      </Button>
    </div>
  );
}
