'use client';

import { SectionWrapper, SectionHeader } from '@/components/shared/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { AnimatedElement } from '@/components/shared/AnimatedElement';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <SectionHeader
        title="Get in Touch"
        subtitle="Ready to transform your golf club management? We'd love to hear from you."
      />

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <AnimatedElement animation="fade-in" delay={0}>
            <Card className="h-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">Email Us</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={100}>
            <Card className="h-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">Call Us</h3>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </Card>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={200}>
            <Card className="h-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-1">Location</h3>
                  <p className="text-[var(--color-text-muted)]">
                    Chennai, India
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </SectionWrapper>
  );
}
