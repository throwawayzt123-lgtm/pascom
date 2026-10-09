"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { TiltCard } from "@/components/animations/TiltCard";
import type { Project } from "@/data/portfolio";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <TiltCard maxTilt={5} className="h-full">
      <Link
        href={`/portfolio/${project.slug}`}
        className="card group flex h-full flex-col overflow-hidden border border-line bg-white shadow-(--elevation-sm) transition-all duration-300 hover:border-accent-500/50 hover:shadow-(--elevation-lg)"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
          <Image
            src={project.image}
            alt={`${project.client} — ${project.title}`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-(--ease-smooth) group-hover:scale-108"
          />
          <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink-900 shadow-md backdrop-blur-md">
            {project.category}
          </span>
          <span className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white text-ink-900 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
            <Icon name="arrowUpRight" size={18} />
          </span>
          <dl className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col-reverse rounded-xl bg-ink-900/90 px-2 py-2 text-center text-white ring-1 ring-white/10 shadow-lg backdrop-blur-md"
              >
                <dt className="mt-1 truncate text-[0.65rem] text-white/80">{metric.label}</dt>
                <dd className="font-display text-base leading-none font-bold text-accent-500 sm:text-lg">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-bold tracking-[0.12em] text-accent-700 uppercase">{project.client}</p>
          <h3 className="mt-2 text-lg leading-snug font-bold transition-colors group-hover:text-accent-700">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-2 flex-1 text-[0.93rem] leading-relaxed text-muted">
            {project.summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 transition-colors group-hover:text-secondary">
            View case study
            <Icon
              name="arrowRight"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
