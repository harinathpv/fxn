import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: 'FxN | Leadership Network',
  description: 'Reimagining leadership through functional networks and strategic partnerships.',
  keywords: ['leadership', 'network', 'functional', 'partnership', 'events', 'directory'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fxn.com',
    title: 'FxN | Leadership Network',
    description: 'Reimagining leadership through functional networks and strategic partnerships.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FxN Leadership Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FxN | Leadership Network',
    description: 'Reimagining leadership through functional networks and strategic partnerships.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FF6B3B',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans text-foreground">
        {children}
      </body>
    </html>
  )
}
