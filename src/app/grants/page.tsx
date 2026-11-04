import Link from 'next/link';
import type { Metadata } from 'next';
import { STATES, CITIES_MATRIX, getCitiesByState } from '@/data/geo';

export const metadata: Metadata = {
  title: 'All State & Regional Chapters | Founders Grant',
  description:
    'Explore all 12 state chapters and 23 regional metropolitan hubs for the Founders Grant $0 in-kind technology infrastructure initiative.',
  openGraph: {
    title: 'Founders Grant National Chapter Directory',
    description:
      'In-kind engineering grants awarded to bootstrapped entrepreneurs across Colorado and top US metropolitan markets.',
  },
};

export default function GrantsDirectoryPage() {
  const colorado = STATES.find((s) => s.slug === 'colorado');
  const coloradoCities = getCitiesByState('colorado');
  const otherStates = STATES.filter((s) => s.slug !== 'colorado');

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* Directory Hero */}
      <section style={{ padding: '4.5rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container">
          <nav className="apple-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="apple-breadcrumb-separator">/</span>
            <span className="apple-breadcrumb-current">Regional Chapters</span>
          </nav>

          <div className="pill-announcement">
            <span className="pill-dot"></span>
            <span>National Directory · 12 State Chapters · {CITIES_MATRIX.length} Metropolitan Hubs</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)' }}>
            Regional In-Kind Tech <br />
            <span className="hero-gradient-text">Grant Directory</span>
          </h1>

          <p className="hero-subtext">
            We award enterprise web infrastructure, local SEO frameworks, and autonomous workflow engines 
            at <strong>$0 cost</strong> to bootstrapped founders. Select your state or city to review local 
            allocations and active review cycles.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/apply" className="btn btn-emerald" style={{ padding: '0.85rem 2rem' }}>
              Submit Grant Application →
            </Link>
            <Link href="/#packages" className="btn btn-secondary" style={{ padding: '0.85rem 1.8rem' }}>
              Review 4 Grant Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Colorado Anchor Cluster Banner */}
      {colorado && (
        <section style={{ padding: '2rem 0 4rem 0' }}>
          <div className="container">
            <div 
              className="bento-hero-card"
              style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f7 100%)',
                border: '1px solid rgba(0, 113, 227, 0.25)',
                boxShadow: 'var(--apple-shadow-hover)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <span className="badge-indigo">HQ Flagship Chapter</span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: '700', color: 'var(--apple-text-primary)', margin: '0.25rem 0' }}>
                    Colorado Anchor Cluster
                  </h2>
                  <p style={{ color: 'var(--apple-text-secondary)', fontSize: '1.05rem', maxWidth: '650px' }}>
                    {colorado.description} DevMellio LLC coordinates high-touch in-person and Front Range engineering sprints for local founders.
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <Link 
                    href={`/grants/${colorado.slug}`} 
                    className="btn btn-emerald"
                    style={{ padding: '0.75rem 1.75rem' }}
                  >
                    View Colorado Hub →
                  </Link>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--apple-border)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--apple-text-primary)', marginBottom: '0.75rem' }}>
                  Front Range &amp; Mountain Cities in Review:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  {coloradoCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/grants/${city.stateSlug}/${city.slug}`}
                      className="state-card"
                      style={{ padding: '1.25rem' }}
                    >
                      <div>
                        <div style={{ fontWeight: '700', color: 'var(--apple-text-primary)', fontSize: '1.1rem' }}>
                          {city.name}, CO
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--apple-text-muted)', marginBottom: '0.5rem' }}>
                          Pop: {city.metroPopulation}
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--apple-text-secondary)', lineHeight: '1.4' }}>
                          {city.focusTitle.split('·')[0]}
                        </div>
                      </div>
                      <div style={{ marginTop: '0.75rem', fontSize: '0.82rem', color: 'var(--apple-blue)', fontWeight: '600' }}>
                        Open Application →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* National States Grid */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">National Footprint</span>
            <h2 className="section-title">All State Chapters</h2>
            <p className="section-desc">
              Select your home state to view localized grant quotas, regional focus industries, and active metropolitan chapters.
            </p>
          </div>

          <div className="grid-3">
            {otherStates.map((state) => {
              const stateCities = getCitiesByState(state.slug);
              return (
                <div key={state.slug} className="state-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="state-card-name">{state.name}</span>
                      <span className="mini-badge">{state.code}</span>
                    </div>
                    <div className="state-card-region">{state.region} · {state.totalSmallBusinesses} Small Businesses</div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--apple-text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                      {state.description}
                    </p>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--apple-text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Active Metro Hubs:
                      </div>
                      <div className="state-card-cities">
                        {stateCities.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/grants/${state.slug}/${c.slug}`}
                            className="city-pill-sm"
                          >
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--apple-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--apple-text-muted)' }}>
                      Deadline: <strong style={{ color: 'var(--apple-text-primary)' }}>Dec 15, 2026</strong>
                    </span>
                    <Link
                      href={`/grants/${state.slug}`}
                      style={{ fontSize: '0.88rem', color: 'var(--apple-blue)', fontWeight: '600' }}
                    >
                      {state.name} Hub →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
