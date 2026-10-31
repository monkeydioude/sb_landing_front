import { Plus } from 'lucide-react';
import { useRef } from 'react';
import { Container } from '~/components/Container';
import type { Pricing } from '~/content/types';

const DURATION = 300;
const EASING = 'cubic-bezier(0.2, 0.7, 0.2, 1)';

// Native <details>: works without JavaScript, and the answers are in the prerendered HTML. After hydration
// the answer's height is animated with the Web Animations API (a closed <details> cannot be animated with CSS
// alone in most browsers). Each item opens and closes on its own (no shared `name`).
function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen: boolean }) {
  const details = useRef<HTMLDetailsElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const anim = useRef<Animation | null>(null);

  function toggle(e: React.MouseEvent) {
    const d = details.current;
    const el = body.current;
    if (!d || !el || !a) return;
    e.preventDefault(); // we flip `open` ourselves, after/before the animation
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const opening = !d.open || d.dataset.closing !== undefined;
    anim.current?.cancel();
    delete d.dataset.closing;

    if (reduce) {
      d.open = opening;
      return;
    }
    el.style.overflow = 'hidden';
    if (opening) {
      d.open = true;
      const to = el.scrollHeight;
      anim.current = el.animate(
        [
          { height: '0px', opacity: 0 },
          { height: `${to}px`, opacity: 1 },
        ],
        { duration: DURATION, easing: EASING },
      );
    } else {
      d.dataset.closing = ''; // the icon turns back at once, while the answer is still sliding shut
      anim.current = el.animate(
        [
          { height: `${el.offsetHeight}px`, opacity: 1 },
          { height: '0px', opacity: 0 },
        ],
        { duration: DURATION - 60, easing: EASING },
      );
    }
    const run = anim.current;
    run.onfinish = () => {
      if (!opening) {
        d.open = false;
        delete d.dataset.closing;
      }
      el.style.overflow = '';
      anim.current = null;
    };
    run.oncancel = () => {
      el.style.overflow = '';
    };
  }

  return (
    <details
      ref={details}
      open={defaultOpen}
      className="faq-item group hover-shadow rounded-xl border bg-card px-5 shadow-sm"
    >
      <summary
        onClick={toggle}
        className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold [&::-webkit-details-marker]:hidden"
      >
        {q}
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
          {/* one icon: the plus turns into an X by rotating 45deg */}
          <Plus
            className="size-4 transition-transform duration-300 ease-out group-open:rotate-45 group-data-[closing]:rotate-0"
            aria-hidden
          />
        </span>
      </summary>
      {a && (
        <div ref={body}>
          <p className="pb-5 text-sm text-muted-foreground">{a}</p>
        </div>
      )}
    </details>
  );
}

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
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
