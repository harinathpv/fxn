'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <img
            className="logo-mark"
            src="https://www.fxn.network/images/fxn-logo-new.png"
            alt="FxN — The Fractional Executive Network India"
          />
        </Link>

        <nav className="primary">
          <ul>
            <li>
              <a href="/#why-fxn">Why FxN</a>
            </li>
            <li>
              <a href="/#pods">
                Leadership Pods ▾
              </a>
              <div className="dropdown">
                <a href="/#pods">Pods Overview</a>
                <a href="/#pods">GTM Pod</a>
                <a href="/#pods">Finance and Scale Pod</a>
                <a href="/#pods">AI Transformation Pod</a>
                <a href="/#pods">People and Organisation Pod</a>
                <a href="/#pods">Custom Pod</a>
              </div>
            </li>
            <li>
              <Link href="/leadership-as-a-service">Leadership as a Service</Link>
            </li>
            <li>
              <a href="/#partners">
                Partners ▾
              </a>
              <div className="dropdown">
                <a href="/#partners">Meet the Partners</a>
                <Link href="/member-directory">Member Directory</Link>
                <a
                  href="https://forms.office.com/r/j6A1zADKL2"
                  target="_blank"
                  rel="noopener"
                >
                  Become a Member
                </a>
              </div>
            </li>
            <li>
              <a href="/#insights">
                Insights ▾
              </a>
              <div className="dropdown">
                <a href="/#insights">Insights Overview</a>
                <Link href="/events-social">Events & Social</Link>
              </div>
            </li>
            <li>
              <a href="/#collective">About</a>
            </li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="/#final-cta" className="btn btn-outline">
            Talk to FxN
          </a>
          <button
            className="mobile-toggle"
            id="mobileToggle"
            aria-label="Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${mobileOpen ? 'open' : ''}`} id="mobilePanel">
        <ul>
          <li>
            <a href="/#why-fxn" onClick={() => setMobileOpen(false)}>
              Why FxN
            </a>
          </li>
          <li>
            <a href="/#pods" onClick={() => setMobileOpen(false)}>
              Leadership Pods
            </a>
          </li>
          <li>
            <Link href="/leadership-as-a-service" onClick={() => setMobileOpen(false)}>
              Leadership as a Service
            </Link>
          </li>
          <li>
            <a href="/#partners" onClick={() => setMobileOpen(false)}>
              Meet the Partners
            </a>
          </li>
          <li>
            <Link href="/member-directory" onClick={() => setMobileOpen(false)}>
              Member Directory
            </Link>
          </li>
          <li>
            <a href="/#insights" onClick={() => setMobileOpen(false)}>
              Insights
            </a>
          </li>
          <li className="sub-item">
            <Link href="/events-social" onClick={() => setMobileOpen(false)}>
              — Events & Social
            </Link>
          </li>
          <li>
            <a href="/#collective" onClick={() => setMobileOpen(false)}>
              About
            </a>
          </li>
        </ul>
        <a href="/#final-cta" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
          Talk to FxN
        </a>
      </div>
    </header>
  );
}
