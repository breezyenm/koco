import React from 'react';
import { PageFrame } from '@/components/PageFrame';

const serviceItems = [
  {
    title: "UPDATE SUBPAGES",
    category: "RESEARCH",
    place: "TOKYO",
    hasIcon: false
  },
  {
    title: "NEW FEATURES FOR DASHBOARD",
    category: "DEVELOPMENT",
    place: "BARCELONA",
    hasIcon: true
  },
  {
    title: "STARTING CAMPAIGN",
    category: "MARKETING STRATEGY",
    place: "MADRID",
    hasIcon: false
  }
];

const sidebarItems = [
  { label: "MADRID", count: null },
  { label: "BARCELONA", count: null },
  { label: "TOKYO", count: null },
  { label: "LOS ANGELES", count: null },
  { label: "PARIS", count: "05" },
  { label: "NEW YORK CITY", count: null },
  { label: "MUMBAI", count: null },
  { label: "ISTANBUL", count: null }
];

export default function ServicesPage() {
  return (
    <PageFrame variant="light" rootClassName="bg-[var(--kds-bg-base-light)]" mainClassName="grid lg:grid-cols-[1fr_300px] min-h-screen">
        {/* Main Content */}
        <div className="bg-[var(--kds-bg-base-light)] px-4 md:px-8 lg:px-16 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-body-sm text-[var(--kds-text-muted-on-light)] mb-12">
            <span>HOME PAGE</span>
            <span>|</span>
            <span>ARCHIVE PORTFOLIO</span>
            <span>|</span>
            <span>2023</span>
          </div>
          
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-[120px] md:text-[140px] lg:text-[160px] font-bold leading-none text-[var(--kds-text-on-light)] mb-8">
              SERVICE
            </h1>
          </div>
          
          {/* Services Table */}
          <div className="space-y-0">
            {/* Table Header */}
            <div className="grid grid-cols-[38%_24%_24%_14%] py-4 border-b border-[var(--kds-border-subtle-on-light)] text-overline text-[var(--kds-text-muted-on-light)]">
              <div>TITLE POSITION</div>
              <div>CATEGORIES</div>
              <div>PLACE</div>
              <div></div>
            </div>
            
            {/* Table Rows */}
            {serviceItems.map((item, index) => (
              <div key={index} className="grid grid-cols-[38%_24%_24%_14%] py-6 border-b border-[var(--kds-border-subtle-on-light)] items-center group hover:bg-[var(--kds-color-gray-50)] transition-colors">
                <div>
                  <h3 className="text-h4 text-[var(--kds-text-on-light)] mb-1 group-hover:text-[var(--kds-brand-primary)] transition-colors">
                    {item.title}
                  </h3>
                  {item.title === "NEW FEATURES FOR DASHBOARD" && (
                    <p className="text-body-sm text-[var(--kds-text-muted-on-light)]">
                      CREATING NEW MAIN MODULES WITH UPDATING THE SYSTEM TO THE LATEST VERSION ALONG WITH A PROMOTIONAL CAMPAIGN IN SOCIAL MEDIA — CREATING A VISION AND IMPLEMENTING NEW STANDARDS FOR SYSTEM DESIGN.
                    </p>
                  )}
                </div>
                <div className="text-body-sm text-[var(--kds-text-muted-on-light)]">
                  {item.category}
                </div>
                <div className="text-body-sm text-[var(--kds-text-muted-on-light)]">
                  {item.place}
                </div>
                <div className="flex justify-end">
                  {item.hasIcon && (
                    <div className="w-5 h-5 text-[var(--kds-text-muted-on-light)]">
                      ↗
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Large Image Section */}
          <div className="mt-16">
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg overflow-hidden">
              {/* Placeholder for the dramatic landscape image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-black flex items-center justify-center">
                <div className="text-white/20 text-6xl">🏔️</div>
              </div>
            </div>
          </div>
          
          {/* Bottom Text */}
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-body-md text-[var(--kds-text-on-light)] leading-relaxed">
                CREATING NEW SOLUTIONS AND IMPLEMENTING SYSTEMS IN ONLINE BUSINESSES. TRANSFORMING IDEAS INTO A REAL PRODUCT TAILORED TO YOUR NEEDS AND GOALS. CHECK OUT THE NEW HIGHER LEVEL.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-h4 text-[var(--kds-text-on-light)] mb-2">ABOUT US</h4>
                <p className="text-body-sm text-[var(--kds-text-muted-on-light)]">ABOUT COMPANY</p>
                <p className="text-body-sm text-[var(--kds-text-muted-on-light)]">MISSION AND VALUES</p>
              </div>
              <div>
                <h4 className="text-h4 text-[var(--kds-text-on-light)] mb-2">PRODUCTS</h4>
                <p className="text-body-sm text-[var(--kds-text-muted-on-light)]">OVERVIEW</p>
                <p className="text-body-sm text-[var(--kds-text-muted-on-light)]">SERVICES OVERVIEW</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="bg-[var(--kds-bg-base-dark)] text-[var(--kds-text-on-dark)] p-8">
          {/* Sidebar Header */}
          <div className="mb-12">
            <div className="text-overline text-[var(--kds-text-muted-on-dark)] mb-8">PLACE</div>
          </div>
          
          {/* Location List */}
          <div className="space-y-6">
            {sidebarItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-[var(--kds-border-subtle-on-dark)]">
                <span className="text-body-sm text-[var(--kds-text-on-dark)]">
                  {item.label}
                </span>
                {item.count && (
                  <span className="text-body-sm text-[var(--kds-text-muted-on-dark)]">
                    {item.count}
                  </span>
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-[var(--kds-border-subtle-on-dark)]">
            <div className="space-y-4">
              <div>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">PRODUCTS</p>
              </div>
              <div>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">OVERVIEW</p>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">SERVICES OVERVIEW</p>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">DASHBOARD</p>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">SOLUTION</p>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">CHANGELOG</p>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">PRICING</p>
                <p className="text-body-sm text-[var(--kds-text-muted-on-dark)]">CASE STUDIES</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[var(--kds-border-subtle-on-dark)]">
              <div className="flex justify-between text-body-sm">
                <span className="text-[var(--kds-text-muted-on-dark)]">SYSTEM DASHBOARD</span>
                <span className="text-[var(--kds-text-muted-on-dark)]">MOBILE VERSION</span>
              </div>
            </div>
          </div>
        </aside>
      </PageFrame>
  );
}
