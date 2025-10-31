/**
 * Google Analytics 4 Event Tracking Utilities
 * These functions send conversion events to GA4
 */

// Type definitions for gtag
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Check if gtag is available (only on client side)
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag !== 'undefined'
}

// Generic event tracking
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (!isGtagAvailable() || !GA_TRACKING_ID) return
  
  window.gtag('event', eventName, {
    ...params,
    send_to: GA_TRACKING_ID
  })
}

// Contact form submission
export const trackContactFormSubmission = (data: {
  name: string
  email: string
  messageLength?: number
}) => {
  trackEvent('contact_form_submit', {
    event_category: 'Form',
    event_label: 'Contact Form',
    user_name: data.name,
    user_email: data.email,
    message_length: data.messageLength || 0,
    page_path: window.location.pathname,
    value: 10 // Assign a value to this conversion (adjust as needed)
  })
  
  // Also track as a conversion
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    currency: 'INR',
    value: 10
  })
}

// Quote form submission
export const trackQuoteFormSubmission = (data: {
  name: string
  email: string
  company: string
  projectType: string
}) => {
  trackEvent('quote_form_submit', {
    event_category: 'Form',
    event_label: 'Quote Request',
    user_name: data.name,
    user_email: data.email,
    company: data.company,
    project_type: data.projectType,
    page_path: window.location.pathname,
    value: 50 // Higher value for quote requests
  })
  
  // Track as a high-value conversion
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    currency: 'INR',
    value: 50
  })
}

// WhatsApp button click
export const trackWhatsAppClick = (location: 'header' | 'floating' | 'inline') => {
  trackEvent('whatsapp_click', {
    event_category: 'Engagement',
    event_label: `WhatsApp ${location} Button`,
    button_location: location,
    page_path: window.location.pathname
  })
}

// Calendly booking (call this when user clicks Calendly)
export const trackCalendlyClick = () => {
  trackEvent('calendly_click', {
    event_category: 'Engagement',
    event_label: 'Book a Call',
    page_path: window.location.pathname,
    value: 25
  })
}

// Page view (already handled by GoogleAnalytics component, but can be used manually)
export const trackPageView = (url: string) => {
  if (!isGtagAvailable() || !GA_TRACKING_ID) return
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// Button click tracking
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    event_category: 'Engagement',
    event_label: buttonName,
    button_location: location,
    page_path: window.location.pathname
  })
}

// External link click
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    event_category: 'Engagement',
    event_label: linkText,
    link_url: url,
    page_path: window.location.pathname
  })
}
