'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if this is a PWA (installed app)
    const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
                  (window.navigator as any).standalone === true;

    // Check if splash has been shown this session
    const splashShown = sessionStorage.getItem('splashShown');

    if (isPWA && !splashShown) {
      // Show splash screen for PWA first launch
      setIsLoaded(true);
      
      // Hide after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('splashShown', 'true');
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    } else {
      // Not PWA or already shown - don't display splash
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-[#0A0A0A] transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        animation: isVisible ? 'fadeOut 1s ease-in-out 2s forwards' : 'none',
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
      </div>

      {/* Logo container with animations */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo with scale and fade animation */}
        <div
          className="relative"
          style={{
            animation: 'logoEntrance 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          }}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Glowing ring effect */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary opacity-50 blur-xl"
              style={{
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            
            {/* Logo image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-primary/50 shadow-2xl shadow-accent-primary/50">
              <Image
                src="/images/logo.jpeg"
                alt="Grow-Withus Logo"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Rotating ring */}
            <div
              className="absolute inset-0 rounded-full border-t-4 border-accent-primary"
              style={{
                animation: 'spin 3s linear infinite',
              }}
            />
          </div>
        </div>

        {/* Company name with slide-up animation */}
        <div
          className="text-center"
          style={{
            animation: 'slideUp 1s ease-out 0.5s backwards',
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-primary via-white to-accent-secondary bg-clip-text text-transparent mb-2">
            Grow-Withus
          </h1>
          <p className="text-gray-400 text-sm md:text-base tracking-wider">
            Web & AI Solutions
          </p>
        </div>

        {/* Loading dots */}
        <div
          className="flex gap-2"
          style={{
            animation: 'slideUp 1s ease-out 1s backwards',
          }}
        >
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            pointer-events: none;
          }
        }

        @keyframes logoEntrance {
          0% {
            transform: scale(0.3) rotate(-180deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
