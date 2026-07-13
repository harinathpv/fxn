import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="foot-brand-top">
              <img
                className="foot-logo-mark"
                src="https://www.fxn.network/images/fxn-logo-new.png"
                alt="FxN — The Fractional Executive Network India"
              />
            </div>
            <p>
              FxN is India&apos;s shared leadership platform, helping growing companies access senior leadership through outcome-led Pods and Leadership as a Service.
            </p>
          </div>
          <div className="foot-col">
            <h4>FxN</h4>
            <ul>
              <li>
                <a href="/#why-fxn">Why FxN</a>
              </li>
              <li>
                <a href="/#collective">About</a>
              </li>
              <li>
                <a href="/#partners">Partners</a>
              </li>
              <li>
                <a href="/#final-cta">Contact</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Leadership Models</h4>
            <ul>
              <li>
                <a href="/#pods">Leadership Pods</a>
              </li>
              <li>
                <Link href="/leadership-as-a-service">Leadership as a Service</Link>
              </li>
              <li>
                <a href="/#final-cta">Custom Leadership Engagements</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Insights</h4>
            <ul>
              <li>
                <Link href="/events-social#podcast">The Fractional Hour</Link>
              </li>
              <li>
                <a href="/#insights">Articles</a>
              </li>
              <li>
                <Link href="/events-social#events">Events</Link>
              </li>
              <li>
                <a href="/#insights">Research</a>
              </li>
              <li>
                <a href="/#insights">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>For Leaders</h4>
            <ul>
              <li>
                <Link href="/member-directory">Member Directory</Link>
              </li>
              <li>
                <a
                  href="https://forms.office.com/r/j6A1zADKL2"
                  target="_blank"
                  rel="noopener"
                >
                  Become a Member
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 FxN — Fractional Executive Network. All rights reserved.</span>
          <div className="links">
            <a
              href="https://www.linkedin.com/company/fractionalexecutivenetwork/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a href="mailto:hello@fxn.network">Email</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
