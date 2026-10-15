import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import { navLinks, site, whatsappLink } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((social) => social.href);

  return (
    <footer className="on-dark relative isolate overflow-hidden bg-black text-white border-t border-line">
      <div className="container-site grid gap-12 pt-20 pb-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
            A TikTok Shop–focused ecommerce agency helping brands launch, manage and scale
            profitable shops with creators, content and performance ads.
          </p>
          <p className="highlight mt-5 font-display text-lg font-semibold">{site.tagline}</p>
          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/75 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Company</h2>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/65 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Services</h2>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-[0.95rem]">
            <li>
              <a
                href={site.phone.href}
                className="flex items-start gap-3 text-white/65 transition-colors hover:text-white"
              >
                <Icon name="phone" size={18} className="mt-0.5 shrink-0 text-accent-500" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/65 transition-colors hover:text-white"
              >
                <Icon name="whatsapp" size={18} className="mt-0.5 shrink-0 text-whatsapp" />
                WhatsApp: {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 break-all text-white/65 transition-colors hover:text-white"
              >
                <Icon name="mail" size={18} className="mt-0.5 shrink-0 text-accent-500" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/65">
              <Icon name="mapPin" size={18} className="mt-0.5 shrink-0 text-accent-500" />
              {site.location.display}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>TikTok Shop Growth Agency · {site.location.display}</p>
        </div>
      </div>
    </footer>
  );
}
