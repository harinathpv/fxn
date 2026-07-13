import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import HeroSection from '@/app/components/HeroSection'
import RevealOnScroll from '@/app/components/RevealOnScroll'
import { pricingTiers } from '@/app/data/pricing'
import { caseStudies } from '@/app/data/case-studies'
import Image from 'next/image'

export default function LeadershipAsAService() {
  const services = [
    {
      id: 1,
      title: 'Executive Advisory',
      description: 'One-on-one strategic guidance from experienced C-suite executives.',
      details: [
        'Personalized strategy sessions',
        'Market insights and analysis',
        'Decision-making frameworks',
        'Risk assessment support',
        'Growth acceleration planning',
      ],
      icon: '💼',
    },
    {
      id: 2,
      title: 'Board Readiness',
      description: 'Preparation for board positions with mentorship and training.',
      details: [
        'Board governance training',
        'Committee experience',
        'Financial acumen development',
        'Stakeholder relations',
        'Crisis management protocols',
      ],
      icon: '🎯',
    },
    {
      id: 3,
      title: 'Team Coaching',
      description: 'Enhance leadership team dynamics and performance.',
      details: [
        'Team effectiveness workshops',
        'Conflict resolution',
        'Communication enhancement',
        'Trust building',
        'Performance optimization',
      ],
      icon: '👥',
    },
    {
      id: 4,
      title: 'Organizational Design',
      description: 'Strategic restructuring for optimal performance and growth.',
      details: [
        'Org structure analysis',
        'Role definition and clarity',
        'Process optimization',
        'Culture alignment',
        'Change management',
      ],
      icon: '🏢',
    },
    {
      id: 5,
      title: 'Talent Development',
      description: 'Build and retain high-performing leadership teams.',
      details: [
        'Succession planning',
        'Talent assessment',
        'Development programs',
        'Retention strategies',
        'Succession execution',
      ],
      icon: '⭐',
    },
    {
      id: 6,
      title: 'Innovation Strategy',
      description: 'Drive competitive advantage through innovation and transformation.',
      details: [
        'Innovation frameworks',
        'Market disruption analysis',
        'Digital strategy',
        'Product development',
        'Go-to-market planning',
      ],
      icon: '💡',
    },
  ]

  return (
    <>
      <Navigation />

      <HeroSection
        title="Leadership as a Service"
        subtitle="Strategic Solutions"
        description="Access world-class executive advisory, mentorship, and strategic guidance customized to your organization's unique challenges and opportunities."
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-lg text-foreground-secondary">
              Comprehensive leadership solutions designed for organizations of all sizes.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <RevealOnScroll key={service.id} delay={index * 0.1}>
                <div className="card h-full hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground-secondary mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="text-xs text-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-24 bg-background-light border-y border-border">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Engagement Models</h2>
            <p className="text-lg text-foreground-secondary">
              Flexible options to match your needs and budget.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Project-Based',
                description: 'Focused engagement for specific initiatives',
                duration: '3-6 months',
                features: ['Defined scope', 'Dedicated advisor', 'Regular reviews'],
              },
              {
                name: 'Retainer',
                description: 'Ongoing strategic guidance and support',
                duration: '12 months',
                features: ['On-demand access', 'Quarterly strategy sessions', 'Team support'],
              },
              {
                name: 'Executive Intensive',
                description: 'Immersive transformation program',
                duration: '6-12 months',
                features: ['Full team involvement', 'Weekly sessions', 'Implementation support'],
              },
            ].map((model, index) => (
              <RevealOnScroll key={model.name} delay={index * 0.1}>
                <div className="card hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-serif font-bold mb-2">{model.name}</h3>
                  <p className="text-sm text-foreground-secondary mb-3">{model.description}</p>
                  <p className="text-xs font-medium text-accent mb-4">Duration: {model.duration}</p>
                  <ul className="space-y-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="text-xs text-foreground flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-foreground-secondary">
              Real transformations from organizations like yours.
            </p>
          </RevealOnScroll>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <RevealOnScroll key={study.id} delay={index * 0.1}>
                <div className="card grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden order-2 md:order-1">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-serif font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-accent font-medium mb-4">{study.company}</p>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-foreground uppercase tracking-wide mb-1">Challenge</p>
                      <p className="text-sm text-foreground-secondary">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-foreground uppercase tracking-wide mb-1">Our Approach</p>
                      <p className="text-sm text-foreground-secondary">{study.solution}</p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-foreground uppercase tracking-wide mb-2">Results</p>
                      <ul className="space-y-1">
                        {study.results.map((result) => (
                          <li key={result} className="text-sm text-accent flex items-start gap-2">
                            <span>✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background-light border-y border-border">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Transparent Pricing</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Clear pricing for all membership levels. Choose the plan that fits your needs.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <RevealOnScroll key={tier.id} delay={index * 0.1}>
                <div
                  className={`card flex flex-col h-full ${
                    tier.highlighted ? 'border-2 border-accent shadow-lg' : 'border border-border'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-accent text-background text-xs font-medium rounded-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-serif font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-foreground-secondary mb-4">{tier.description}</p>

                  <div className="mb-6">
                    <p className="text-3xl font-serif font-bold">
                      {tier.price === 0 ? 'Free' : `$${tier.price}`}
                    </p>
                    {tier.price > 0 && (
                      <p className="text-xs text-foreground-secondary">per {tier.period}</p>
                    )}
                  </div>

                  <ul className="flex-1 space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="text-xs text-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full px-4 py-3 rounded-md font-medium transition-all ${
                      tier.highlighted
                        ? 'bg-accent text-background hover:bg-accent-dark'
                        : 'border border-border text-foreground hover:border-accent'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Process</h2>
            <p className="text-lg text-foreground-secondary">
              A structured approach to delivering measurable results.
            </p>
          </RevealOnScroll>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Discovery',
                description: 'Deep dive into your organization, challenges, and aspirations.',
              },
              {
                step: '2',
                title: 'Assessment',
                description: 'Comprehensive evaluation of current state and opportunities.',
              },
              {
                step: '3',
                title: 'Strategy',
                description: 'Develop customized roadmap aligned with your vision.',
              },
              {
                step: '4',
                title: 'Implementation',
                description: 'Hands-on support to execute strategies and drive results.',
              },
              {
                step: '5',
                title: 'Optimization',
                description: 'Continuous refinement based on measurable outcomes.',
              },
            ].map((item, index) => (
              <RevealOnScroll key={item.step} delay={index * 0.1}>
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-background font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground-secondary">{item.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-text-light">
        <div className="container-custom text-center">
          <RevealOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how FxN can accelerate your organization&apos;s success.
            </p>
            <button className="inline-block px-8 py-4 bg-accent text-background font-medium rounded-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </>
  )
}
