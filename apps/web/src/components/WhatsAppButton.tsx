'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  position?: 'floating' | 'inline'
  className?: string
}

export default function WhatsAppButton({ 
  phoneNumber = '918208963473', // Default number with country code
  message = 'Hello Grow-WithUs Team! I would like to know more about your services.',
  position = 'floating',
  className = ''
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = async () => {
    // Track the click before opening WhatsApp
    try {
      await fetch('/api/whatsapp-track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          page: window.location.pathname,
          referrer: document.referrer || 'direct'
        })
      })
    } catch (error) {
      console.error('Failed to track WhatsApp click:', error)
    }

    // Open WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (position === 'floating') {
    return (
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Button */}
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Main button */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110">
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-gray-900 border-b-8 border-b-transparent"></div>
          </div>
        )}
      </button>
    )
  }

  // Inline button (for header)
  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </button>
  )
}
