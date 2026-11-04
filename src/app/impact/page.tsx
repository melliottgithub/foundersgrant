import Link from 'next/link';
import { IMPACT_STORIES } from '@/data/stories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verified Impact & Founder Case Studies | Founders Grant',
  description: 'Explore verified case studies, metric improvements, and video reviews from founders awarded in-kind digital infrastructure grants.',
};

export default function ImpactPage() {
  return (
    <div style={{ paddingBottom: '6rem' }}>
      <section style={{ padding: '5rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Documented Results</span>
          <h1 className="hero-title">
            Verified Founder Impact &amp; <br />
            <span className="hero-gradient-text">Transformation Studies</span>
          </h1>
          <p className="hero-subtext">
            We judge our success by one metric: did our software solve the founder’s operational bottleneck
            and accelerate their revenue? Here is what happens when founders get real digital infrastructure.
          </p>

          <div className="stat-bar" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">$52,000+</span>
              <span className="stat-label">In-Kind Engineering Value</span>
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
              <span className="stat-label">Full Code Ownership Handed Over</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {IMPACT_STORIES.map((story) => (
              <div key={story.id} className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {story.city}, {story.state} · {story.category}
                    </span>
                    <h2 style={{ fontSize: '1.8rem', color: '#fff', marginTop: '0.25rem' }}>{story.businessName}</h2>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Founder: {story.founderName}</div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', color: '#c7d2fe', fontSize: '0.85rem', fontWeight: '700' }}>
                      {story.inKindValue} In-Kind Grant
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                      Package: {story.awardedPackage}
                    </div>
                  </div>
                </div>

                <div className="grid-2" style={{ marginBottom: '2rem' }}>
                  <div>
                    <h4 style={{ color: '#ef4444', fontSize: '0.95rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      The Bottleneck Before Grant
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      The Engineering Solution Built
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                      {story.solutionBuilt}
                    </p>
                  </div>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: '#6ee7b7', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                    ⚡ Measured Outcome: {story.impactMetric}
                  </div>
                </div>

                <div style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1.25rem', margin: '1rem 0' }}>
                  <p style={{ color: '#f8fafc', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.6' }}>
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    — {story.founderName}, Founder of {story.businessName}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Want Your Business to Be Our Next Case Study?
            </h3>
            <Link href="/apply" className="btn btn-emerald" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              Submit Your Story for Q4 / Q1 Review →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
