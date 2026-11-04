'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FaqItem {
  question: string;
  answer: string;
  highlight?: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Is Founders Grant really $0? Why is there no catch?',
    answer:
      'Yes, 100% of the software engineering, custom Next.js development, local SEO optimization, and AI automation setup is provided at zero financial cost ($0.00). We do not charge retainers, bill surprise hosting markups, or take company equity. In exchange, all we ask is: (1) an authentic 2-minute video review upon live launch, and (2) permission to feature your verified growth benchmarks in our public case studies.',
    highlight: '$0 Cash Cost · No Invoicing · No Retainers',
  },
  {
    question: 'Who owns the intellectual property, code, and customer data?',
    answer:
      'Your data is 100% your data. All customer records, inbound leads, domain registrations, content, and brand assets belong exclusively to you forever. DevMellio LLC retains the underlying software code, proprietary architecture, and engineering frameworks, awarding you a fully deployed, turnkey production platform to operate your business at $0 without ongoing software licensing fees or lock-in.',
    highlight: '100% Founder Data Sovereignty · DevMellio Software IP',
  },
  {
    question: 'What types of founders and businesses qualify?',
    answer:
      'We prioritize bootstrapped entrepreneurs, local trade services (e.g. general contractors, plumbers, electricians, HVAC), independent craftspeople, hospitality innovators, and early-stage software founders who have a clear operational bottleneck and genuine community impact. We look for builders who are executing and simply need an enterprise digital foundation to scale.',
    highlight: 'Trades, Bootstrapped Founders, Local Services & Creatives',
  },
  {
    question: 'How long does the engineering sprint take from kickoff to launch?',
    answer:
      'Every in-kind grant is delivered in an agile 7 to 14-day engineering sprint. Because we focus on eliminating your single highest-leverage bottleneck (e.g., launching a sub-second web front door, setting up automated missed-call SMS booking, or dominating the local Google Map pack), we ship production code quickly without months of agency bureaucracy.',
    highlight: '7–14 Day Rapid Sprint to Production',
  },
  {
    question: 'How are grant applicants selected and reviewed?',
    answer:
      'Applications are reviewed every Friday on a rolling basis across our 12 state chapters (with priority focus on the Colorado Anchor Cluster and top metropolitan hubs). Selection is based on: (1) clarity and urgency of your software bottleneck, (2) community or market impact, and (3) mutual commitment to record a video review upon launch.',
    highlight: 'Weekly Rolling Review · 8 of 10 Cohort Slots Open',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" style={{ padding: '5rem 0', background: '#ffffff', borderTop: '1px solid var(--apple-border)', borderBottom: '1px solid var(--apple-border)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Clear Answers</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Direct, transparent facts about how the Founders Grant in-kind initiative operates.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="faq-accordion-item"
                style={{
                  background: isOpen ? 'var(--apple-surface)' : '#ffffff',
                  border: '1px solid var(--apple-border)',
                  borderRadius: 'var(--radius-squircle-md)',
                  transition: 'all 0.2s ease',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="faq-accordion-header"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--apple-text-primary)', letterSpacing: '-0.01em', paddingRight: '1rem' }}>
                    {faq.question}
                  </span>
                  <span 
                    style={{ 
                      fontSize: '1.3rem', 
                      color: 'var(--apple-blue)', 
                      fontWeight: '400',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-answer-${index}`}
                    style={{ 
                      padding: '0 1.5rem 1.5rem 1.5rem', 
                      color: 'var(--apple-text-secondary)',
                      fontSize: '1rem',
                      lineHeight: '1.65',
                      borderTop: '1px solid rgba(0,0,0,0.04)',
                      paddingTop: '1rem'
                    }}
                  >
                    <p style={{ marginBottom: '0.75rem' }}>{faq.answer}</p>
                    {faq.highlight && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(52, 199, 89, 0.08)', border: '1px solid rgba(52, 199, 89, 0.25)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: '0.8rem', color: '#1b8738', fontWeight: '600' }}>
                        <span>⚡</span>
                        <span>{faq.highlight}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'var(--apple-text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Have a question about your specific venture or technical stack?
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/apply" className="btn btn-emerald">
              Submit Your Grant Application →
            </Link>
            <Link href="/legal/terms" className="btn btn-secondary">
              Review Full In-Kind Agreement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
