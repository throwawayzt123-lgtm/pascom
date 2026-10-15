"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { FloatingSticker } from "@/components/animations/FloatingSticker";
import { Magnetic } from "@/components/animations/Magnetic";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { TiltCard } from "@/components/animations/TiltCard";
import { images } from "@/data/images";

const points = [
  "A specialist team that lives and breathes TikTok Shop",
  "Proven systems for creators, content, LIVE and ads",
  "Weekly reporting with clear, honest numbers",
  "Direct WhatsApp access to your account manager",
];

export function WhyUs() {
  return (
    <section className="section bg-black text-white overflow-hidden max-w-full">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <div className="reveal relative mx-auto w-full max-w-xl lg:max-w-none">
          <TiltCard maxTilt={5}>
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-(--round-xl) border border-line shadow-xl">
              <Image
                src={images.teamCollab}
                alt="PashaCommerce team collaborating on a client strategy"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-103"
              />
            </div>
          </TiltCard>

          <div className="absolute -right-3 -bottom-10 hidden w-[46%] overflow-hidden rounded-(--round-lg) border-[4px] border-[#0a0c10] shadow-xl sm:block lg:-right-8">
            <div className="relative aspect-[4/3]">
              <Image
                src={images.analyticsDashboard}
                alt="Analytics dashboard showing sales performance"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -top-6 left-1 z-10 sm:-left-6">
            <FloatingSticker duration={5} yOffset={8} rotationAngle={-3}>
              <div className="flex items-center gap-3 rounded-2xl bg-[#0a0c10] p-4 pr-5 text-white shadow-xl border border-white/20 backdrop-blur-md">
                <span className="grid size-11 place-items-center rounded-xl bg-accent-500/15 border border-accent-500/30 text-accent-400 shadow-sm">
                  <Icon name="target" size={20} />
                </span>
                <div>
                  <p className="font-display text-xl leading-none font-bold text-accent-500">100%</p>
                  <p className="mt-1 text-xs text-white/80">TikTok Shop focused</p>
                </div>
              </div>
            </FloatingSticker>
          </div>
        </div>

        {/* Copy */}
        <div className="reveal">
          <span className="eyebrow">Why PashaCommerce</span>
          <SplitTextHeading as="h2" className="text-h2 mt-5 text-white">
            We don&apos;t do everything. We do <span className="highlight">TikTok Shop</span>&nbsp;—
            exceptionally well.
          </SplitTextHeading>
          <p className="text-lead mt-5 text-muted">
            TikTok Shop moves fast. Algorithms, ad products and policies change constantly. Being
            100% focused on one platform means we spot opportunities early and turn them into
            sales for our clients before everyone else catches up.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-500/20 text-accent-400 ring-1 ring-accent-500/40">
                  <Icon name="check" size={14} strokeWidth={3} />
                </span>
                <span className="text-[0.95rem] font-semibold text-white">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Magnetic strength={0.25}>
              <Link href="/about" className="btn btn-primary shadow-sm">
                More about us
                <Icon name="arrowRight" size={16} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link href="/portfolio" className="btn btn-outline shadow-xs">
                See our work
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
