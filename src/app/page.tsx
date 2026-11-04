import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { IMPACT_STORIES } from '@/data/stories';
import InteractiveBento from '@/components/InteractiveBento';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="pill-announcement" id="hero-announcement-pill">
            <span className="pill-dot"></span>
            <span>🟢 Q4 2026 / Q1 2027 Cohort Live · 8 of 10 Grants Remaining</span>
          </div>

          <h1 className="hero-title">
            The $0 Tech Infrastructure Grant. <br />
            <span className="hero-gradient-text">Engineered for Founders Who Build.</span>
          </h1>

          <p className="hero-subtext">
            We award full-stack web applications, local SEO engines, and autonomous AI workflows to 
            bootstrapped entrepreneurs and small businesses at <strong>$0 cost</strong>. You bring the mission; 
            we deploy your production software.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/apply" className="btn btn-emerald" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
              Apply for Active Cohort →
            </Link>
            <Link href="/impact" className="btn btn-secondary" style={{ padding: '0.9rem 1.8rem', fontSize: '1.05rem' }}>
              View Verified Case Studies
            </Link>
          </div>

          {/* Interactive Bento Showcase (SOTA 2026) */}
          <InteractiveBento />

          {/* Metric Bar */}
          <div className="stat-bar" id="hero-metric-bar">
            <div className="stat-item">
              <span className="stat-value highlight-emerald">$52,000+</span>
              <span className="stat-label">In-Kind Tech Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">12 Metros</span>
              <span className="stat-label">Regional Grant Hubs</span>
            </div>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">100% Free</span>
              <span className="stat-label">Zero Invoicing or Lock-in</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">7–14 Days</span>
              <span className="stat-label">Sprint Time to Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Transparent Hormozi Value Exchange */}
      <section style={{ padding: '5rem 0', background: 'rgba(8, 11, 17, 0.7)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Zero Fluff Transparency</span>
            <h2 className="section-title">&ldquo;What’s The Catch? Why Is This Free?&rdquo;</h2>
            <p className="section-desc">
              We don’t believe in fake internet altruism. Here is the exact commercial trade.
            </p>
          </div>

          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            <div className="bento-mini-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>1. The Value Exchange</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                You get thousands of dollars in enterprise Next.js and automation engineering for $0. In exchange, all we ask is: 
                <strong> (1) a 2-minute video review</strong> once live, and <strong>(2) permission to feature your growth metrics</strong> in our public case study.
              </p>
            </div>

            <div className="bento-mini-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🚫</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>2. Zero Hidden Upsells</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                We never hold your domain hostage, lock you into recurring hosting markups, or bill sneaky maintenance fees. You get 100% ownership of your code, repository, and assets from day one.
              </p>
            </div>

            <div className="bento-mini-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🚀</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>3. Proof Over Paid Ads</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Traditional agencies blow tens of thousands on paid ads. We redirect that budget into building real software for real founders. Our marketing is your verified success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmatic City Directory Section */}
      <section id="cities" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Local Chapters</span>
            <h2 className="section-title">Regional Grant Chapters</h2>
            <p className="section-desc">
              Explore open grant cycles across top metropolitan markets. Local founders are prioritized in each review.
            </p>
          </div>

          <div className="grid-3">
            {CITIES.map((city) => (
              <Link 
                key={city.slug} 
                href={`/grants/${city.slug}`}
                className="city-card"
                id={`city-link-${city.slug}`}
              >
                <div>
                  <div className="city-name">{city.name}</div>
                  <div className="city-state">{city.state} · Metro Pop: {city.metroPopulation}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                    {city.focusTitle}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  <span className="city-cycle-badge">
                    <span className="pill-dot" style={{ width: '6px', height: '6px' }}></span>
                    {city.activeCycle}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>
                    View Hub →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Impact Spotlight */}
      <section style={{ padding: '5rem 0', background: 'rgba(8, 11, 17, 0.5)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Real Transformations</span>
            <h2 className="section-title">Featured Founder Case Studies</h2>
            <p className="section-desc">
              See what happened when past grant recipients launched their custom digital systems.
            </p>
          </div>

          <div className="grid-3">
            {IMPACT_STORIES.map((story) => (
              <div key={story.id} className="bento-mini-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: '700' }}>
                      {story.city}, {story.state}
                    </span>
                    <span style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#94a3b8' }}>
                      {story.inKindValue} In-Kind
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.25rem' }}>{story.businessName}</h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Founder: {story.founderName} · {story.category}
                  </div>

                  <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6ee7b7', fontWeight: '600' }}>
                      ⚡ {story.impactMetric}
                    </span>
                  </div>

                  <p style={{ fontStyle: 'italic', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  Awarded: <strong style={{ color: '#e2e8f0' }}>{story.awardedPackage}</strong>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/impact" className="btn btn-secondary">
              Explore All Impact Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="bento-hero-card" style={{ maxWidth: '850px', margin: '0 auto', padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(16, 185, 129, 0.08))', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: '800', color: '#fff', marginBottom: '1rem' }}>
              Have A Mission But Lack The Software?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
              Applications for the Q4 2026 / Q1 2027 cohort are reviewed on a rolling basis. 
              Submitting takes less than 4 minutes.
            </p>
            <Link href="/apply" className="btn btn-emerald" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Submit Your Grant Application →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
