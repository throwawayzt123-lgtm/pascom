"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/animations/Magnetic";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
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
          ".hero-desc",
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          "-=0.1"
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
      className="relative isolate flex min-h-screen sm:min-h-dvh -mt-(--header-h) items-center justify-center overflow-hidden bg-black pt-[calc(var(--header-h)+3.5rem)] pb-20 text-white"
    >
      {/* Background Video with 40% Dark Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source src="/herobgdesktop1.mp4" type="video/mp4" />
        </video>

        {/* 40% Dark overlay for crisp contrast over video */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Sleek Centered Hero Content */}
      <div className="container-site relative z-10 mx-auto max-w-4xl text-center">
        {/* Sleek Eyebrow Pill */}
        <div className="hero-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-black/60 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
          </span>
          <span className="font-display text-xs font-bold tracking-wider text-white uppercase">
            TikTok Shop Growth Agency
          </span>
          <span className="rounded-full bg-accent-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-accent-400 border border-accent-500/30">
            PRO PARTNER
          </span>
        </div>

        {/* Sleek, Balanced Headline with Letter-by-Letter Animation */}
        <SplitTextHeading
          as="h1"
          isHero
          delay={0.25}
          stagger={0.02}
          className="hero-title font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.6rem] lg:leading-[1.12]"
        >
          Your Products. Our Strategy.{" "}
          <span className="text-accent-500">
            Your Growth.
          </span>
        </SplitTextHeading>

        {/* Sleek Subtitle */}
        <p className="hero-desc mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          PashaCommerce launches, manages, and scales brands on TikTok Shop with viral creators, shoppable short-form content, high-voltage LIVE streams, and high-ROAS ads.
        </p>

        {/* Sleek Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <div className="hero-cta-btn w-full sm:w-auto">
            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                className="btn btn-primary btn-lg w-full shadow-lg transition-all duration-300 sm:w-auto"
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
                className="group btn btn-lg w-full border-white/20 bg-black/60 text-white shadow-sm backdrop-blur-md hover:border-whatsapp hover:bg-whatsapp hover:text-white sm:w-auto"
              >
                <Icon name="whatsapp" size={19} className="text-whatsapp transition-colors group-hover:text-white" />
                <span>WhatsApp Us</span>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Sleek Bottom Checklist Strip */}
        <div className="hero-highlights-strip mt-12 border-t border-white/10 pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-white/80 sm:text-sm">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-4.5 place-items-center rounded-full bg-accent-500/20 text-accent-400 ring-1 ring-accent-500/40">
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
