'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type AnimationType = 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in';

interface AnimatedElementProps extends HTMLAttributes<HTMLDivElement> {
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
}

export const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  (
    {
      animation = 'fade-in',
      delay = 0,
      threshold = 0.1,
      className = '',
      style,
      children,
      ...props
    },
    _ref
  ) => {
    const [inViewRef, isInView] = useInView<HTMLDivElement>({ threshold });
    const prefersReducedMotion = useReducedMotion();

    // If user prefers reduced motion, skip animations
    if (prefersReducedMotion) {
      return (
        <div className={className} style={style} {...props}>
          {children}
        </div>
      );
    }

    return (
      <div
        ref={inViewRef}
        className={`${animation} ${isInView ? 'visible' : ''} ${className}`}
        style={{ transitionDelay: `${delay}ms`, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedElement.displayName = 'AnimatedElement';
