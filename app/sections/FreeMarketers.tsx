import { BarChart3, MessageSquare, ReceiptText, ShieldCheck } from 'lucide-react';
import { Container } from '~/components/Container';
import type { Home } from '~/content/types';
import { SectionHeading } from './SectionHeading';

const ICONS = [BarChart3, ReceiptText, ShieldCheck];

export function FreeMarketers({ t }: { t: Home['free'] }) {
  return (
    <section className="py-section">
      <Container>
        <SectionHeading title={t.title} />
        <div className="mt-10 grid items-center gap-8 lg:mt-16 lg:gap-10 lg:grid-cols-2">
          {/* TODO: replace with the Figma photo (lazy, explicit width/height). */}
          <div className="reveal relative h-80 rounded-2xl bg-gradient-to-br from-brand-blue/30 to-brand-green/30 lg:h-96">
            <p className="absolute right-4 bottom-4 left-4 flex gap-2 rounded-xl border bg-card/95 p-3 text-xs shadow-lg">
              <MessageSquare className="size-4 shrink-0 text-brand-blue" aria-hidden />“{t.question}
              ”
            </p>
          </div>
          <ul className="space-y-4">
            {t.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <li
                  key={item.title}
                  className="hover-lift reveal flex gap-4 rounded-xl border bg-card p-5 shadow-sm"
                  style={{ '--i': i } as React.CSSProperties}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
