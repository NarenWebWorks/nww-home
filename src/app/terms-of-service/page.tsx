import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { NWW_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service | ${NWW_CONFIG.name}`,
  description: `Terms of Service for ${NWW_CONFIG.name} and its products.`,
};

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-[var(--nww-text-muted)] mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Agreement to Terms
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              By accessing or using our services, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Use of Services
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              You may use our services only for lawful purposes and in accordance with these Terms.
              You agree not to use our services in any way that violates applicable laws or regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Intellectual Property
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              The content, features, and functionality of our services are owned by {NWW_CONFIG.name}
              and are protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Limitation of Liability
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              {NWW_CONFIG.name} shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              If you have any questions about these Terms, please contact us at{' '}
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
