import Link from "next/link";
import type { ReactNode } from "react";
import { SplitTextHeading } from "@/components/animations/SplitTextHeading";
import { Icon } from "./Icon";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  breadcrumb: { label: string; href?: string }[];
  children?: ReactNode;
};

/** Dark banner used at the top of inner pages. */
export function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="on-dark bg-black text-white relative isolate overflow-hidden -mt-(--header-h) pt-(--header-h)">
      <div className="container-site pt-16 pb-20 text-center sm:pt-20 sm:pb-24">
        <nav aria-label="Breadcrumb" className="animate-fade-up mb-8 flex justify-center">
          <ol className="flex flex-wrap items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
            <li>
              <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <Icon name="home" size={14} />
                Home
              </Link>
            </li>
            {breadcrumb.map((item) => (
              <li key={item.label} className="flex items-center gap-1.5">
                <Icon name="chevronRight" size={14} className="opacity-50" />
                {item.href ? (
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <span className="eyebrow animate-fade-up delay-1">{eyebrow}</span>
        <SplitTextHeading
          as="h1"
          isHero
          delay={0.2}
          className="text-h1 mx-auto mt-6 max-w-4xl"
        >
          {title}
        </SplitTextHeading>
        <p className="text-lead animate-fade-up delay-3 mx-auto mt-6 max-w-2xl text-white/70">
          {description}
        </p>
        {children && <div className="animate-fade-up delay-4 mt-9">{children}</div>}
      </div>
    </section>
  );
}
