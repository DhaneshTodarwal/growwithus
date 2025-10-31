// Type definitions for Google Analytics gtag
interface Window {
  gtag: {
    (command: 'config', targetId: string, config?: { page_path: string } & Record<string, any>): void
    (command: 'event', eventName: string, eventParams?: Record<string, any>): void
    (command: 'js', date: Date): void
    (command: 'set', config: Record<string, any>): void
  }
  dataLayer: any[]
}
