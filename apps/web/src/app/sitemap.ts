import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const routes = ['', '/services', '/case-studies', '/ai-demos', '/pricing', '/about', '/blog', '/contact', '/careers', '/legal/privacy', '/legal/terms', '/legal/cookies']
  const now = new Date().toISOString()
  return routes.map((r) => ({ url: base + r, lastModified: now, changeFrequency: 'weekly', priority: r === '' ? 1 : 0.7 }))
}
