import type { LucideIcon } from 'lucide-react';
import { cn } from '~/lib/cn';

type Props = {
  icon: LucideIcon;
  tag?: string;
  title: string;
  text: string;
  foot?: string;
  footIcon?: LucideIcon;
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
};

/** One module card: icon + small tag on top, title and text, an optional visual, an optional footer line. */
export function FeatureCard({
  icon: Icon,
  tag,
  title,
  text,
  foot,
  footIcon: FootIcon,
  dark,
  className,
  children,
}: Props) {
  return (
    <article
      className={cn(
        'hover-lift reveal flex flex-col rounded-2xl border p-6 shadow-sm',
        dark ? 'border-inverse-border bg-inverse text-inverse-foreground' : 'bg-card',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            'grid size-9 place-items-center rounded-lg',
            dark ? 'bg-white/10' : 'bg-brand-blue/10 text-brand-blue',
          )}
        >
          <Icon className="size-4.5" aria-hidden />
        </span>
        {tag && (
          <span
            className={cn(
              'text-[10px] font-bold tracking-widest uppercase',
              dark ? 'text-brand-green' : 'text-muted-foreground',
            )}
          >
            {tag}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-bold">{title}</h3>
      <p className={cn('mt-2 text-sm', dark ? 'text-inverse-muted' : 'text-muted-foreground')}>
        {text}
      </p>
      {children}
      {foot && <div className="min-h-5 flex-1" />}
      {foot && (
        <p
          className={cn(
            'flex items-center justify-between gap-2 border-t pt-4 text-xs font-bold',
            dark ? 'border-inverse-border text-inverse-muted' : 'text-muted-foreground',
          )}
        >
          <span>{foot}</span>
          {FootIcon && <FootIcon className="size-4 text-brand-blue" aria-hidden />}
        </p>
      )}
    </article>
  );
}

export function GroupHeader({
  index,
  title,
  sub,
  phase,
}: {
  index: string;
  title: string;
  sub: string;
  phase: string;
}) {
  return (
    <div className="reveal mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span className="grid size-7 place-items-center rounded-md bg-foreground text-xs font-bold text-background">
          {index}
        </span>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-xs text-muted-foreground">{sub}</p>
        </div>
      </div>
      <span className="rounded-full border bg-card px-3 py-1 text-[11px] text-muted-foreground">
        {phase}
      </span>
    </div>
  );
}
