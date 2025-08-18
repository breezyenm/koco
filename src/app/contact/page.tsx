import React from 'react';
import { PageFrame } from '@/components/PageFrame';
import { Button } from '@/components/Button';

export default function ContactPage() {
  const subject = 'Contact inquiry';
  const body = [
    'Hello Elizabeth,',
    '',
    'I would like to get in touch regarding...',
    '',
    'Thanks,',
    '[Your Name]',
  ].join('\n');

  return (
    <PageFrame
      variant="dark"
      rootClassName="min-h-screen bg-[var(--kds-bg-base-dark)] relative"
      mainClassName="relative"
    >
      <section className="max-w-6xl mx-auto w-full px-4 md:px-8 py-[var(--kds-spacing-section-y-mobile)] md:py-[var(--kds-spacing-section-y-desktop)]">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left: Title + Form */}
          <div className="md:col-span-7">
            <h1 className="text-hero-serif text-[var(--kds-text-on-dark)] mb-4">Contact Us</h1>
            <p className="text-body-sm text-[var(--kds-text-muted-on-dark)] mb-12 max-w-md">
              Please feel free to contact us and we will get back to you as soon as we can.
            </p>

            <form className="max-w-xl">
              {/* Name */}
              <label className="block text-body-sm text-[var(--kds-text-muted-on-dark)] mb-2" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full bg-transparent text-[var(--kds-text-on-dark)] placeholder:text-[var(--kds-text-muted-on-dark)] h-10 border-b border-[var(--kds-border-subtle-on-dark)] focus:outline-none focus:border-[var(--kds-brand-primary)] mb-6"
                autoComplete="name"
              />

              {/* Email */}
              <label className="block text-body-sm text-[var(--kds-text-muted-on-dark)] mb-2" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full bg-transparent text-[var(--kds-text-on-dark)] placeholder:text-[var(--kds-text-muted-on-dark)] h-10 border-b border-[var(--kds-border-subtle-on-dark)] focus:outline-none focus:border-[var(--kds-brand-primary)] mb-6"
                autoComplete="email"
              />

              {/* Message */}
              <label className="block text-body-sm text-[var(--kds-text-muted-on-dark)] mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-transparent text-[var(--kds-text-on-dark)] placeholder:text-[var(--kds-text-muted-on-dark)] min-h-[140px] border-b border-[var(--kds-border-subtle-on-dark)] focus:outline-none focus:border-[var(--kds-brand-primary)] mb-6 resize-y"
              />

              <Button
                variant="ghost_dark"
                size="md"
                className="w-full md:w-auto bg-[rgba(255,255,255,0.08)] border-none px-8"
                asChild
              >
                <a href={`mailto:Lizzyumoren7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
                  Send
                </a>
              </Button>
            </form>
          </div>

          {/* Right: Details */}
          <div className="md:col-span-5">
            <div className="space-y-10">
              <div>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)] mb-2">Visit us</p>
                <p className="text-body-sm text-[var(--kds-text-on-dark)]">
                  506 E. College Street<br />
                  Iowa City, IA 52240
                </p>
              </div>

              <div>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)] mb-2">Talk to us</p>
                <p className="text-body-sm text-[var(--kds-text-on-dark)]">+1 (319) 321-3679</p>
                <p className="text-body-sm text-[var(--kds-text-on-dark)]">Lizzyumoren7@gmail.com</p>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-4 text-[var(--kds-text-muted-on-dark)]">
                  <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter">✖️</a>
                  <a href="https://www.linkedin.com/in/elizabethumorenbusinessanalyst/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a>
                  <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble">⦿</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
