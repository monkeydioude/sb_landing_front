import { Link } from 'react-router';
import logoColor from '~/assets/logo_color.png';
import logoWhite from '~/assets/white-logo-spendbaker.png';
import { cn } from '~/lib/cn';
import { Title } from './Title';

// Ported from sb_front/app/src/components/Logo.tsx (same variants, sizes and assets), minus its "Beta" badge,
// plus the wordmark (the ported `Title`). The images are resized from the originals (498px, 120KB each) to 96px:
// the logo is never shown bigger than 48px, so 96px is sharp on 2x screens at a tenth of the weight.
const SIZES = { sm: 24, md: 28, lg: 48 } as const;

type Props = {
  to?: string;
  /** sb_front's sm / md / lg (24 / 28 / 48px), or a pixel size. */
  size?: keyof typeof SIZES | number;
  /** `white` is the logo for dark/photo backgrounds. */
  variant?: 'color' | 'white';
  /** The "Spendbaker" text next to the icon. */
  showName?: boolean;
  className?: string;
};

export function Logo({
  to = '/',
  size = 36,
  variant = 'color',
  showName = true,
  className,
}: Props) {
  const px = typeof size === 'number' ? size : SIZES[size];
  return (
    <Link to={to} className={cn('flex items-center gap-2', className)}>
      <img
        src={variant === 'white' ? logoWhite : logoColor}
        alt={showName ? '' : 'Spendbaker'}
        width={px}
        height={px}
        className="rounded-xl"
        fetchPriority="high"
      />
      {showName && <Title as="span" variant={variant} size={26} />}
    </Link>
  );
}
