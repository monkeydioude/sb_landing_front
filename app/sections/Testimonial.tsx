import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import type { Home } from '~/content/types';

export function Testimonial({ t }: { t: Home['quote'] }) {
  return (
    <section className="pb-section">
      <Container>
        <figure className="flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-gradient-primary px-6 py-10 text-white sm:px-10 md:flex-row md:gap-10 lg:py-14">
          {/* TODO: portrait from the Figma export (rounded, 160px, lazy). */}
          <div
            className="grid size-28 shrink-0 place-items-center rounded-2xl bg-white/20 text-4xl font-bold md:size-40"
            aria-hidden
          >
            {t.author[0]}
          </div>
          <div className="text-center md:text-left">
            <blockquote className="text-quote font-bold text-balance">
              “
              <Accent
                text={t.text}
                className="text-white underline decoration-white/40 underline-offset-4"
              />
              ”
            </blockquote>
            <figcaption className="mt-6">
              <span className="block text-lg font-bold">{t.author}</span>
              <span className="block text-sm text-white/80">{t.role}</span>
            </figcaption>
          </div>
        </figure>
      </Container>
    </section>
  );
}
