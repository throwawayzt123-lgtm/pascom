import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Process } from "@/components/sections/Process";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "TikTok Shop Services",
  description:
    "TikTok Shop setup, product listing optimisation, shop management, affiliate creator marketing, GMV Max ads, shoppable content, LIVE shopping and growth analytics.",
  alternates: { canonical: "/services" },
};

const plans = [
  {
    name: "Launch",
    tagline: "For brands new to TikTok Shop",
    features: [
      "Shop setup & verification",
      "Up to 20 optimised product listings",
      "Launch creator outreach campaign",
      "Starter content pack",
      "30-day launch report",
    ],
  },
  {
    name: "Growth",
    tagline: "Full-service shop management",
    featured: true,
    features: [
      "Everything in Launch",
      "Ongoing shop & customer management",
      "Affiliate & creator program management",
      "Monthly shoppable video production",
      "GMV Max & LIVE ads management",
      "Weekly reporting & strategy calls",
    ],
  },
  {
    name: "Consulting",
    tagline: "For in-house teams",
    features: [
      "Full shop & listing audit",
      "Custom growth roadmap",
      "Creator & content playbooks",
      "Ad account review",
      "Monthly advisory sessions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            End-to-end <span className="highlight">TikTok Shop</span> growth services
          </>
        }
        description="One specialist team for every part of your TikTok Shop — from setup and listings to creators, content, LIVE selling and ads."
        breadcrumb={[{ label: "Services" }]}
      >
        <ul className="flex flex-wrap justify-center gap-2">
          {services.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/35 hover:bg-white/10 hover:text-white"
              >
                <Icon name={service.icon} size={15} className="text-accent-500" />
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Service details */}
      <section className="section bg-white">
        <div className="container-site space-y-6 sm:space-y-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="reveal card group relative grid scroll-mt-[calc(var(--header-h)+1.5rem)] gap-8 overflow-hidden border border-line bg-white p-6 transition-all duration-300 hover:border-accent-500/50 hover:shadow-(--elevation-lg) sm:p-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14"
            >
              {/* Funky decorative ambient light on card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative z-1 flex flex-col justify-between">
                {/* Visual Image Showcase */}
                <div className="relative aspect-[16/8.5] w-full overflow-hidden rounded-2xl border border-line/60 bg-surface-2 shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 550px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent"
                  />

                  {/* Badges on image */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    {service.badge && (
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-black tracking-wider text-ink-900 uppercase shadow-md backdrop-blur-md">
                        {service.badge}
                      </span>
                    )}
                    <span className="rounded-full border border-white/20 bg-ink-950/75 px-3 py-1 font-display text-xs font-bold text-white shadow-md backdrop-blur-md">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2">
                    <span className="icon-tile size-10.5 rounded-xl bg-gradient-to-br from-secondary to-secondary-600 text-white shadow-lg ring-2 ring-white/20">
                      <Icon name={service.icon} size={20} />
                    </span>
                    {service.metric && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-ink-950/75 px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                        <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
                        {service.metric}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <h2 className="text-2xl font-bold text-ink sm:text-[1.85rem]">{service.title}</h2>
                </div>

                <p className="mt-3.5 text-[1.02rem] leading-relaxed text-muted">{service.description}</p>
                
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn btn-primary btn-sm shadow-sm">
                    Get started
                    <Icon name="arrowRight" size={15} />
                  </Link>
                  <a
                    href={whatsappLink(`Hi PashaCommerce! I'm interested in your "${service.title}" service.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <Icon name="whatsapp" size={17} className="text-whatsapp" />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative z-1 rounded-(--round-lg) border border-accent-100 bg-accent-50/70 p-6 backdrop-blur-xs transition-colors duration-300 group-hover:border-accent-200 group-hover:bg-accent-50 sm:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold tracking-[0.16em] text-accent-700 uppercase">What&apos;s included</h3>
                  <span className="text-[0.72rem] font-bold text-accent-600">{service.deliverables.length} Deliverables</span>
                </div>
                <ul className="mt-5 space-y-3.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-500 text-on-primary shadow-xs">
                        <Icon name="check" size={13} strokeWidth={3} />
                      </span>
                      <span className="text-sm font-semibold text-ink sm:text-[0.94rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Engagement models */}
      <section className="section bg-surface">
        <div className="container-site">
          <SectionHeading
            eyebrow="Ways to work with us"
            title={
              <>
                Flexible plans for <span className="highlight">every stage</span>
              </>
            }
            description="Every brand is different, so every plan is tailored. Pick a starting point and we'll build a custom proposal around your goals."
          />
          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <li
                key={plan.name}
                className={`reveal relative flex flex-col rounded-(--round-xl) p-8 ${
                  plan.featured
                    ? "on-dark bg-dark text-white shadow-(--elevation-lg) ring-1 ring-accent-500/40 lg:-my-4 lg:py-12"
                    : "card"
                }`}
              >
                {plan.featured && (
                  <span className="absolute top-6 right-6 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-on-secondary">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
                <p className={`mt-2 ${plan.featured ? "text-white/70" : "text-muted"}`}>{plan.tagline}</p>
                <p className={`mt-6 font-display text-lg font-semibold ${plan.featured ? "text-accent-500" : "text-accent-700"}`}>
                  Custom quote
                </p>
                <ul className={`mt-6 flex-1 space-y-3.5 border-t pt-6 ${plan.featured ? "border-white/15" : "border-line"}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Icon
                        name="checkCircle"
                        size={20}
                        className={`mt-0.5 shrink-0 ${plan.featured ? "text-accent-500" : "text-accent-700"}`}
                      />
                      <span className={plan.featured ? "text-white/90" : "text-ink"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`btn mt-8 w-full ${plan.featured ? "btn-primary" : "btn-outline"}`}
                >
                  Get a proposal
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
