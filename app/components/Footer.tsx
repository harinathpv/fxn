import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-foreground text-text-light">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-border">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">FxN</h3>
            <p className="text-sm text-foreground-secondary">
              Reimagining leadership through functional networks and strategic partnerships.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/member-directory" className="hover:text-accent transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/events-social" className="hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/leadership-as-a-service" className="hover:text-accent transition-colors">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@fxn.com" className="hover:text-accent transition-colors">
                  hello@fxn.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="pt-2">
                <div className="flex gap-4">
                  <a href="#" className="hover:text-accent transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-sm text-foreground-secondary">
          <p>&copy; 2024 FxN. All rights reserved.</p>
          <p>Designed with purpose. Built with precision.</p>
        </div>
      </div>
    </footer>
  )
}
