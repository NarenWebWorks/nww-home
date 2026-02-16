import { NWWNavbar, NWWFooter } from '@/components/layout';
import {
  HeroSection,
  ServicesSection,
  ProductsSection,
  ContactSection,
} from '@/components/nww';
import { generateNWWSchemas } from '@/lib/schema';

export default function HomePage() {
  return (
    <div className="theme-nww">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateNWWSchemas()) }}
      />
      <NWWNavbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <NWWFooter />
    </div>
  );
}
