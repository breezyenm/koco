"use client";

import React, { useState } from 'react';
import { PageFrame } from '@/components/PageFrame';
import { Button } from '@/components/Button';
import Link from 'next/link';

type ServiceItem = {
  title: string;
  category: string;
  description?: string | null;
};

const serviceItems: ServiceItem[] = [
  // 1. Career Documents & Personal Branding
  { title: 'Expert CV & Resume Writing', category: 'Career Documents & Personal Branding', description: 'Role‑specific, metrics‑driven resumes that highlight impact and align with job requirements. Fully ATS‑optimized with the right keywords and clean structure.' },
  { title: 'Cover Letter Mastery', category: 'Career Documents & Personal Branding', description: 'Compelling, tailored letters using problem‑solution‑outcome framing. Reusable templates plus guidance to adapt quickly per application.' },
  { title: 'Free CV / ATS-Friendly Templates', category: 'Career Documents & Personal Branding', description: 'Recruiter‑tested, clean templates that parse reliably in ATS and emphasize clarity, readability, and global standards.' },
  { title: 'LinkedIn Profile Optimization', category: 'Career Documents & Personal Branding', description: 'Keyword‑rich headline and About, achievement‑focused experience, and featured work to increase recruiter visibility and profile conversions.' },
  { title: 'Website & Portfolio Building', category: 'Career Documents & Personal Branding', description: 'Modern, fast portfolio sites that showcase case studies, outcomes, and toolkits—built for credibility and easy sharing.' },
  // 2. Global Application Guidance
  { title: 'International CV Formatting Guidance', category: 'Global Application Guidance', description: 'Country‑specific norms (length, photo, sections, tone) with examples—so your CV fits the market you’re applying to.' },
  { title: 'Job Application Guidance', category: 'Global Application Guidance', description: 'End‑to‑end strategy—JD analysis, tailoring, STAR responses, tracking, and smart follow‑ups to boost response rates.' },
  // 3. Learning & Career Growth
  { title: 'eLearning Resources & Certifications', category: 'Learning & Career Growth', description: 'Curated courses and certs mapped to your target role, with focused study paths and hands‑on practice.' },
  { title: 'Explore Diverse Tech Roles', category: 'Learning & Career Growth', description: 'Clear role maps, skills matrices, and entry paths across BA, PM, QA, Data, and UX—so you pick and plan with confidence.' },
  // 4. Community & Support
  { title: 'Community Support & Networking', category: 'Community & Support', description: 'Access to peer support, events, and accountability channels—plus mock sessions and feedback to stay consistent.' },
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number, hasDescription: boolean) => {
    if (!hasDescription) return;
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <PageFrame
      variant="light"
      rootClassName="bg-[var(--kds-bg-base-light)]"
      mainClassName="min-h-screen"
    >
      {/* Main Content */}
      <div className="bg-[var(--kds-bg-base-light)] px-4 md:px-8 lg:px-16 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-body-sm text-[var(--kds-text-muted-on-light)] mb-12">
          <span>HOME PAGE</span>
          <span>|</span>
          <span>SERVICES</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1
            className="font-extrabold tracking-tight text-[var(--kds-text-on-light)] leading-[0.9] mb-8"
            style={{ fontSize: 'clamp(48px,8.5vw,112px)' }}
          >
            SERVICE
          </h1>
        </div>

        {/* Services - responsive */}
        <div className="space-y-0">
          {/* Table view (md and up) */}
          <div className="hidden md:block">
            {/* Table Header */}
            <div className="grid grid-cols-[70%_30%] py-4 border-b border-[var(--kds-border-subtle-on-light)] text-overline text-[var(--kds-text-muted-on-light)]">
              <div>TITLE</div>
              <div>CATEGORIES</div>
            </div>
            {/* Table Rows */}
            {serviceItems.map((item, index) => {
              const isOpen = openIndex === index;
              const hasDescription = Boolean(item.description && item.description.trim().length > 0);
              return (
                <div key={index} className="border-b border-[var(--kds-border-subtle-on-light)]">
                  <button
                    className="w-full grid grid-cols-[70%_30%] py-6 items-start text-left group hover:bg-[var(--kds-color-gray-50)] transition-colors"
                    aria-expanded={isOpen}
                    onClick={() => toggleOpen(index, hasDescription)}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-h4 text-[var(--kds-text-on-light)] group-hover:text-[var(--kds-brand-primary)] transition-colors">
                          {item.title}
                        </h3>
                        {hasDescription && (
                          <span className="text-body-sm text-[var(--kds-text-muted-on-light)]">{isOpen ? '−' : '+'}</span>
                        )}
                      </div>
                      {hasDescription && isOpen && (
                        <p className="mt-2 text-body-sm text-[var(--kds-text-muted-on-light)]">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="text-body-sm text-[var(--kds-text-muted-on-light)] pt-1">
                      {item.category}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Tile view (small screens) */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {serviceItems.map((item, index) => {
              const isOpen = openIndex === index;
              const hasDescription = Boolean(item.description && item.description.trim().length > 0);
              return (
                <button
                  key={index}
                  className="w-full text-left rounded-[var(--kds-radius-xl)] border border-[var(--kds-border-subtle-on-light)] p-4 hover:bg-[var(--kds-color-gray-50)] transition-colors"
                  aria-expanded={isOpen}
                  onClick={() => toggleOpen(index, hasDescription)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-h4 text-[var(--kds-text-on-light)]">
                      {item.title}
                    </h3>
                    {hasDescription && (
                      <span className="text-body-sm text-[var(--kds-text-muted-on-light)]">{isOpen ? '−' : '+'}</span>
                    )}
                  </div>
                  <div className="mt-1 text-body-sm text-[var(--kds-text-muted-on-light)]">
                    {item.category}
                  </div>
                  {hasDescription && isOpen && (
                    <p className="mt-2 text-body-sm text-[var(--kds-text-muted-on-light)]">
                      {item.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer (reused from Home) */}
      <section className="py-16 md:py-24 border-t border-[var(--kds-border-subtle-on-dark)] bg-[var(--kds-bg-base-dark)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter */}
            <div>
              <h3 className="text-h3 text-[var(--kds-text-on-dark)]">Sign up for updates</h3>
              <p className="mt-2 text-body-md text-[var(--kds-text-muted-on-dark)]">Get new articles, templates, and product drops straight to your inbox.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 h-12 rounded-full px-5 bg-[rgba(255,255,255,0.06)] text-[var(--kds-text-on-dark)] placeholder:text-[rgba(255,255,255,0.55)] border border-[var(--kds-border-subtle-on-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--kds-focus-ring-color)]"
                />
                <Button type="submit" variant="primary" size="lg">Subscribe</Button>
              </form>
              <p className="mt-2 text-body-sm text-[var(--kds-text-muted-on-dark)]">No spam. Unsubscribe anytime.</p>
            </div>

            {/* Footer links */}
            <div className="lg:justify-self-end">
              <div className="flex flex-wrap gap-4 text-body-md">
                <Link href="/about" className="text-[var(--kds-text-muted-on-dark)] hover:text-[var(--kds-text-on-dark)]">About</Link>
                <Link href="/services" className="text-[var(--kds-text-muted-on-dark)] hover:text-[var(--kds-text-on-dark)]">Services</Link>
                <Link href="/contact" className="text-[var(--kds-text-muted-on-dark)] hover:text-[var(--kds-text-on-dark)]">Contact</Link>
                <Link href="#products" className="text-[var(--kds-text-muted-on-dark)] hover:text-[var(--kds-text-on-dark)]">Products</Link>
              </div>
              <div className="mt-6 text-body-sm text-[var(--kds-text-muted-on-dark)]">© {new Date().getFullYear()} Elizabeth Umoren. All rights reserved.</div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
