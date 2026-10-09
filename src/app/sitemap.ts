import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/portfolio/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
