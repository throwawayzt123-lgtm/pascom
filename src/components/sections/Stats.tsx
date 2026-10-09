"use client";

import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { stats } from "@/data/content";

export function Stats({ className = "" }: { className?: string }) {
  return (
    <section aria-label="PashaCommerce in numbers" className={`bg-white ${className}`}>
      <div className="container-site">
        <dl className="reveal grid grid-cols-2 overflow-hidden rounded-(--round-xl) border border-line bg-white shadow-(--elevation-md) lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative flex flex-col items-center justify-center px-4 py-9 text-center transition-colors duration-300 hover:bg-accent-50/40 sm:py-11 ${
                index % 2 === 0 ? "border-r border-line" : ""
              } ${index < 2 ? "border-b border-line lg:border-b-0" : ""} ${
                index === 1 ? "lg:border-r" : ""
              }`}
            >
              {/* Subtle top indicator bar on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-accent-500 to-secondary transition-transform duration-300 group-hover:scale-x-100"
              />

              <dt className="order-2 mt-2 text-sm font-semibold text-muted transition-colors group-hover:text-ink sm:text-[0.95rem]">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-4xl font-black tracking-tight text-ink transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
                <span className="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent group-hover:from-secondary group-hover:to-accent-500">
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
