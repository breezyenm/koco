import { PageFrame } from '@/components/PageFrame';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <PageFrame
      variant="dark"
      rootClassName="relative min-h-screen bg-[var(--kds-bg-base-dark)]"
      mainClassName="relative z-10"
    >
      {/* Hero Section with local background */}
      <section className="relative min-h-[88vh] flex items-center">
        {/* Background Portrait */}
        <div
          className="absolute inset-0 bg-bottom sm:bg-right md:bg-right-bottom bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/koco.png')" }}
          aria-hidden
        />
        {/* Darkening overlay to ensure readable text */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Accent green rectangle overlay over the right eye region */}
        <div className="pointer-events-none absolute right-[16%] top-[22%] h-48 w-24 sm:h-56 sm:w-28 md:h-64 md:w-32 bg-[var(--kds-color-accent-green-overlay)] mix-blend-overlay" />

        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-[780px]">
            <h1 className="font-extrabold tracking-tight text-[var(--kds-text-on-dark)] leading-[0.9]" style={{ fontSize: 'clamp(48px,8.5vw,112px)' }}>
              Elizabeth
              <br />
              Umoren
            </h1>
            <p className="mt-6 max-w-xl text-body-md text-[var(--kds-text-muted-on-dark)]">
              Hello, my name is Elizabeth Umoren. Nice to meet you — welcome to my personal portfolio.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border border-[var(--kds-border-subtle-on-dark)] flex items-start justify-center p-1">
          <span className="w-[3px] h-2 rounded-full bg-[var(--kds-text-on-dark)] animate-bounce" />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="text-overline text-[var(--kds-text-muted-on-dark)] mb-3">Products</p>
            <h2 className="text-h2 text-[var(--kds-text-on-dark)] mb-3">Solutions I ship</h2>
            <p className="text-body-md text-[var(--kds-text-muted-on-dark)]">Hand‑crafted tools and templates that accelerate analysis, delivery, and stakeholder alignment.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Discovery Kit', desc: 'Interview scripts, workshop boards, and prioritization matrices for crisp scoping.', price: '$19' },
              { title: 'Requirements Template', desc: 'Structured BRD/PRD with ready‑to‑use acceptance criteria and traceability.', price: '$9' },
              { title: 'JIRA Workflow Pack', desc: 'Issue types, states, and dashboards configured for cross‑team visibility.', price: '$12' },
              { title: 'UAT Playbook', desc: 'Test plan templates, sign‑off sheets, and defect triage guide.', price: '$15' },
              { title: 'Stakeholder Map', desc: 'RACI mapper with impact/interest analysis to de‑risk delivery.', price: '$7' },
              { title: 'SQL Snippets', desc: 'Reusable queries for product analytics and KPI reporting.', price: '$5' },
            ].map((p, i) => (
              <div key={i} className="group rounded-[var(--kds-radius-xl)] bg-[var(--kds-bg-surface-dark)]/70 border border-[var(--kds-border-subtle-on-dark)] p-6 hover:bg-[rgba(255,255,255,0.03)] transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-h4 text-[var(--kds-text-on-dark)]">{p.title}</h3>
                  <span className="text-body-sm text-[var(--kds-text-muted-on-dark)]">{p.price}</span>
                </div>
                <p className="mt-3 text-body-md text-[var(--kds-text-muted-on-dark)]">{p.desc}</p>
                <div className="mt-6">
                  <Button variant="ghost_dark" size="sm" asChild>
                    <Link href="#">Learn more</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-overline text-[var(--kds-text-muted-on-dark)]">Testimonials</p>
            <h2 className="mt-2 text-h1 text-[var(--kds-text-on-dark)]">Results that speak</h2>
            <p className="mt-3 text-body-md text-[var(--kds-text-muted-on-dark)]">A few kind words from teams I have partnered with.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large left card */}
            <div className="rounded-[var(--kds-radius-2xl)] bg-[var(--kds-color-white)]/5 border border-[var(--kds-border-subtle-on-dark)] p-8 shadow-[var(--kds-shadow-soft-surface-drop)]">
              <div className="text-[var(--kds-brand-primary)] text-h3">8x</div>
              <h3 className="mt-1 text-body-md font-semibold text-[var(--kds-text-on-dark)]">Increase in conversion rate</h3>
              <blockquote className="mt-6 text-body-md text-[var(--kds-text-muted-on-dark)]">
                “We needed a modern, high‑converting flow. Elizabeth guided discovery, aligned stakeholders, and delivered changes that lifted conversion by 800% in two weeks.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[var(--kds-color-white)]/20" />
                <div>
                  <p className="text-body-sm text-[var(--kds-text-on-dark)]">David Callahan</p>
                  <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">Marketing Director, Spotify</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Top right card */}
              <div className="rounded-[var(--kds-radius-2xl)] bg-[var(--kds-color-white)]/5 border border-[var(--kds-border-subtle-on-dark)] p-6">
                <div className="text-[var(--kds-brand-primary)] font-semibold">2x <span className="text-[var(--kds-text-on-dark)]">Increase in lead generation</span></div>
                <blockquote className="mt-4 text-body-md text-[var(--kds-text-muted-on-dark)]">
                  “From branding to UX, every detail was handled meticulously. The team moved faster and results were phenomenal.”
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-[var(--kds-color-white)]/20" />
                  <div>
                    <p className="text-body-sm text-[var(--kds-text-on-dark)]">Sarah Mitchel</p>
                    <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">Marketing Director, Google</p>
                  </div>
                </div>
              </div>

              {/* Bottom cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-[var(--kds-radius-2xl)] bg-[var(--kds-color-white)]/5 border border-[var(--kds-border-subtle-on-dark)] p-6">
                  <blockquote className="text-body-md text-[var(--kds-text-muted-on-dark)]">
                    “Their animation work took our product videos to the next level. Clear process, great storytelling.”
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-[var(--kds-color-white)]/20" />
                    <div>
                      <p className="text-body-sm text-[var(--kds-text-on-dark)]">Tom Becker</p>
                      <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">Founder, PulseCore</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[var(--kds-radius-2xl)] bg-[var(--kds-bg-surface-dark)] border border-[var(--kds-border-subtle-on-dark)] p-6">
                  <blockquote className="text-body-md text-[var(--kds-text-on-dark)]">
                    “They nailed our MVP design with a fast turnaround and incredible attention to detail. Polished and professional.”
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-[var(--kds-color-white)]/20" />
                    <div>
                      <p className="text-body-sm text-[var(--kds-text-on-dark)]">Sarah Mitchel</p>
                      <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">Marketing Director, Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-[var(--kds-text-muted-on-dark)] text-body-sm">
            <div>1500+ satisfied clients love our services</div>
            <div className="flex items-center gap-2">★★★★★ <span className="opacity-80">4.9</span></div>
            <div>Based on 1.5k reviews</div>
          </div>
        </div>
      </section>

      {/* Newsletter + Footer fused */}
      <section className="py-16 md:py-24 border-t border-[var(--kds-border-subtle-on-dark)]">
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