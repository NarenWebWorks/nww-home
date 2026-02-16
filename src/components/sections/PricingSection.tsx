'use client';

import { SectionWrapper, SectionHeader } from '@/components/shared/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AnimatedElement } from '@/components/shared/AnimatedElement';
import { MessageCircle, Check } from 'lucide-react';

const includedFeatures = [
  'Tee time booking system',
  'Tournament management',
  'Member management',
  'Handicap calculation',
  'Score tracking',
  'Online payments',
  'Smart notifications',
  'Custom integrations',
];

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="pricing" variant="alt">
      <SectionHeader
        title="Custom Pricing"
        subtitle="We believe in pricing that makes sense for your organization. Every golf club is different, and your pricing should reflect that."
      />

      <div className="max-w-2xl mx-auto">
        <AnimatedElement animation="fade-in">
          <Card variant="highlighted" padding="none" className="overflow-hidden">
            <div className="p-8 md:p-10 text-center border-b border-gray-100">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">
                Let&apos;s Talk
              </h3>
              <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
                We customize pricing based on your club size, feature requirements, and specific needs.
                As an early-stage startup, we offer flexible partnership opportunities.
              </p>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold text-[var(--color-text)] mb-4 text-center">
                Full platform includes:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                    <span className="text-sm text-[var(--color-text-muted)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={scrollToContact}
              >
                Reach Out to Us
              </Button>
            </div>
          </Card>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
}
