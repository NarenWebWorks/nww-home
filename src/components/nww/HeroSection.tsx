'use client';

import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--nww-background)] via-[var(--nww-background-alt)] to-[var(--nww-background)]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--nww-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--nww-primary)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--nww-text)] mb-6">
          <span className="text-[#B163FF]">Naren</span>WebWorks
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--nww-text-muted)] mb-8">
          Building Digital Products That Work
        </p>

        <p className="max-w-2xl mx-auto text-lg text-[var(--nww-text-muted)] mb-12">
          Freelance software engineer specializing in custom software consultancy,
          web & mobile development, and cloud solutions. Turning your ideas into
          reliable, scalable digital products.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={handleCTAClick}
            className="
              inline-flex items-center gap-2 px-8 py-4
              bg-[var(--nww-text)] text-white
              rounded-lg font-semibold text-lg
              transition-all duration-200
              hover:bg-[var(--nww-text)]/90 hover:shadow-lg
              btn-hover-lift
            "
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="
              inline-flex items-center gap-2 px-8 py-4
              border-2 border-[var(--nww-text)] text-[var(--nww-text)]
              rounded-lg font-semibold text-lg
              transition-all duration-200
              hover:bg-[var(--nww-text)] hover:text-white
            "
          >
            View Services
          </a>
        </div>

        {/* Tech stack badges */}
        <div className="mt-16">
          <p className="text-sm text-[var(--nww-text-muted)] mb-4 uppercase tracking-wider">Tech Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['React', 'Next.js', 'React Native', 'Django', 'AWS', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[var(--nww-text-muted)] shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
