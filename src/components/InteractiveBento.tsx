'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GRANT_PACKAGES } from '@/data/packages';

export default function InteractiveBento() {
  const [activeTab, setActiveTab] = useState<'web' | 'sms' | 'seo' | 'portal'>('web');

  return (
    <div style={{ marginTop: '2.5rem' }}>
      {/* Interactive Bottleneck Selector Tabs (Touch Swipe Friendly on Mobile) */}
      <div className="bento-tabs-scroll">
        <button
          onClick={() => setActiveTab('web')}
          className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
          id="tab-web"
        >
          <span style={{ fontSize: '1.1rem' }}>🚀</span>
          <span>I Need A Fast Website</span>
        </button>

        <button
          onClick={() => setActiveTab('sms')}
          className={`tab-btn ${activeTab === 'sms' ? 'active' : ''}`}
          id="tab-sms"
        >
          <span style={{ fontSize: '1.1rem' }}>⚡</span>
          <span>I Need Missed-Call Automations</span>
        </button>

        <button
          onClick={() => setActiveTab('seo')}
          className={`tab-btn ${activeTab === 'seo' ? 'active' : ''}`}
          id="tab-seo"
        >
          <span style={{ fontSize: '1.1rem' }}>📍</span>
          <span>I Need Local Map SEO</span>
        </button>

        <button
          onClick={() => setActiveTab('portal')}
          className={`tab-btn ${activeTab === 'portal' ? 'active' : ''}`}
          id="tab-portal"
        >
          <span style={{ fontSize: '1.1rem' }}>💻</span>
          <span>I Need A Custom App / Portal</span>
        </button>
      </div>

      {/* Main Dynamic Showcase Preview */}
      <div className="bento-hero-card" id="bento-hero-display">
        {activeTab === 'web' && (
          <div className="bento-split">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge-emerald">Flagship Web Grant · $5,000 In-Kind</span>
              <h3 className="bento-title">Sub-Second Next.js Front Door</h3>
              <p className="bento-desc">
                We replace clunky, slow WordPress templates with a hand-crafted Next.js platform. 
                Engineered with responsive mobile safe zones, semantic schema, and zero bloat.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <div className="metric-chip">
                  <span className="metric-chip-val">100/100</span>
                  <span className="metric-chip-lbl">Lighthouse Score</span>
                </div>
                <div className="metric-chip">
                  <span className="metric-chip-val">18ms</span>
                  <span className="metric-chip-lbl">Time to First Byte</span>
                </div>
                <div className="metric-chip">
                  <span className="metric-chip-val">100%</span>
                  <span className="metric-chip-lbl">Data Sovereignty</span>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/apply?package=The+High-Speed+Digital+Front+Door" className="btn btn-emerald">
                  Apply for Web Grant ($0) →
                </Link>
              </div>
            </div>

            {/* Simulated Live Lighthouse Gauge UI */}
            <div className="preview-box">
              <div className="window-header">
                <div className="dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="window-title">google-lighthouse-audit.report</span>
              </div>
              <div className="gauge-container">
                <div className="gauge-circle">
                  <span className="gauge-score">100</span>
                  <span className="gauge-label">PERFORMANCE</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%', marginTop: '1rem' }}>
                  <div className="speed-stat">
                    <span className="speed-lbl">First Contentful Paint</span>
                    <span className="speed-val green-text">0.4s ✓</span>
                  </div>
                  <div className="speed-stat">
                    <span className="speed-lbl">Largest Contentful Paint</span>
                    <span className="speed-val green-text">0.7s ✓</span>
                  </div>
                  <div className="speed-stat">
                    <span className="speed-lbl">Total Blocking Time</span>
                    <span className="speed-val green-text">0ms ✓</span>
                  </div>
                  <div className="speed-stat">
                    <span className="speed-lbl">Cumulative Layout Shift</span>
                    <span className="speed-val green-text">0.000 ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sms' && (
          <div className="bento-split">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge-indigo">Autonomous AI Operations · $4,000 In-Kind</span>
              <h3 className="bento-title">Instant Missed-Call SMS Recovery</h3>
              <p className="bento-desc">
                When you are busy on a job or with a client, callers who hit voicemail hire your competitor. 
                Our autonomous engine instantly texts the caller in under 4 seconds with a direct calendar booking link.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <div className="metric-chip">
                  <span className="metric-chip-val">&lt;4 sec</span>
                  <span className="metric-chip-lbl">Auto-Response Latency</span>
                </div>
                <div className="metric-chip">
                  <span className="metric-chip-val">+68%</span>
                  <span className="metric-chip-lbl">Lead Recovery Rate</span>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/apply?package=Autonomous+Operations+%26+Lead+Flow+Engine" className="btn btn-emerald">
                  Apply for Automation Grant ($0) →
                </Link>
              </div>
            </div>

            {/* Simulated Live Phone SMS UI */}
            <div className="preview-box" style={{ maxWidth: '340px', margin: '0 auto' }}>
              <div className="phone-screen">
                <div className="phone-status">9:41 AM · Missed Call (720) 530-5571</div>
                <div className="sms-thread">
                  <div className="sms-bubble incoming">
                    [Missed Call from New Customer]
                  </div>
                  <div className="sms-bubble outgoing">
                    Hi! Sorry I missed your call, I&apos;m currently assisting a client. How can I help you today?
                  </div>
                  <div className="sms-bubble incoming">
                    Hi! I saw your work and need a quote for next week.
                  </div>
                  <div className="sms-bubble outgoing">
                    Awesome! You can pick a quick 10-min phone consultation directly here: foundersgrant.org/book
                  </div>
                  <div className="sms-tag">✓ Lead Converted in 38 Seconds</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="bento-split">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge-emerald">Authority Grant · $3,500 In-Kind</span>
              <h3 className="bento-title">Local Google Maps &amp; Schema Domination</h3>
              <p className="bento-desc">
                We optimize your Google Business Profile, inject micro-data JSON-LD schemas, 
                and construct neighborhood geo-grid landing pages so your venture ranks #1 in local search.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <div className="metric-chip">
                  <span className="metric-chip-val">Rank #1</span>
                  <span className="metric-chip-lbl">Map 3-Pack Target</span>
                </div>
                <div className="metric-chip">
                  <span className="metric-chip-val">5.0 ★</span>
                  <span className="metric-chip-lbl">Automated Review Funnel</span>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/apply?package=Local+SEO+%26+Search+Domination+Engine" className="btn btn-emerald">
                  Apply for Local SEO Grant ($0) →
                </Link>
              </div>
            </div>

            {/* Simulated Google Local 3-Pack UI */}
            <div className="preview-box">
              <div className="window-header">
                <span className="window-title">google.com/search?q=best+local+services</span>
              </div>
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="map-result-card featured">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="map-badge">#1 IN LOCAL MAP PACK</span>
                    <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 'bold' }}>OPEN NOW</span>
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginTop: '0.25rem' }}>
                    Your Business Name
                  </div>
                  <div style={{ color: '#f59e0b', fontSize: '0.85rem' }}>
                    ★★★★★ 5.0 (48 reviews) · Verified Local Partner
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    📍 Denver, CO · High-Speed Next.js Portal · Direct Booking
                  </div>
                </div>

                <div className="map-result-card dimmed">
                  <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>#2 Competitor A (3.8 ★)</div>
                </div>
                <div className="map-result-card dimmed">
                  <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>#3 Competitor B (4.1 ★)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'portal' && (
          <div className="bento-split">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="badge-indigo">Enterprise Grant · $8,500 In-Kind</span>
              <h3 className="bento-title">Full-Stack Custom App &amp; Database</h3>
              <p className="bento-desc">
                Need user logins, membership catalogs, an event directory, or database storage? 
                We engineer scalable React + PostgreSQL platforms deployed directly to Cloudflare Edge.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <div className="metric-chip">
                  <span className="metric-chip-val">PostgreSQL</span>
                  <span className="metric-chip-lbl">Production Database</span>
                </div>
                <div className="metric-chip">
                  <span className="metric-chip-val">Edge API</span>
                  <span className="metric-chip-lbl">Cloudflare Global Network</span>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/apply?package=Custom+Web+Application+%26+Client+Portal" className="btn btn-emerald">
                  Apply for App Grant ($0) →
                </Link>
              </div>
            </div>

            {/* Live Production Deployment Artifact */}
            <div className="preview-box">
              <div className="window-header">
                <span className="window-title">bash — production-deploy.sh</span>
              </div>
              <div className="code-block">
                <p><span style={{ color: '#6366f1' }}>$</span> deploy --target production --domain yourventure.com</p>
                <p><span style={{ color: '#10b981' }}>✓</span> Next.js 16 App Router Compiled</p>
                <p><span style={{ color: '#10b981' }}>✓</span> Production Database Deployed</p>
                <p><span style={{ color: '#10b981' }}>✓</span> SSL &amp; Cloudflare Edge CDN Active</p>
                <p style={{ color: '#a5b4fc', marginTop: '0.5rem' }}>
                  {`// 100% Data Sovereignty: You own your customers, leads, and domain forever.`}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bento Grid: 4 Asymmetric Power Cards */}
      <div className="bento-grid-4">
        {GRANT_PACKAGES.map((pkg, idx) => (
          <div key={pkg.id} className={`bento-mini-card ${idx === 0 || idx === 3 ? 'span-2' : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <span className="mini-badge">{pkg.badge}</span>
              <span className="mini-val">{pkg.marketValue}</span>
            </div>
            <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.5rem', fontWeight: '700' }}>{pkg.name}</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>{pkg.summary}</p>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Sprint: {pkg.timeline}</span>
              <Link href={`/apply?package=${encodeURIComponent(pkg.name)}`} style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>
                Apply ($0) →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
