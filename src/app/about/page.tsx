import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--kds-bg-base-light)]">
      {/* Navigation */}
      <Navigation variant="light" />
      
      {/* Hero Section */}
      <main className="pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <p className="text-overline text-[var(--kds-text-muted-on-light)] mb-4">
                  ABOUT ME
                </p>
                <h1 className="text-h1 text-[var(--kds-text-on-light)] mb-6">
                  I'm Elizabeth Umoren, <span className="font-normal">IT Business Analyst</span>
                </h1>
                <p className="text-body-lg text-[var(--kds-text-muted-on-light)] leading-relaxed max-w-lg">
                  I bridge business strategy and technical implementation to deliver data-driven solutions and measurable value. With 4+ years across North America, Canada, and Africa, I lead end-to-end analysis — from discovery and user stories to SDLC execution and UAT.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-h4 text-[var(--kds-text-on-light)] mb-2">Core strengths</h2>
                  <ul className="list-disc pl-5 space-y-2 text-body-md text-[var(--kds-text-muted-on-light)] max-w-xl">
                    <li>Strategic vision paired with tactical delivery; incisive questioning to uncover true needs</li>
                    <li>JIRA, Confluence, and Visio for clear documentation and stakeholder alignment</li>
                    <li>Translating requirements into scalable IT solutions across agile and waterfall</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-h4 text-[var(--kds-text-on-light)] mb-2">Technical skills</h2>
                  <ul className="list-disc pl-5 space-y-2 text-body-md text-[var(--kds-text-muted-on-light)] max-w-xl">
                    <li>Microsoft SQL Server, SAP modules, CRM integration</li>
                    <li>Power BI and Tableau dashboards</li>
                    <li>Data conversion and enterprise architecture alignment</li>
                    <li>SQL-driven analytics and performance optimization</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-h4 text-[var(--kds-text-on-light)] mb-2">Current focus</h2>
                  <p className="text-body-md text-[var(--kds-text-muted-on-light)] max-w-xl">
                    Seeking mid-to-senior Business Analyst roles in digital transformation, cloud implementation, CRM integration, and analytics. I actively upskill with certifications in Business Analysis, Project Management, and AI tools.
                  </p>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="md" asChild>
                  <Link href="/contact">Contact me</Link>
                </Button>
                <Button variant="ghost_light" size="md" asChild>
                  <Link href="#">View resume</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="relative">
              {/* Geometric background shape */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[var(--kds-color-gray-100)] to-[var(--kds-color-gray-200)] rounded-[var(--kds-radius-lg)] p-8">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-[0.9] rounded-[var(--kds-radius-lg)]">
                  {/* Create a subtle pattern using CSS */}
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-[var(--kds-radius-lg)]"></div>
                  
                  {/* Grid pattern */}
                  <div className="absolute inset-4 grid grid-cols-6 gap-2 opacity-30">
                    {Array.from({length: 24}).map((_, i) => (
                      <div 
                        key={i} 
                        className="aspect-square bg-[var(--kds-text-muted-on-light)] rounded-sm opacity-20"
                        style={{
                          animationDelay: `${i * 100}ms`,
                          animation: 'pulse 3s ease-in-out infinite'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Keep Scroll indicator */}
          <div className="flex items-center justify-between pt-16 border-t border-[var(--kds-border-subtle-on-light)] mt-16">
            <div className="flex items-center gap-2 text-[var(--kds-text-muted-on-light)]">
              <span className="text-body-sm">✗</span>
              <span className="text-body-sm">Keep Scroll</span>
            </div>
            
            <div className="text-body-sm text-[var(--kds-text-muted-on-light)]">
              Can follow me on
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <div className="w-6 h-6 text-[var(--kds-text-muted-on-light)]">📘</div>
              <div className="w-6 h-6 text-[var(--kds-text-muted-on-light)]">📷</div>
              <a
                href="https://www.linkedin.com/in/elizabethumorenbusinessanalyst/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 text-[var(--kds-text-muted-on-light)]"
              >
                💼
              </a>
              <div className="w-6 h-6 text-[var(--kds-text-muted-on-light)]">🐙</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
