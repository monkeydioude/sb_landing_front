import { CalendarCheck, CreditCard, ShieldCheck, Timer } from 'lucide-react';
import { Container } from '~/components/Container';
import type { Pricing } from '~/content/types';

const ICONS = [Timer, CreditCard, CalendarCheck, ShieldCheck];

export function Assurances({ items }: { items: Pricing['assurances'] }) {
  return (
    <section className="pb-section">
      <Container>
        <ul className="reveal mx-auto grid max-w-4xl gap-4 rounded-xl border bg-card p-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <li key={item.title} className="flex items-center gap-3">
                <Icon className="size-5 shrink-0 text-brand-blue" aria-hidden />
                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
