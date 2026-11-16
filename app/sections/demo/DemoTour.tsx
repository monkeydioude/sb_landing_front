import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useId } from 'react';
import { Container } from '~/components/Container';
import { Button } from '~/components/ui/button';
import { content } from '~/content';
import { cn } from '~/lib/cn';
import { useTabAutoplay } from '~/lib/useTabAutoplay';
import type { Lang } from '~/site';
import { CategoryTable } from '../dashboard/CategoryTable';
import { ExpensesTable } from '../dashboard/ExpensesTable';
import { makeFormat } from '../dashboard/format';
import { OverviewChart } from '../dashboard/OverviewChart';
import { ChatMock } from './ChatMock';

/**
 * Interactive product tour: four steps, each showing a screen of the product (the same mock-ups and demo data
 * as the home dashboard). All four screens are in the page HTML and share one grid cell, so the window keeps
 * one height; the inactive ones are invisible and inert. The first screen shows without animation; after the
 * visitor picks a step, the new screen plays its entrance (bars rise, rows slide in).
 */
const STEP_MS = 4500; // a little longer than the home dashboard (3s): each step has text to read

export function DemoTour({ lang }: { lang: Lang }) {
  const id = useId();
  const demo = content[lang].demo;
  const dash = content[lang].home.dashboard;
  const fmt = makeFormat(lang);
  // Plays on its own like the home dashboard: steps advance while the window is on screen, pause on
  // hover/focus, and stop for good once the visitor clicks anything in the tour (see useTabAutoplay).
  const {
    index: step,
    choose,
    running,
    observeRef,
    interactionProps,
    animState,
  } = useTabAutoplay({
    count: demo.steps.length,
    interval: STEP_MS,
  });
  const last = demo.steps.length - 1;

  const go = (i: number) => choose(Math.min(last, Math.max(0, i)));
  const onKeyDown = (e: React.KeyboardEvent) => {
    const to =
      e.key === 'ArrowDown' || e.key === 'ArrowRight'
        ? step + 1
        : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? step - 1
          : null;
    if (to === null) return;
    e.preventDefault();
    const i = (to + demo.steps.length) % demo.steps.length;
    choose(i);
    document.getElementById(`${id}-step-${i}`)?.focus();
  };

  const screens = [
    <CategoryTable key="c" t={dash.categories} fmt={fmt} />,
    <ExpensesTable key="e" t={dash.expenses} fmt={fmt} />,
    <OverviewChart key="o" t={dash.overview} fmt={fmt} />,
    <ChatMock key="a" t={demo.chat} />,
  ];

  return (
    <section className="pb-section">
      <Container className="space-y-6" {...interactionProps}>
        <div>
          <div
            role="tablist"
            aria-label={demo.tourLabel}
            onKeyDown={onKeyDown}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {demo.steps.map((s, i) => {
              const active = step === i;
              return (
                <button
                  key={s.title}
                  id={`${id}-step-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`${id}-screen-${i}`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => go(i)}
                  className={cn(
                    'hover-shadow relative flex w-full gap-3 overflow-hidden rounded-xl border p-4 text-left transition-colors',
                    active
                      ? 'border-brand-blue/40 bg-card shadow-md'
                      : 'bg-card/60 text-muted-foreground hover:bg-card',
                  )}
                >
                  <span
                    className={cn(
                      'grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold',
                      active ? 'bg-gradient-primary text-white' : 'bg-muted text-muted-foreground',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className={cn('block font-bold', active && 'text-foreground')}>
                      {s.title}
                    </span>
                    <span className={cn('mt-1 block text-sm', !active && 'max-lg:hidden')}>
                      {s.text}
                    </span>
                  </span>
                  {running && active && (
                    <span
                      aria-hidden
                      className="tab-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-primary"
                      style={{ animationDuration: `${STEP_MS}ms` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-w-0">
          <div
            ref={observeRef}
            className="reveal overflow-hidden rounded-2xl border bg-card shadow-xl"
          >
            <div
              className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2.5"
              aria-hidden="true"
            >
              <span className="size-2.5 rounded-full bg-status-spent/70" />
              <span className="size-2.5 rounded-full bg-status-committed/70" />
              <span className="size-2.5 rounded-full bg-status-remaining/70" />
              <span className="mx-auto rounded-md bg-card px-3 py-0.5 text-[11px] text-muted-foreground">
                app.spendbaker.com
              </span>
            </div>
            <div className="grid p-4 sm:p-5">
              {screens.map((screen, i) => (
                <div
                  key={i}
                  id={`${id}-screen-${i}`}
                  role="tabpanel"
                  aria-labelledby={`${id}-step-${i}`}
                  inert={step !== i}
                  aria-hidden={step !== i}
                  data-anim={animState(i)}
                  className={cn(
                    'col-start-1 row-start-1 flex min-w-0 flex-col',
                    step !== i && 'pointer-events-none invisible',
                  )}
                >
                  {screen}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {demo.stepWord} {step + 1} / {demo.steps.length}
            </p>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => go(step - 1)}
                disabled={step === 0}
              >
                <ChevronLeft className="size-4" aria-hidden /> {demo.prev}
              </Button>
              <Button type="button" onClick={() => go(step + 1)} disabled={step === last}>
                {demo.next}{' '}
                <ChevronRight className="size-4" style={{ stroke: 'white' }} aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
