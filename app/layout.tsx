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
  title: 'FxN — Leadership Pods and Leadership as a Service for Growing Companies',
  description: 'FxN is India\'s shared leadership platform, helping growing companies access senior leaders through outcome-led Leadership Pods and flexible Leadership as a Service subscriptions.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="https://www.fxn.network/images/fxn-logo-new.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
