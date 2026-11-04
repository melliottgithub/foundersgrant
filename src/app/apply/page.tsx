'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { GRANT_PACKAGES } from '@/data/packages';
import { CITIES } from '@/data/cities';

function ApplicationFormContent() {
  const searchParams = useSearchParams();
  const initialCity = searchParams.get('city') || '';
  const initialPackage = searchParams.get('package') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    city: initialCity,
    state: '',
    website: '',
    desiredPackage: initialPackage,
    founderStory: '',
    bottleneck: '',
    videoAgreement: false,
    termsAgreement: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialCity) {
      const match = CITIES.find((c) => c.name.toLowerCase() === initialCity.toLowerCase());
      if (match) {
        setFormData((prev) => ({ ...prev, city: match.name, state: match.stateCode }));
      }
    }
  }, [initialCity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.videoAgreement || !formData.termsAgreement) {
      alert('Please agree to the video review commitment and the in-kind terms.');
      return;
    }

    setSubmitting(true);
    // Simulate instantaneous processing & persistent logging
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      if (typeof window !== 'undefined') {
        const stored = JSON.parse(localStorage.getItem('foundersgrant_applications') || '[]');
        stored.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('foundersgrant_applications', JSON.stringify(stored));
      }
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div className="form-card" style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🎉</div>
          <span className="section-eyebrow">Application Received</span>
          <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '1rem' }}>
            You’re In The Review Queue!
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Thank you, <strong style={{ color: '#fff' }}>{formData.fullName}</strong>. Your story for{' '}
            <strong style={{ color: '#fff' }}>{formData.businessName}</strong> has been prioritized for the current review cycle.
          </p>

          <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '1.5rem', borderRadius: '12px', textAlign: 'left', marginBottom: '2rem' }}>
            <h4 style={{ color: '#6ee7b7', marginBottom: '0.5rem', fontSize: '1rem' }}>What Happens Next?</h4>
            <ul style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1.25rem' }}>
              <li>Our engineering team evaluates submissions every Friday for readiness and community alignment.</li>
              <li>If selected, you’ll receive an invitation to our 10-day sprint scheduling call.</li>
              <li>Upon kickoff, we deploy your full software stack at $0 in-kind cost.</li>
            </ul>
          </div>

          <Link href="/" className="btn btn-emerald" style={{ padding: '0.85rem 2rem' }}>
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 1.5rem 6rem 1.5rem' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-eyebrow">2026 Cohort Application</span>
          <h1 className="hero-title" style={{ fontSize: '2.6rem', marginBottom: '0.75rem' }}>
            Apply for Your In-Kind Technology Grant
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Tell us about your venture and the single biggest software bottleneck holding you back.
            Selected projects receive full design, code, and deployment at $0 cost.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-card" id="grant-application-form">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Founder Full Name *</label>
              <input
                id="fullName"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Alex Morgan"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="businessName">Business or Venture Name *</label>
              <input
                id="businessName"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Peak Artisans LLC"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input
                id="email"
                type="email"
                required
                className="form-input"
                placeholder="founder@yourbusiness.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                required
                className="form-input"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="city">City / Metro *</label>
              <input
                id="city"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Denver or Austin"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="state">State (e.g. CO) *</label>
              <input
                id="state"
                type="text"
                required
                className="form-input"
                placeholder="CO"
                maxLength={2}
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value.toUpperCase() })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="website">Current Website or Social Profile (Optional)</label>
            <input
              id="website"
              type="text"
              className="form-input"
              placeholder="https://... or @instagram handle"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
            <span className="form-hint">Leave blank if you don’t have one yet — that’s why we exist.</span>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="desiredPackage">Desired In-Kind Grant Package *</label>
            <select
              id="desiredPackage"
              required
              className="form-select"
              value={formData.desiredPackage}
              onChange={(e) => setFormData({ ...formData, desiredPackage: e.target.value })}
            >
              <option value="">-- Choose Your Priority Package --</option>
              {GRANT_PACKAGES.map((pkg) => (
                <option key={pkg.id} value={pkg.name}>
                  {pkg.name} ({pkg.marketValue})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="founderStory">Your Story & Mission *</label>
            <textarea
              id="founderStory"
              required
              rows={4}
              className="form-textarea"
              placeholder="Tell us what you do, who you serve, and why you started this business..."
              value={formData.founderStory}
              onChange={(e) => setFormData({ ...formData, founderStory: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="bottleneck">What Is Your Single Biggest Tech Bottleneck? *</label>
            <textarea
              id="bottleneck"
              required
              rows={3}
              className="form-textarea"
              placeholder="e.g. I am losing leads because my site is slow, or I spend 3 hours every night manually answering customer messages..."
              value={formData.bottleneck}
              onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
            />
          </div>

          <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
            <label className="form-checkbox-label">
              <input
                type="checkbox"
                required
                className="form-checkbox"
                checked={formData.videoAgreement}
                onChange={(e) => setFormData({ ...formData, videoAgreement: e.target.checked })}
              />
              <span>
                <strong>The Mutual Exchange:</strong> I agree that if awarded this grant, I will actively participate in the 10-day sprint and record a 2-minute video review of the completed system.
              </span>
            </label>

            <label className="form-checkbox-label">
              <input
                type="checkbox"
                required
                className="form-checkbox"
                checked={formData.termsAgreement}
                onChange={(e) => setFormData({ ...formData, termsAgreement: e.target.checked })}
              />
              <span>
                I agree to the <Link href="/legal/terms" target="_blank" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>In-Kind Grant Terms & Limitation of Liability</Link> ($0 liability cap, provided AS-IS with 100% full IP code ownership granted to me).
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-emerald"
            style={{ width: '100%', padding: '1rem', fontSize: '1.05rem' }}
            id="submit-grant-application-btn"
          >
            {submitting ? 'Submitting Application...' : 'Submit Grant Application ($0 In-Kind) →'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>Loading application...</div>}>
      <ApplicationFormContent />
    </Suspense>
  );
}
