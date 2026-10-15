import Link from "next/link";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/portfolio";

export function PortfolioPreview() {
  return (
    <section className="section bg-black text-white">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our work"
            title={
              <>
                Results that speak in <span className="highlight">GMV</span>
              </>
            }
            description="A look at how we help brands launch and grow on TikTok Shop."
          />
          <Link href="/portfolio" className="btn btn-outline reveal shrink-0">
            View all projects
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <li key={project.slug} className="reveal">
              <PortfolioCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
