export const siteConfig = {
  name: 'Grow-Withus',
  tagline: 'Web, Apps & AI Agents',
  description:
    'Grow-Withus builds premium web & app experiences and custom AI agents for startups, SMBs, and mid-market enterprises.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  twitter: '@TodarwalDhanesh',
  // Optional logo config.
  // Place files under apps/web/public and reference with absolute paths like '/images/logo-light.png'.
  // Provide only 'light' to use a single logo for both themes; add 'dark' to swap in dark mode.
  logo: {
    light: '/images/logo.jpeg',
    dark: '',
    width: 44,
    height: 44,
    alt: 'Grow-Withus logo',
  },
}

export type SiteConfig = typeof siteConfig
