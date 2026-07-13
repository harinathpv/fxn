'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="label">India&apos;s Shared Leadership Platform</span>
            <h1>Build the leadership your business needs. Without building the overhead it doesn&apos;t.</h1>
            <p className="lede">
              FxN gives growing Indian companies access to senior leadership through outcome-led Leadership Pods and Leadership as a Service.
            </p>
            <div className="hero-actions">
              <a href="/leadership-as-a-service" className="btn btn-primary">
                Explore FxN
              </a>
              <a href="/member-directory" className="btn btn-outline light">
                Find Your Leadership Model
              </a>
            </div>
            <div className="hero-proof">
              <div>
                <div className="num">14</div>
                <div className="cap">Active FxN Partners</div>
              </div>
              <div>
                <div className="num">6+</div>
                <div className="cap">Leadership Disciplines</div>
              </div>
              <div>
                <div className="num">1</div>
                <div className="cap">Shared Operating Model</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <svg
              className="node-svg"
              viewBox="0 0 440 440"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx="220" cy="220" r="200" className="core" />
              <circle cx="220" cy="220" r="48" className="fn-node" fill="var(--navy-deep)" />
              <text x="220" y="226" textAnchor="middle" className="center-label">FxN</text>
              <text x="220" y="246" textAnchor="middle" className="center-label" style={{ fontSize: '11px' }}>Pods + LaAS</text>

              {[
                { x: 220, y: 40, label: 'Strategy', color: 'var(--fn-gtm)' },
                { x: 380, y: 100, label: 'Revenue', color: 'var(--fn-finance)' },
                { x: 380, y: 340, label: 'Finance', color: 'var(--fn-finance)' },
                { x: 220, y: 400, label: 'Technology', color: 'var(--fn-tech)' },
                { x: 60, y: 340, label: 'People', color: 'var(--fn-people)' },
                { x: 60, y: 100, label: 'Operations', color: 'var(--fn-ops)' },
              ].map((node, idx) => (
                <g key={idx}>
                  <line x1="220" y1="220" x2={node.x} y2={node.y} stroke="var(--line)" strokeWidth="1" strokeDasharray="4,2" />
                  <circle cx={node.x} cy={node.y} r="32" className="fn-node" fill={node.color} />
                  <text x={node.x} y={node.y} textAnchor="middle" dy="0.3em" style={{ fontSize: '12px' }}>{node.label}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* WHY FXN */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="label amber">India&apos;s Shared Leadership Platform</span>
            <h2>When should you use FxN?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            <div>
              <h3>Early Stage Founders</h3>
              <p style={{ fontSize: '0.95rem' }}>Access battle-tested operators without permanent overhead. Get GTM, product and fundraising mentorship on-demand.</p>
            </div>
            <div>
              <h3>Growth Stage Companies</h3>
              <p style={{ fontSize: '0.95rem' }}>Build your founding team. Get function-specific leadership for Finance, People, Ops or Technology without hiring risk.</p>
            </div>
            <div>
              <h3>Pre-IPO Businesses</h3>
              <p style={{ fontSize: '0.95rem' }}>Scale operations and build deep expertise. Get fractional CFOs, COOs and board-ready leaders aligned with your roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PODS */}
      <section id="pods" className="warm">
        <div className="wrap">
          <div className="section-head">
            <span className="label">FxN Leadership Pods</span>
            <h2>Outcome-led pods. Skin in the game.</h2>
            <p>Assemble a pod of 3—5 senior leaders aligned on a shared goal. Monthly pods, 12-month commitment. Success is measured. Incentives are aligned.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              { title: 'Go-to-Market Pod', desc: 'Accelerate market entry & hit revenue targets' },
              { title: 'Product Pod', desc: 'Ship faster. Build product leadership depth.' },
              { title: 'Fundraising Pod', desc: 'Close your next round (or Series A)' },
            ].map((pod) => (
              <div
                key={pod.title}
                style={{
                  border: '1px solid var(--line)',
                  padding: '24px',
                  cursor: 'pointer',
                }}
              >
                <h3>{pod.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{pod.desc}</p>
                <a href="#enquiry" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--teal)' }}>
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners">
        <div className="wrap">
          <div className="section-head">
            <span className="label amber">Our Network</span>
            <h2>Companies trusting FxN</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              'Company 1', 'Company 2', 'Company 3', 'Company 4',
              'Company 5', 'Company 6', 'Company 7', 'Company 8',
              'Company 9', 'Company 10', 'Company 11', 'Company 12',
              'Company 13', 'Company 14',
            ].map((company, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--line)',
                  padding: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '120px',
                  background: 'var(--paper)',
                  color: 'var(--grey-light)',
                  textAlign: 'center',
                }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="dark">
        <div className="wrap">
          <div className="section-head">
            <span className="label on-dark">FxN Insights</span>
            <h2>Latest from the collective</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }}>
            {[
              'Article 1: Leadership in Transition',
              'Article 2: Scaling Without Hiring',
              'Article 3: Building Board-Ready Operations',
              'Article 4: Fractional Economics',
              'Article 5: GTM Velocity',
              'Article 6: Fundraising 2026',
              'Article 7: Building Culture at Scale',
              'Article 8: Tech Leadership Challenges',
            ].map((article, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--line-dark)',
                  background: 'var(--navy-soft)',
                  padding: '20px',
                  borderRadius: '4px',
                }}
              >
                <h3 style={{ fontSize: '1rem', color: 'var(--ivory)' }}>{article}</h3>
                <p style={{ fontSize: '12px', color: '#8B97A5', marginTop: '8px' }}>3 min read</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <a href="/events-social" className="btn btn-primary">
              Read All Insights
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final-cta">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <span className="label amber">Let&apos;s Talk</span>
          <h2 style={{ marginBottom: '18px' }}>Ready to find the right fractional leader?</h2>
          <p style={{ fontSize: '1.02rem' }}>
            Book a 30-minute discovery call with the FxN team. We&apos;ll understand your challenges and present the best leaders from our network.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
            <a href="https://calendly.com/fxn/discovery" target="_blank" className="btn btn-primary">
              Schedule Discovery Call
            </a>
            <a href="/member-directory" className="btn btn-outline">
              Explore the Directory
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
