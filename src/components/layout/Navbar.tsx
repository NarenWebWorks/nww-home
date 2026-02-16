'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Logo } from '@/components/shared/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';
import { Menu, ArrowLeft } from 'lucide-react';

export function Navbar() {
  const { isScrolled } = useScrollPosition(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${
            isScrolled
              ? 'bg-[var(--color-primary)] shadow-lg py-3'
              : 'bg-transparent py-4'
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Back to NWW + Logo */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className={`
                  flex items-center gap-1 text-sm font-medium transition-colors duration-200
                  ${
                    isScrolled
                      ? 'text-white/90 hover:text-white'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
                  }
                `}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">NarenWebWorks</span>
              </Link>
              <Logo variant={isScrolled ? 'white' : 'default'} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    text-sm font-medium transition-colors duration-200
                    ${
                      isScrolled
                        ? 'text-white/90 hover:text-white'
                        : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`
                lg:hidden p-2 rounded-lg transition-colors
                ${isScrolled ? 'text-white hover:bg-white/10' : 'text-[var(--color-text)] hover:bg-gray-100'}
              `}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
