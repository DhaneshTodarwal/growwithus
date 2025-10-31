/**
 * Structured Data (JSON-LD) for SEO
 * This helps Google understand your business and can enable rich snippets
 */

import { siteConfig } from '../config/site'

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://officialgrowwithus.vercel.app/#organization',
  name: 'Grow-WithUs',
  legalName: 'Grow-WithUs',
  url: 'https://officialgrowwithus.vercel.app',
  logo: {
    '@type': 'ImageObject',
    url: 'https://officialgrowwithus.vercel.app/images/logo.jpeg',
    width: 512,
    height: 512
  },
  description: 'Leading web development and AI integration company delivering custom solutions for businesses. Expert team specializing in Next.js, React, AI chatbots, and modern web technologies.',
  email: 'officialgrowwithus1@gmail.com',
  telephone: '+91-8208963473',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Agarkar Nagar',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411001',
    addressCountry: 'IN'
  },
  sameAs: [
    // Add your social media profiles here when available
    // 'https://www.facebook.com/growwithus',
    // 'https://twitter.com/growwithus',
    // 'https://www.linkedin.com/company/growwithus',
    // 'https://www.instagram.com/growwithus'
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Dhanesh Todarwal',
      jobTitle: 'Founder & CEO'
    },
    {
      '@type': 'Person',
      name: 'Yogesh Tiwari',
      jobTitle: 'Co-Founder & CTO'
    },
    {
      '@type': 'Person',
      name: 'Ishwar Sharma',
      jobTitle: 'Co-Founder & COO'
    },
    {
      '@type': 'Person',
      name: 'Eshwar Sharma',
      jobTitle: 'Co-Founder'
    }
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8208963473',
    contactType: 'Customer Service',
    email: 'officialgrowwithus1@gmail.com',
    availableLanguage: ['English', 'Hindi']
  }
}

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://officialgrowwithus.vercel.app/#localbusiness',
  name: 'Grow-WithUs',
  image: 'https://officialgrowwithus.vercel.app/images/logo.jpeg',
  url: 'https://officialgrowwithus.vercel.app',
  telephone: '+91-8208963473',
  email: 'officialgrowwithus1@gmail.com',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Agarkar Nagar',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411001',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5204,
    longitude: 73.8567
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '1'
  }
}

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://officialgrowwithus.vercel.app/#website',
  url: 'https://officialgrowwithus.vercel.app',
  name: 'Grow-WithUs - Web Development & AI Solutions',
  description: 'Leading web development and AI integration company. We build modern websites, AI chatbots, and custom software solutions.',
  publisher: {
    '@id': 'https://officialgrowwithus.vercel.app/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://officialgrowwithus.vercel.app/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

// Professional Service Schema
export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://officialgrowwithus.vercel.app/#service',
  name: 'Grow-WithUs',
  description: 'Professional web development and AI integration services for businesses of all sizes.',
  url: 'https://officialgrowwithus.vercel.app',
  telephone: '+91-8208963473',
  email: 'officialgrowwithus1@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN'
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'India'
    },
    {
      '@type': 'Country',
      name: 'United States'
    },
    {
      '@type': 'Country',
      name: 'United Kingdom'
    }
  ],
  serviceType: [
    'Web Development',
    'Mobile App Development',
    'AI Integration',
    'Chatbot Development',
    'Custom Software Development',
    'E-commerce Development',
    'SEO Optimization',
    'Digital Marketing'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development & AI Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Development',
          description: 'Modern, responsive websites built with Next.js and React'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Integration',
          description: 'Integrate AI chatbots and automation into your business'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications'
        }
      }
    ]
  }
}

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

// FAQ Schema Generator (for FAQ sections)
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Blog Post Schema Generator
export const generateBlogPostSchema = (post: {
  title: string
  description: string
  url: string
  imageUrl?: string
  datePublished: string
  dateModified?: string
  authorName: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: post.url,
    image: post.imageUrl || 'https://officialgrowwithus.vercel.app/og-image.png',
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.authorName
    },
    publisher: {
      '@id': 'https://officialgrowwithus.vercel.app/#organization'
    }
  }
}
