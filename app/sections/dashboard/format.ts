import type { Lang } from '~/site';

/** Number, currency, date and month formatters for the demo dashboard, per page language. */
export function makeFormat(lang: Lang) {
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
  const num = new Intl.NumberFormat(locale);
  const compact = new Intl.NumberFormat(locale, { notation: 'compact', maximumFractionDigits: 1 });
  const eur = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });
  const date = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { timeZone: 'UTC' });
  const monthName = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' });
  return {
    num: (n: number) => num.format(n),
    compact: (n: number) => compact.format(n),
    eur: (n: number) => eur.format(n),
    date: (iso: string) => date.format(new Date(iso)),
    months: (count: number) =>
      Array.from({ length: count }, (_, i) => monthName.format(new Date(Date.UTC(2026, i, 1)))),
  };
}
export type Format = ReturnType<typeof makeFormat>;
