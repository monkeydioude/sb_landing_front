export const THEME_KEY = 'sb-theme';

/** Re-applies the saved/system theme; used after hydration in case React reset <html>. */
export function applyTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
}

/** Runs inline in <head> before first paint, so the page never flashes the wrong theme. */
export const themeInitScript = `try{var t=localStorage.getItem('${THEME_KEY}');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;
