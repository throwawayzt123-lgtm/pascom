"use client";

import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/animations/TiltCard";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="section relative isolate overflow-hidden bg-black text-white">
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
                <figure className="group relative flex h-full flex-col overflow-hidden rounded-(--round-xl) border border-line bg-[#0a0c10] p-7 shadow-md transition-all duration-300 hover:border-accent-500">
                  <div className="flex items-center justify-between">
                    <Icon name="quote" size={34} className="text-accent-500/30 transition-colors group-hover:text-accent-500" />
                    <div className="flex gap-1 text-amber-400" aria-label="Rated 5 out of 5">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Icon key={index} name="star" size={15} />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-white/90 font-medium">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                    <span className="grid size-11 place-items-center rounded-full bg-accent-500/15 border border-accent-500/30 font-display text-sm font-bold text-accent-400 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-black">
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <div>
                      <span className="block font-bold text-white">{item.name}</span>
                      <span className="block text-xs font-medium text-muted">{item.role}</span>
                    </div>
                  </figcaption>

                  {/* Solid bottom bar indicator (No Gradient) */}
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100"
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
