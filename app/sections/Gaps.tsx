import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { Container } from '~/components/Container';
import type { Home } from '~/content/types';
import { pathFor, type Lang } from '~/site';
import { SectionHeading } from './SectionHeading';

export function Gaps({ t, lang }: { t: Home['gaps']; lang: Lang }) {
  return (
    <section className="surface-tint py-section">
      <Container>
        <SectionHeading title={t.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14">
          {t.cards.map((c, i) => (
            <article
              key={c.title}
              className="hover-lift reveal flex flex-col rounded-2xl border bg-card p-6 shadow-sm sm:p-8"
              style={{ '--i': i } as React.CSSProperties}
            >
              {/* TODO: swap for the product screenshots from the Figma export. */}
              <div className="mb-6 flex-1 rounded-xl bg-muted/60 p-5" aria-hidden="true">
                {i === 0 ? <BudgetMock t={t.mock} /> : <ExpenseMock t={t.mock.form} />}
              </div>
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              <div className="mt-6 text-right">
                <Button asChild>
                  <Link to={pathFor('features', lang)}>{c.cta} →</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

const ROW_BARS = ['w-4/5', 'w-3/5', 'w-2/5'];

function BudgetMock({ t }: { t: Home['gaps']['mock'] }) {
  return (
    <div className="text-xs">
      <p className="font-bold">{t.budget}</p>
      <div
        className="mx-auto my-4 grid size-24 place-items-center rounded-full"
        style={{
          background:
            'conic-gradient(var(--brand-blue) 0 62%, color-mix(in oklab, var(--brand-blue) 20%, transparent) 0)',
        }}
      >
        <div className="grid size-16 place-items-center rounded-full bg-card text-base font-bold">
          62%
        </div>
      </div>
      <ul className="space-y-3">
        {t.rows.map((r, i) => (
          <li key={r.label}>
            <div className="flex justify-between text-muted-foreground">
              <span>{r.label}</span>
              <span className="font-bold text-foreground">{r.value}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-border">
              <div className={`h-1.5 rounded-full bg-brand-blue ${ROW_BARS[i]}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExpenseMock({ t }: { t: Home['gaps']['mock']['form'] }) {
  const Field = ({ label, value, muted }: { label: string; value: string; muted?: boolean }) => (
    <div>
      <p className="mb-1 text-[10px] font-bold">{label}</p>
      <p
        className={`rounded-md border bg-card px-2.5 py-1.5 ${muted ? 'text-muted-foreground' : ''}`}
      >
        {value}
      </p>
    </div>
  );
  return (
    <div className="space-y-3 text-xs">
      <p className="font-bold">{t.title}</p>
      <Field label={t.vendor} value={t.vendorValue} />
      <div className="grid grid-cols-2 gap-3">
        <Field label={t.amount} value="0" muted />
        <Field label={t.currency} value={t.currencyValue} />
      </div>
      <Field label={t.budget} value={t.budgetPlaceholder} muted />
      <Field label={t.category} value={t.categoryPlaceholder} muted />
    </div>
  );
}
