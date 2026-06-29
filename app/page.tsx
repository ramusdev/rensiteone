import { HeroSection } from "@/components/hero-section";
import { FeatureCards } from "@/components/feature-cards";
import { SocialProof } from "@/components/social-proof";
import { PricingSection } from "@/components/pricing-section";
import { DownloadSection } from "@/components/download-section";
import { SupportSection } from "@/components/support-section";
import { FaqSection } from "@/components/faq-section";
import { FooterSection } from "@/components/footer-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureCards />
      <SocialProof />
      <PricingSection />
      <DownloadSection />
      <SupportSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
