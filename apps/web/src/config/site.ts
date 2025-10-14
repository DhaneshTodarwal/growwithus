export const siteConfig = {
  name: 'Grow-Withus',
  tagline: 'Web, Apps & AI Agents',
  description:
    'Grow-Withus builds premium web & app experiences and custom AI agents for startups, SMBs, and mid-market enterprises.',
  // Public base URL. Override in production by setting NEXT_PUBLIC_SITE_URL in Vercel Project Settings.
  // Using the current Vercel deployment subdomain as a fallback so OG/meta links are correct even without env var.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://growwithus-hl5rzie3a-dhaneshs-projects-45a64aa2.vercel.app',
  twitter: '@TodarwalDhanesh',
  // Optional logo config.
  // Place files under apps/web/public and reference with absolute paths like '/images/logo-light.png'.
  // Provide only 'light' to use a single logo for both themes; add 'dark' to swap in dark mode.
  logo: {
    light: '/images/logo.jpeg',
    dark: '',
    width: 60,
    height: 60,
    alt: 'Grow-Withus logo',
  },
}

export type SiteConfig = typeof siteConfig
