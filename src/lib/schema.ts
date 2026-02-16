import { NWW_CONFIG, CLUBCADDY_CONFIG } from './constants';

export function generateNWWOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: NWW_CONFIG.name,
    url: NWW_CONFIG.url,
    email: NWW_CONFIG.email,
    telephone: NWW_CONFIG.phone,
    description: NWW_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: NWW_CONFIG.phone,
      contactType: 'customer service',
      email: NWW_CONFIG.email,
      availableLanguage: ['English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Engineering Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud & Consulting' } },
      ],
    },
  };
}

export function generateNWWWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: NWW_CONFIG.name,
    url: NWW_CONFIG.url,
    description: NWW_CONFIG.description,
  };
}

export function generateNWWSchemas() {
  return [generateNWWOrganizationSchema(), generateNWWWebSiteSchema()];
}

export function generateClubCaddySoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: CLUBCADDY_CONFIG.name,
    description: CLUBCADDY_CONFIG.description,
    url: CLUBCADDY_CONFIG.url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    featureList: [
      'Tee Time Booking',
      'Tournament Management',
      'Member Management',
      'Handicap Calculation',
      'Score Tracking',
      'Online Payments',
      'Smart Notifications',
      'Easy Integrations',
    ],
    screenshot: `${CLUBCADDY_CONFIG.url}og-image.png`,
    softwareVersion: '1.0',
    author: {
      '@type': 'Organization',
      name: CLUBCADDY_CONFIG.name,
      url: CLUBCADDY_CONFIG.url,
    },
  };
}

export function generateClubCaddyOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: CLUBCADDY_CONFIG.name,
    url: CLUBCADDY_CONFIG.url,
    logo: `${CLUBCADDY_CONFIG.url}logo.png`,
    description: CLUBCADDY_CONFIG.description,
    email: CLUBCADDY_CONFIG.email,
    telephone: CLUBCADDY_CONFIG.phone,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CLUBCADDY_CONFIG.phone,
      contactType: 'customer service',
      email: CLUBCADDY_CONFIG.email,
      availableLanguage: ['English', 'Hindi'],
    },
  };
}

export function generateClubCaddyWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${CLUBCADDY_CONFIG.name} — ${CLUBCADDY_CONFIG.tagline}`,
    description: CLUBCADDY_CONFIG.description,
    url: CLUBCADDY_CONFIG.url,
    isPartOf: {
      '@type': 'WebSite',
      name: CLUBCADDY_CONFIG.name,
      url: CLUBCADDY_CONFIG.url,
    },
    about: {
      '@type': 'Thing',
      name: 'Golf Club Management Software',
    },
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: CLUBCADDY_CONFIG.name,
    },
  };
}

export function generateClubCaddySchemas() {
  return [
    generateClubCaddySoftwareApplicationSchema(),
    generateClubCaddyOrganizationSchema(),
    generateClubCaddyWebPageSchema(),
  ];
}
