import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          bg: '#FFFFFF',
          'bg-secondary': '#F8FAFC',
          'text-primary': '#1E293B',
          'text-secondary': '#64748B',
          'accent-primary': '#F59E0B',
          'accent-secondary': '#06B6D4',
          'card-bg': '#FFFFFF',
          border: '#E2E8F0',
        },
        // Dark theme colors
        dark: {
          bg: '#0F172A',
          'bg-secondary': '#1E293B',
          'text-primary': '#F1F5F9',
          'text-secondary': '#94A3B8',
          'accent-primary': '#FCD34D',
          'accent-secondary': '#67E8F9',
          'card-bg': '#1E293B',
          border: '#334155',
        },
        forge: {
          blue: '#1e3a8a',
          teal: '#0891b2',
          gold: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['3rem', { lineHeight: '3.5rem', fontWeight: '700' }],
        'heading-2': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '600' }],
        'heading-3': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }],
        'subheading': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
      },
    },
  },
  plugins: [typography],
} satisfies Config
