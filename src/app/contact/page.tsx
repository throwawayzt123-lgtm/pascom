import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { TiltCard } from "@/components/animations/TiltCard";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to PashaCommerce about growing your brand on TikTok Shop. Call or WhatsApp +92 370 4056309, or email info@pashacommerce.com. Based in Lahore, Pakistan.",
  alternates: { canonical: "/contact" },
};

const channels: {
  label: string;
  value: string;
  href?: string;
  icon: IconName;
  external?: boolean;
  tone: "brand" | "whatsapp";
  status?: string;
}[] = [
  {
    label: "WhatsApp Support",
    value: site.whatsapp.display,
    href: whatsappLink(),
    icon: "whatsapp",
    external: true,
    tone: "whatsapp",
    status: "Online Now • Instant reply",
  },
  {
    label: "Call Us Directly",
    value: site.phone.display,
    href: site.phone.href,
    icon: "phone",
    tone: "brand",
    status: "Mon – Sat, 9am – 7pm PKT",
  },
  {
    label: "Email Enquiries",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: "mail",
    tone: "brand",
    status: "Response within 2 hours",
  },
  {
    label: "HQ Location",
    value: site.location.display,
    icon: "mapPin",
    tone: "brand",
    status: "Lahore, Pakistan • Global Clients",
  },
];

const nextSteps = [
  {
    title: "Instant Triage & Review",
    desc: "Our senior strategy team reviews your store or products within 2 hours.",
  },
  {
    title: "Free 30-Min Discovery Session",
    desc: "We analyze your TikTok Shop opportunity, competitor gaps, and creator strategy.",
  },
  {
    title: "Tailored Growth Roadmap",
    desc: "You receive a clear, actionable plan with revenue forecasts and recommended service scope.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s scale your <span className="highlight">TikTok Shop</span> together
          </>
        }
        description="Tell us about your brand, store, or goals. We'll get back to you with honest data, creative ideas, and a clear growth plan — with zero obligation."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="section relative isolate overflow-hidden bg-black text-white">
        <div className="container-site relative grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          {/* Left Column: Contact details & Journey */}
          <div className="space-y-6">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((channel) => {
                const content = (
                  <div className="flex w-full items-center gap-4">
                    <span
                      className={
                        channel.tone === "whatsapp"
                          ? "grid size-12.5 shrink-0 place-items-center rounded-2xl bg-whatsapp text-white shadow-md transition-transform duration-300 group-hover:scale-105"
                          : "grid size-12.5 shrink-0 place-items-center rounded-2xl bg-accent-500/15 border border-accent-500/30 text-accent-400 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-black"
                      }
                    >
                      <Icon name={channel.icon} size={22} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                          {channel.label}
                        </span>
                        {channel.status && (
                          <span
                            className={`flex items-center gap-1 text-[0.68rem] font-bold ${
                              channel.tone === "whatsapp" ? "text-whatsapp" : "text-subtle"
                            }`}
                          >
                            {channel.tone === "whatsapp" && (
                              <span className="size-1.5 rounded-full bg-whatsapp" />
                            )}
                            {channel.status}
                          </span>
                        )}
                      </div>
                      <span className="mt-0.5 block font-display text-base font-bold break-words text-white transition-colors group-hover:text-accent-400">
                        {channel.value}
                      </span>
                    </div>
                    {channel.href && (
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#12151b] text-subtle transition-all duration-300 group-hover:bg-accent-500 group-hover:text-black">
                        <Icon name="arrowUpRight" size={16} />
                      </span>
                    )}
                  </div>
                );

                return (
                  <li key={channel.label} className="reveal">
                    <TiltCard maxTilt={5}>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="card card-hover group flex items-center p-5 border border-line bg-[#0a0c10] text-white"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="card flex items-center p-5 border border-line bg-[#0a0c10] text-white">{content}</div>
                      )}
                    </TiltCard>
                  </li>
                );
              })}
            </ul>

            {/* "What happens next?" with modern funky steps */}
            <div className="on-dark reveal relative overflow-hidden rounded-(--round-xl) border border-line bg-[#0a0c10] p-7 text-white shadow-xl">
              <div className="relative z-1">
                <span className="rounded-full bg-accent-500/15 border border-accent-500/30 px-3 py-1 font-display text-[0.7rem] font-bold tracking-widest text-accent-400 uppercase">
                  Our Process
                </span>
                <h2 className="mt-3 font-display text-xl font-bold text-white">What happens after you reach out?</h2>

                <ol className="mt-6 space-y-5">
                  {nextSteps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent-500 font-display text-xs font-black text-black shadow-sm">
                          {index + 1}
                        </span>
                        {index < nextSteps.length - 1 && (
                          <div className="w-0.5 flex-1 bg-white/15 my-1" />
                        )}
                      </div>
                      <div className="pt-0.5 pb-2">
                        <h3 className="font-display text-sm font-bold text-white">{step.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/70">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-white/5 p-3 text-xs text-white/80 border border-white/10">
                  <Icon name="shield" size={16} className="text-accent-400 shrink-0" />
                  <span>All conversations are strictly confidential. We sign NDAs on request.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Upgraded Interactive Form */}
          <div className="reveal relative overflow-hidden rounded-(--round-xl) border border-line bg-[#0a0c10] p-6 sm:p-10 shadow-xl text-white">
            <div className="relative z-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <SplitTextHeading as="h2" className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Send us an enquiry
                </SplitTextHeading>
                <span className="rounded-full bg-accent-500/15 border border-accent-500/30 px-3 py-1 text-xs font-bold text-accent-400">
                  ⚡ Free Strategy Plan
                </span>
              </div>
              <p className="mt-2 mb-8 text-sm text-muted sm:text-base">
                Fill in a few details and we&apos;ll formulate a customized action plan for your TikTok Shop.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section aria-label="Our location" className="bg-black pb-(--section-y)">
        <div className="container-site">
          <div className="reveal overflow-hidden rounded-(--round-xl) border border-line bg-[#0a0c10] shadow-md">
            <iframe
              title="PashaCommerce location — Lahore, Pakistan"
              src="https://www.google.com/maps?q=Lahore,+Pakistan&z=11&output=embed"
              className="block h-[22rem] w-full border-0 sm:h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
