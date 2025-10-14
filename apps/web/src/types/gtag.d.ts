interface Window {
  gtag: (
    event: 'config',
    trackingId: string,
    config: {
      page_path: string
    }
  ) => void
}
