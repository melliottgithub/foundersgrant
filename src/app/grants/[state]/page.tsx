import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { STATES, getState, getCitiesByState } from '@/data/geo';
import { GRANT_PACKAGES } from '@/data/packages';

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return STATES.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);

  if (!state) {
    return {
      title: 'State Chapter Not Found | Founders Grant',
    };
  }

  return {
    title: `${state.name} Small Business Tech & Web Grants (${state.activeCycle}) | Founders Grant`,
    description: `Apply for $0 pro bono web development, custom software, and autonomous lead automations for ${state.name} small business owners and creators. Zero invoice, zero catch.`,
    openGraph: {
      title: `${state.name} Founder Technology Infrastructure Grant`,
      description: `In-kind engineering grants awarded to ${state.name} small businesses, local trades, and bootstrapped startups.`,
    },
  };
}

export default async function StateGrantPage({ params }: Props) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);

  if (!state) {
    notFound();
  }

  const cities = getCitiesByState(state.slug);
  const otherStates = STATES.filter((s) => s.slug !== state.slug);

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
        name: 'Regional Chapters',
        item: 'https://foundersgrant.org/grants',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: state.name,
        item: `https://foundersgrant.org/grants/${state.slug}`,
      },
    ],
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* State Hero */}
      <section style={{ padding: '4.5rem 0 3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <nav className="apple-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="apple-breadcrumb-separator">/</span>
            <Link href="/grants">Regional Chapters</Link>
            <span className="apple-breadcrumb-separator">/</span>
            <span className="apple-breadcrumb-current">{state.name}</span>
          </nav>

          <div className="pill-announcement">
            <span className="pill-dot"></span>
            <span>{state.name} Statewide Chapter · {state.activeCycle}</span>
          </div>

          <h1 className="hero-title">
            {state.name} Small Business &amp; Founder <br />
            <span className="hero-gradient-text">Technology Grant</span>
          </h1>

          <p className="hero-subtext">
            {state.description} Bootstrapped founders, trade specialists, and neighborhood innovators across {state.name} receive full-stack Next.js web applications, Google Maps SEO architecture, and AI workflow automations at <strong>$0 cost</strong>.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link 
              href={`/apply?state=${encodeURIComponent(state.code)}`} 
              className="btn btn-emerald"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}
            >
              Apply for {state.name} Grant →
            </Link>
            <a href="#cities" className="btn btn-secondary" style={{ padding: '0.9rem 1.8rem', fontSize: '1.05rem' }}>
              Explore {cities.length} {state.name} City Hubs
            </a>
          </div>

          {/* Regional Context Banner */}
          <div className="stat-bar" style={{ textAlign: 'left' }}>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">{state.deadline}</span>
              <span className="stat-label">Review Deadline</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{state.awardedGrantsCount} Grants</span>
              <span className="stat-label">Awarded in {state.code}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{state.totalSmallBusinesses}</span>
              <span className="stat-label">Small Businesses</span>
            </div>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">$0 Cost</span>
              <span className="stat-label">100% In-Kind Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* State Metro Cities Hubs */}
      <section id="cities" style={{ padding: '4rem 0', background: 'var(--apple-surface)', borderTop: '1px solid var(--apple-border)', borderBottom: '1px solid var(--apple-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Local City Hubs</span>
            <h2 className="section-title">Active Metropolitan Chapters in {state.name}</h2>
            <p className="section-desc">
              Applications are reviewed with local context. Select your metropolitan area to view tailored industry priorities and neighborhood criteria.
            </p>
          </div>

          <div className="grid-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/grants/${state.slug}/${city.slug}`}
                className="city-card"
                id={`city-hub-${city.slug}`}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <div className="city-name">{city.name}</div>
                    <span className="mini-badge">{city.stateCode}</span>
                  </div>
                  <div className="city-state">Metro Pop: {city.metroPopulation}</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--apple-text-secondary)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                    {city.focusTitle}
                  </p>

                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--apple-text-muted)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '0.4rem' }}>
                      Priority Focus:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {city.priorityNeeds.slice(0, 2).map((need, i) => (
                        <span key={i} className="city-pill-sm">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--apple-border)', paddingTop: '0.85rem' }}>
                  <span className="city-cycle-badge">
                    <span className="pill-dot" style={{ width: '6px', height: '6px' }}></span>
                    {city.activeCycle}
                  </span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--apple-blue)', fontWeight: '600' }}>
                    View City Hub →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Available Packages in this State */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Available Across {state.name}</span>
            <h2 className="section-title">In-Kind Grant Packages Awarded</h2>
            <p className="section-desc">
              Every package is delivered as a turnkey 7–14 day engineering sprint. 100% intellectual property transfer on day one.
            </p>
          </div>

          <div className="grid-2">
            {GRANT_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="glass-card package-card">
                <div>
                  <span className="package-badge-tag">{pkg.badge}</span>
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-val">{pkg.marketValue}</div>
                  <p className="package-summary">{pkg.summary}</p>
                </div>
                <div style={{ borderTop: '1px solid var(--apple-border)', paddingTop: '1.25rem', marginTop: '1rem' }}>
                  <Link 
                    href={`/apply?state=${encodeURIComponent(state.code)}&package=${encodeURIComponent(pkg.name)}`}
                    className="btn btn-secondary"
                    style={{ width: '100%' }}
                  >
                    Apply for {pkg.name} in {state.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other States Directory */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid var(--apple-border)' }}>
        <div className="container">
          <h3 style={{ fontSize: '1.2rem', color: 'var(--apple-text-primary)', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '700' }}>
            Explore Other State Chapters
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', justifyContent: 'center' }}>
            {otherStates.map((s) => (
              <Link 
                key={s.slug} 
                href={`/grants/${s.slug}`}
                className="city-pill-sm"
                style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
              >
                {s.name} ({s.code})
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
