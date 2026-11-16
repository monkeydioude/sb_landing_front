import { BarChart3, ReceiptText, ShieldCheck } from 'lucide-react';
import assistantHappy from '~/assets/photos/assistant-happy.webp';
import laptop1100 from '~/assets/photos/laptop-1100.webp';
import laptop640 from '~/assets/photos/laptop-640.webp';
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
          <div className="reveal relative h-80 overflow-hidden rounded-2xl bg-muted lg:h-96">
            <img
              src={laptop640}
              srcSet={`${laptop640} 640w, ${laptop1100} 1100w`}
              sizes="(min-width: 1024px) 540px, 100vw"
              alt={t.photoAlt}
              width={640}
              height={640}
              loading="lazy"
              decoding="async"
              className="size-full object-cover object-[50%_30%]"
            />
            {/* The assistant answers questions about the budget: its mascot sits with the question. */}
            <p className="absolute right-4 bottom-4 left-4 flex items-center gap-3 rounded-xl border bg-card/95 p-3 text-xs shadow-lg backdrop-blur-sm">
              <img
                src={assistantHappy}
                alt={t.assistantAlt}
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="size-8 shrink-0 object-contain"
              />
              <span>“{t.question}”</span>
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
