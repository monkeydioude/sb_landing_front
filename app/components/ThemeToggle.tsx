import { Moon, Sun } from 'lucide-react';
import { THEME_KEY } from '~/lib/theme';

// Both icons are always in the HTML; CSS (`dark:`) shows the right one, so the prerendered
// markup is correct for either theme and needs no state.
export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="grid size-9 place-items-center rounded-full text-muted-foreground hover:bg-muted"
    >
      <Moon className="size-4 dark:hidden" aria-hidden />
      <Sun className="hidden size-4 dark:block" aria-hidden />
    </button>
  );
}
