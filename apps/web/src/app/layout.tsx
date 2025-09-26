import '../styles/globals.css'
import React, { Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import SkipLink from '../components/SkipLink'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '../components/GoogleAnalytics'
import { siteConfig } from '../config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: 'Premium digital products and AI automation, delivered.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Open Graph`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: 'Premium digital products and AI automation, delivered.',
    site: siteConfig.twitter,
    images: ['/og-image.png']
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: []
  }
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnects & Performance Hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Preload hero font weight variant */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/inter-var-latin.woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-black dark:text-gray-100">
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        {/* Optional lightweight analytics (Plausible) placeholder */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js"></script>
        )}
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  )
}
