"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/animations/Magnetic";
import { whatsappLink } from "@/data/site";

const highlights = [
  "End-to-End Shop Launch",
  "1,000+ Creator Affiliate Network",
  "High-Converting LIVEs & GMV Max Ads",
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -16,
        duration: 0.6,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 26,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-cta-btn",
          {
            opacity: 0,
            y: 15,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-highlights-strip",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.3"
        );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-screen sm:min-h-dvh -mt-(--header-h) items-center justify-center overflow-hidden bg-surface pt-[calc(var(--header-h)+3.5rem)] pb-20 text-ink"
    >
      {/* Background Video */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/herobgdesktop.mp4" type="video/mp4" />
        </video>

        {/* Light overlay so the dark text stays readable over the video */}
        <div className="absolute inset-0 bg-white/65" />

        {/* Seamless bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-dark to-transparent" />
      </div>

      {/* Sleek Centered Hero Content */}
      <div className="container-site relative z-10 mx-auto max-w-4xl text-center">
        {/* Sleek Eyebrow Pill */}
        <div className="hero-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-ink-900/10 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-secondary" />
          </span>
          <span className="font-display text-xs font-bold tracking-wider text-ink-900 uppercase">
            TikTok Shop Growth Agency
          </span>
          <span className="rounded-full bg-accent-500/15 px-2 py-0.5 text-[0.65rem] font-bold text-accent-700">
            PRO PARTNER
          </span>
        </div>

        {/* Sleek, Balanced Headline */}
        <h1 className="hero-title font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl md:text-5xl lg:text-[3.6rem] lg:leading-[1.12]">
          Your Products. Our Strategy.{" "}
          <span className="bg-gradient-to-r from-accent-600 via-secondary to-accent-700 bg-clip-text text-transparent">
            Your Growth.
          </span>
        </h1>

        {/* Sleek Subtitle */}
        <p className="hero-desc mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/80 sm:text-lg">
          PashaCommerce launches, manages, and scales brands on TikTok Shop with viral creators, shoppable short-form content, high-voltage LIVE streams, and high-ROAS ads.
        </p>

        {/* Sleek Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <div className="hero-cta-btn w-full sm:w-auto">
            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                className="btn btn-primary btn-lg w-full shadow-xl transition-all duration-300 hover:shadow-accent-500/35 sm:w-auto"
              >
                <span>Book a Free Strategy Call</span>
                <Icon name="arrowRight" size={17} />
              </Link>
            </Magnetic>
          </div>

          <div className="hero-cta-btn w-full sm:w-auto">
            <Magnetic strength={0.25}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group btn btn-lg w-full border-ink-900/15 bg-white/80 text-ink-900 shadow-sm backdrop-blur-md hover:border-whatsapp hover:bg-whatsapp hover:text-white sm:w-auto"
              >
                <Icon name="whatsapp" size={19} className="text-whatsapp transition-colors group-hover:text-white" />
                <span>WhatsApp Us</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Sleek Bottom Checklist Strip */}
        <div className="hero-highlights-strip mt-12 border-t border-ink-900/10 pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-ink/80 sm:text-sm">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-4.5 place-items-center rounded-full bg-accent-500/15 text-accent-700 ring-1 ring-accent-500/40">
                  <Icon name="check" size={11} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
