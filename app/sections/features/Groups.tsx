import {
  ArrowLeftRight,
  BarChart3,
  Bell,
  Building2,
  Check,
  ChevronRight,
  FileSpreadsheet,
  History,
  LayoutDashboard,
  LineChart,
  ListTree,
  Network,
  Plug,
  ReceiptText,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  Timer,
  Workflow,
  Zap,
} from 'lucide-react';
import { Container } from '~/components/Container';
import { cn } from '~/lib/cn';
import type { Features } from '~/content/types';
import { FeatureCard, GroupHeader } from './FeatureCard';

export function Architecture({ t }: { t: Features['architecture'] }) {
  return (
    <section className="pt-section pb-8">
      <Container className="reveal grid items-end gap-6 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-brand-blue">
            <span className="size-1.5 rounded-full bg-brand-blue" aria-hidden /> {t.tag}
          </p>
          <h2 className="mt-4 text-heading font-bold tracking-tight text-balance">{t.title}</h2>
        </div>
        <p className="text-sm text-muted-foreground lg:max-w-md lg:justify-self-end">{t.sub}</p>
      </Container>
    </section>
  );
}

const Group = ({ children }: { children: React.ReactNode }) => (
  <section className="py-8 lg:py-10">
    <Container>{children}</Container>
  </section>
);

export function Construction({ t }: { t: Features['construction'] }) {
  return (
    <Group>
      <GroupHeader index={t.index} title={t.title} sub={t.sub} phase={t.phase} />
      <div className="grid gap-4 lg:grid-cols-3">
        <FeatureCard {...t.campaign} icon={ListTree} className="lg:col-span-2">
          <ol
            className="mt-5 flex flex-wrap items-center gap-2 text-xs"
            aria-label={t.campaign.title}
          >
            {t.campaign.path.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="size-3.5 text-muted-foreground" aria-hidden />}
                <span
                  className={cn(
                    'rounded-md border border-transparent px-2.5 py-1',
                    // gradient border: card fill over a border-box gradient (as the nav's selected item)
                    '[background-image:linear-gradient(var(--card),var(--card)),linear-gradient(135deg,#4285f4,#33c483)]',
                    '[background-origin:padding-box,border-box] [background-clip:padding-box,border-box]',
                    i === t.campaign.path.length - 1 && 'font-bold',
                  )}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </FeatureCard>
        <FeatureCard {...t.entry} icon={Timer} footIcon={Zap} />
        <FeatureCard {...t.vendor} icon={Building2} footIcon={RefreshCw} />
        <FeatureCard {...t.categories} icon={Network} footIcon={ListTree} />
        <FeatureCard {...t.roles} icon={ShieldCheck} footIcon={Check} />
      </div>
    </Group>
  );
}

export function Operations({ t }: { t: Features['operations'] }) {
  return (
    <Group>
      <GroupHeader index={t.index} title={t.title} sub={t.sub} phase={t.phase} />
      <div className="grid gap-4 lg:grid-cols-3">
        <FeatureCard {...t.ads} icon={Plug} className="lg:col-span-2">
          <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {t.ads.platforms.map((name) => (
              <li key={name} className="rounded-lg border bg-muted/50 px-3 py-2 text-xs">
                <p className="font-bold">{name}</p>
                <p className="text-[10px] text-status-remaining">{t.ads.connected}</p>
              </li>
            ))}
          </ul>
        </FeatureCard>
        <FeatureCard {...t.commitments} icon={Scale}>
          <div className="mt-5" aria-hidden="true">
            <div className="h-1.5 rounded-full bg-muted">
              <div className="h-1.5 w-2/3 rounded-full bg-brand-blue" />
            </div>
            <p className="mt-2 flex justify-between text-xs">
              <span className="text-muted-foreground">{t.commitments.committed}</span>
              <span className="font-bold">{t.commitments.value}</span>
            </p>
          </div>
        </FeatureCard>
        <FeatureCard {...t.expenses} icon={ReceiptText} footIcon={Zap} />
        <FeatureCard {...t.transfer} icon={ArrowLeftRight} footIcon={Workflow} />
        <FeatureCard {...t.changelog} icon={History} footIcon={ShieldCheck} />
      </div>
      <div className="hover-lift reveal mt-4 flex flex-col gap-5 rounded-2xl bg-inverse p-6 text-inverse-foreground lg:flex-row lg:items-center">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/10">
          <Bell className="size-5" aria-hidden />
        </span>
        <div className="flex-1">
          <h3 className="font-bold">{t.alerts.title}</h3>
          <p className="mt-1.5 text-sm text-inverse-muted">{t.alerts.text}</p>
        </div>
        <ul className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
          {t.alerts.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-md border border-inverse-border bg-inverse-card px-2.5 py-1 text-[11px]"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </Group>
  );
}

export function Reporting({ t }: { t: Features['reporting'] }) {
  return (
    <Group>
      <GroupHeader index={t.index} title={t.title} sub={t.sub} phase={t.phase} />
      <div className="grid gap-4 lg:grid-cols-3">
        <FeatureCard {...t.dashboards} icon={LayoutDashboard}>
          <div className="mt-5 text-xs" aria-hidden="true">
            <p className="flex justify-between">
              <span className="text-muted-foreground">{t.dashboards.pacing}</span>
              <span className="font-bold text-status-remaining">{t.dashboards.value}</span>
            </p>
            <div className="mt-2 flex h-8 items-end gap-1">
              {[40, 55, 45, 70, 85, 100].map((h, i) => (
                <span
                  key={i}
                  className={
                    i > 3
                      ? 'flex-1 rounded-sm bg-brand-blue'
                      : 'flex-1 rounded-sm bg-muted-foreground/25'
                  }
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </FeatureCard>
        <FeatureCard {...t.sheets} icon={FileSpreadsheet} footIcon={Check} />
        <FeatureCard {...t.roi} icon={LineChart} footIcon={BarChart3} />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[5fr_6fr]">
        <FeatureCard {...t.summaries} icon={Sparkles} footIcon={Sparkles}>
          <figure className="mt-5 rounded-lg border bg-muted/50 p-4 text-xs">
            <figcaption className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-brand-green">
              <span className="size-1.5 rounded-full bg-brand-green" aria-hidden />{' '}
              {t.summaries.insightLabel}
            </figcaption>
            <blockquote className="text-muted-foreground italic">{t.summaries.insight}</blockquote>
          </figure>
        </FeatureCard>
        <FeatureCard {...t.mcp} icon={SquareTerminal} dark>
          <pre className="mt-5 overflow-x-auto rounded-lg border border-inverse-border bg-black/30 p-4 text-[11px] leading-relaxed">
            <code>
              <span className="text-inverse-muted">{'> prompt: '}</span>
              {`"${t.mcp.prompt}"\n`}
              <span className="text-brand-green">{'> ledger: '}</span>
              {t.mcp.response}
            </code>
          </pre>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.mcp.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-md border border-inverse-border bg-inverse-card px-2.5 py-1 text-[11px]"
              >
                {chip}
              </li>
            ))}
          </ul>
        </FeatureCard>
      </div>
    </Group>
  );
}
