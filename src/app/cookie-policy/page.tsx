import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { NWW_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Cookie Policy | ${NWW_CONFIG.name}`,
  description: `Cookie Policy for ${NWW_CONFIG.name} and its products.`,
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--nww-text-muted)] hover:text-[var(--nww-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--nww-text)] mb-8">
          Cookie Policy
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-[var(--nww-text-muted)] mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              What Are Cookies
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              Cookies are small text files that are stored on your device when you visit a website.
              They are widely used to make websites work more efficiently and to provide information
              to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              How We Use Cookies
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              We use cookies to understand how you use our website and to improve your experience.
              This includes remembering your preferences and analyzing site traffic.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc list-inside text-[var(--nww-text-muted)] space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Managing Cookies
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              Most web browsers allow you to control cookies through their settings.
              You can set your browser to refuse cookies or delete certain cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              If you have any questions about our Cookie Policy, please contact us at{' '}
              <a
                href={`mailto:${NWW_CONFIG.email}`}
                className="text-[var(--nww-primary)] hover:underline"
              >
                {NWW_CONFIG.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
