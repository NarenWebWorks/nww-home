import { HTMLAttributes, ReactNode } from 'react';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alt';
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: ReactNode;
}

const sizeStyles: Record<string, string> = {
  sm: 'max-w-4xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
  full: 'max-w-full',
};

export function SectionWrapper({
  variant = 'default',
  size = 'lg',
  className = '',
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={`
        py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8
        ${variant === 'alt' ? 'bg-[var(--color-background-alt)]' : 'bg-[var(--color-background)]'}
        ${className}
      `}
      {...props}
    >
      <div className={`mx-auto ${sizeStyles[size]}`}>{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
