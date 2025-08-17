import React from 'react';
import { Navigation } from '@/components/Navigation';
import { cn } from '@/lib/utils';

interface PageFrameProps {
  variant?: 'dark' | 'light';
  /** Add top padding equal to fixed nav height (72px). Defaults to true. */
  offsetTop?: boolean;
  /** Classes for the outer wrapper div (backgrounds, layout, etc.) */
  rootClassName?: string;
  /** Classes for the main element */
  mainClassName?: string;
  /** Optional background layer rendered outside the padded main (use absolute children here). */
  background?: React.ReactNode;
  children: React.ReactNode;
}

export function PageFrame({
  variant = 'dark',
  offsetTop = true,
  rootClassName,
  mainClassName,
  background,
  children,
}: PageFrameProps) {
  return (
    <div className={cn('min-h-screen', rootClassName)}>
      <Navigation variant={variant} />
      {background}
      <main className={cn(offsetTop && 'pt-[72px]', mainClassName)}>
        {children}
      </main>
    </div>
  );
}


