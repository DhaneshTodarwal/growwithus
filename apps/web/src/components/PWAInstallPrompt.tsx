'use client';

import { useEffect, useState } from 'react';
import { X, Download, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running as installed PWA
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                         (window.navigator as any).standalone === true;
    setIsStandalone(isStandalone);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Check if user already dismissed the prompt
    const promptDismissed = localStorage.getItem('pwaPromptDismissed');
    const dismissedTime = promptDismissed ? parseInt(promptDismissed) : 0;
    const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);

    // Show prompt if not dismissed or dismissed more than 7 days ago
    if (!isStandalone && (!promptDismissed || daysSinceDismissed > 7)) {
      if (iOS) {
        // Show iOS install instructions after 5 seconds
        setTimeout(() => setShowPrompt(true), 5000);
      } else {
        // Listen for beforeinstallprompt event (Android/Desktop)
        const handleBeforeInstallPrompt = (e: Event) => {
          e.preventDefault();
          const promptEvent = e as BeforeInstallPromptEvent;
          setDeferredPrompt(promptEvent);
          // Show prompt after 5 seconds
          setTimeout(() => setShowPrompt(true), 5000);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
          window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
      }
    }
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwaPromptDismissed', Date.now().toString());
  };

  // Don't show if already installed or no prompt available
  if (isStandalone || (!deferredPrompt && !isIOS) || !showPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 animate-slide-up">
      <div className="bg-gradient-to-br from-accent-primary/95 to-accent-secondary/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Content */}
        <div className="relative">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg mb-1">
                Install Our App
              </h3>
              <p className="text-white/90 text-sm">
                Get quick access and work offline!
              </p>
            </div>
          </div>

          {isIOS ? (
            // iOS Instructions
            <div className="space-y-3 mb-4">
              <p className="text-white/90 text-sm">
                Tap the Share button{' '}
                <span className="inline-flex items-center justify-center w-5 h-5 bg-white/20 rounded text-xs">
                  ⬆️
                </span>{' '}
                then "Add to Home Screen"
              </p>
            </div>
          ) : (
            // Android/Desktop Install Button
            <button
              onClick={handleInstallClick}
              className="w-full bg-white text-accent-primary font-semibold py-3 px-4 rounded-xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 mb-3"
            >
              <Download className="w-5 h-5" />
              Install Now
            </button>
          )}

          <button
            onClick={handleDismiss}
            className="text-white/80 text-sm hover:text-white transition-colors underline"
          >
            Maybe later
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
