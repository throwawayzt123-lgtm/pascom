import type { Metadata, Viewport } from "next";
import { Manrope, Merienda } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { GsapInit } from "@/components/animations/GsapInit";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Heading font — variable weight 300–900
const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | TikTok Shop Agency in Lahore, Pakistan`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "TikTok Shop agency",
    "TikTok Shop management",
    "TikTok Shop setup",
    "TikTok Shop affiliate marketing",
    "TikTok Shop ads",
    "GMV Max",
    "TikTok LIVE shopping",
    "ecommerce agency Lahore",
    "TikTok Shop agency Pakistan",
    "PashaCommerce",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | TikTok Shop Growth Agency`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | TikTok Shop Growth Agency`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/images/logo/logo.webp`,
  image: `${site.url}/images/logo/logo.webp`,
  email: site.email,
  telephone: site.phone.href.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  knowsAbout: ["TikTok Shop", "Ecommerce", "Affiliate marketing", "Social commerce"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${merienda.variable} antialiased bg-black text-white`}>
      <body className="flex min-h-dvh flex-col bg-black text-white">
        <GsapInit />
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only z-60 rounded-lg border border-white/20 bg-[#0a0c10] px-4 py-2 font-semibold text-accent-400 shadow-xl focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 bg-black w-full max-w-full overflow-x-clip">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
