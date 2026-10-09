"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { FloatingSticker } from "@/components/animations/FloatingSticker";
import { Magnetic } from "@/components/animations/Magnetic";
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
    <section className="section bg-white">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <div className="reveal relative mx-auto w-full max-w-xl lg:max-w-none">
          <TiltCard maxTilt={5}>
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-(--round-xl) shadow-(--elevation-lg) ring-1 ring-black/5">
              <Image
                src={images.teamCollab}
                alt="PashaCommerce team collaborating on a client strategy"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-103"
              />
            </div>
          </TiltCard>

          <div className="absolute -right-3 -bottom-10 hidden w-[46%] overflow-hidden rounded-(--round-lg) border-[6px] border-white shadow-(--elevation-lg) sm:block lg:-right-8">
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

          <div className="absolute -top-6 -left-3 z-10 sm:-left-6">
            <FloatingSticker duration={5} yOffset={8} rotationAngle={-3}>
              <div className="flex items-center gap-3 rounded-2xl bg-ink-900 p-4 pr-5 text-white shadow-(--elevation-lg) border border-white/10 backdrop-blur-md">
                <span className="icon-tile size-11 bg-gradient-to-br from-secondary to-secondary-600 text-white">
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
          <h2 className="text-h2 mt-5">
            We don&apos;t do everything. We do <span className="highlight">TikTok Shop</span>&nbsp;—
            exceptionally well.
          </h2>
          <p className="text-lead mt-5 text-muted">
            TikTok Shop moves fast. Algorithms, ad products and policies change constantly. Being
            100% focused on one platform means we spot opportunities early and turn them into
            sales for our clients before everyone else catches up.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-50 text-accent-700 ring-1 ring-accent-200">
                  <Icon name="check" size={14} strokeWidth={3} />
                </span>
                <span className="text-[0.95rem] font-semibold text-ink">{point}</span>
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
