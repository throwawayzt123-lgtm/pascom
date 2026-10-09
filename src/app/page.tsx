import type { Metadata } from "next";
import { CapabilityMarquee } from "@/components/sections/CapabilityMarquee";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { Process } from "@/components/sections/Process";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CapabilityMarquee />
      <ServicesGrid />
      <WhyUs />
      <Stats className="pb-(--section-y)" />
      <Process />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
