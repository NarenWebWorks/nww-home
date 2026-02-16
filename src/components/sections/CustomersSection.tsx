'use client';

import { SectionWrapper, SectionHeader } from '@/components/shared/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { AnimatedElement } from '@/components/shared/AnimatedElement';
import { testimonials } from '@/data/navigation';
import { Quote, Building2 } from 'lucide-react';

const customers = [
  {
    name: 'Tamil Nadu Golf Federation',
    abbr: 'TNGF',
    website: 'tngf.in',
    members: '~2,500 members',
  },
  {
    name: 'SouthZone Golf Tour',
    abbr: 'SZGT',
    website: 'southzonegolftour.in',
    members: '~800 members',
  },
];

export function CustomersSection() {
  return (
    <SectionWrapper id="customers" variant="alt">
      <SectionHeader
        title="Our Customers"
        subtitle="Trusted by leading golf organizations in India."
      />

      {/* Customer Logos */}
      <AnimatedElement animation="fade-in" className="mb-16">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {customers.map((customer) => (
            <a
              key={customer.name}
              href={`https://${customer.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-xl bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-shadow p-4"
              title={customer.name}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-3">
                <Building2 className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-primary)]" />
              </div>
              <span className="text-sm font-bold text-[var(--color-text)] text-center">
                {customer.abbr}
              </span>
              <span className="text-xs text-[var(--color-text-muted)] text-center">
                {customer.members}
              </span>
            </a>
          ))}
        </div>
      </AnimatedElement>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <AnimatedElement key={index} animation="fade-in" delay={index * 150}>
            <Card variant="elevated" className="relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--color-primary)]/20" />
              <blockquote className="relative z-10">
                <p className="text-lg text-[var(--color-text)] italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-primary)] font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-[var(--color-text)]">
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {testimonial.role}, {testimonial.organization}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </Card>
          </AnimatedElement>
        ))}
      </div>
    </SectionWrapper>
  );
}
