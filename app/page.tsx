import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import HeroSection from '@/app/components/HeroSection'
import StatCard from '@/app/components/StatCard'
import RevealOnScroll from '@/app/components/RevealOnScroll'
import { partners } from '@/app/data/partners'
import { insights } from '@/app/data/insights'
import { caseStudies } from '@/app/data/case-studies'
import { useCases } from '@/app/data/use-cases'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Reimagining Leadership Through Functional Networks"
        subtitle="Welcome to FxN"
        description="Connect with visionary leaders, unlock strategic insights, and accelerate growth through intentional collaboration and purposeful partnerships."
        cta={{ text: 'Explore Our Community', href: '/member-directory' }}
      />

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-background-light border-y border-border">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Growing Network of Leaders</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Connecting exceptional leaders across industries and geographies.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <RevealOnScroll delay={0.1}>
              <StatCard number={32} label="Active Members" description="Industry leaders and executives" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <StatCard number={14} label="Partner Organizations" description="Strategic partnerships" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <StatCard number={8} label="Exclusive Insights" description="Monthly thought leadership" />
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <StatCard number={3} label="Proven Case Studies" description="Measurable impact and results" />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">How FxN Drives Value</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              From strategic advisory to talent acquisition, discover how our network accelerates your success.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <RevealOnScroll key={useCase.id} delay={index * 0.1}>
                <div className="card hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-serif font-bold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-foreground-secondary mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit) => (
                      <li key={benefit} className="text-xs text-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Members Teaser */}
      <section className="py-16 md:py-24 bg-background-light border-y border-border">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Meet Our Leaders</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Diverse backgrounds, unified vision for transformational leadership and impact.
            </p>
          </RevealOnScroll>

          <div className="text-center">
            <Link
              href="/member-directory"
              className="inline-block px-8 py-4 bg-accent text-background font-medium rounded-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105"
            >
              View Full Directory
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Impact in Action</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              See how FxN leadership has transformed organizations and accelerated growth.
            </p>
          </RevealOnScroll>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <RevealOnScroll key={study.id} delay={index * 0.1}>
                <div className="card grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{study.company}</p>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Challenge:</p>
                      <p className="text-sm text-foreground-secondary">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Solution:</p>
                      <p className="text-sm text-foreground-secondary">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Results:</p>
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

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-background-light border-y border-border">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Partners</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Strategic relationships with industry-leading organizations.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.slice(0, 8).map((partner) => (
              <RevealOnScroll key={partner.id} className="flex items-center justify-center">
                <div className="relative w-full h-24 rounded-lg overflow-hidden bg-background border border-border hover:border-accent transition-colors">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Thought leadership from FxN community leaders.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.slice(0, 4).map((insight, index) => (
              <RevealOnScroll key={insight.id} delay={index * 0.1}>
                <div className="card h-full flex flex-col">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-border">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2 flex-1">{insight.title}</h3>
                  <p className="text-xs text-foreground-secondary mb-3">{new Date(insight.date).toLocaleDateString()}</p>
                  <p className="text-xs font-medium text-accent">{insight.author}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/events-social"
              className="inline-block px-8 py-4 bg-accent text-background font-medium rounded-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105"
            >
              View All Events & Insights
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground text-text-light">
        <div className="container-custom text-center">
          <RevealOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Transform Your Leadership Journey?</h2>
            <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Join our community of visionary leaders and unlock unlimited growth potential.
            </p>
            <Link
              href="/member-directory"
              className="inline-block px-8 py-4 bg-accent text-background font-medium rounded-md hover:bg-accent-dark transition-all duration-300 transform hover:scale-105"
            >
              Join FxN Today
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </>
  )
}
