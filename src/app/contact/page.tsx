import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/Button';
import { LocalTime } from '@/components/LocalTime';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--kds-bg-base-dark)] relative overflow-hidden">
      {/* Navigation */}
      <Navigation variant="dark" />
      
      {/* Section */}
      <main className="min-h-screen flex items-center justify-center relative">
        {/* Background overlays for subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/60"></div>
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-gray-900 to-black"></div>

        {/* Content */}
        <div className="relative z-10 text-left px-4 md:px-8 max-w-6xl mx-auto w-full">
          <h1 className="text-display-2 text-[var(--kds-text-on-dark)] mb-6">
            Hello Visitor, it's <LocalTime />
            <br />
            in Abuja, I'm available
          </h1>

          <p className="text-body-md text-[var(--kds-text-muted-on-dark)] mb-12 max-w-2xl">
            Get in touch with me, I will be happy to tell you all details of the process.
          </p>

          {/* CTA */}
          <div className="mb-20">
            <Button variant="link" size="lg" className="text-lg" asChild>
              <a
                href={`mailto:Lizzyumoren7@gmail.com?subject=${encodeURIComponent('Quick call request')}&body=${encodeURIComponent('Hello Elizabeth,%0D%0A%0D%0AI would like to schedule a quick call to discuss my needs.%0D%0A%0D%0AThanks,%0D%0A[Your Name]')}`}
              >
                Apply for quick call
              </a>
            </Button>
          </div>

          {/* Footer contact strip */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-10 border-t border-[var(--kds-border-subtle-on-dark)]">
            <div className="text-left">
              <p className="text-body-sm text-[var(--kds-text-muted-on-dark)] mb-1">+1 (319) 321-3679</p>
            </div>

            <div className="text-center order-last md:order-none">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-6 h-6 text-[var(--kds-text-muted-on-dark)]">📷</div>
                <a
                  href="https://www.linkedin.com/in/elizabethumorenbusinessanalyst/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-6 h-6 text-[var(--kds-text-muted-on-dark)]"
                >
                  👤
                </a>
              </div>
              <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">Abuja, Nigeria</p>
            </div>

            <div className="text-right w-full md:w-auto">
              <p className="text-body-sm text-[var(--kds-text-on-dark)]">Lizzyumoren7@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
