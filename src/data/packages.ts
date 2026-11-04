export interface GrantPackage {
  id: string;
  name: string;
  badge: string;
  marketValue: string;
  timeline: string;
  summary: string;
  features: string[];
  idealFor: string;
}

export const GRANT_PACKAGES: GrantPackage[] = [
  {
    id: 'package-web',
    name: 'The High-Speed Digital Front Door',
    badge: 'Flagship Web Grant',
    marketValue: '$5,000 In-Kind Value',
    timeline: '7–10 Business Days',
    summary: 'A bespoke, lightning-fast Next.js web platform built with custom typography, responsive dark/light styling, and sub-second load times.',
    features: [
      'Custom Next.js & React architecture (Zero slow WordPress templates)',
      'Sub-second page load times (100/100 Google Lighthouse score)',
      'Fully responsive mobile safe-zone design (1080p and touch optimized)',
      'Built-in lead capture & instant email/SMS dispatch',
      '100% founder data sovereignty & production deployment on Cloudflare Edge'
    ],
    idealFor: 'New business owners without a website or trapped with a broken, slow legacy template.'
  },
  {
    id: 'package-seo',
    name: 'Local SEO & Search Domination Engine',
    badge: 'Authority Grant',
    marketValue: '$3,500 In-Kind Value',
    timeline: '5–7 Business Days',
    summary: 'Comprehensive local search architecture, structured JSON-LD schema, Google Business Profile authority sculpting, and review generation framework.',
    features: [
      'Google Business Profile (GBP) category and service geo-grid optimization',
      'Advanced Schema.org (LocalBusiness, Organization, Service, FAQ) deployment',
      'Neighborhood service area pages with programmatic indexing',
      'Automated 5-star customer review collection funnel via SMS/Email',
      'Direct IndexNow search console instant indexing setup'
    ],
    idealFor: 'Local businesses, trades, and services invisible on Google Maps and search.'
  },
  {
    id: 'package-automations',
    name: 'Autonomous Operations & Lead Flow Engine',
    badge: 'High Leverage Grant',
    marketValue: '$4,000 In-Kind Value',
    timeline: '3–5 Business Days',
    summary: 'Eliminate manual repetitive chores with automated missed-call text-back, instant quote calculators, and automated client onboarding pipelines.',
    features: [
      'Instant Missed-Call SMS Auto-Responder (Never lose a phone lead again)',
      'Multi-channel webhook routing (Form → CRM → WhatsApp / Slack / Email)',
      'Automated appointment calendar booking with SMS reminder sequences',
      'Digital intake questionnaire with automated contract generation',
      'Zero-code maintenance dashboard for daily operational ease'
    ],
    idealFor: 'Busy solo founders and service operators drowning in admin and missing customer calls.'
  },
  {
    id: 'package-portal',
    name: 'Custom Web Application & Client Portal',
    badge: 'Enterprise Grant',
    marketValue: '$8,500 In-Kind Value',
    timeline: '10–14 Business Days',
    summary: 'Full-stack custom web application with database storage, user authentication, customer self-service dashboard, or directory catalog.',
    features: [
      'Full-stack PostgreSQL / Supabase secure database architecture',
      'Customer login & authenticated private dashboard',
      'Directory, catalog, or event management engine',
      'Stripe Payment Links checkout integration with zero invoicing markups',
      'Production deployment on Cloudflare Edge / Vercel with SSL & CDN'
    ],
    idealFor: 'Innovators launching a directory, marketplace, client portal, or custom software venture.'
  }
];
