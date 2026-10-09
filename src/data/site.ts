export const site = {
  name: "PashaCommerce",
  tagline: "Your Products. Our Strategy. Your Growth.",
  description:
    "PashaCommerce is a TikTok Shop–focused ecommerce agency based in Lahore, Pakistan. We launch, manage and scale TikTok Shops with creator partnerships, shoppable content, LIVE selling and performance ads.",
  url: "https://pashacommerce.com",
  email: "info@pashacommerce.com",
  phone: {
    display: "+92 370 4056309",
    href: "tel:+923704056309",
  },
  whatsapp: {
    display: "+92 370 4056309",
    number: "923704056309",
  },
  location: {
    city: "Lahore",
    country: "Pakistan",
    display: "Lahore, Pakistan",
  },
  // Add social profile URLs when available — empty entries are hidden.
  socials: [
    { label: "TikTok", href: "" },
    { label: "Instagram", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Facebook", href: "" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const defaultWhatsAppMessage =
  "Hi PashaCommerce! I'd like to talk about growing my brand on TikTok Shop.";

export function whatsappLink(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
}
