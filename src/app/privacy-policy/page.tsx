import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { NWW_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${NWW_CONFIG.name}`,
  description: `Privacy Policy for ${NWW_CONFIG.name} and its products.`,
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-[var(--nww-text-muted)] mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Introduction
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              {NWW_CONFIG.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, and safeguard your information when you
              visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Information We Collect
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              We may collect information you provide directly to us, such as when you contact us,
              request a demo, or use our services. This may include your name, email address,
              phone number, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              We use the information we collect to provide, maintain, and improve our services,
              communicate with you, and respond to your inquiries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[var(--nww-text)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--nww-text-muted)]">
              If you have any questions about this Privacy Policy, please contact us at{' '}
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
