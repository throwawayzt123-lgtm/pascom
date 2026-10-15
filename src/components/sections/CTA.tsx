"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/animations/Magnetic";
import { FloatingSticker } from "@/components/animations/FloatingSticker";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
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
    <section className="bg-black py-[calc(var(--section-y)*0.8)] overflow-hidden w-full max-w-full">
      <div className="container-site">
        <div className="reveal relative overflow-hidden rounded-(--round-xl) border border-line bg-[#0a0c10] px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-20">
          {/* Floating limited slots badge */}
          <div className="absolute top-6 right-6 hidden md:block">
            <FloatingSticker duration={4.5} yOffset={6} rotationAngle={3}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-accent-500 shadow-[0_0_8px_#12b0e2]" />
                Only 3 onboarding spots left
              </span>
            </FloatingSticker>
          </div>

          <div className="relative z-1">
            <p className="font-display text-xs font-bold tracking-[0.22em] text-accent-400 uppercase sm:text-sm">
              {site.tagline}
            </p>
            <SplitTextHeading as="h2" className="text-h2 mx-auto mt-4 max-w-3xl font-display font-black text-white">
              {title}
            </SplitTextHeading>
            <p className="text-lead mx-auto mt-5 max-w-2xl text-white/80">
              {description}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Magnetic strength={0.3}>
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg shadow-lg transition-transform hover:shadow-xl"
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
                  className="btn btn-outline btn-lg shadow-sm"
                >
                  <Icon name="whatsapp" size={20} className="text-whatsapp" />
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
