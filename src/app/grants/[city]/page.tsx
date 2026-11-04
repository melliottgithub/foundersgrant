import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CITIES } from '@/data/cities';
import { GRANT_PACKAGES } from '@/data/packages';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);

  if (!city) {
    return {
      title: 'City Grant Not Found | Founders Grant',
    };
  }

  return {
    title: `${city.name}, ${city.stateCode} Small Business Tech & Web Grant | Founders Grant`,
    description: `Apply for $0 pro bono web development, custom software, and autonomous lead automations for ${city.name}, ${city.state} small business owners and creators.`,
    openGraph: {
      title: `${city.name} Founder Technology Infrastructure Grant`,
      description: `In-kind engineering grants awarded to ${city.name} small businesses and startups. Zero catch, zero invoicing.`,
    },
  };
}

export default async function CityGrantPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = CITIES.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  return (
    <div style={{ paddingBottom: '6rem' }}>
      {/* City Hero */}
      <section style={{ padding: '5rem 0 3.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="pill-announcement">
            <span className="pill-dot"></span>
            <span>{city.name} Regional Chapter · {city.activeCycle}</span>
          </div>

          <h1 className="hero-title">
            {city.name} Small Business & Founder <br />
            <span className="hero-gradient-text">Technology Grant</span>
          </h1>

          <p className="hero-subtext">
            {city.description}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link 
              href={`/apply?city=${encodeURIComponent(city.name)}`} 
              className="btn btn-emerald"
              style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
            >
              Apply for {city.name} Grant →
            </Link>
            <Link href="/#packages" className="btn btn-secondary">
              Review Grant Packages
            </Link>
          </div>

          {/* Regional Context Banner */}
          <div className="stat-bar" style={{ textAlign: 'left' }}>
            <div className="stat-item">
              <span className="stat-value highlight-emerald">{city.deadline}</span>
              <span className="stat-label">Cycle Review Deadline</span>
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

      {/* Regional Focus & Priority Areas */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-2">
            <div className="glass-card">
              <span className="section-eyebrow">Local Chapter Mission</span>
              <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: '0.5rem 0 1rem 0' }}>
                {city.focusTitle}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Whether you operate a local trade service, boutique studio, specialty culinary brand,
                or early-stage software venture in {city.name}, high agency fees should never stand between
                you and an enterprise-grade digital foundation.
              </p>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                <strong style={{ color: '#fff' }}>Priority Focus Areas for {city.name}:</strong>
                <ul style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none' }}>
                  {city.priorityNeeds.map((need, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-emerald)', fontWeight: 'bold' }}>✓</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card" style={{ background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.25)' }}>
              <span className="section-eyebrow">Evaluation Criteria</span>
              <h2 style={{ fontSize: '1.6rem', color: '#fff', margin: '0.5rem 0 1rem 0' }}>
                How {city.name} Applicants Are Selected
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                <div>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>
                    1. Genuine Need & Clear Bottleneck
                  </strong>
                  You have a clear, specific bottleneck (e.g. losing phone leads, no professional portfolio, or broken manual spreadsheets).
                </div>
                <div>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>
                    2. Community or Market Impact
                  </strong>
                  Your business or venture actively serves the {city.name} community or brings distinct local craftsmanship to the market.
                </div>
                <div>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '0.2rem' }}>
                    3. Readiness & Accountability
                  </strong>
                  You agree to collaborate with our engineering team during the 10-day sprint and record a 2-minute video review upon completion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Packages in this City */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Available In {city.name}</span>
            <h2 className="section-title">Select Your Desired In-Kind Package</h2>
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
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginTop: '1rem' }}>
                  <Link 
                    href={`/apply?city=${encodeURIComponent(city.name)}&package=${encodeURIComponent(pkg.name)}`}
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

      {/* Other Regional Chapters */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>
            Explore Other Regional Chapters
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <Link 
                key={c.slug} 
                href={`/grants/${c.slug}`}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  color: '#cbd5e1',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease',
                }}
              >
                {c.name}, {c.stateCode}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
