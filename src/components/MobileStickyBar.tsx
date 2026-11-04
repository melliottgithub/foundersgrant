'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileStickyBar() {
  const pathname = usePathname();

  // Do not show the sticky button on the apply page itself
  if (pathname === '/apply') {
    return null;
  }

  return (
    <div className="mobile-sticky-bar" id="mobile-sticky-cta">
      <div className="mobile-sticky-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="pill-dot" style={{ width: '7px', height: '7px' }}></span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--apple-text-primary)', lineHeight: '1.2' }}>
              Q4 / Q1 Cycle Open
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--apple-text-muted)' }}>
              8 of 10 Grants Open
            </span>
          </div>
        </div>

        <Link 
          href="/apply" 
          className="btn btn-emerald"
          style={{ 
            padding: '0.55rem 1.15rem', 
            fontSize: '0.85rem',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0, 113, 227, 0.3)'
          }}
          id="mobile-sticky-apply-btn"
        >
          Apply Now →
        </Link>
      </div>
    </div>
  );
}
