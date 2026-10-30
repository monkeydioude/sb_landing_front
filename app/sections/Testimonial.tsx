import portraitMobile from '~/assets/idriss.png';
import portraitDesktop from '~/assets/idriss-1.png';
import { Accent } from '~/components/Accent';
import { Container } from '~/components/Container';
import type { Home } from '~/content/types';

export function Testimonial({ t }: { t: Home['quote'] }) {
  return (
    <section className="pb-section">
      <Container>
        <figure className="reveal flex flex-col items-center gap-6 overflow-hidden rounded-2xl bg-gradient-primary px-6 py-10 text-white sm:px-10 md:flex-row md:gap-10 lg:py-14">
          {/* Mobile photo (188px) by default; the desktop one (118px) from `md`, where the portrait sits beside the quote. */}
          <picture className="shrink-0">
            <source media="(min-width: 768px)" srcSet={portraitDesktop} width={118} height={118} />
            <img
              src={portraitMobile}
              alt={t.author}
              width={112}
              height={112}
              loading="lazy"
              decoding="async"
              className="size-28 object-cover md:size-[118px]"
            />
          </picture>
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
