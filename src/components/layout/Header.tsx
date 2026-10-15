"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { Magnetic } from "@/components/animations/Magnetic";
import { navLinks, site, whatsappLink } from "@/data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // No backdrop-filter while the menu is open: it would become the containing
  // block for the fixed mobile panel and collapse it.
  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        open
          ? "border-line bg-black"
          : scrolled
            ? "border-line bg-black/90 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/10 bg-black/40 backdrop-blur-md"
      }`}
    >
      <div className="container-site flex h-(--header-h) items-center justify-between gap-6">
        <Logo preload variant="light" onClick={() => setOpen(false)} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${
                      active
                        ? "text-accent-400 font-bold"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full transition-transform duration-300 bg-accent-500 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phone.href}
            className="flex items-center gap-2 text-sm font-semibold transition-colors xl:mr-2 text-white/85 hover:text-white"
          >
            <span className="size-9 rounded-full grid place-items-center bg-white/10 text-accent-400 border border-white/15 transition-colors">
              <Icon name="phone" size={16} />
            </span>
            <span className="hidden xl:inline">{site.phone.display}</span>
          </a>
          <Magnetic strength={0.25}>
            <Link href="/contact" className="btn btn-primary btn-sm shadow-xs">
              Free Strategy Call
              <Icon name="arrowRight" size={16} />
            </Link>
          </Magnetic>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-white/20 bg-black/40 text-white backdrop-blur-md hover:border-white/40 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "x" : "menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-(--header-h) bottom-0 overflow-y-auto border-t border-line bg-black transition-[opacity,visibility,transform] duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors ${
                      active ? "bg-white/10 text-accent-400 font-bold" : "text-white/85 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    <Icon name="chevronRight" size={18} className="opacity-50" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 grid gap-3 border-t border-line pt-6">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary btn-lg w-full">
              Book a Free Strategy Call
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg w-full"
            >
              <Icon name="whatsapp" size={20} />
              Chat on WhatsApp
            </a>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-white/60">
            <li>
              <a href={site.phone.href} className="flex items-center gap-3 hover:text-accent-400">
                <Icon name="phone" size={16} className="text-accent-400" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-accent-400">
                <Icon name="mail" size={16} className="text-accent-400" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mapPin" size={16} className="text-accent-400" />
              {site.location.display}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
