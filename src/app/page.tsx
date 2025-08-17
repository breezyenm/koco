import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--kds-bg-base-dark)]">
      {/* Top Navigation */}
      <Navigation variant="dark" />

      {/* Background Image (replace '/hero.jpg' with your provided asset in `public/`) */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        aria-hidden
      />

      {/* Darkening overlay to ensure readable text */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Accent green rectangle overlay */}
      <div className="pointer-events-none absolute right-[12%] top-[26%] h-48 w-24 sm:h-56 sm:w-28 md:h-64 md:w-32 bg-[var(--kds-color-accent-green-overlay)] mix-blend-overlay" />

      {/* Hero Content */}
      <main className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
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
      </main>
    </div>
  );
}