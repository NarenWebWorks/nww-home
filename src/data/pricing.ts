export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small clubs getting started with digital management.',
    price: '₹4,999',
    period: '/month',
    features: [
      'Up to 200 members',
      'Tee time booking',
      'Basic score tracking',
      'Email notifications',
      'Standard support',
      'Mobile app access',
    ],
    cta: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Complete solution for growing clubs with advanced needs.',
    price: '₹12,999',
    period: '/month',
    highlighted: true,
    features: [
      'Up to 1,000 members',
      'All Starter features',
      'Tournament management',
      'Handicap calculation',
      'Online payments',
      'Analytics dashboard',
      'Priority support',
      'Custom branding',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'federation',
    name: 'Federation',
    description: 'Enterprise solution for golf federations and multi-club organizations.',
    price: '₹24,999',
    period: '/month',
    features: [
      'Unlimited members',
      'All Pro features',
      'Multi-club management',
      'Federation reporting',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
];
