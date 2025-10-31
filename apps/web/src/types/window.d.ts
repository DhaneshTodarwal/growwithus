// Type definitions for Google Analytics gtag
export {}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetIdOrEventName: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}
