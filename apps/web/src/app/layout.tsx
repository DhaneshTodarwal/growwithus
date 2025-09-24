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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: 'Premium digital products and AI automation, delivered.',
    site: siteConfig.twitter,
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
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-black dark:text-gray-100">
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
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
