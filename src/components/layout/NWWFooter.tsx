import Link from 'next/link';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';
import { NWW_CONFIG, NWW_FOOTER_LINKS } from '@/lib/constants';

export function NWWFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--nww-text)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo brand="nww" variant="white" size="lg" />
            <p className="mt-4 text-gray-300 max-w-md">
              {NWW_CONFIG.description}
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${NWW_CONFIG.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-[var(--nww-primary)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{NWW_CONFIG.email}</span>
              </a>
              <a
                href={`tel:${NWW_CONFIG.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-[var(--nww-primary)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{NWW_CONFIG.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>{NWW_CONFIG.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {[
                { Icon: Github, label: 'GitHub', href: 'https://github.com/NarenKarthikBM' },
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/narenkarthikbm' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 rounded-full
                    bg-gray-700 hover:bg-[var(--nww-primary)]
                    flex items-center justify-center
                    transition-colors duration-200
                    hover:text-[var(--nww-text)]
                  "
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {NWW_FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--nww-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 mt-8">Products</h3>
            <ul className="space-y-3">
              {NWW_FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--nww-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {NWW_FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--nww-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} {NWW_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with care in India
          </p>
        </div>
      </div>
    </footer>
  );
}
