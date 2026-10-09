"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/animations/TiltCard";
import { Magnetic } from "@/components/animations/Magnetic";
import { services } from "@/data/services";

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current?.querySelectorAll(".service-card-item");
    if (!cards || cards.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 45,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section relative isolate overflow-hidden bg-surface">
      {/* Funky decorative ambient background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent-500/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/8 blur-3xl"
      />

      <div className="container-site relative">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything your TikTok Shop needs, <span className="highlight">under one roof</span>
            </>
          }
          description="From the first listing to your biggest LIVE, our team handles every part of selling on TikTok Shop with proven, data-backed execution."
        />

        <ul ref={cardsRef} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <li key={service.slug} className="service-card-item h-full opacity-0">
              <TiltCard className="h-full" maxTilt={6}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-(--round-xl) border border-line bg-white shadow-(--elevation-sm) transition-all duration-300 hover:border-accent-500/50 hover:shadow-(--elevation-lg)"
                >
                  {/* Top Image Banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay for Contrast */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-ink-950/40 transition-opacity duration-300 group-hover:from-ink-950/90"
                    />

                    {/* Top Row: Category Badge + Number */}
                    <div className="absolute inset-x-3.5 top-3.5 flex items-center justify-between gap-2">
                      {service.badge && (
                        <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[0.68rem] font-black tracking-wider text-ink-900 uppercase shadow-md backdrop-blur-md">
                          {service.badge}
                        </span>
                      )}
                      <span className="rounded-full border border-white/20 bg-ink-950/70 px-2.5 py-0.5 font-display text-[0.68rem] font-bold tracking-wider text-white backdrop-blur-md">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Bottom Row inside Image: Icon Tile + Highlight Metric */}
                    <div className="absolute inset-x-3.5 bottom-3.5 flex items-end justify-between gap-2">
                      <span className="icon-tile size-10 rounded-xl bg-gradient-to-br from-secondary to-secondary-600 text-white shadow-lg ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                        <Icon name={service.icon} size={19} />
                      </span>

                      {service.metric && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-ink-950/75 px-2.5 py-1 text-[0.68rem] font-bold text-white shadow-md backdrop-blur-md">
                          <span className="size-1.5 rounded-full bg-secondary animate-pulse" />
                          {service.metric}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="relative z-1 flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-[1.08rem] leading-snug font-bold text-ink transition-colors duration-200 group-hover:text-accent-700">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[0.91rem] leading-relaxed text-muted">
                      {service.short}
                    </p>

                    {/* Bottom Action Strip */}
                    <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 transition-colors group-hover:text-secondary">
                        Learn more
                        <Icon
                          name="arrowRight"
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                      </span>
                      <span className="text-[0.7rem] font-semibold text-subtle transition-colors group-hover:text-accent-600">
                        View details →
                      </span>
                    </div>
                  </div>

                  {/* Animated bottom border glow */}
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-500 via-secondary to-accent-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </Link>
              </TiltCard>
            </li>
          ))}
        </ul>

        {/* Explore all services CTA with Magnetic button */}
        <div className="mt-14 text-center">
          <Magnetic strength={0.25}>
            <Link href="/services" className="btn btn-outline shadow-sm group">
              <span>Explore all services in detail</span>
              <Icon
                name="arrowRight"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
