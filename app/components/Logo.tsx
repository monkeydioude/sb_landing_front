import { Link } from 'react-router';
import logo from '~/assets/logo.png';

/** The colour logo used on the sb_front login page (rounded square, 48px there; resized to 96px for 2x). */
export function Logo({ to = '/', size = 36 }: { to?: string; size?: number }) {
  return (
    <Link to={to} className="flex items-center gap-2 text-lg font-bold">
      <img
        src={logo}
        alt=""
        width={size}
        height={size}
        className="rounded-xl"
        fetchPriority="high"
      />
      <span className="text-gradient-brand">Spendbaker</span>
    </Link>
  );
}
