import { Accent } from '~/components/Accent';

export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <h2 className="text-heading font-bold tracking-tight text-balance">
        <Accent text={title} />
      </h2>
      {sub && <p className="mt-5 text-muted-foreground">{sub}</p>}
    </div>
  );
}
