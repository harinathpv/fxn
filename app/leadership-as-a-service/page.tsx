'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function LeadershipAsAService() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="label">Senior Leadership Access</span>
            <h1>Leadership as a Service</h1>
            <p className="lede">
              Flexible access to experienced, vetted fractional leaders across Finance, GTM, Technology, Product, People &amp; Operations. Purpose-built for founders and CEOs.
            </p>
            <div className="hero-actions">
              <a href="#enquiry" className="btn btn-primary">
                Explore Plans
              </a>
              <a href="#demo" className="btn btn-outline light">
                Book a Demo
              </a>
            </div>
            <div className="hero-proof">
              <div>
                <div className="num">32+</div>
                <div className="cap">Active Fractional Leaders</div>
              </div>
              <div>
                <div className="num">₹2.5Cr+</div>
                <div className="cap">Combined Experience</div>
              </div>
              <div>
                <div className="num">6</div>
                <div className="cap">Functional Domains</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <svg
              className="node-svg"
              viewBox="0 0 440 440"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Outer circle */}
              <circle
                className="core"
                cx="220"
                cy="220"
                r="200"
              />

              {/* Center node */}
              <circle
                className="fn-node"
                cx="220"
                cy="220"
                r="48"
                fill="var(--navy-deep)"
              />
              <text
                x="220"
                y="226"
                textAnchor="middle"
                className="center-label"
              >
                Your
              </text>
              <text
                x="220"
                y="246"
                textAnchor="middle"
                className="center-label"
              >
                Company
              </text>

              {/* Functional nodes */}
              {[
                {
                  x: 220,
                  y: 40,
                  label: 'Finance',
                  color: 'var(--fn-finance)',
                  angle: 0,
                },
                {
                  x: 380,
                  y: 100,
                  label: 'GTM',
                  color: 'var(--fn-gtm)',
                  angle: 60,
                },
                {
                  x: 380,
                  y: 340,
                  label: 'Tech',
                  color: 'var(--fn-tech)',
                  angle: 120,
                },
                {
                  x: 220,
                  y: 400,
                  label: 'Product',
                  color: 'var(--fn-product)',
                  angle: 180,
                },
                {
                  x: 60,
                  y: 340,
                  label: 'People',
                  color: 'var(--fn-people)',
                  angle: 240,
                },
                {
                  x: 60,
                  y: 100,
                  label: 'Ops',
                  color: 'var(--fn-ops)',
                  angle: 300,
                },
              ].map((node, idx) => (
                <g key={idx}>
                  <line
                    x1="220"
                    y1="220"
                    x2={node.x}
                    y2={node.y}
                    stroke="var(--line)"
                    strokeWidth="1"
                    strokeDasharray="4,2"
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="32"
                    className="fn-node"
                    fill={node.color}
                  />
                  <text
                    x={node.x}
                    y={node.y}
                    textAnchor="middle"
                    dy="0.3em"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* WHY LAAS */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="label amber">Why Leadership as a Service</span>
            <h2>Access without obligation. Expertise on-demand.</h2>
            <p>
              Fractional leadership lets you access expensive expertise when you need it — whether
              for 10 hours a month or embedded weekly for transformation. No hiring risk. Proven
              experience. Aligned incentives.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            <div>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  marginBottom: '14px',
                  backgroundColor: 'var(--fn-finance)',
                  borderRadius: '4px',
                }}
              ></div>
              <h3>Cost Effective</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Fractional roles cost 40-60% less than full-time equivalents. No bench, benefits, or
                severance costs.
              </p>
            </div>

            <div>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  marginBottom: '14px',
                  backgroundColor: 'var(--fn-gtm)',
                  borderRadius: '4px',
                }}
              ></div>
              <h3>Proven Operators</h3>
              <p style={{ fontSize: '0.95rem' }}>
                All leaders have 15+ years experience and proven track records. Reference-checked
                and outcomes-focused.
              </p>
            </div>

            <div>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  marginBottom: '14px',
                  backgroundColor: 'var(--fn-tech)',
                  borderRadius: '4px',
                }}
              ></div>
              <h3>Speed to Impact</h3>
              <p style={{ fontSize: '0.95rem' }}>
                No hiring, no onboarding. Leaders are immediately productive and working toward
                concrete outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="enquiry" className="warm">
        <div className="wrap">
          <div className="section-head">
            <span className="label">Three Plans to Choose From</span>
            <h2>Choose the engagement model that fits your stage.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {[
              {
                name: 'Hourly Access',
                desc: 'Ad-hoc guidance and problem-solving',
                price: '₹2,000—4,000',
                perunit: 'per hour',
                cta: 'Book Hours',
                features: [
                  'Reserve time in bulk',
                  'Sync calls, async feedback',
                  'No minimum commitment',
                  'Cancel anytime',
                ],
                color: 'var(--fn-finance)',
              },
              {
                name: 'Monthly Retainer',
                desc: 'Ongoing leadership support',
                price: '₹2.5—5Lakh',
                perunit: 'per month',
                cta: 'Explore Plans',
                features: [
                  '20—40 hours / month',
                  'Flexible schedule',
                  'Embedded advisory',
                  '6-month minimum',
                ],
                color: 'var(--fn-gtm)',
                highlight: true,
              },
              {
                name: 'Custom Engagement',
                desc: 'Defined project or transformation',
                price: 'Bespoke',
                perunit: 'outcomes-based',
                cta: 'Discuss Scope',
                features: [
                  'Full-time equivalent possible',
                  'Dedicated lead + support team',
                  'Milestone-based pricing',
                  'Success guarantees',
                ],
                color: 'var(--fn-tech)',
              },
            ].map((plan) => (
              <div
                key={plan.name}
                style={{
                  border: `1px solid var(--line)`,
                  borderTop: `4px solid ${plan.color}`,
                  padding: '32px',
                  background: plan.highlight ? 'var(--paper)' : 'transparent',
                }}
              >
                {plan.highlight && (
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      color: 'var(--amber)',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ marginBottom: '8px' }}>{plan.name}</h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '18px', color: 'var(--grey)' }}>
                  {plan.desc}
                </p>
                <div
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: '1.8rem',
                    marginBottom: '4px',
                  }}
                >
                  {plan.price}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--grey-light)', marginBottom: '24px' }}>
                  {plan.perunit}
                </div>
                <ul style={{ marginBottom: '28px' }}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        fontSize: '13.5px',
                        marginBottom: '10px',
                        display: 'flex',
                        gap: '8px',
                      }}
                    >
                      <span style={{ color: plan.color }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '56px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--grey)', marginBottom: '16px' }}>
              Want to test-drive a leader before committing?
            </p>
            <a href="#trial" className="btn btn-outline">
              Start with a 10-hour trial
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="label amber">Simple Onboarding</span>
            <h2>From discovery to impact in days.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {['Discovery Call', 'Leader Matching', 'Kickoff Sync', 'Impact Begins'].map(
              (step, idx) => (
                <div key={idx}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--navy-deep)',
                      color: 'var(--ivory)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Fraunces', serif",
                      fontSize: '1.1rem',
                      marginBottom: '12px',
                    }}
                  >
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>{step}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--grey)' }}>
                    {idx === 0 && 'Understand your needs & goals'}
                    {idx === 1 && 'Match ideal leader to your context'}
                    {idx === 2 && 'Plan first 90 days together'}
                    {idx === 3 && 'Execute & measure impact'}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <span className="label on-dark">Ready to Get Started?</span>
            <h2 style={{ marginBottom: '18px' }}>Let&apos;s find the right leader for your stage.</h2>
            <p>
              Book a 30-minute discovery call. We&apos;ll discuss your needs, constraints, and find the
              perfect match from the FxN network.
            </p>
            <a href="https://calendly.com/fxn/discovery" target="_blank" className="btn btn-primary" style={{ marginTop: '26px' }}>
              Schedule Discovery Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
