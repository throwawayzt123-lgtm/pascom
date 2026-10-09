import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/CTA";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyUs } from "@/data/content";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet PashaCommerce — a Lahore-based ecommerce agency 100% focused on TikTok Shop. Learn about our mission, values and the way we help brands grow.",
  alternates: { canonical: "/about" },
};

const pillars: { title: string; description: string; icon: IconName; image: string }[] = [
  {
    title: "Our Mission",
    description:
      "To make TikTok Shop the most profitable sales channel for every brand we work with — through strategy, creativity and relentless execution.",
    icon: "rocket",
    image: images.teamCollab,
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted TikTok Shop agency for ambitious brands, known for transparent work and results that compound over time.",
    icon: "eye",
    image: images.serviceLive,
  },
  {
    title: "Our Promise",
    description:
      "Honest advice, clear reporting and a team that treats your shop like its own. If something isn't working, you'll hear it from us first.",
    icon: "shield",
    image: images.analyticsDashboard,
  },
];

const values: { title: string; icon: IconName }[] = [
  { title: "Results over vanity metrics", icon: "trendingUp" },
  { title: "Radical transparency", icon: "eye" },
  { title: "Speed & adaptability", icon: "zap" },
  { title: "Long-term partnerships", icon: "users" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PashaCommerce"
        title={
          <>
            The TikTok Shop team behind <span className="highlight">growing brands</span>
          </>
        }
        description="We're a specialist ecommerce agency from Lahore, Pakistan, focused on one thing: helping brands sell more on TikTok Shop."
        breadcrumb={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="section bg-white">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal order-2 lg:order-1">
            <span className="eyebrow">Who we are</span>
            <h2 className="text-h2 mt-5">
              Built for the new era of <span className="highlight">social commerce</span>
            </h2>
            <div className="mt-6 space-y-5 text-[1.03rem] leading-relaxed text-muted">
              <p>
                Shopping has moved to where attention lives — short-form video, creators and LIVE
                streams. TikTok Shop sits at the centre of that shift, and brands that master it
                early are winning big.
              </p>
              <p>
                {site.name} was founded to help brands make that move with confidence. Instead of
                offering every marketing service under the sun, we chose to specialise. Our team
                focuses exclusively on TikTok Shop — setup, listings, creators, content, LIVE and
                ads — so every hour we work is spent getting better at the one platform that
                matters to you.
              </p>
              <p>
                Based in {site.location.display}, we work remotely with brands and sellers who
                want a dedicated, hands-on partner rather than another generic agency.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-primary">
                Our services
                <Icon name="arrowRight" size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Work with us
              </Link>
            </div>
          </div>

          <div className="reveal relative order-1 mx-auto w-full max-w-xl lg:order-2 lg:max-w-none">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-(--round-xl) shadow-(--elevation-lg)">
                <Image
                  src={images.teamMeeting}
                  alt="Team planning a TikTok Shop campaign"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-(--round-xl) shadow-(--elevation-lg)">
                <Image
                  src={images.analyticsLaptop}
                  alt="Reviewing sales analytics on a laptop"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 rounded-2xl border border-line bg-white p-4 pr-6 shadow-(--elevation-lg)">
              <span className="icon-tile size-11">
                <Icon name="mapPin" size={20} />
              </span>
              <div>
                <p className="font-bold leading-tight">{site.location.display}</p>
                <p className="text-sm text-muted">Serving brands worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="section bg-surface">
        <div className="container-site">
          <SectionHeading
            eyebrow="What drives us"
            title={
              <>
                Purpose-built for <span className="highlight">your growth</span>
              </>
            }
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="reveal">
                <div className="card group relative flex h-full flex-col overflow-hidden border border-line bg-white shadow-(--elevation-sm) transition-all duration-300 hover:border-accent-500/50 hover:shadow-(--elevation-lg)">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(min-width: 1024px) 380px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/20 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="icon-tile size-11 rounded-xl bg-gradient-to-br from-secondary to-secondary-600 text-white shadow-lg ring-2 ring-white/20">
                        <Icon name={pillar.icon} size={22} />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-accent-700">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-500 to-secondary transition-transform duration-500 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why brands choose us"
            title={
              <>
                What makes <span className="highlight">PashaCommerce</span> different
              </>
            }
            description="Specialisation, systems and a genuine partnership mindset."
          />
          <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <li key={item.title} className="reveal flex gap-4">
                <span className="icon-tile-soft">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Stats className="pb-(--section-y)" />

      {/* Values strip */}
      <section className="bg-white pb-(--section-y)">
        <div className="container-site">
          <ul className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <li
                key={value.title}
                className="flex items-center gap-3 rounded-(--round-lg) border border-line bg-surface px-5 py-4 font-semibold"
              >
                <Icon name={value.icon} size={20} className="shrink-0 text-accent-700" />
                {value.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
      <CTA title="Let's build your TikTok Shop success story" />
    </>
  );
}
