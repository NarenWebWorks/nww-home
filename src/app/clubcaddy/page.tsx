import {
  HeroSection,
  FeaturesSection,
  CustomersSection,
  WhyClubCaddySection,
  PricingSection,
  ContactSection,
} from '@/components/sections';
import { generateClubCaddySchemas } from '@/lib/schema';

export default function ClubCaddyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateClubCaddySchemas()) }}
      />
      <HeroSection />
      <FeaturesSection />
      <CustomersSection />
      <WhyClubCaddySection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
