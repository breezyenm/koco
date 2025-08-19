import React from 'react';
import { PageFrame } from '@/components/PageFrame';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <PageFrame variant="light" rootClassName="bg-[var(--kds-bg-base-light)]" mainClassName="">
      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Biography */}
          <div className="space-y-8">
            <div>
              <p className="text-overline text-[var(--kds-text-muted-on-light)] mb-4">ABOUT</p>
              <h1 className="text-h1 text-[var(--kds-text-on-light)]">Elizabeth Umoren, CBAP</h1>
              <p className="mt-4 text-body-lg text-[var(--kds-text-muted-on-light)]">Business and Data Analyst • Educator • Founder of Analyst Community</p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-h3 text-[var(--kds-text-on-light)]">Professional Journey</h2>
                <p className="mt-2 text-body-md text-[var(--kds-text-muted-on-light)] max-w-2xl">
                  I translate complex business requirements into actionable solutions and deliver data‑driven insights that drive measurable organizational growth across engagements in Nigeria, the United States, and Canada.
                </p>
              </div>

              <div>
                <h3 className="text-h4 text-[var(--kds-text-on-light)]">Impact highlights</h3>
                <ul className="mt-2 grid sm:grid-cols-3 gap-3 text-body-md text-[var(--kds-text-on-light)]">
                  <li className="rounded-[var(--kds-radius-lg)] border border-[var(--kds-border-subtle-on-light)] p-4 bg-[var(--kds-color-white)]">
                    <div className="text-2xl">📈</div>
                    <div className="mt-1 font-semibold">25% sales growth</div>
                    <p className="text-body-sm text-[var(--kds-text-muted-on-light)]">via process optimization</p>
                  </li>
                  <li className="rounded-[var(--kds-radius-lg)] border border-[var(--kds-border-subtle-on-light)] p-4 bg-[var(--kds-color-white)]">
                    <div className="text-2xl">💸</div>
                    <div className="mt-1 font-semibold">20% cost reduction</div>
                    <p className="text-body-sm text-[var(--kds-text-muted-on-light)]">through deep analysis</p>
                  </li>
                  <li className="rounded-[var(--kds-radius-lg)] border border-[var(--kds-border-subtle-on-light)] p-4 bg-[var(--kds-color-white)]">
                    <div className="text-2xl">🎯</div>
                    <div className="mt-1 font-semibold">30% better decisions</div>
                    <p className="text-body-sm text-[var(--kds-text-muted-on-light)]">with improved reporting</p>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-[var(--kds-radius-xl)] bg-[var(--kds-color-gray-100)] p-6 border border-[var(--kds-border-subtle-on-light)]">
                  <h3 className="text-h4 text-[var(--kds-text-on-light)]">Business Analysis</h3>
                  <ul className="mt-3 space-y-2 text-body-md text-[var(--kds-text-muted-on-light)]">
                    <li>📝 Requirements gathering & documentation</li>
                    <li>🗺️ Process mapping & optimization</li>
                    <li>👥 User stories & stakeholder management</li>
                    <li>📐 UML design & implementation</li>
                    <li>⚡ Agile/Scrum delivery</li>
                    <li>🛡️ Risk management</li>
                    <li>✅ UAT coordination</li>
                  </ul>
                </div>
                <div className="rounded-[var(--kds-radius-xl)] bg-[var(--kds-color-gray-100)] p-6 border border-[var(--kds-border-subtle-on-light)]">
                  <h3 className="text-h4 text-[var(--kds-text-on-light)]">Data & BI</h3>
                  <ul className="mt-3 space-y-2 text-body-md text-[var(--kds-text-muted-on-light)]">
                    <li>📊 Power BI, Tableau, SQL</li>
                    <li>📈 SPSS & Python for statistics</li>
                    <li>🧮 Advanced Excel automation</li>
                    <li>🌐 Google Analytics & Colab</li>
                    <li>🔮 Predictive modeling</li>
                    <li>📉 BI dashboard development</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-h4 text-[var(--kds-text-on-light)]">Mission: Bridging the Technology Gap</h3>
                <p className="mt-2 text-body-md text-[var(--kds-text-muted-on-light)] max-w-3xl">
                  Through Analyst Community, I empower aspiring analysts with mentorship, global insights, and access to cutting‑edge tools.
                </p>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-body-md text-[var(--kds-text-muted-on-light)]">
                  <li>🚀 Career development & personal branding</li>
                  <li>🌍 International application guidance</li>
                  <li>📚 Continuous learning culture</li>
                  <li>🤝 Professional mentorship</li>
                </ul>
              </div>

              <div>
                <h3 className="text-h4 text-[var(--kds-text-on-light)]">Leadership & Vision</h3>
                <p className="mt-2 text-body-md text-[var(--kds-text-muted-on-light)] max-w-3xl">
                  I mentor analysts to compete globally while creating local impact — building a premier hub for analytical excellence.
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-1 text-body-md text-[var(--kds-text-muted-on-light)] max-w-2xl">
                  <li>Future‑ready skills</li>
                  <li>Global career readiness</li>
                  <li>Professional excellence</li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="md" asChild>
                  <Link href="/contact">Let’s work together</Link>
                </Button>
                <Button variant="ghost_light" size="md" asChild>
                  <Link href="https://www.linkedin.com/in/elizabethumorenbusinessanalyst/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Visual placeholder */}
          <div className="hidden lg:block">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-[var(--kds-color-gray-100)] to-[var(--kds-color-gray-200)] rounded-[var(--kds-radius-lg)] overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-6 gap-2 p-6 opacity-30">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-[var(--kds-text-muted-on-light)] rounded-sm opacity-20" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <div className="rounded-full bg-[var(--kds-color-white)]/80 text-[var(--kds-text-on-light)] px-4 py-2 text-body-sm">Add portrait or brand illustration</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter + Footer (light theme) */}
        <section className="mt-20 pt-16 md:pt-24 border-t border-[var(--kds-border-subtle-on-light)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Newsletter */}
              <div>
                <h3 className="text-h3 text-[var(--kds-text-on-light)]">Sign up for updates</h3>
                <p className="mt-2 text-body-md text-[var(--kds-text-muted-on-light)]">Get new articles, templates, and product drops straight to your inbox.</p>
                <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="flex-1 h-12 rounded-full px-5 bg-[rgba(0,0,0,0.03)] text-[var(--kds-text-on-light)] placeholder:text-[rgba(0,0,0,0.45)] border border-[var(--kds-border-subtle-on-light)] focus:outline-none focus:ring-2 focus:ring-[var(--kds-focus-ring-color)]"
                  />
                  <Button type="submit" variant="primary" size="lg">Subscribe</Button>
                </form>
                <p className="mt-2 text-body-sm text-[var(--kds-text-muted-on-light)]">No spam. Unsubscribe anytime.</p>
              </div>

              {/* Footer links */}
              <div className="lg:justify-self-end">
                <div className="flex flex-wrap gap-4 text-body-md">
                  <Link href="/about" className="text-[var(--kds-text-muted-on-light)] hover:text-[var(--kds-text-on-light)]">About</Link>
                  <Link href="/services" className="text-[var(--kds-text-muted-on-light)] hover:text-[var(--kds-text-on-light)]">Services</Link>
                  <Link href="/contact" className="text-[var(--kds-text-muted-on-light)] hover:text-[var(--kds-text-on-light)]">Contact</Link>
                  <Link href="#products" className="text-[var(--kds-text-muted-on-light)] hover:text-[var(--kds-text-on-light)]">Products</Link>
                </div>
                <div className="mt-6 text-body-sm text-[var(--kds-text-muted-on-light)]">© {new Date().getFullYear()} Elizabeth Umoren. All rights reserved.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
