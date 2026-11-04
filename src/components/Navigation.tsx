'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile drawer on route transition during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link href="/" className="brand-logo" id="nav-brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <span>FoundersGrant<span style={{ color: 'var(--apple-blue)' }}>.org</span></span>
          <span className="brand-badge">2026 In-Kind Grant</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Desktop Navigation">
          <Link href="/#packages" className="nav-link" id="nav-packages">
            Grant Packages
          </Link>
          <Link href="/grants" className="nav-link" id="nav-cities">
            Regional Chapters
          </Link>
          <Link href="/impact" className="nav-link" id="nav-impact">
            Verified Impact
          </Link>
          <Link href="/#faq" className="nav-link" id="nav-faq">
            FAQ &amp; Review
          </Link>
          <Link href="/apply" className="btn btn-emerald" id="nav-apply-btn">
            Apply for Grant →
          </Link>
        </nav>

        {/* Mobile & Tablet Hamburger Toggle */}
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-nav-toggle-btn"
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={() => setMobileMenuOpen(false)}
          id="mobile-nav-backdrop"
        >
          <div 
            className="mobile-drawer-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div className="mobile-drawer-header">
              <span className="pill-dot" style={{ width: '8px', height: '8px' }}></span>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--apple-text-secondary)' }}>
                Q4 2026 / Q1 2027 Cohort Active
              </span>
            </div>

            <nav className="mobile-drawer-links">
              <Link 
                href="/#packages" 
                className="mobile-drawer-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>The 4 Grant Packages</span>
                <span className="mobile-link-arrow">→</span>
              </Link>

              <Link 
                href="/grants" 
                className="mobile-drawer-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div>
                  <div>Regional Chapter Hubs</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--apple-text-muted)', fontWeight: '400', marginTop: '0.15rem' }}>
                    12 States · 23 Metros · Colorado HQ
                  </div>
                </div>
                <span className="mobile-link-arrow">→</span>
              </Link>

              <Link 
                href="/grants/colorado" 
                className="mobile-drawer-link"
                style={{ paddingLeft: '2rem', background: 'rgba(0, 113, 227, 0.03)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div>
                  <span style={{ color: 'var(--apple-blue)', fontWeight: '600' }}>📍 Colorado Chapter (HQ)</span>
                  <div style={{ fontSize: '0.78rem', color: 'var(--apple-text-muted)' }}>Denver, Boulder, Springs, Collins</div>
                </div>
                <span className="mobile-link-arrow">→</span>
              </Link>

              <Link 
                href="/impact" 
                className="mobile-drawer-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Verified Impact &amp; Case Studies</span>
                <span className="mobile-link-arrow">→</span>
              </Link>

              <Link 
                href="/#faq" 
                className="mobile-drawer-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>FAQ (&ldquo;What’s The Catch?&rdquo;)</span>
                <span className="mobile-link-arrow">→</span>
              </Link>

              <Link 
                href="/legal/terms" 
                className="mobile-drawer-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>In-Kind Terms &amp; $0 Liability</span>
                <span className="mobile-link-arrow">→</span>
              </Link>
            </nav>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link 
                href="/apply" 
                className="btn btn-emerald" 
                style={{ width: '100%', padding: '0.95rem', fontSize: '1.05rem', textAlign: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply for $0 Grant →
              </Link>
              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--apple-text-muted)' }}>
                Takes &lt; 4 minutes · Zero credit card or invoice
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
