"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/animations/Magnetic";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { TiltCard } from "@/components/animations/TiltCard";
import { images } from "@/data/images";

const stepsData = [
  {
    step: "01",
    phase: "Phase 1: Foundation",
    title: "Discovery & Qualification",
    shortTitle: "Discovery Call",
    description:
      "We dive deep into your brand, unit economics, supply chain, and catalog to evaluate your TikTok Shop fit and map out your initial 90-day revenue targets.",
    icon: "message" as const,
    image: images.teamCollab,
    deliverables: [
      "Product margin & supply chain feasibility audit",
      "TikTok Shop category & seller compliance check",
      "Target audience & competitor landscape analysis",
    ],
    metric: "30-Min Strategy Session",
  },
  {
    step: "02",
    phase: "Phase 2: Game Plan",
    title: "Audit & Growth Strategy",
    shortTitle: "Audit & Strategy",
    description:
      "A tailored growth blueprint covering positioning, competitive pricing tiers, creator outreach quotas, viral video hooks, and GMV Max ad budget modeling.",
    icon: "target" as const,
    image: images.analyticsLaptop,
    deliverables: [
      "Keyword & competitor pricing benchmarks",
      "Affiliate commission & creator incentive structure",
      "Shoppable content & LIVE shopping run-of-show",
    ],
    metric: "Custom Growth Blueprint",
  },
  {
    step: "03",
    phase: "Phase 3: Launchpad",
    title: "Setup, Compliance & Launch",
    shortTitle: "Setup & Launch",
    description:
      "From business verification to category approvals and catalog publishing, our technical specialists configure your store right the first time with zero platform violations.",
    icon: "rocket" as const,
    image: images.serviceSetup,
    deliverables: [
      "TikTok Seller Center verified & approved",
      "Shipping templates, warehouse & return settings",
      "First 20+ search-optimised listings published",
    ],
    metric: "100% Policy Compliant",
  },
  {
    step: "04",
    phase: "Phase 4: Momentum",
    title: "Creators & Viral Content",
    shortTitle: "Creators & Content",
    description:
      "We activate niche creators, ship samples, produce short-form shoppable videos crafted around hooks that sell, and host high-energy LIVE commerce sessions.",
    icon: "users" as const,
    image: images.serviceCreators,
    deliverables: [
      "Targeted creator recruitment & outreach",
      "Sample dispatch, tracking & review monitoring",
      "UGC-style product demo & unboxing videos",
    ],
    metric: "100+ Creator Pipeline",
  },
  {
    step: "05",
    phase: "Phase 5: Exponential Scale",
    title: "Scale, Ads & GMV Max Compounding",
    shortTitle: "Scale & Optimise",
    description:
      "Data-driven ad campaigns turn top-performing organic videos into scalable revenue machines, accompanied by weekly performance reporting and continuous catalog CRO.",
    icon: "trendingUp" as const,
    image: images.serviceLive,
    deliverables: [
      "GMV Max & Video Shopping Ads optimization",
      "Weekly performance reporting & strategy calls",
      "Mega-sale campaign & promotion roadmaps",
    ],
    metric: "4.5x Target ROAS",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;

    if (!section || !container || !leftCol || !rightCol) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Only: Pin left side so it is stuck in place while right side keeps scrolling
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: container,
          start: "top 100px",
          end: "bottom bottom",
          pin: leftCol,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });

      // Track each right card to update active step on the pinned left panel
      const cardNodes = rightCol.querySelectorAll<HTMLElement>(".step-scroll-card");
      cardNodes.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });

        // Stagger entrance on cards
        gsap.fromTo(
          card,
          {
            opacity: 0.25,
            y: 35,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToStep = (index: number) => {
    const cardNodes = rightColRef.current?.querySelectorAll<HTMLElement>(".step-scroll-card");
    if (cardNodes && cardNodes[index]) {
      cardNodes[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const currentStep = stepsData[activeStep];
  const progressPercent = Math.round(((activeStep + 1) / stepsData.length) * 100);

  return (
    <section
      ref={sectionRef}
      className="on-dark bg-black relative isolate py-24 sm:py-32 text-white overflow-hidden w-full max-w-full"
    >
      <div className="container-site relative z-10">
        {/* Split Screen Layout: Left side gets STUCK (pinned), Right side KEEPS SCROLLING */}
        <div
          ref={containerRef}
          className="relative grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 items-start"
        >
          {/* LEFT SIDE: GETS STUCK / PINNED IN PLACE */}
          <div
            ref={leftColRef}
            className="w-full lg:sticky lg:top-24 lg:self-start z-20"
          >
            <span className="eyebrow mb-5">How We Work</span>
            <SplitTextHeading
              as="h2"
              className="text-h2 mt-2 font-display font-black text-white"
            >
              A proven path from{" "}
              <span className="text-accent-500">
                first listing to scale
              </span>
            </SplitTextHeading>
            <p className="text-lead mt-5 max-w-xl text-white/75">
              A transparent, 5-stage agile growth system that eliminates the guesswork and turns views into reliable daily GMV.
            </p>

            {/* Dynamic Step Progress Tracker Box */}
            <div className="mt-8 rounded-2xl border border-line bg-[#0a0c10] p-5 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white/80">
                <span className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-accent-500 shadow-[0_0_8px_#12b0e2]" />
                  Active Milestone: Step {currentStep.step} of 05
                </span>
                <span className="font-display text-accent-400">{progressPercent}%</span>
              </div>

              {/* Solid progress line (No Gradient) */}
              <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-accent-500 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Active Step Title Highlight */}
              <p className="mt-3 font-display text-base font-bold text-white">
                {currentStep.title}
              </p>
            </div>

            {/* Interactive Step Quick Selector List */}
            <nav aria-label="Process steps" className="mt-7 hidden space-y-2 lg:block">
              {stepsData.map((item, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    type="button"
                    key={item.step}
                    onClick={() => scrollToStep(idx)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border border-accent-500 bg-[#0a0c10] text-accent-400 shadow-md font-bold"
                        : "border border-transparent text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-display text-xs font-bold transition-colors ${
                          isActive ? "text-accent-400" : "text-white/40"
                        }`}
                      >
                        {item.step}
                      </span>
                      <span>{item.shortTitle}</span>
                    </div>
                    {isActive && (
                      <span className="flex items-center gap-1 text-[0.68rem] font-bold text-accent-300">
                        Viewing <Icon name="arrowRight" size={12} />
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Direct CTA */}
            <div className="mt-8 hidden lg:block">
              <Magnetic strength={0.25}>
                <Link
                  href="/contact"
                  className="btn btn-primary btn-md shadow-lg transition-transform hover:shadow-accent-500/25"
                >
                  <span>Book Free Discovery Call</span>
                  <Icon name="arrowRight" size={16} />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* RIGHT SIDE: KEEPS SCROLLING (Cards) */}
          <div
            ref={rightColRef}
            className="w-full space-y-14 sm:space-y-20 lg:space-y-28 pb-10"
          >
            {stepsData.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={item.step}
                  id={`step-${item.step}`}
                  className="step-scroll-card scroll-mt-36"
                >
                  <TiltCard maxTilt={4}>
                    <article
                      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? "border-accent-500 bg-[#0a0c10] shadow-xl"
                          : "border-line bg-[#0a0c10] shadow-md hover:border-white/20"
                      }`}
                    >
                      {/* Top Visual Image Banner */}
                      <div className="relative aspect-[16/8.5] w-full overflow-hidden bg-[#12151b] sm:aspect-[16/8]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1024px) 550px, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                        />
                        {/* Solid dark overlay (No Gradients) */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-black/40"
                        />

                        {/* Top Badges on Image */}
                        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                          <span className="rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-md">
                            {item.phase}
                          </span>
                          <span className="rounded-full border border-white/20 bg-black/80 px-3 py-1 font-display text-xs font-bold text-white shadow-md backdrop-blur-md">
                            STEP {item.step} / 05
                          </span>
                        </div>

                        {/* Bottom Row on Image */}
                        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                          <span className="grid size-11 place-items-center rounded-xl bg-black/80 border border-white/20 text-accent-400 shadow-lg backdrop-blur-md transition-colors group-hover:bg-accent-500 group-hover:text-black">
                            <Icon name={item.icon} size={22} />
                          </span>

                          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md">
                            <span className="size-1.5 rounded-full bg-accent-500" />
                            {item.metric}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 sm:p-8">
                        <h3 className="font-display text-xl font-bold text-white sm:text-2xl transition-colors group-hover:text-accent-400">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-white/75">
                          {item.description}
                        </p>

                        {/* Deliverables checklist */}
                        <div className="mt-6 rounded-xl border border-line bg-black/50 p-4.5">
                          <p className="text-xs font-bold tracking-wider text-accent-400 uppercase">
                            Key Deliverables
                          </p>
                          <ul className="mt-3 space-y-2.5">
                            {item.deliverables.map((deliv) => (
                              <li key={deliv} className="flex items-start gap-2.5 text-sm text-white/90">
                                <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-accent-500/20 text-accent-400 ring-1 ring-accent-400/40">
                                  <Icon name="check" size={11} strokeWidth={3} />
                                </span>
                                <span>{deliv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Solid bottom accent bar (No Gradient) */}
                      <div
                        className={`h-1 w-full bg-accent-500 transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </article>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Call to Action */}
        <div className="mt-14 text-center lg:hidden">
          <Link href="/contact" className="btn btn-primary btn-lg shadow-lg">
            <span>Book Free Strategy Call</span>
            <Icon name="arrowRight" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
