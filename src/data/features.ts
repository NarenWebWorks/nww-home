import {
  Calendar,
  Trophy,
  Users,
  CreditCard,
  ClipboardList,
  Target,
  Bell,
  Zap,
} from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: typeof Calendar;
}

export const features: Feature[] = [
  {
    id: 'tee-times',
    title: 'Tee Time Booking',
    description:
      'Easy online booking system for members. Manage slots, waitlists, and cancellations effortlessly.',
    icon: Calendar,
  },
  {
    id: 'tournaments',
    title: 'Tournament Management',
    description:
      'Create and manage tournaments with automatic scoring, leaderboards, and real-time results.',
    icon: Trophy,
  },
  {
    id: 'members',
    title: 'Member Management',
    description:
      'Complete member database with profiles, subscriptions, payment history, and activity tracking.',
    icon: Users,
  },
  {
    id: 'handicaps',
    title: 'Handicap Calculation',
    description:
      'Automatic WHS-compliant handicap calculation and tracking for all your members.',
    icon: Target,
  },
  {
    id: 'scoring',
    title: 'Score Tracking',
    description:
      'Digital scorecards, live scoring during rounds, and comprehensive scoring history.',
    icon: ClipboardList,
  },
  {
    id: 'payments',
    title: 'Online Payments',
    description:
      'Secure payment processing for memberships, green fees, and tournament entries.',
    icon: CreditCard,
  },
  {
    id: 'notifications',
    title: 'Smart Notifications',
    description:
      'Automated emails and push notifications for bookings, results, and club announcements.',
    icon: Bell,
  },
  {
    id: 'integrations',
    title: 'Easy Integrations',
    description:
      'Connect with existing systems via APIs. Integrate with accounting, CRM, and more.',
    icon: Zap,
  },
];
