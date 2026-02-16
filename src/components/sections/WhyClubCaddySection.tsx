'use client';

import { SectionWrapper, SectionHeader } from '@/components/shared/SectionWrapper';
import { AnimatedElement } from '@/components/shared/AnimatedElement';
import { whyUsReasons } from '@/data/navigation';
import { CheckCircle2, Trophy, Settings, MessageCircle } from 'lucide-react';

const highlights = [
  {
    icon: Trophy,
    title: 'Golf-First Design',
    description: 'Built specifically for golf, not generic club software',
  },
  {
    icon: Settings,
    title: 'Fully Customizable',
    description: 'We adapt the platform to fit your exact workflow',
  },
  {
    icon: MessageCircle,
    title: 'Founder Access',
    description: 'Talk directly to the people building ClubCaddy',
  },
];

export function WhyClubCaddySection() {
  return (
    <SectionWrapper id="why-us">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div>
          <AnimatedElement animation="fade-in-left">
            <SectionHeader
              title="Why Choose ClubCaddy?"
              subtitle="We're a focused team building software that golf organizations actually need."
              centered={false}
              className="mb-8"
            />
          </AnimatedElement>

          <ul className="space-y-4">
            {whyUsReasons.map((reason, index) => (
              <AnimatedElement
                key={index}
                animation="fade-in-left"
                delay={index * 75}
              >
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text)]">{reason}</span>
                </li>
              </AnimatedElement>
            ))}
          </ul>
        </div>

        {/* Right Column - Highlights */}
        <div className="space-y-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <AnimatedElement
                key={highlight.title}
                animation="fade-in-right"
                delay={index * 100}
              >
                <div className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-background-alt)] hover:shadow-[var(--shadow-card)] transition-shadow">
                  <div className="w-14 h-14 rounded-lg bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            );
          })}

          {/* Stats */}
          <AnimatedElement animation="fade-in-right" delay={300}>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { value: '2', label: 'Golf Organizations' },
                { value: '3,300+', label: 'Members' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-[var(--color-primary)]/5"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </SectionWrapper>
  );
}
