import { Mail, Phone, MapPin } from 'lucide-react';
import { NWW_CONFIG } from '@/lib/constants';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: NWW_CONFIG.email,
    href: `mailto:${NWW_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: NWW_CONFIG.phone,
    href: `tel:${NWW_CONFIG.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: NWW_CONFIG.location,
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--nww-text)] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[var(--nww-text-muted)] max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="
                  p-6 rounded-xl bg-[var(--nww-background-alt)]
                  border border-gray-100 text-center
                  transition-all duration-300
                  hover:shadow-lg hover:border-[var(--nww-primary)]/30
                "
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--nww-text)] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#00FFF0]" />
                </div>
                <p className="text-sm text-[var(--nww-text-muted)] mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[var(--nww-text)] font-medium hover:text-[#00D4C8] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[var(--nww-text)] font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href={`mailto:${NWW_CONFIG.email}`}
              className="
                inline-flex items-center gap-2 px-8 py-4
                bg-[var(--nww-text)] text-white
                rounded-lg font-semibold text-lg
                transition-all duration-200
                hover:bg-[var(--nww-text)]/90 hover:shadow-lg
                btn-hover-lift
              "
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
