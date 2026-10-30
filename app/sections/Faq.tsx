import { Plus, X } from 'lucide-react';
import { Container } from '~/components/Container';
import type { Pricing } from '~/content/types';

// Native <details>: works without JavaScript, and the answers are in the prerendered HTML.
// Each item opens and closes on its own (no shared `name`, so opening one keeps the others open).
export function Faq({ t }: { t: Pricing['faq'] }) {
  return (
    <section className="pb-section">
      <Container className="max-w-3xl">
        <div className="reveal text-center">
          <h2 className="text-heading font-bold tracking-tight">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">{t.sub}</p>
        </div>
        <div className="mt-10 space-y-3">
          {t.items.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="group hover-shadow rounded-xl border bg-card px-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                  <Plus className="size-4 group-open:hidden" aria-hidden />
                  <X className="hidden size-4 group-open:block" aria-hidden />
                </span>
              </summary>
              {item.a && <p className="pb-5 text-sm text-muted-foreground">{item.a}</p>}
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
