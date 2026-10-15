"use client";

import { useState } from "react";
import { portfolioCategories, projects, type PortfolioCategory } from "@/data/portfolio";
import { PortfolioCard } from "./PortfolioCard";

type Filter = "All" | PortfolioCategory;

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = [
    "All",
    ...portfolioCategories.filter((category) => projects.some((project) => project.category === category)),
  ];
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="no-scrollbar -mx-(--gutter) flex gap-2 overflow-x-auto px-(--gutter) pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {filters.map((item) => {
          const active = item === filter;
          const count =
            item === "All" ? projects.length : projects.filter((project) => project.category === item).length;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                active
                  ? "border-accent-500 bg-accent-500 text-black font-bold shadow-[0_0_15px_rgba(18,176,226,0.25)]"
                  : "border-white/10 bg-[#0a0c10] text-zinc-300 hover:border-white/30 hover:text-white"
              }`}
            >
              {item}
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${active ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"}`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug} className="animate-fade-up">
            <PortfolioCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
