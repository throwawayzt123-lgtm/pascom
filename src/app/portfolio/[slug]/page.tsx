import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { CTA } from "@/components/sections/CTA";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { getProject, projects } from "@/data/portfolio";
import { whatsappLink } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.client} Case Study`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: { images: [{ url: project.image }] },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = [
    ...projects.filter((item) => item.slug !== project.slug && item.category === project.category),
    ...projects.filter((item) => item.slug !== project.slug && item.category !== project.category),
  ].slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        breadcrumb={[{ label: "Portfolio", href: "/portfolio" }, { label: project.client }]}
      />

      <section className="bg-black pb-(--section-y) text-white">
        <div className="container-site">
          {/* Cover image overlapping the hero */}
          <div className="reveal relative -mt-10 aspect-[16/9] overflow-hidden rounded-(--round-xl) border border-line shadow-2xl sm:-mt-14 lg:aspect-[21/9]">
            <Image
              src={project.image}
              alt={`${project.client} project cover`}
              fill
              sizes="(min-width: 1280px) 1240px, 100vw"
              className="object-cover"
              preload
            />
          </div>

          {/* Key metrics */}
          <dl className="reveal mt-8 grid gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col-reverse rounded-(--round-lg) border border-line bg-[#0a0c10] p-6 text-center shadow-md">
                <dt className="mt-1 font-medium text-muted">{metric.label}</dt>
                <dd className="font-display text-4xl font-bold text-accent-400">{metric.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
            <div className="space-y-12">
              <article className="reveal">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="icon-tile-soft size-10 rounded-xl">
                    <Icon name="target" size={18} />
                  </span>
                  The challenge
                </h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{project.challenge}</p>
              </article>

              <article className="reveal">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="icon-tile-soft size-10 rounded-xl">
                    <Icon name="lightbulb" size={18} />
                  </span>
                  Our strategy
                </h2>
                <ol className="mt-6 space-y-4">
                  {project.strategy.map((step, index) => (
                    <li key={step} className="flex gap-4 rounded-(--round-lg) border border-line bg-[#0a0c10] p-5">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-500 font-display text-sm font-bold text-black">
                        {index + 1}
                      </span>
                      <span className="pt-1 leading-relaxed text-white">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="reveal">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-white">
                  <span className="icon-tile-soft size-10 rounded-xl">
                    <Icon name="award" size={18} />
                  </span>
                  The results
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start gap-3">
                      <Icon name="checkCircle" size={22} className="mt-0.5 shrink-0 text-accent-400" />
                      <span className="text-[1.03rem] leading-relaxed text-white">{result}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
              <div className="rounded-(--round-lg) border border-line bg-[#0a0c10] p-6 shadow-md text-white">
                <h2 className="text-sm font-bold tracking-[0.14em] text-accent-400 uppercase">Project overview</h2>
                <dl className="mt-5 space-y-4 text-[0.95rem]">
                  <div>
                    <dt className="text-muted">Client</dt>
                    <dd className="mt-0.5 font-semibold text-white">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Industry</dt>
                    <dd className="mt-0.5 font-semibold text-white">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Duration</dt>
                    <dd className="mt-0.5 font-semibold text-white">{project.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Services</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-white"
                        >
                          {service}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-(--round-lg) border border-accent-500/40 bg-[#0a0c10] p-6 text-white shadow-xl">
                <h2 className="font-display text-xl font-bold">Want results like these?</h2>
                <p className="mt-2 text-sm text-white/70">
                  Let&apos;s talk about your products and build a plan for your TikTok Shop.
                </p>
                <div className="mt-5 grid gap-2.5">
                  <Link href="/contact" className="btn btn-primary btn-sm w-full">
                    Book a strategy call
                  </Link>
                  <a
                    href={whatsappLink(`Hi PashaCommerce! I saw the "${project.client}" case study and want similar results.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm w-full"
                  >
                    <Icon name="whatsapp" size={17} className="text-whatsapp" />
                    WhatsApp us
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-black text-white">
        <div className="container-site">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="text-h2 reveal">More case studies</h2>
            <Link href="/portfolio" className="btn btn-outline reveal">
              <Icon name="arrowLeft" size={16} />
              All projects
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="reveal">
                <PortfolioCard project={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
