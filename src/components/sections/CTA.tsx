"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/animations/Magnetic";
import { FloatingSticker } from "@/components/animations/FloatingSticker";
import { site, whatsappLink } from "@/data/site";

type CTAProps = {
  title?: string;
  description?: string;
};

export function CTA({
  title = "Ready to turn views into revenue?",
  description = "Book a free strategy call. We'll review your products, show you the untapped opportunity on TikTok Shop, and map out a clear plan to scale.",
}: CTAProps) {
  return (
    <section className="bg-white py-[calc(var(--section-y)*0.8)]">
      <div className="container-site">
        <div className="reveal relative overflow-hidden rounded-(--round-xl) bg-gradient-to-br from-accent-500 via-accent-500 to-accent-600 px-6 py-14 text-center text-ink-900 shadow-xl sm:px-12 sm:py-20">
          {/* Funky decorative ambient blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/30 blur-2xl"
          />

          {/* Floating limited slots badge */}
          <div className="absolute top-6 right-6 hidden md:block">
            <FloatingSticker duration={4.5} yOffset={6} rotationAngle={3}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900/90 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-secondary animate-ping" />
                Only 3 onboarding spots left
              </span>
            </FloatingSticker>
          </div>

          <div className="relative z-1">
            <p className="font-display text-xs font-black tracking-[0.22em] text-ink-900/75 uppercase sm:text-sm">
              {site.tagline}
            </p>
            <h2 className="text-h2 mx-auto mt-4 max-w-3xl font-display font-black text-ink-950">
              {title}
            </h2>
            <p className="text-lead mx-auto mt-5 max-w-2xl font-medium text-ink-900/85">
              {description}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="btn btn-secondary btn-lg shadow-lg transition-transform hover:shadow-xl"
                >
                  Book a Free Strategy Call
                  <Icon name="arrowRight" size={18} />
                </Link>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark btn-lg shadow-sm"
                >
                  <Icon name="whatsapp" size={20} />
                  Chat on WhatsApp
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
