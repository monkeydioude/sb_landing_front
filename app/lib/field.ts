/** Input styling shared by every form control (sb_front's input look: soft background, brand-blue focus ring). */
export const fieldBase =
  'rounded-lg border bg-input-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-brand-blue focus-visible:ring-[3px] focus-visible:ring-brand-blue/30 aria-[invalid=true]:border-destructive';
export const field = `w-full ${fieldBase}`;
