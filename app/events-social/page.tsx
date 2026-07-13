import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import HeroSection from '@/app/components/HeroSection'
import RevealOnScroll from '@/app/components/RevealOnScroll'
import { insights } from '@/app/data/insights'
import Image from 'next/image'

export default function EventsSocial() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Executive Leadership Summit',
      date: '2024-08-15',
      time: '09:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      description: 'Three-day summit featuring keynote presentations from industry leaders.',
      category: 'Conference',
      attendees: 250,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Digital Transformation Workshop',
      date: '2024-08-22',
      time: '2:00 PM - 4:30 PM',
      location: 'New York, NY',
      description: 'Interactive workshop on modern digital transformation strategies.',
      category: 'Workshop',
      attendees: 50,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Networking Breakfast',
      date: '2024-08-29',
      time: '8:00 AM - 10:00 AM',
      location: 'Boston, MA',
      description: 'Intimate breakfast networking session with emerging leaders.',
      category: 'Networking',
      attendees: 30,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Women Leaders Forum',
      date: '2024-09-05',
      time: '6:00 PM - 8:00 PM',
      location: 'Chicago, IL',
      description: 'Celebrating and empowering women in leadership positions.',
      category: 'Community',
      attendees: 75,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
  ]

  return (
    <>
      <Navigation />

      <HeroSection
        title="Events & Social"
        subtitle="Connect & Learn"
        description="Join exclusive events, webinars, and networking sessions designed for executive leaders."
      />

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-foreground-secondary">
              Mark your calendar for our most anticipated leadership and networking events.
            </p>
          </RevealOnScroll>

          <div className="space-y-6 mb-12">
            {upcomingEvents.map((event, index) => (
              <RevealOnScroll key={event.id} delay={index * 0.1}>
                <div className="card hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Event Image */}
                    <div className="relative h-48 md:h-auto rounded-lg overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-accent text-background text-xs font-medium rounded-md">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="md:col-span-2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-serif font-bold mb-3">{event.title}</h3>
                        <div className="space-y-2 mb-4 text-sm text-foreground-secondary">
                          <p className="flex items-center gap-2">
                            <span className="text-accent">📅</span>
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="text-accent">🕐</span>
                            {event.time}
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="text-accent">📍</span>
                            {event.location}
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="text-accent">👥</span>
                            {event.attendees} attendees
                          </p>
                        </div>
                        <p className="text-sm text-foreground mb-4">{event.description}</p>
                      </div>
                      <button className="w-full md:w-auto px-6 py-2 bg-accent text-background font-medium rounded-md hover:bg-accent-dark transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Thought Leadership */}
      <section className="py-16 md:py-24 bg-background-light border-y border-border">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-foreground-secondary">
              Thought leadership and industry perspectives from FxN community leaders.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <RevealOnScroll key={insight.id} delay={index * 0.1}>
                <div className="card h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-border">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-accent bg-background px-2 py-1 rounded">
                        {insight.category}
                      </span>
                      <span className="text-xs text-foreground-secondary">
                        {new Date(insight.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold mb-2 flex-1">{insight.title}</h3>
                    <p className="text-sm text-foreground-secondary mb-3 line-clamp-2">
                      {insight.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <p className="text-xs font-medium text-accent">{insight.author}</p>
                      <span className="text-accent">→</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Social Integration Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <RevealOnScroll direction="up" className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Connected</h2>
            <p className="text-lg text-foreground-secondary max-w-2xl">
              Follow FxN on social media for daily insights, member spotlights, and behind-the-scenes event coverage.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                platform: 'LinkedIn',
                handle: '@FxNLeadership',
                followers: '5.2K',
                icon: '💼',
                description: 'Leadership articles and member insights',
              },
              {
                platform: 'Twitter',
                handle: '@FxN',
                followers: '3.1K',
                icon: '𝕏',
                description: 'Real-time event updates and discussions',
              },
              {
                platform: 'Instagram',
                handle: '@FxN.Community',
                followers: '2.8K',
                icon: '📸',
                description: 'Visual storytelling from our events',
              },
            ].map((social, index) => (
              <RevealOnScroll key={social.platform} delay={index * 0.1}>
                <div className="card text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{social.icon}</div>
                  <h3 className="text-xl font-serif font-bold mb-1">{social.platform}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{social.handle}</p>
                  <p className="text-sm text-foreground-secondary mb-4">{social.description}</p>
                  <p className="text-xs text-foreground-secondary mb-4">{social.followers} followers</p>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-background border border-border text-foreground text-sm font-medium rounded-md hover:border-accent transition-colors"
                  >
                    Follow
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-foreground text-text-light">
        <div className="container-custom text-center">
          <RevealOnScroll direction="up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Never Miss an Event</h2>
            <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive event invitations, insights, and community updates.
            </p>
            <form className="max-w-md mx-auto flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-foreground"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-background font-medium rounded-md hover:bg-accent-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-foreground-secondary">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </>
  )
}
