import type { IconName } from "@/components/ui/Icon";
import { images } from "@/data/images";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: IconName;
  deliverables: string[];
  image: string;
  badge?: string;
  metric?: string;
  colorAccent?: "cyan" | "pink" | "purple" | "emerald" | "amber" | "indigo" | "rose" | "teal";
};

export const services: Service[] = [
  {
    slug: "tiktok-shop-setup",
    title: "TikTok Shop Setup & Onboarding",
    short: "Seller Center setup, verification and store configuration done right the first time.",
    description:
      "We take care of the full onboarding process so your shop launches compliant, verified and ready to sell. From business verification to shipping templates and shop policies, every detail is configured to avoid delays and violations.",
    icon: "store",
    image: images.serviceSetup,
    badge: "Official Setup",
    metric: "100% Verified",
    colorAccent: "cyan",
    deliverables: [
      "Seller Center account creation & business verification",
      "Category approvals and compliance guidance",
      "Shipping templates, warehouse & return settings",
      "Shop profile, branding and policy setup",
      "Payment and settlement configuration",
    ],
  },
  {
    slug: "product-listing-optimization",
    title: "Product Listing & Catalog Optimization",
    short: "Search-optimised titles, images and variants built to convert scrolling viewers.",
    description:
      "Great products still need great listings. We research keywords, write conversion-focused titles and descriptions, structure variants and prepare visuals that match how TikTok shoppers browse and buy.",
    icon: "tag",
    image: images.serviceCatalog,
    badge: "Catalog SEO",
    metric: "+45% Search CTR",
    colorAccent: "pink",
    deliverables: [
      "Keyword research for TikTok Shop search",
      "Conversion-focused titles & descriptions",
      "Main images, infographics and variant structure",
      "Competitive pricing and bundle strategy",
      "Bulk catalog upload and ongoing optimization",
    ],
  },
  {
    slug: "shop-management",
    title: "Full Shop Management",
    short: "Day-to-day operations handled — orders, inventory, customer service and shop health.",
    description:
      "Focus on your products while we run the shop. We monitor orders and fulfilment, manage inventory, respond to customers and protect your shop performance score so your account stays healthy as it grows.",
    icon: "layers",
    image: images.serviceOps,
    badge: "Full Ops",
    metric: "Zero Violations",
    colorAccent: "purple",
    deliverables: [
      "Order processing & fulfilment monitoring",
      "Inventory and stock-level management",
      "Customer service and review management",
      "Shop performance score & violation prevention",
      "Promotions, vouchers and flash-deal setup",
    ],
  },
  {
    slug: "affiliate-creator-marketing",
    title: "Affiliate & Creator Marketing",
    short: "We recruit and manage creators who sell your products through authentic content.",
    description:
      "Creators are the engine of TikTok Shop. We find the right affiliates for your niche, run outreach at scale, manage samples and commissions, and build long-term partnerships that drive consistent sales.",
    icon: "users",
    image: images.serviceCreators,
    badge: "Creator Engine",
    metric: "500+ Affiliates",
    colorAccent: "emerald",
    deliverables: [
      "Creator research and niche-fit vetting",
      "Open & targeted collaboration campaigns",
      "Sample request and shipping management",
      "Commission strategy and creator incentives",
      "Top-creator relationship management",
    ],
  },
  {
    slug: "tiktok-shop-ads",
    title: "TikTok Shop Ads & GMV Max",
    short: "Performance campaigns that turn your best content into profitable, scalable sales.",
    description:
      "We plan, launch and optimise TikTok Shop ad campaigns — from Video Shopping Ads to LIVE and Product Shopping Ads — with a relentless focus on ROAS and profitable GMV growth.",
    icon: "megaphone",
    image: images.serviceAds,
    badge: "GMV Max Ads",
    metric: "4.8x Avg ROAS",
    colorAccent: "pink",
    deliverables: [
      "GMV Max & Video Shopping Ads campaigns",
      "LIVE Shopping Ads for streams",
      "Creative testing using top-performing content",
      "Budget pacing and ROAS optimisation",
      "Weekly performance reporting",
    ],
  },
  {
    slug: "content-creation",
    title: "Shoppable Video Content",
    short: "Scroll-stopping short-form videos scripted around hooks that sell.",
    description:
      "We produce native, trend-aware content built for the For You page. Every video is scripted around a strong hook, clear product benefits and a call-to-action that drives viewers straight to your product.",
    icon: "video",
    image: images.serviceContent,
    badge: "Viral UGC",
    metric: "15M+ Views",
    colorAccent: "amber",
    deliverables: [
      "Trend and competitor content research",
      "Hook-first scripts & content calendars",
      "UGC-style video production and editing",
      "Product demo, unboxing & review formats",
      "Content performance analysis",
    ],
  },
  {
    slug: "live-shopping",
    title: "LIVE Shopping Management",
    short: "High-energy LIVE sessions planned, hosted and promoted to maximise sales.",
    description:
      "LIVE selling can be your highest-converting channel. We plan the run-of-show, prepare host scripts, schedule flash deals and moderate the session so every LIVE is built to sell.",
    icon: "radio",
    image: images.serviceLive,
    badge: "Live Commerce",
    metric: "3.2x Conversion",
    colorAccent: "indigo",
    deliverables: [
      "LIVE strategy and run-of-show planning",
      "Host scripts and product talking points",
      "Flash deals, vouchers & pinned products",
      "Live moderation and audience engagement",
      "Post-LIVE performance review",
    ],
  },
  {
    slug: "analytics-growth",
    title: "Analytics & Growth Strategy",
    short: "Clear reporting and a data-backed roadmap to scale your GMV month after month.",
    description:
      "We turn your shop data into decisions. Expect transparent reporting, competitor insights and a growth roadmap covering campaigns, mega-sale events and new product opportunities.",
    icon: "chart",
    image: images.serviceAnalytics,
    badge: "Growth Intel",
    metric: "Weekly Roadmaps",
    colorAccent: "teal",
    deliverables: [
      "Monthly GMV, traffic & conversion reports",
      "Competitor and market research",
      "Campaign & mega-sale event planning",
      "Product opportunity analysis",
      "Quarterly growth roadmap",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
