"use client";

import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/animations/TiltCard";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="section relative isolate overflow-hidden bg-white">
      {/* Decorative ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-accent-500/8 blur-3xl"
      />

      <div className="container-site relative z-1">
        <SectionHeading
          eyebrow="Client Love"
          title={
            <>
              Brands that <span className="highlight">grow with us</span>
            </>
          }
          description="We measure our success by our clients' growth. Real feedback from real brands scaling on TikTok Shop."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name} className="reveal h-full">
              <TiltCard maxTilt={5} className="h-full">
                <figure className="card group relative flex h-full flex-col overflow-hidden border border-line bg-white p-7 shadow-(--elevation-sm) transition-all duration-300 hover:border-accent-500/50 hover:shadow-(--elevation-lg)">
                  {/* Subtle hover gradient glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-accent-500/10 via-secondary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="flex items-center justify-between">
                    <Icon name="quote" size={34} className="text-accent-200 transition-colors group-hover:text-accent-500" />
                    <div className="flex gap-1 text-amber-400" aria-label="Rated 5 out of 5">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Icon key={index} name="star" size={15} />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-ink/90 font-medium">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line/60 pt-5">
                    <span className="grid size-11 place-items-center rounded-full bg-gradient-to-tr from-secondary to-secondary-600 font-display text-sm font-bold text-on-secondary shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <div>
                      <span className="block font-bold text-ink">{item.name}</span>
                      <span className="block text-xs font-medium text-muted">{item.role}</span>
                    </div>
                  </figcaption>

                  {/* Bottom bar indicator */}
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-500 to-secondary transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </figure>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
