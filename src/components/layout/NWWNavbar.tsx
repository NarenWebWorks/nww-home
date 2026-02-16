'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Logo } from '@/components/shared/Logo';
import { NWW_NAV_LINKS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export function NWWNavbar() {
  const { isScrolled } = useScrollPosition(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
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
              ? 'bg-[var(--nww-text)] shadow-lg py-3'
              : 'bg-transparent py-4'
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo brand="nww" variant={isScrolled ? 'white' : 'default'} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NWW_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`
                    text-sm font-medium transition-colors duration-200
                    ${
                      isScrolled
                        ? 'text-white/90 hover:text-[var(--nww-primary)]'
                        : 'text-[var(--nww-text)] hover:text-[var(--nww-primary-dark)]'
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${
                    isScrolled
                      ? 'bg-[var(--nww-primary)] text-[var(--nww-text)] hover:bg-[var(--nww-primary-dark)]'
                      : 'bg-[var(--nww-text)] text-white hover:bg-[var(--nww-text)]/90'
                  }
                `}
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                lg:hidden p-2 rounded-lg transition-colors
                ${isScrolled ? 'text-white hover:bg-white/10' : 'text-[var(--nww-text)] hover:bg-gray-100'}
              `}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl">
            <div className="pt-20 px-6">
              <nav className="flex flex-col gap-4">
                {NWW_NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[var(--nww-text)] hover:text-[var(--nww-primary-dark)] font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="mt-4 px-4 py-2 rounded-lg font-medium text-center bg-[var(--nww-text)] text-white hover:bg-[var(--nww-text)]/90"
                >
                  Get In Touch
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
