"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/animations/Magnetic";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { services } from "@/data/services";

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stRef = useRef<ScrollTrigger | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [trackPadding, setTrackPadding] = useState(120);

  // Smoothly scroll to a specific card via ScrollTrigger
  const goToCard = useCallback((index: number) => {
    const st = stRef.current;
    if (!st) return;

    const targetIndex = Math.max(0, Math.min(services.length - 1, index));
    const targetProgress = targetIndex / (services.length - 1);
    const targetScrollY = st.start + targetProgress * (st.end - st.start);

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const pinWrapper = pinWrapperRef.current;
    const track = trackRef.current;
    if (!section || !pinWrapper || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Measure card and compute start/end padding so active card sits centered
    const calculateLayout = () => {
      const firstCard = cardsRef.current[0];
      const windowWidth = window.innerWidth;
      const cardWidth = firstCard ? firstCard.offsetWidth : Math.min(840, windowWidth * 0.82);

      // Center the active card in the viewport
      const padding = Math.max(20, (windowWidth - cardWidth) / 2);
      setTrackPadding(padding);

      const gap = windowWidth < 768 ? 20 : 36;
      const totalDistance = (services.length - 1) * (cardWidth + gap);

      return { cardWidth, padding, totalDistance, gap };
    };

    const ctx = gsap.context(() => {
      const { totalDistance, cardWidth } = calculateLayout();

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        // Smooth pinning distance giving comfortable ~450px vertical scroll per 16:9 card
        end: () => `+=${Math.max(totalDistance * 0.9, 3200)}`,
        pin: pinWrapper,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        animation: gsap.to(track, {
          x: () => {
            const firstCard = cardsRef.current[0];
            const currentCardW = firstCard ? firstCard.offsetWidth : cardWidth;
            const currentGap = window.innerWidth < 768 ? 20 : 36;
            return -((services.length - 1) * (currentCardW + currentGap));
          },
          ease: "none",
        }),
        onUpdate: (self) => {
          const idx = Math.min(
            services.length - 1,
            Math.max(0, Math.round(self.progress * (services.length - 1)))
          );
          setActiveIndex(idx);
        },
      });

      stRef.current = st;

      const handleResize = () => {
        calculateLayout();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, sectionRef);

    return () => {
      ctx.revert();
      stRef.current = null;
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent, index: number) => {
    // If user clicks a dimmed card on the side, smoothly scroll it into center focus
    if (index !== activeIndex) {
      e.preventDefault();
      goToCard(index);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
    >
      <div
        ref={pinWrapperRef}
        className="relative flex h-screen max-h-screen w-full flex-col justify-between overflow-hidden bg-black pt-[calc(var(--header-h)+0.75rem)] pb-5 md:pb-7"
      >
        {/* Top Header Row with live counter & arrows */}
        <div className="container-site w-full shrink-0">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1 text-xs font-bold tracking-widest text-accent-400 uppercase">
                <span className="size-1.5 rounded-full bg-accent-500" />
                WHAT WE DO
              </div>
              <SplitTextHeading
                as="h2"
                className="mt-2 font-display text-2xl font-black text-white sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-tight"
              >
                Everything your TikTok Shop needs,{" "}
                <span className="text-accent-500">under one roof</span>
              </SplitTextHeading>
              <p className="mt-1 max-w-2xl text-xs text-muted sm:text-sm md:text-[0.92rem]">
                From setup and viral creators to daily operations and ads — scroll to explore all services 1 by 1.
              </p>
            </div>

            {/* Live Progress Bar & Nav Controls */}
            <div className="flex items-center gap-4 shrink-0 self-end md:self-auto">
              <div className="flex flex-col items-end">
                <span className="font-display text-xs sm:text-sm font-bold text-accent-400 tracking-wider">
                  0{activeIndex + 1} <span className="text-white/40">/ 0{services.length}</span>
                </span>
                <div className="mt-1.5 h-1 w-28 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-accent-500 transition-all duration-300 ease-out"
                    style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goToCard(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="grid size-9 sm:size-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-accent-500 hover:text-accent-400 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Previous service"
                >
                  <Icon name="arrowLeft" size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => goToCard(activeIndex + 1)}
                  disabled={activeIndex === services.length - 1}
                  className="grid size-9 sm:size-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-colors hover:border-accent-500 hover:text-accent-400 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Next service"
                >
                  <Icon name="arrowRight" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Horizontal Scrolling Track of 16:9 Cards (Matching Reference Picture 2) */}
        <div className="relative my-auto flex w-full items-center overflow-visible py-2">
          <div
            ref={trackRef}
            style={{
              paddingLeft: `${trackPadding}px`,
              paddingRight: `${trackPadding}px`,
            }}
            className="flex items-center gap-5 md:gap-9 will-change-transform"
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.slug}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="shrink-0"
                >
                  <Link
                    href={`/services#${service.slug}`}
                    onClick={(e) => handleCardClick(e, index)}
                    className={`group relative block aspect-[16/9] w-[min(84vw,860px,calc(52vh*16/9))] overflow-hidden rounded-2xl md:rounded-3xl border transition-all duration-500 ${
                      isActive
                        ? "border-accent-500/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] opacity-100 scale-100 ring-1 ring-accent-500/40"
                        : "border-white/10 opacity-40 scale-[0.95] hover:opacity-75 hover:scale-[0.98]"
                    }`}
                  >
                    {/* Full-bleed 16:9 background image */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 860px, 85vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={index < 2}
                    />

                    {/* Flat Dark Contrast Overlay (No Gradients) */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/45"
                    />

                    {/* Top Corner Meta Badges */}
                    <div className="absolute inset-x-5 md:inset-x-8 top-5 md:top-7 z-10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {service.badge && (
                          <span className="rounded-full border border-white/20 bg-black/80 px-3 py-1 text-[0.68rem] md:text-xs font-bold tracking-wider text-white uppercase backdrop-blur-md">
                            {service.badge}
                          </span>
                        )}
                        <span className="grid size-8 md:size-9 place-items-center rounded-lg bg-white/10 border border-white/20 text-accent-400 backdrop-blur-md shadow-md transition-colors group-hover:bg-accent-500 group-hover:text-black">
                          <Icon name={service.icon} size={16} />
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {service.metric && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-[0.68rem] md:text-xs font-bold text-white backdrop-blur-md">
                            <span className="size-1.5 rounded-full bg-accent-500" />
                            {service.metric}
                          </span>
                        )}
                        <span className="rounded-full border border-accent-500/40 bg-black/80 px-2.5 py-1 font-display text-[0.68rem] md:text-xs font-bold text-accent-400 backdrop-blur-md">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Main Content Overlay: Number, Uppercase Title & Description (Matching Picture 2) */}
                    <div className="absolute inset-x-5 md:inset-x-8 bottom-5 md:bottom-7 z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-display text-xs md:text-sm font-extrabold tracking-widest text-accent-400 uppercase">
                          0{index + 1}
                        </span>
                        <span className="h-px w-6 bg-accent-500/60" />
                        <span className="text-[0.7rem] md:text-xs font-bold uppercase tracking-wider text-white/70">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-[2rem] font-black uppercase tracking-tight text-white leading-tight transition-colors group-hover:text-accent-400">
                        {service.title}
                      </h3>

                      <p className="mt-1.5 text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed line-clamp-2">
                        {service.short}
                      </p>

                      <div className="mt-3.5 flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500 px-4 py-1.5 text-xs font-bold text-black shadow-md transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                          <span>Explore Service</span>
                          <Icon name="arrowRight" size={13} />
                        </span>
                        <span className="text-xs text-white/60 font-semibold hidden sm:inline">
                          {service.deliverables.length} Deliverables Included
                        </span>
                      </div>
                    </div>

                    {/* Solid bottom accent line (No Gradients) */}
                    <span
                      className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 ease-out group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Status / Navigation Bar */}
        <div className="container-site w-full shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-3 md:pt-4">
            <div className="flex items-center gap-2 text-xs font-medium text-white/60">
              <span className="size-2 rounded-full bg-accent-500 animate-pulse" />
              <span>Scroll down to slide cards horizontally 1 by 1</span>
            </div>

            {/* Pagination card dots */}
            <div className="flex items-center gap-1.5">
              {services.map((s, idx) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => goToCard(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-7 bg-accent-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to service ${idx + 1}: ${s.title}`}
                />
              ))}
            </div>

            <Magnetic strength={0.2}>
              <Link
                href="/services"
                className="text-xs font-bold text-accent-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>View all 8 services in full detail</span>
                <Icon name="arrowRight" size={14} />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
