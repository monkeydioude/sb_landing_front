import { Container } from '~/components/Container';
import type { LegalBlock, LegalDoc } from '~/content/legal';
import type { Lang } from '~/site';

const TOC_LABEL: Record<Lang, string> = { en: 'Contents', fr: 'Sommaire' };
const LINK = /(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/;
const SITE = /\b(spendbaker\.com)$/;
const linkClass = 'font-bold text-brand-blue underline underline-offset-2 break-words';

/** Links the emails and URLs inside a line of text; everything else stays text. */
function Linkified({ text }: { text: string }) {
  const parts = text.split(LINK);
  const site = text.toLowerCase().startsWith('website') && text.match(SITE);
  if (site) {
    return (
      <>
        {text.slice(0, text.length - site[1].length)}
        <a href={`https://${site[1]}`} className={linkClass}>
          {site[1]}
        </a>
      </>
    );
  }
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 0 ? (
          part
        ) : (
          <a key={i} href={part.includes('@') ? `mailto:${part}` : part} className={linkClass}>
            {part}
          </a>
        ),
      )}
    </>
  );
}

/** List items such as "Self-Service: You can delete..." show their label in bold. */
function ListText({ text }: { text: string }) {
  if (text.endsWith(':') && text.length < 60) {
    return <strong className="font-bold text-foreground">{text}</strong>; // a parent item that introduces a nested list
  }
  const m = text.match(/^([^:]{2,45}):\s+(.+)$/s);
  if (!m || /^https?$/i.test(m[1])) return <Linkified text={text} />;
  return (
    <>
      <strong className="font-bold text-foreground">{m[1]}:</strong> <Linkified text={m[2]} />
    </>
  );
}

/** Definitions start with a quoted term ("User": any natural...): the term is shown in bold. */
function Paragraph({ text }: { text: string }) {
  const def = text.match(/^("[^"]+")(.*)$/s);
  return (
    <p>
      {def ? (
        <>
          <strong className="font-bold text-foreground">{def[1]}</strong>
          <Linkified text={def[2]} />
        </>
      ) : (
        <Linkified text={text} />
      )}
    </p>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'h':
      return (
        <h3 className="pt-2 text-base font-bold text-foreground">
          {block.num} {block.text}
        </h3>
      );
    case 'ul':
      return (
        <ul className="list-disc space-y-1.5 pl-6 marker:text-brand-blue">
          {block.items.map((item) =>
            typeof item === 'string' ? (
              <li key={item}>
                <ListText text={item} />
              </li>
            ) : (
              <li key={item.text}>
                <ListText text={item.text} />
                <ul className="mt-1.5 list-[circle] space-y-1.5 pl-6 marker:text-brand-blue">
                  {item.items.map((sub) => (
                    <li key={sub}>
                      <Linkified text={sub} />
                    </li>
                  ))}
                </ul>
              </li>
            ),
          )}
        </ul>
      );
    case 'lines':
      return (
        <address className="rounded-xl border bg-card px-5 py-4 text-sm not-italic">
          {block.lines.map((line) => (
            <p key={line}>
              <Linkified text={line} />
            </p>
          ))}
        </address>
      );
    default:
      return <Paragraph text={block.text} />;
  }
}

function TocList({ doc, className }: { doc: LegalDoc; className?: string }) {
  return (
    <ol className={`space-y-1 text-sm ${className ?? ''}`}>
      {doc.sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="block rounded-md px-2 py-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {s.num}. {s.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalDocument({ doc, lang }: { doc: LegalDoc; lang: Lang }) {
  return (
    <>
      <section className="surface-tint">
        <Container className="pt-page pb-8 lg:pb-10">
          <h1 className="text-title max-w-3xl font-bold tracking-tight text-balance">
            {doc.title}
          </h1>
          {doc.updated && <p className="mt-4 text-sm text-muted-foreground">{doc.updated}</p>}
          {doc.company && (
            <p className="mt-6 w-fit rounded-xl border bg-card px-5 py-4 text-sm leading-relaxed">
              {doc.company.map((line, i) => (
                <span
                  key={line}
                  className={i === 0 ? 'block font-bold' : 'block text-muted-foreground'}
                >
                  {line}
                </span>
              ))}
            </p>
          )}
        </Container>
      </section>

      <Container className="grid gap-8 py-8 lg:grid-cols-[15rem_1fr] lg:gap-16 lg:py-12">
        {/* Below `lg` the contents are a collapsed <details> (no JS); from `lg` up they are a sticky list. */}
        <nav aria-label={TOC_LABEL[lang]} className="lg:sticky lg:top-28 lg:self-start">
          <details className="rounded-xl border bg-card px-4 lg:hidden">
            <summary className="cursor-pointer list-none py-3 text-sm font-bold [&::-webkit-details-marker]:hidden">
              {TOC_LABEL[lang]}
            </summary>
            <TocList doc={doc} className="pb-3" />
          </details>
          <div className="hidden lg:block">
            <p className="pb-3 text-sm font-bold">{TOC_LABEL[lang]}</p>
            <TocList doc={doc} />
          </div>
        </nav>

        <article className="max-w-3xl space-y-10">
          {doc.sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className="scroll-mt-28"
            >
              <h2 id={`${s.id}-title`} className="text-2xl font-bold tracking-tight">
                {s.num}. {s.title}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                {s.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </div>
            </section>
          ))}
        </article>
      </Container>
    </>
  );
}
