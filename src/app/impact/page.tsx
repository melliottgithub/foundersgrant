import Link from 'next/link';
import { IMPACT_STORIES } from '@/data/stories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verified Impact & Founder Case Studies | Founders Grant',
  description:
    'Explore verified case studies, metric improvements, and video reviews from founders awarded in-kind digital infrastructure grants.',
  openGraph: {
    title: 'Founders Grant Verified Impact & Case Studies',
    description:
      'Real metrics from real founders awarded $0 in-kind Next.js engineering, local SEO architectures, and automated SMS dispatch engines.',
  },
};

export default function ImpactPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://foundersgrant.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Verified Impact',
        item: 'https://foundersgrant.org/impact',
      },
    ],
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section style={{ padding: '4.5rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container">
          <nav className="apple-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="apple-breadcrumb-separator">/</span>
            <span className="apple-breadcrumb-current">Verified Impact</span>
          </nav>

          <span className="section-eyebrow">Documented Results</span>
          <h1 className="hero-title">
            Verified Founder Impact &amp; <br />
            <span className="hero-gradient-text">Transformation Studies</span>
          </h1>
          <p className="hero-subtext">
            We judge our success by one metric: did our software solve the founder’s operational bottleneck
            and accelerate their revenue? Here is what happens when bootstrapped founders get real engineering.
          </p>

          <div className="stat-bar" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">$52,000+</span>
              <span className="stat-label">In-Kind Tech Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">+265%</span>
              <span className="stat-label">Average Inbound Conversion Lift</span>
            </div>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">10 Days</span>
              <span className="stat-label">Average Sprint Time to Live</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Founder Data Sovereignty &amp; Privacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {IMPACT_STORIES.map((story) => (
              <div key={story.id} className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--apple-border)', paddingBottom: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--apple-blue)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {story.city}, {story.state} · {story.category}
                    </span>
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--apple-text-primary)', marginTop: '0.25rem', fontWeight: '700' }}>{story.businessName}</h2>
                    <div style={{ color: 'var(--apple-text-muted)', fontSize: '0.9rem' }}>Founder: {story.founderName}</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ background: 'var(--apple-blue-subtle)', border: '1px solid rgba(0, 113, 227, 0.2)', padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', color: 'var(--apple-blue)', fontSize: '0.85rem', fontWeight: '700' }}>
                      {story.inKindValue} In-Kind Grant
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--apple-text-muted)', marginTop: '0.4rem' }}>
                      Package: {story.awardedPackage}
                    </div>
                  </div>
                </div>

                <div className="grid-2" style={{ marginBottom: '2rem' }}>
                  <div>
                    <h3 style={{ color: '#d93025', fontSize: '0.95rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>
                      The Bottleneck Before Grant
                    </h3>
                    <p style={{ color: 'var(--apple-text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 style={{ color: '#1b8738', fontSize: '0.95rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>
                      The Engineering Solution Built
                    </h3>
                    <p style={{ color: 'var(--apple-text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                      {story.solutionBuilt}
                    </p>
                  </div>
                </div>

                <div style={{ background: 'rgba(52, 199, 89, 0.08)', border: '1px solid rgba(52, 199, 89, 0.25)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: '#1b8738', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                    ⚡ Measured Outcome: {story.impactMetric}
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--apple-blue)', paddingLeft: '1.25rem', margin: '1rem 0' }}>
                  <p style={{ color: 'var(--apple-text-primary)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div style={{ color: 'var(--apple-text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    — {story.founderName}, Founder of {story.businessName}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ color: 'var(--apple-text-primary)', fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '700' }}>
              Want Your Business to Be Our Next Case Study?
            </h3>
            <p style={{ color: 'var(--apple-text-secondary)', marginBottom: '1.75rem', fontSize: '1.05rem' }}>
              Submitting takes less than 4 minutes. Rolling review cycle closes December 15, 2026.
            </p>
            <Link href="/apply" className="btn btn-emerald" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
              Submit Your Story for Q4 / Q1 Review →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
