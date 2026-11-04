import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-Kind Grant Agreement & Legal Terms | Founders Grant',
  description: 'Legal terms, limitation of liability, and mutual intellectual property terms for in-kind technology grants awarded by FoundersGrant.org.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '5rem 1.5rem 6rem 1.5rem' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.5rem' }}>
          <span className="section-eyebrow">Program Governance</span>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            In-Kind Technology Grant Agreement
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Last Updated: November 2026 · Governing Entity: DevMellio LLC (Denver, CO)
          </p>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.7', color: '#cbd5e1', fontSize: '0.95rem' }}>
          <section>
            <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              1. Nature of the In-Kind Grant (Non-Monetary)
            </h2>
            <p>
              FoundersGrant.org is an independent technology empowerment initiative engineered and managed by 
              <strong> DevMellio LLC</strong>, based in Denver, Colorado. All grants provided under this initiative 
              are strictly <strong>in-kind professional technology engineering, software architecture, web development, 
              and workflow automation services</strong>. 
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              No cash funds, loans, equity securities, or direct monetary transfers are awarded. The market values cited 
              (e.g., $3,500 to $8,500) represent the fair market value of equivalent private agency engineering time delivered at $0 cost to the recipient.
            </p>
          </section>

          <section id="liability">
            <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              2. Complete Limitation of Liability ($0 Liability Cap)
            </h2>
            <p style={{ textTransform: 'uppercase', color: '#fca5a5', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Important Legal Protection for Both Parties
            </p>
            <p>
              BECAUSE ALL IN-KIND SERVICES AND CODE ARE PROVIDED AT ZERO FINANCIAL COST TO THE APPLICANT, 
              <strong> IN NO EVENT SHALL DEVMELIIO LLC, FOUNDERSGRANT.ORG, ITS OPERATORS, OFFICERS, CONTRACTORS, OR AGENTS 
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</strong>, 
              INCLUDING BUT NOT LIMITED TO LOSS OF REVENUE, PROFITS, BUSINESS DATA, LEADS, OR THIRD-PARTY CLAIMS ARISING OUT OF 
              OR IN CONNECTION WITH THE SOFTWARE, AUTOMATIONS, CODE, OR IMPLEMENTATION.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              THE MAXIMUM AGGREGATE LIABILITY OF DEVMELIIO LLC FOR ANY AND ALL CLAIMS RELATING TO AN IN-KIND GRANT SHALL NOT EXCEED 
              <strong> ZERO DOLLARS ($0.00)</strong> OR THE ACTUAL MONETARY AMOUNT PAID BY RECIPIENT TO DEVMELIIO LLC (WHICH IS $0.00).
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              3. "AS-IS" Software Warranty Disclaimer
            </h2>
            <p>
              All software, websites, scripts, APIs, webhooks, and database configurations delivered under the Founders Grant 
              program are provided strictly <strong>"AS-IS"</strong> and <strong>"AS-AVAILABLE"</strong> without warranty of any kind, 
              express or implied. 
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              While all systems are built to modern enterprise standards (e.g. 100/100 Lighthouse performance, responsive mobile safe zones, 
              and zero-taint execution), DevMellio LLC does not warrant that third-party APIs (such as Google Maps, Stripe, or Twilio) 
              will remain uninterrupted or error-free permanently.
            </p>
          </section>

          <section id="ip">
            <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              4. Intellectual Property &amp; Code Ownership
            </h2>
            <p>
              <strong>Your Business Stays Yours:</strong> The grant recipient retains 100% full ownership of their pre-existing trademarks, 
              customer lists, domain names, and brand assets.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              <strong>Perpetual Code Ownership:</strong> Upon completion of the sprint, DevMellio LLC transfers the custom codebase 
              directly to the recipient’s repository, granting an irrevocable, perpetual, royalty-free, worldwide license to modify, 
              scale, and deploy the delivered code without ongoing licensing fees or vendor lock-in.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              5. The Mutual Exchange &amp; Publicity Release
            </h2>
            <p>
              The grant recipient acknowledges that in exchange for receiving thousands of dollars in pro bono engineering, 
              the recipient agrees to:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>Participate in communication milestones during the 10-day sprint cycle.</li>
              <li>Provide honest, authentic feedback upon testing the completed build.</li>
              <li>Record a brief 2-minute video review sharing their experience within 14 days of launch.</li>
              <li>Grant FoundersGrant.org permission to publish public case studies featuring their project metrics and before/after improvements.</li>
            </ul>
          </section>

          <section id="disclosure">
            <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              6. Non-Charitable In-Kind Status
            </h2>
            <p>
              FoundersGrant.org is a private community initiative run by DevMellio LLC and is not a 501(c)(3) tax-exempt public charity. 
              Recipients are not making a tax-deductible charitable contribution, nor does DevMellio LLC claim tax deduction for donated time.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of the 
              <strong> State of Colorado</strong>, without regard to its conflict of law principles. Any dispute arising 
              hereunder shall be resolved exclusively in the state or federal courts located in the City and County of Denver, Colorado.
            </p>
          </section>

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/apply" className="btn btn-emerald">
              Return to Grant Application →
            </Link>
            <Link href="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
