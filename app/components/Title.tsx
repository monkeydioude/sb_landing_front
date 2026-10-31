// Ported from sb_front/app/src/components/Title.tsx: the "Spendbaker" wordmark with its hand-tuned letter
// spacing (the "d" tucks into the "b"). Changes: the font is Lato site-wide so `font-lato` is not needed,
// `font-regular` (not a Tailwind class) is dropped, and an optional `size` replaces the fixed 26px.
interface TitleProps {
  variant?: 'color' | 'white';
  className?: string;
  as?: 'h1' | 'h2' | 'span' | 'p';
  /** Font size in px (sb_front: 26). */
  size?: number;
}

export function Title({
  variant = 'color',
  className = '',
  as: Tag = 'h1',
  size = 26,
}: TitleProps) {
  const baseClass = ['select-none', className].join(' ');

  const colorClass =
    variant === 'color' ? 'text-gradient-brand bg-clip-text text-transparent' : 'text-white';

  return (
    <Tag
      className={`${baseClass} ${colorClass}`}
      style={{ fontSize: `${size}px`, whiteSpace: 'pre-wrap', paddingRight: '2px' }}
    >
      <span style={{ letterSpacing: '-2.08px', lineHeight: '1.4' }}>Spen</span>
      <span style={{ letterSpacing: '-6.5px', lineHeight: '1.4' }}>d</span>
      <span style={{ letterSpacing: '-1.56px', lineHeight: '1.4' }}>b</span>
      <span style={{ letterSpacing: '-2.08px', lineHeight: '1.4' }}>aker</span>
    </Tag>
  );
}
