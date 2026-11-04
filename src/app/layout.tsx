import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import MobileStickyBar from '@/components/MobileStickyBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Founders Grant | In-Kind Technology & Automation Grants for Founders',
  description:
    'Awarding enterprise-grade web development, custom software, local SEO, and AI workflow automations to bootstrapped founders, local services, and small businesses.',
  metadataBase: new URL('https://foundersgrant.org'),
  alternates: {
    canonical: 'https://foundersgrant.org',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Founders Grant | In-Kind Technology Infrastructure Grants',
    description:
      'We build high-speed websites, local SEO frameworks, and autonomous workflow engines for small business founders at $0.',
    url: 'https://foundersgrant.org',
    siteName: 'Founders Grant',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Founders Grant · $0 In-Kind Technology Grants for Founders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders Grant | Tech Grants for Founders',
    description:
      'In-kind engineering and digital infrastructure grants awarded based on founder story and community impact.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://foundersgrant.org/#organization',
        name: 'Founders Grant',
        url: 'https://foundersgrant.org',
        logo: 'https://foundersgrant.org/apple-touch-icon.png',
        telephone: '+1-720-530-5571',
        email: 'michael.elliott@devmellio.com',
        description:
          'Pro bono technology empowerment initiative awarding in-kind Next.js engineering, local SEO architectures, and AI workflow automations to bootstrapped founders and local small businesses.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1500 N Grant St',
          addressLocality: 'Denver',
          addressRegion: 'CO',
          postalCode: '80203',
          addressCountry: 'US',
        },
        foundingLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1500 N Grant St',
            addressLocality: 'Denver',
            addressRegion: 'CO',
            postalCode: '80203',
            addressCountry: 'US',
          },
        },
        founder: {
          '@type': 'Person',
          name: 'Michael Elliott',
          jobTitle: 'Senior Software Architect & AI/ML Engineer',
          worksFor: {
            '@type': 'Organization',
            name: 'DevMellio LLC',
            url: 'https://devmellio.com',
          },
        },
        sameAs: [
          'https://devmellio.com',
          'https://www.wikidata.org/wiki/Q1052604',
          'https://www.wikidata.org/wiki/Q483854',
        ],
        parentOrganization: {
          '@type': 'Organization',
          name: 'DevMellio LLC',
          url: 'https://devmellio.com',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://foundersgrant.org/#website',
        url: 'https://foundersgrant.org',
        name: 'Founders Grant',
        description:
          'In-kind software engineering and digital infrastructure grants awarded to small businesses and founders.',
        publisher: {
          '@id': 'https://foundersgrant.org/#organization',
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.geo-benchmark-stat', '.section-desc', '.faq-answer'],
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://foundersgrant.org/#grant-service',
        name: 'Founders Grant In-Kind Engineering Program',
        serviceType: 'Pro Bono Technology Development',
        provider: {
          '@id': 'https://foundersgrant.org/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          validFrom: '2026-10-01',
          description:
            '100% in-kind technology infrastructure sprint. Zero licensing fees, zero invoicing, zero catch.',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Google Analytics 4 (GA4) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PR51M2PPKJ"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PR51M2PPKJ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body>
        <div className="page-bg-mesh" />

        {/* Global Navigation (Responsive Apple Desktop + Mobile Drawer) */}
        <Navigation />

        <main>{children}</main>

        {/* Floating Mobile Action Bar (Frictionless conversion for phone screens) */}
        <MobileStickyBar />

        {/* Global Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-inner">
              <div>
                <div className="footer-brand-title">
                  FoundersGrant<span style={{ color: 'var(--apple-blue)' }}>.org</span>
                </div>
                <p style={{ maxWidth: '420px', lineHeight: '1.6', marginBottom: '1.25rem', color: 'var(--apple-text-secondary)' }}>
                  An independent technology initiative providing pro bono digital infrastructure,
                  custom full-stack engineering, and AI automation suites to bootstrapped entrepreneurs,
                  community creators, and small business owners nationwide.
                </p>
                <div style={{ fontSize: '0.85rem', color: 'var(--apple-text-muted)' }}>
                  Managed &amp; Engineered by DevMellio LLC · Denver, CO
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--apple-text-primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Program Initiatives
                </div>
                <ul className="footer-links-list">
                  <li><Link href="/#packages" className="footer-link">The 4 Grant Packages</Link></li>
                  <li><Link href="/impact" className="footer-link">Founder Case Studies</Link></li>
                  <li><Link href="/grants" className="footer-link">State &amp; City Chapters</Link></li>
                  <li><Link href="/apply" className="footer-link">Submit Your Application</Link></li>
                </ul>
              </div>

              <div>
                <div style={{ color: 'var(--apple-text-primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Integrity &amp; Legal
                </div>
                <ul className="footer-links-list">
                  <li><Link href="/legal/terms" className="footer-link">In-Kind Grant Terms</Link></li>
                  <li><Link href="/legal/terms#liability" className="footer-link">$0 Liability Disclaimer</Link></li>
                  <li><Link href="/legal/terms#ip" className="footer-link">IP &amp; Founder Data Sovereignty</Link></li>
                  <li><Link href="/legal/terms#disclosure" className="footer-link">Non-Profit vs. In-Kind Disclosure</Link></li>
                </ul>
              </div>

              <div>
                <div style={{ color: 'var(--apple-text-primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Contact &amp; Operations
                </div>
                <ul className="footer-links-list" style={{ fontSize: '0.85rem' }}>
                  <li>
                    <span style={{ color: 'var(--apple-text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>HQ &amp; Studio</span>
                    <span style={{ color: 'var(--apple-text-primary)' }}>1500 N Grant St, Denver, CO 80203</span>
                  </li>
                  <li>
                    <span style={{ color: 'var(--apple-text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Direct Phone</span>
                    <a href="tel:7205305571" className="footer-link" style={{ color: 'var(--apple-blue)', fontWeight: '600' }}>(720) 530-5571</a>
                  </li>
                  <li>
                    <span style={{ color: 'var(--apple-text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Program Desk</span>
                    <a href="mailto:apply@foundersgrant.org" className="footer-link">apply@foundersgrant.org</a>
                  </li>
                  <li>
                    <span style={{ color: 'var(--apple-text-muted)', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Senior Architect</span>
                    <a href="mailto:michael.elliott@devmellio.com" className="footer-link">michael.elliott@devmellio.com</a>
                  </li>
                  <li style={{ marginTop: '0.25rem', color: 'var(--apple-text-muted)', fontSize: '0.78rem', lineHeight: '1.4' }}>
                    Evaluations held weekly every Friday at 17:00 MT.
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-legal-bar">
              <div>
                © 2026 FoundersGrant.org · All in-kind technology grants are awarded without cash transaction.
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/legal/terms" className="footer-link">Terms &amp; Conditions</Link>
                <Link href="/apply" className="footer-link">Apply (Q4 / Q1 Cycle)</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
