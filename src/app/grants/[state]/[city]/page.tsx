import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CITIES_MATRIX, getCity, getCitiesByState, getState } from '@/data/geo';
import { GRANT_PACKAGES } from '@/data/packages';

interface Props {
  params: Promise<{ state: string; city: string }>;
}

export async function generateStaticParams() {
  return CITIES_MATRIX.map((c) => ({
    state: c.stateSlug,
    city: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const city = getCity(stateSlug, citySlug);

  if (!city) {
    return {
      title: 'City Grant Not Found | Founders Grant',
    };
  }

  return {
    title: `${city.name}, ${city.stateCode} Small Business Tech & Web Grant | Founders Grant`,
    description: `Apply for $0 pro bono web development, custom software, and autonomous lead automations for ${city.name}, ${city.stateName} small business owners and creators.`,
    openGraph: {
      title: `${city.name} Founder Technology Infrastructure Grant`,
      description: `In-kind engineering grants awarded to ${city.name} small businesses and startups. Zero catch, zero invoicing.`,
    },
  };
}

export default async function CityGrantPage({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;
  const city = getCity(stateSlug, citySlug);
  const state = getState(stateSlug);

  if (!city || !state) {
    notFound();
  }

  const siblingCities = getCitiesByState(stateSlug).filter((c) => c.slug !== city.slug);
  const otherMetros = CITIES_MATRIX.filter((c) => c.stateSlug !== stateSlug).slice(0, 8);

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
      {
        '@type': 'ListItem',
        position: 4,
        name: city.name,
        item: `https://foundersgrant.org/grants/${state.slug}/${city.slug}`,
      },
    ],
  };

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* City Hero */}
      <section style={{ padding: '4.5rem 0 3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <nav className="apple-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="apple-breadcrumb-separator">/</span>
            <Link href="/grants">Regional Chapters</Link>
            <span className="apple-breadcrumb-separator">/</span>
            <Link href={`/grants/${state.slug}`}>{state.name}</Link>
            <span className="apple-breadcrumb-separator">/</span>
            <span className="apple-breadcrumb-current">{city.name}</span>
          </nav>

          <div className="pill-announcement">
            <span className="pill-dot"></span>
            <span>{city.name} Regional Chapter · {city.activeCycle}</span>
          </div>

          <h1 className="hero-title">
            {city.name} Small Business &amp; Founder <br />
            <span className="hero-gradient-text">Technology Grant</span>
          </h1>

          <p className="hero-subtext">
            {city.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link 
              href={`/apply?city=${encodeURIComponent(city.name)}&state=${encodeURIComponent(city.stateCode)}`} 
              className="btn btn-emerald"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}
            >
              Apply for {city.name} Grant →
            </Link>
            <a href="#packages" className="btn btn-secondary" style={{ padding: '0.9rem 1.8rem', fontSize: '1.05rem' }}>
              Review Grant Packages
            </a>
          </div>

          {/* Regional Context Banner */}
          <div className="stat-bar" style={{ textAlign: 'left' }}>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">{city.deadline}</span>
              <span className="stat-label">Review Deadline</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{city.awardedGrantsCount} Grants</span>
              <span className="stat-label">Awarded in {city.stateCode}</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{city.metroPopulation}</span>
              <span className="stat-label">Regional Population</span>
            </div>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">$0 Cost</span>
              <span className="stat-label">100% In-Kind Engineering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus & Evaluation Criteria Bento */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-2">
            <div className="glass-card">
              <span className="section-eyebrow">Local Chapter Mission</span>
              <h2 style={{ fontSize: '1.7rem', color: 'var(--apple-text-primary)', margin: '0.5rem 0 1rem 0', fontWeight: '700' }}>
                {city.focusTitle}
              </h2>
              <p style={{ color: 'var(--apple-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.98rem' }}>
                Whether you operate a local trade service, boutique studio, specialty culinary brand,
                or early-stage software venture in {city.name}, high agency fees should never stand between
                you and an enterprise-grade digital foundation.
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--apple-text-primary)', fontSize: '0.92rem', display: 'block', marginBottom: '0.65rem' }}>
                  Priority Technical Deliverables for {city.name}:
                </strong>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                  {city.priorityNeeds.map((need, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--apple-text-secondary)' }}>
                      <span style={{ color: 'var(--apple-blue)', fontWeight: 'bold' }}>✓</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong style={{ color: 'var(--apple-text-primary)', fontSize: '0.85rem', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Target Local Sectors:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {city.keyIndustries.map((ind, i) => (
                    <span key={i} className="city-pill-sm">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ background: 'var(--apple-surface)', border: '1px solid var(--apple-border)' }}>
              <span className="section-eyebrow">Selection Criteria</span>
              <h2 style={{ fontSize: '1.7rem', color: 'var(--apple-text-primary)', margin: '0.5rem 0 1rem 0', fontWeight: '700' }}>
                How {city.name} Applicants Are Chosen
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem', color: 'var(--apple-text-secondary)', fontSize: '0.94rem' }}>
                <div>
                  <strong style={{ color: 'var(--apple-text-primary)', display: 'block', marginBottom: '0.25rem' }}>
                    1. Specific Bottleneck vs. Vague Desires
                  </strong>
                  You know exactly what software problem is choking your growth (e.g. losing phone leads while on job sites, zero search footprint, or manual spreadsheet dispatching).
                </div>
                <div>
                  <strong style={{ color: 'var(--apple-text-primary)', display: 'block', marginBottom: '0.25rem' }}>
                    2. Community or Market Integrity
                  </strong>
                  Your business or venture actively serves the {city.name} community, demonstrates authentic craftsmanship, and has customer demand.
                </div>
                <div>
                  <strong style={{ color: 'var(--apple-text-primary)', display: 'block', marginBottom: '0.25rem' }}>
                    3. Accountability &amp; Mutual Review
                  </strong>
                  You commit to collaborating with our engineering lead during the 7–14 day sprint and recording an honest 2-minute video review upon production launch.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Packages in this City */}
      <section id="packages" style={{ padding: '3.5rem 0', background: 'var(--apple-surface)', borderTop: '1px solid var(--apple-border)', borderBottom: '1px solid var(--apple-border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">In-Kind Allocations</span>
            <h2 className="section-title">Select Your Desired Grant Package</h2>
            <p className="section-desc">
              All packages are 100% pro bono with complete IP and code ownership assigned to you.
            </p>
          </div>

          <div className="grid-2">
            {GRANT_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="glass-card package-card" style={{ background: '#ffffff' }}>
                <div>
                  <span className="package-badge-tag">{pkg.badge}</span>
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-val">{pkg.marketValue}</div>
                  <p className="package-summary">{pkg.summary}</p>
                </div>
                <div style={{ borderTop: '1px solid var(--apple-border)', paddingTop: '1.25rem', marginTop: '1rem' }}>
                  <Link 
                    href={`/apply?city=${encodeURIComponent(city.name)}&state=${encodeURIComponent(city.stateCode)}&package=${encodeURIComponent(pkg.name)}`}
                    className="btn btn-secondary"
                    style={{ width: '100%' }}
                  >
                    Apply for {pkg.name} in {city.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sibling Cities in the Same State */}
      {siblingCities.length > 0 && (
        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--apple-text-primary)', fontWeight: '700', margin: 0 }}>
                Other {state.name} Regional Chapters
              </h3>
              <Link href={`/grants/${state.slug}`} style={{ fontSize: '0.88rem', color: 'var(--apple-blue)', fontWeight: '600' }}>
                View All {state.name} Hubs →
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {siblingCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/grants/${c.stateSlug}/${c.slug}`}
                  className="city-pill-sm"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
                >
                  {c.name}, {c.stateCode}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Major National Metros */}
      <section style={{ padding: '3.5rem 0', borderTop: '1px solid var(--apple-border)' }}>
        <div className="container">
          <h3 style={{ fontSize: '1.15rem', color: 'var(--apple-text-muted)', marginBottom: '1.25rem', textAlign: 'center', fontWeight: '600' }}>
            National Metropolitan Hubs
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}>
            {otherMetros.map((c) => (
              <Link 
                key={`${c.stateSlug}-${c.slug}`} 
                href={`/grants/${c.stateSlug}/${c.slug}`}
                className="city-pill-sm"
              >
                {c.name}, {c.stateCode}
              </Link>
            ))}
            <Link
              href="/grants"
              className="city-pill-sm"
              style={{ color: 'var(--apple-blue)', fontWeight: '600', borderColor: 'rgba(0,113,227,0.3)' }}
            >
              All 23 Hubs Directory →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
