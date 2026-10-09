"use client";

import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/animations/Magnetic";
import { whatsappLink } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      <Magnetic strength={0.35}>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with PashaCommerce on WhatsApp"
          className="group flex items-center gap-3"
        >
          <span className="pointer-events-none hidden translate-x-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-bold text-ink-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            Chat with us on WhatsApp ⚡
          </span>
          <span className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]">
            <span className="animate-ping-soft absolute inset-0 rounded-full bg-whatsapp" aria-hidden="true" />
            <Icon name="whatsapp" size={28} className="relative" />
          </span>
        </a>
      </Magnetic>
    </div>
  );
}
