'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

const COOKIE_CONSENT_KEY = 'clubcaddy-cookie-consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      className={`
        fixed bottom-0 left-0 right-0 z-50
        bg-white border-t border-gray-200
        shadow-[0_-4px_20px_rgba(0,0,0,0.1)]
        p-4 md:p-6
        transform transition-transform duration-500
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
      `}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1">
          <h2 id="cookie-title" className="text-lg font-semibold text-[var(--color-text)] mb-1">
            We value your privacy
          </h2>
          <p id="cookie-description" className="text-sm text-[var(--color-text-muted)]">
            We use cookies to enhance your browsing experience, serve personalized content, and
            analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button variant="outline" size="sm" onClick={handleDecline} className="flex-1 md:flex-none">
            Decline
          </Button>
          <Button variant="primary" size="sm" onClick={handleAccept} className="flex-1 md:flex-none">
            Accept All
          </Button>
        </div>
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors md:hidden"
          aria-label="Close cookie banner"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
