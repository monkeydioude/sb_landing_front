import { ArrowUp, Database } from 'lucide-react';
import assistant from '~/assets/photos/assistant-happy.webp';
import type { Demo } from '~/content/types';
import { PEOPLE } from '../dashboard/avatars';

/** "**bold**" in the copy becomes <strong>. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-bold text-foreground">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Step 4 of the tour: a question and the assistant's answer. A picture of the product, not a working chat. */
export function ChatMock({ t }: { t: Demo['chat'] }) {
  const me = PEOPLE.clara;
  return (
    <div className="flex min-h-[26rem] flex-1 flex-col">
      <div className="flex flex-1 flex-col justify-center gap-5 py-4">
        <div
          className="row-in flex items-end justify-end gap-2.5"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-brand-blue px-4 py-2.5 text-sm text-brand-blue-foreground">
            {t.question}
          </p>
          <img
            src={me.src}
            alt={me.name}
            width={28}
            height={28}
            loading="lazy"
            className="size-7 shrink-0 rounded-full object-cover"
          />
        </div>
        <div
          className="row-in flex items-start gap-2.5"
          style={{ '--i': 2 } as React.CSSProperties}
        >
          <img
            src={assistant}
            alt={t.assistant}
            width={32}
            height={32}
            loading="lazy"
            className="size-8 shrink-0 object-contain"
          />
          <div className="max-w-[88%]">
            <p className="rounded-2xl rounded-tl-sm border bg-muted/50 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
              <Rich text={t.answer} />
            </p>
            <p
              className="row-in mt-2 flex items-center gap-1.5 pl-1 text-[11px] text-muted-foreground"
              style={{ '--i': 4 } as React.CSSProperties}
            >
              <Database className="size-3" aria-hidden /> {t.sources}
            </p>
          </div>
        </div>
      </div>
      <div
        className="fade-in mt-auto flex items-center gap-2 rounded-xl border bg-input-background px-3 py-2.5 text-sm text-muted-foreground"
        aria-hidden="true"
      >
        <span className="flex-1">{t.placeholder}</span>
        <span className="grid size-7 place-items-center rounded-lg bg-gradient-primary text-white">
          <ArrowUp className="size-4" style={{ stroke: 'white' }} />
        </span>
      </div>
    </div>
  );
}
