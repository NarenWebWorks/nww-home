export interface NavLink {
  href: string;
  label: string;
}

export const mainNavLinks: NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#customers', label: 'Customers' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export const whyUsReasons = [
  'Unique tournament management system built for golf',
  'Flexible tee time slot booking for golf-specific use cases',
  'Adaptable codebase — we customize for each client\'s needs',
  'Personal support from the team',
  'Early adopter pricing and partnership opportunities',
];

export const testimonials = [
  {
    quote:
      'ClubCaddy\'s tournament management has made running our state-level competitions much smoother. The real-time scoring and leaderboards are exactly what we needed.',
    author: 'TNGF Representative',
    role: 'Federation Admin',
    organization: 'Tamil Nadu Golf Federation',
  },
  {
    quote:
      'The flexibility of ClubCaddy allowed us to set up our tour exactly how we wanted. The team worked closely with us to customize the platform for our needs.',
    author: 'Tour Manager',
    role: 'Operations',
    organization: 'SouthZone Golf Tour',
  },
];
