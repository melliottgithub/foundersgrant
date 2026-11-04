import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

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

export const metadata: Metadata = {
  title: 'Founders Grant | In-Kind Technology & Automation Grants for Founders',
  description:
    'Awarding enterprise-grade web development, custom software, local SEO, and AI workflow automations to bootstrapped founders, local services, and small businesses.',
  metadataBase: new URL('https://foundersgrant.org'),
  openGraph: {
    title: 'Founders Grant | In-Kind Technology Infrastructure Grants',
    description:
      'We build high-speed websites, local SEO frameworks, and autonomous workflow engines for small business founders at $0.',
    url: 'https://foundersgrant.org',
    siteName: 'Founders Grant',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Founders Grant | Tech Grants for Founders',
    description:
      'In-kind engineering and digital infrastructure grants awarded based on founder story and community impact.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <div className="page-bg-mesh" />

        {/* Global Navigation */}
        <header className="site-nav">
          <div className="container nav-inner">
            <Link href="/" className="brand-logo" id="nav-brand-logo">
              <span>FoundersGrant<span style={{ color: 'var(--accent-emerald)' }}>.org</span></span>
              <span className="brand-badge">2026 In-Kind Grant</span>
            </Link>

            <nav className="nav-links">
              <Link href="/#packages" className="nav-link" id="nav-packages">
                Grant Packages
              </Link>
              <Link href="/#cities" className="nav-link" id="nav-cities">
                City Hubs
              </Link>
              <Link href="/impact" className="nav-link" id="nav-impact">
                Verified Impact
              </Link>
              <Link href="/#how-it-works" className="nav-link" id="nav-how-it-works">
                How It Works
              </Link>
              <Link href="/apply" className="btn btn-emerald" id="nav-apply-btn">
                Apply for Grant →
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Global Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-inner">
              <div>
                <div className="footer-brand-title">
                  FoundersGrant<span style={{ color: 'var(--accent-emerald)' }}>.org</span>
                </div>
                <p style={{ maxWidth: '420px', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  An independent technology initiative providing pro bono digital infrastructure,
                  custom full-stack engineering, and AI automation suites to bootstrapped entrepreneurs,
                  community creators, and small business owners nationwide.
                </p>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Managed & Engineered by DevMellio LLC · Denver, CO
                </div>
              </div>

              <div>
                <div style={{ color: '#fff', fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Program Initiatives
                </div>
                <ul className="footer-links-list">
                  <li><Link href="/#packages" className="footer-link">The 4 Grant Packages</Link></li>
                  <li><Link href="/impact" className="footer-link">Founder Case Studies</Link></li>
                  <li><Link href="/#cities" className="footer-link">National City Directory</Link></li>
                  <li><Link href="/apply" className="footer-link">Submit Your Application</Link></li>
                </ul>
              </div>

              <div>
                <div style={{ color: '#fff', fontWeight: '700', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Integrity & Legal
                </div>
                <ul className="footer-links-list">
                  <li><Link href="/legal/terms" className="footer-link">In-Kind Grant Terms</Link></li>
                  <li><Link href="/legal/terms#liability" className="footer-link">$0 Liability Disclaimer</Link></li>
                  <li><Link href="/legal/terms#ip" className="footer-link">Full IP Ownership Rights</Link></li>
                  <li><Link href="/legal/terms#disclosure" className="footer-link">Non-Profit vs. In-Kind Disclosure</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-legal-bar">
              <div>
                © 2026 FoundersGrant.org · All in-kind technology grants are awarded without cash transaction.
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/legal/terms" className="footer-link">Terms & Conditions</Link>
                <Link href="/apply" className="footer-link">Apply (Q4 / Q1 Cycle)</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
