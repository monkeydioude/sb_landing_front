import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '~/lib/cn';

const buttonVariants = cva(
  // Base — shared by all variants
  'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-sm font-semibold transition-all ' +
    'disabled:pointer-events-none disabled:opacity-50 ' +
    // SVG sizing — but don't let them stretch the layout
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 " +
    // Links inside buttons: don't let them expand and push the icon away
    "[&_a]:inline-flex [&_a]:items-center [&_a]:gap-1.5 [&_a:not([class*='w-'])]:w-auto " +
    'outline-none focus-visible:ring-[3px] ' +
    'aria-invalid:ring-destructive/20 aria-invalid:border-destructive ' +
    'cursor-pointer',
  {
    variants: {
      variant: {
        // ── Primary: brand gradient ──────────────────────────────────────────
        default:
          '[background:linear-gradient(90deg,#4285f4_0%,#33c483_100%)] text-white ' +
          'hover:opacity-90 hover:shadow-md hover:shadow-brand-blue/25 ' +
          'focus-visible:ring-brand-blue/30 focus-visible:ring-offset-1',

        // ── Secondary: soft blue ─────────────────────────────────────────────
        secondary:
          'bg-brand-blue/10 text-brand-blue border border-brand-blue/20 ' +
          'hover:bg-brand-blue/20 hover:border-brand-blue/30 ' +
          'focus-visible:ring-brand-blue/30',

        // ── Gradient outline: brand border ───────────────────────────────────
        'gradient-outline':
          'border-2 border-transparent border-solid ' +
          'bg-[linear-gradient(var(--card),var(--card))_padding-box,linear-gradient(90deg,#4285f4_0%,#33c483_100%)_border-box] ' +
          'text-brand-blue ' +
          'hover:opacity-90 hover:text-brand-green ' +
          'focus-visible:ring-brand-blue/30',

        // ── Outline: bordered ────────────────────────────────────────────────
        outline:
          'border border-border bg-card text-foreground ' +
          'hover:bg-accent hover:text-accent-foreground ' +
          'focus-visible:ring-brand-blue/30 focus-visible:border-brand-blue',

        // ── Ghost: no background ─────────────────────────────────────────────
        ghost:
          'text-muted-foreground ' +
          'hover:bg-accent hover:text-accent-foreground ' +
          'focus-visible:ring-brand-blue/30',

        // ── Link: text only ──────────────────────────────────────────────────
        link:
          'text-brand-blue underline-offset-4 hover:underline hover:text-brand-blue-hover ' +
          'focus-visible:ring-brand-blue/30',

        // ── Destructive: danger red ──────────────────────────────────────────
        // Stays a saturated red in both themes: a filled danger button reads
        // wrong as the light --destructive tone used for text/rings.
        destructive:
          'bg-red-500 text-white ' +
          'hover:bg-red-600 hover:shadow-md hover:shadow-red-500/25 ' +
          'focus-visible:ring-red-500/30',

        // ── Destructive outline: soft danger ─────────────────────────────────
        'destructive-outline':
          'border border-destructive/30 bg-card text-destructive ' +
          'hover:bg-destructive/10 hover:border-destructive/50 ' +
          'focus-visible:ring-destructive/30',
      },
      size: {
        sm: 'h-8  rounded-md  gap-1   px-3  text-xs  has-[>svg]:px-2.5',
        default: 'h-10 rounded-lg  gap-1.5 px-4',
        lg: 'h-11 rounded-lg  gap-1.5 px-6',
        xl: 'h-12 rounded-lg  gap-2   px-8  text-base',
        icon: 'size-9  rounded-lg',
        'icon-sm': 'size-8  rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant = 'default', size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
