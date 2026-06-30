import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { FeatureCards } from "@/components/feature-cards";
import { SocialProof } from "@/components/social-proof";
import { PricingSection } from "@/components/pricing-section";
import { DownloadSection } from "@/components/download-section";
import { SupportSection } from "@/components/support-section";
import { FaqSection } from "@/components/faq-section";
import { ServersSection } from "@/components/servers-section";
import { CtaSection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import { appInfo, faqItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ren VPN",
  description:
    "Ren VPN — безопасный VPN-сервис с шифрованием AES-256, без логирования и высокой скоростью. Защитите свою приватность в один клик.",
  openGraph: {
    title: "Ren VPN — безопасный интернет для всех",
    description:
      "Современный VPN-сервис с надёжным шифрованием, без логирования и с высокой скоростью соединения.",
  },
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ren VPN",
    url: "https://renvpn.com",
    description: appInfo.description,
    slogan: appInfo.tagline,
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@renvpn.com",
      contactType: "customer support",
    },
    sameAs: ["https://play.google.com/store/apps/details?id=com.rg.nomadvpn"],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <HeroSection />
      <FeatureCards />
      <SocialProof />
      <PricingSection />
      <DownloadSection />
      <SupportSection />
      <FaqSection />
      <ServersSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
