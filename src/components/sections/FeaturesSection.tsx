'use client';

import { SectionWrapper, SectionHeader } from '@/components/shared/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { AnimatedElement } from '@/components/shared/AnimatedElement';
import { features } from '@/data/features';

export function FeaturesSection() {
  return (
    <SectionWrapper id="features" variant="alt">
      <SectionHeader
        title="Everything You Need to Run Your Club"
        subtitle="Powerful features designed specifically for golf clubs and federations. From tee time management to tournament scoring, we've got you covered."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <AnimatedElement
              key={feature.id}
              animation="fade-in"
              delay={index * 50}
            >
              <Card hover className="h-full">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {feature.description}
                </p>
              </Card>
            </AnimatedElement>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
