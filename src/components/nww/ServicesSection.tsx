import { Globe, Smartphone, Cloud } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Full-stack web applications built with modern frameworks. From landing pages to complex SaaS platforms.',
    technologies: ['Next.js', 'React', 'Django', 'PostgreSQL'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Cross-platform mobile apps that deliver native-like experiences on iOS and Android.',
    technologies: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Consulting',
    description:
      'AWS architecture design, deployment automation, and technical consulting for scalable systems.',
    technologies: ['AWS', 'CI/CD'],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--nww-text)] mb-4">
            Services
          </h2>
          <p className="text-lg text-[var(--nww-text-muted)] max-w-2xl mx-auto">
            End-to-end software development services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
                p-8 rounded-2xl bg-[var(--nww-background-alt)]
                border border-gray-100
                transition-all duration-300
                hover:shadow-lg hover:border-[var(--nww-primary)]/30
                card-hover
              "
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--nww-text)] flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#B163FF]" />
              </div>

              <h3 className="text-xl font-bold text-[var(--nww-text)] mb-3">
                {service.title}
              </h3>

              <p className="text-[var(--nww-text-muted)] mb-6">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-[var(--nww-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
