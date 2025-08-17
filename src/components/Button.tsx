import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost_dark' | 'ghost_light' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild = false, ...props }, ref) => {
    const buttonClass = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2 rounded-full text-button font-medium transition-all duration-[var(--kds-duration-normal)] ease-[var(--kds-easing-standard)] focus:outline-none focus:ring-2 focus:ring-[var(--kds-focus-ring-color)] focus:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
      
      // Size variants
      {
        'h-8 px-3 text-[13px]': size === 'sm',
        'h-10 px-4': size === 'md',
        'h-12 px-5 text-base': size === 'lg',
      },
      
      // Style variants
      {
        'bg-[var(--kds-brand-primary)] text-[var(--kds-brand-primary-fg-on)] hover:bg-[rgba(163,255,18,0.9)] active:bg-[rgba(163,255,18,0.8)]': variant === 'primary',
        'bg-[var(--kds-color-white)] text-[var(--kds-color-black)] border border-[var(--kds-border-subtle-on-light)] hover:bg-[rgba(255,255,255,0.92)]': variant === 'secondary',
        'bg-transparent text-[var(--kds-text-on-dark)] border border-[rgba(255,255,255,0.28)] hover:bg-[rgba(255,255,255,0.06)]': variant === 'ghost_dark',
        'bg-transparent text-[var(--kds-text-on-light)] border border-[rgba(0,0,0,0.18)] hover:bg-[rgba(0,0,0,0.04)]': variant === 'ghost_light',
        'bg-transparent text-[var(--kds-text-on-dark)] border-none underline hover:no-underline px-0 h-auto': variant === 'link',
      },
      
      className
    );

    if (asChild) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn(buttonClass, (children as React.ReactElement).props.className),
        ref,
        ...props,
      });
    }

    return (
      <button
        className={buttonClass}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
