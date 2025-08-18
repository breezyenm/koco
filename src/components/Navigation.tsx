'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  variant?: 'dark' | 'light';
}

const Navigation: React.FC<NavigationProps> = ({ variant = 'dark' }) => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const textOnBg = variant === 'dark' ? 'text-[var(--kds-text-on-dark)]' : 'text-[var(--kds-text-on-light)]';
  const borderOnBg = variant === 'dark' ? 'border-[var(--kds-border-subtle-on-dark)]' : 'border-[var(--kds-border-subtle-on-light)]';
  
  const drawerHeaderTint = variant === 'dark' ? 'bg-[rgba(0,0,0,0.45)]' : 'bg-[rgba(255,255,255,0.65)]';
  const panelGlassTint = variant === 'dark' ? 'bg-[rgba(15,15,15,0.55)]' : 'bg-[rgba(255,255,255,0.7)]';

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 h-[72px] backdrop-blur-sm nav-shell'
    )}>
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto w-full">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          {/* Mobile: icon */}
          <img
            src="/k-icon.png"
            alt="Elizabeth Umoren logo icon"
            className={cn('block md:hidden h-10 w-auto', variant === 'light' && 'invert')}
          />
          {/* Tablet/Desktop: full logo */}
          <img
            src="/k-logo.png"
            alt="Elizabeth Umoren logo"
            className={cn('hidden md:block h-12 w-auto', variant === 'light' && 'invert')}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-body-md font-medium transition-colors duration-[var(--kds-duration-normal)] relative group',
                variant === 'dark' 
                  ? 'text-[rgba(255,255,255,0.86)] hover:text-[var(--kds-text-on-dark)]' 
                  : 'text-[rgba(0,0,0,0.86)] hover:text-[var(--kds-text-on-light)]',
                pathname === link.href && 'after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-[var(--kds-brand-primary)] after:rounded-sm'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button 
            variant={variant === 'dark' ? 'ghost_dark' : 'ghost_light'} 
            size="sm"
            asChild
          >
            <Link href="/contact">
              Say Hello →
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button (placeholder) */}
        <button
          className="lg:hidden p-2"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className={cn(
            'w-6 h-0.5 mb-1 transition-colors',
            variant === 'dark' ? 'bg-[var(--kds-text-on-dark)]' : 'bg-[var(--kds-text-on-light)]'
          )}></div>
          <div className={cn(
            'w-6 h-0.5 mb-1 transition-colors',
            variant === 'dark' ? 'bg-[var(--kds-text-on-dark)]' : 'bg-[var(--kds-text-on-light)]'
          )}></div>
          <div className={cn(
            'w-6 h-0.5 transition-colors',
            variant === 'dark' ? 'bg-[var(--kds-text-on-dark)]' : 'bg-[var(--kds-text-on-light)]'
          )}></div>
        </button>
      </div>

      {/* Mobile/Tablet Drawer via Portal */}
      {isMounted && createPortal(
        (
          <div
            id="mobile-drawer"
            className={cn(
              'lg:hidden fixed inset-0 z-[9999] transition-opacity duration-200',
              isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
            aria-hidden={!isOpen}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40 z-0"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <div
              className={cn(
                'absolute top-0 right-0 h-full w-[88%] max-w-sm shadow-xl transition-transform duration-200 ease-[var(--kds-easing-standard)] z-10 backdrop-blur-sm',
                panelGlassTint,
                isOpen ? 'translate-x-0' : 'translate-x-full'
              )}
              role="dialog"
              aria-modal="true"
            >
              <div className={cn('flex items-center justify-between h-[72px] px-4 sm:px-6 border-b backdrop-blur-sm', drawerHeaderTint, borderOnBg)}>
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)} aria-label="Home">
                  <img
                    src="/k-icon.png"
                    alt="Elizabeth Umoren logo icon"
                    className={cn('h-10 w-auto', variant === 'light' && 'invert')}
                  />
                </Link>
                <button
                  className={cn('p-2 rounded-full border', borderOnBg)}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <span className={cn('block w-4 h-4 relative', textOnBg)}>
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 rotate-45 bg-current"></span>
                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 -rotate-45 bg-current"></span>
                  </span>
                </button>
              </div>

              <div className="px-6 py-6">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-body-lg font-medium px-2 py-2 rounded-md',
                        textOnBg,
                        pathname === link.href && 'bg-[rgba(163,255,18,0.12)]'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className={cn('mt-6 pt-6 border-t', borderOnBg)}>
                  <Button
                    variant={variant === 'dark' ? 'ghost_dark' : 'ghost_light'}
                    size="md"
                    asChild
                    className="w-full"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Say Hello →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ),
        document.body
      )}
    </nav>
  );
};

export { Navigation };
