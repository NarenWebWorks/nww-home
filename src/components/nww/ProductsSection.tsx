import Link from 'next/link';
import { ArrowRight, Flag, Calendar, Trophy, Users } from 'lucide-react';

const clubcaddyFeatures = [
  { icon: Calendar, label: 'Tee Time Booking' },
  { icon: Trophy, label: 'Tournament Management' },
  { icon: Users, label: 'Member Management' },
  { icon: Flag, label: 'Handicap Tracking' },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-[var(--nww-background-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--nww-text)] mb-4">
            Products
          </h2>
          <p className="text-lg text-[var(--nww-text-muted)] max-w-2xl mx-auto">
            SaaS products built in-house to solve real problems
          </p>
        </div>

        {/* ClubCaddy Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#01941a] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-white"
                    >
                      <path d="M4 21v-18" />
                      <path d="M4 3l12 6-12 6" />
                      <circle cx="17" cy="19" r="2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--nww-text)]">ClubCaddy</h3>
                </div>

                <p className="text-[var(--nww-text-muted)] mb-6">
                  All-in-one SaaS platform for golf clubs and federations. Manage tee time
                  bookings, tournaments, handicaps, members, and scores online.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {clubcaddyFeatures.map((feature) => (
                    <div key={feature.label} className="flex items-center gap-2 text-sm text-[var(--nww-text-muted)]">
                      <feature.icon className="w-4 h-4 text-[#01941a]" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/clubcaddy"
                  className="
                    inline-flex items-center gap-2 px-6 py-3 w-fit
                    bg-[#01941a] text-white
                    rounded-lg font-semibold
                    transition-all duration-200
                    hover:bg-[#01941a]/90 hover:shadow-lg
                    btn-hover-lift
                  "
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Visual/Mockup */}
              <div className="bg-gradient-to-br from-[#01941a] to-[#04aa6d] p-8 lg:p-12 flex items-center justify-center min-h-[300px]">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10"
                    >
                      <path d="M4 21v-18" />
                      <path d="M4 3l12 6-12 6" />
                      <circle cx="17" cy="19" r="2" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">Golf Club Management</p>
                  <p className="text-sm opacity-80">Made Simple</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Placeholder */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--nww-text-muted)]">
            More products coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
