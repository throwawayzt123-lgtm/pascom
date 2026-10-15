"use client";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { stats } from "@/data/content";

export function Stats({ className = "" }: { className?: string }) {
  return (
    <section aria-label="PashaCommerce in numbers" className={`bg-black ${className}`}>
      <div className="container-site">
        <dl className="reveal grid grid-cols-2 overflow-hidden rounded-(--round-xl) border border-line bg-[#0a0c10] shadow-lg lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative flex flex-col items-center justify-center px-4 py-9 text-center transition-colors duration-300 hover:bg-white/5 sm:py-11 ${
                index % 2 === 0 ? "border-r border-line" : ""
              } ${index < 2 ? "border-b border-line lg:border-b-0" : ""} ${
                index === 1 ? "lg:border-r" : ""
              }`}
            >
              {/* Solid top indicator bar on hover (No Gradient) */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-accent-500 transition-transform duration-300 group-hover:scale-x-100"
              />

              <dt className="order-2 mt-2 text-sm font-semibold text-muted transition-colors group-hover:text-white sm:text-[0.95rem]">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-4xl font-black tracking-tight text-white transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
                <span className="text-accent-500 transition-colors group-hover:text-white">
                  <AnimatedCounter value={stat.value} />
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
