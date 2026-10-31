import { Award, Box, CircleCheck, Lock, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import { Button } from '~/components/ui/button';
import type { Plan, Pricing } from '~/content/types';
import { cn } from '~/lib/cn';
import { APP_URL, pathFor, type Lang } from '~/site';

type Period = 'monthly' | 'annual';

export function PricingPlans({ t, lang }: { t: Pricing; lang: Lang }) {
  // Annual is the default: it is what the prerendered HTML shows.
  const [period, setPeriod] = useState<Period>('annual');
  return (
    <section>
      <Container className="pt-page pb-section">
        <div className="animate-fade-up mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-blue">
            {t.badge}
          </span>
          <h1 className="mt-5 text-display font-bold tracking-tight text-balance">
            <Accent text={t.h1} />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t.sub}</p>
          <BillingToggle t={t.billing} period={period} onChange={setPeriod} />
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
          {t.plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} period={period} featured={i === 1} lang={lang} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function BillingToggle({
  t,
  period,
  onChange,
}: {
  t: Pricing['billing'];
  period: Period;
  onChange: (p: Period) => void;
}) {
  const item = (value: Period, label: string, extra?: string) => (
    <button
      type="button"
      aria-pressed={period === value}
      onClick={() => onChange(value)}
      className={cn(
        'flex items-center gap-2 rounded-lg px-5 py-2 text-sm transition-colors',
        period === value
          ? 'bg-card font-bold shadow-sm'
          : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {label}
      {extra && (
        <span className="rounded-full bg-brand-green/15 px-2 py-0.5 text-[11px] font-bold text-status-remaining">
          {extra}
        </span>
      )}
    </button>
  );
  return (
    <div
      role="group"
      aria-label={t.label}
      className="mx-auto mt-8 flex w-fit gap-1 rounded-xl bg-muted p-1"
    >
      {item('monthly', t.monthly)}
      {item('annual', t.annual, t.discount)}
    </div>
  );
}

function PlanCard({
  plan,
  period,
  featured,
  lang,
}: {
  plan: Plan;
  period: Period;
  featured: boolean;
  lang: Lang;
}) {
  const Icon = featured ? Award : Box;
  return (
    <article
      className={cn(
        'hover-lift animate-fade-up relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm [--delay:150ms] sm:p-8',
        // Featured: brand-gradient border (padding-box fill over a border-box gradient), as the nav's selected state.
        featured && [
          'border-2 border-transparent shadow-lg',
          '[background-image:linear-gradient(var(--card),var(--card)),linear-gradient(135deg,#4285f4,#33c483)]',
          '[background-origin:padding-box,border-box]',
          '[background-clip:padding-box,border-box]',
        ],
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-3 py-1 text-[10px] font-bold tracking-wider whitespace-nowrap text-brand-blue-foreground">
          {plan.badge}
        </span>
      )}
      <div className="flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-bold">
          <Icon className="size-5 text-brand-blue" aria-hidden /> {plan.name}
        </h2>
        <span className="rounded-md bg-brand-blue/10 px-2 py-1 text-[10px] font-bold tracking-wider text-brand-blue">
          {plan.tag}
        </span>
      </div>

      <p className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-tight">{plan.price[period]}</span>
        <span className="text-sm text-muted-foreground">{plan.unit}</span>
      </p>
      {period === 'annual' && plan.annualNote && (
        <p className="mt-2 text-xs font-semibold text-brand-blue">{plan.annualNote}</p>
      )}
      {plan.description && <p className="mt-5 text-sm text-muted-foreground">{plan.description}</p>}

      <Button
        asChild
        size="lg"
        variant={featured ? 'default' : 'secondary'}
        className="mt-6 w-full"
      >
        <a href={`${APP_URL}/signup`}>{plan.cta} →</a>
      </Button>

      <div className="mt-7 flex items-center justify-between gap-3 text-[11px] font-bold tracking-wider">
        <h3>{plan.featuresTitle}</h3>
        {plan.featuresLink && (
          <a
            href={pathFor('features', lang)}
            className="font-normal tracking-normal text-brand-blue underline-offset-4 hover:underline"
          >
            {plan.featuresLink}
          </a>
        )}
      </div>
      <ul className="mt-4 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <CircleCheck className="mt-0.5 size-4 shrink-0 text-brand-blue" aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      <div className="min-h-8 flex-1" />
      <p className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2.5 text-xs text-muted-foreground">
        {featured ? (
          <ShieldCheck className="size-4 shrink-0 text-brand-blue" aria-hidden />
        ) : (
          <Lock className="size-4 shrink-0" aria-hidden />
        )}
        <span className={cn(featured && 'font-bold text-foreground')}>{plan.note}</span>
        {plan.noteTag && (
          <span className="ml-auto text-[10px] font-bold tracking-wider text-brand-blue">
            {plan.noteTag}
          </span>
        )}
      </p>
    </article>
  );
}
