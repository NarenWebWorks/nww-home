// NarenWebWorks (NWW) Configuration
export const NWW_CONFIG = {
  name: 'NarenWebWorks',
  shortName: 'NWW',
  tagline: 'Building Digital Products That Work',
  description:
    'NarenWebWorks is a freelance software engineering brand specializing in custom software consultancy, web & mobile development, and cloud solutions.',
  url: 'https://www.narenwebworks.in',
  email: 'hello@narenwebworks.in',
  phone: '+919384878306',
  location: 'Chennai, India',
} as const;

export const NWW_NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
] as const;

export const NWW_FOOTER_LINKS = {
  services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Development', href: '#services' },
    { label: 'Cloud & Consulting', href: '#services' },
  ],
  products: [
    { label: 'ClubCaddy', href: '/clubcaddy' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
} as const;

// ClubCaddy Configuration
export const CLUBCADDY_CONFIG = {
  name: 'ClubCaddy',
  tagline: 'Modern Golf Club Management Software',
  description:
    'ClubCaddy is an all-in-one SaaS platform for golf clubs and federations. Manage tee time bookings, tournaments, handicaps, members, and scores online.',
  url: 'https://www.narenwebworks.in/clubcaddy/',
  email: 'hello@narenwebworks.in',
  phone: '+919384878306',
} as const;

// Keep SITE_CONFIG as alias for backward compatibility
export const SITE_CONFIG = CLUBCADDY_CONFIG;

export const CLUBCADDY_COLORS = {
  primary: '#01941a',
  secondary: '#04aa6d',
  accent: '#0d9488',
  background: '#ffffff',
  backgroundAlt: '#F5FFFF',
  text: '#1a202c',
  textMuted: '#4a5568',
  textLight: '#718096',
} as const;

// Keep COLORS as alias for backward compatibility
export const COLORS = CLUBCADDY_COLORS;

export const NWW_COLORS = {
  primary: '#B163FF',
  primaryDark: '#9B4DE0',
  text: '#0f172a',
  textMuted: '#475569',
  background: '#ffffff',
  backgroundAlt: '#faf5ff',
} as const;

export const CLUBCADDY_NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#customers', label: 'Customers' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
] as const;

// Keep NAV_LINKS as alias for backward compatibility
export const NAV_LINKS = CLUBCADDY_NAV_LINKS;

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: 'https://twitter.com/clubcaddy', icon: 'Twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/clubcaddy', icon: 'Linkedin' },
  { name: 'Instagram', href: 'https://instagram.com/clubcaddy', icon: 'Instagram' },
] as const;

export const CLUBCADDY_FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Customers', href: '#customers' },
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ],
} as const;

// Keep FOOTER_LINKS as alias for backward compatibility
export const FOOTER_LINKS = CLUBCADDY_FOOTER_LINKS;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
