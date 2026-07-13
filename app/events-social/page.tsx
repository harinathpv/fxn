'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function EventsSocial() {
  return (
    <>
      <Header />

      <section className="page-hero">
        <div className="wrap">
          <span className="label">FxN Insights</span>
          <h1>Events & Social</h1>
          <p>
            The Fractional Hour podcast, upcoming FxN events, and updates from across the FxN Partner
            collective.
          </p>
        </div>
      </section>

      {/* ============ PODCAST ============ */}
      <section id="podcast">
        <div className="wrap">
          <div className="section-head">
            <span className="label">The Fractional Hour</span>
            <h2>Conversations on leadership, from the people who&apos;ve done it.</h2>
          </div>
          <div className="podcast-layout">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/6iCvxlScYFo"
                title="How Fractional Leaders Accelerate Growth in Mid-Sized Firms"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="podcast-meta">
              <div className="show-name">The Fractional Hour</div>
              <h3>How Fractional Leaders Accelerate Growth in Mid-Sized Firms</h3>
              <div className="channel">theSTRATEGYmonk · YouTube</div>
              <p>
                A conversation on how fractional and shared leadership models help mid-sized companies
                move faster without adding permanent executive overhead.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a
                  href="https://youtu.be/6iCvxlScYFo"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="ep-list" id="episodeList">
            <div id="episodeRows"></div>
            <div className="ep-row placeholder" id="episodePlaceholder">
              <div className="ep-thumb"></div>
              <div className="ep-info">
                <h3>More episodes coming soon</h3>
                <div className="ep-sub">Send over additional episode links and they&apos;ll be listed here.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EVENTS ============ */}
      <section className="warm" id="events">
        <div className="wrap">
          <div className="section-head">
            <span className="label">Upcoming Events</span>
            <h2>Where to meet FxN next.</h2>
          </div>

          <div className="luma-banner">
            <div className="luma-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2 C13 8 16 11 22 12 C16 13 13 16 12 22 C11 16 8 13 2 12 C8 11 11 8 12 2 Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
            <div className="luma-copy">
              <h3>Never miss an FxN event</h3>
              <p>
                Subscribe to our <span className="luma-word">
                  luma
                  <svg className="luma-spark" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2 C13 8 16 11 22 12 C16 13 13 16 12 22 C11 16 8 13 2 12 C8 11 11 8 12 2 Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>{' '}
                calendar to get every upcoming session, roundtable and workshop as soon as it&apos;s announced.
              </p>
            </div>
            <a
              href="https://luma.com/fxn"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Subscribe on Luma
            </a>
          </div>

          <div className="event-grid" id="eventGrid">
            <div className="event-card empty">
              <h3>Event details pending</h3>
              <p>
                Share your upcoming event names, dates, format and registration links, and they&apos;ll
                appear here as structured cards — sorted by date automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNER UPDATES ============ */}
      <section className="dark" id="partner-updates">
        <div className="wrap">
          <div className="section-head">
            <span className="label on-dark">The FxN Collective</span>
            <h2>Partner updates from across the network.</h2>
            <p>
              A curated feed of what FxN Partners are publishing, speaking on and building — pulled
              together manually for now, with automated aggregation planned as the collective grows.
            </p>
          </div>
          <div className="update-grid" id="updateGrid">
            <div className="update-empty">
              Partner updates will appear here once curated. Share a partner&apos;s post link and a
              short line of context, and it&apos;ll be added to this feed.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
