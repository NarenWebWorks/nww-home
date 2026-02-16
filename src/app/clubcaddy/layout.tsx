import type { Metadata, Viewport } from 'next';
import { Navbar, Footer } from '@/components/layout';
import { CLUBCADDY_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    default: `${CLUBCADDY_CONFIG.name} — ${CLUBCADDY_CONFIG.tagline}`,
    template: `%s | ${CLUBCADDY_CONFIG.name}`,
  },
  description: CLUBCADDY_CONFIG.description,
  keywords: [
    'golf club management',
    'tee time booking',
    'golf tournament software',
    'handicap management',
    'golf federation software',
    'golf course management',
    'golf membership software',
    'golf scoring system',
    'golf SaaS',
    'ClubCaddy',
  ],
};

export const viewport: Viewport = {
  themeColor: '#01941a',
};

export default function ClubCaddyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-clubcaddy">
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
