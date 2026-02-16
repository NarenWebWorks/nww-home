'use client';

import { Button } from '@/components/ui/Button';
import { DashboardMockup } from '@/components/shared/DashboardMockup';
import { AnimatedElement } from '@/components/shared/AnimatedElement';
import { ChevronRight } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background-alt)] via-white to-white" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[var(--color-secondary)]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <AnimatedElement animation="fade-in" delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                Powering Golf Organizations in India
              </span>
            </AnimatedElement>

            <AnimatedElement animation="fade-in" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight mb-6">
                Modern Golf Club{' '}
                <span className="text-[var(--color-primary)]">Management</span>{' '}
                Made Simple
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-in" delay={200}>
              <p className="text-lg sm:text-xl text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto lg:mx-0">
                The all-in-one platform for golf clubs and federations. Manage tee times,
                tournaments, handicaps, members, and scores — all in one place.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="fade-in" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button
                  size="lg"
                  rightIcon={<ChevronRight className="w-5 h-5" />}
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
              </div>
            </AnimatedElement>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <AnimatedElement animation="fade-in-right" delay={300} className="hidden lg:block">
            <DashboardMockup />
          </AnimatedElement>
        </div>
      </div>

    </section>
  );
}
