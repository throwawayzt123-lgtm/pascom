import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "See how PashaCommerce helps brands launch and scale on TikTok Shop with creators, shoppable content, LIVE selling and ads.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Real strategies. <span className="highlight">Real growth.</span>
          </>
        }
        description="Explore how we help brands across beauty, fashion, home, fitness and electronics grow on TikTok Shop."
        breadcrumb={[{ label: "Portfolio" }]}
      />

      <section className="section bg-black text-white">
        <div className="container-site">
          <PortfolioGrid />
        </div>
      </section>

      <Stats className="py-(--section-y)" />

      <CTA
        title="Your brand could be our next success story"
        description="Tell us about your products and goals. We'll show you exactly how we'd grow your TikTok Shop."
      />
    </>
  );
}
