import { images } from "./images";

/*
 * ⚠️ PLACEHOLDER PORTFOLIO
 * Every project below is sample content so the portfolio section is ready
 * to go. Replace titles, images, numbers and copy with real client work
 * (or remove entries) before launch. Add a new object to publish a new
 * case study — its page is generated automatically at /portfolio/<slug>.
 */

export type PortfolioCategory =
  | "Beauty & Skincare"
  | "Fashion & Accessories"
  | "Home & Kitchen"
  | "Health & Fitness"
  | "Electronics";

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  image: string;
  summary: string;
  duration: string;
  services: string[];
  metrics: Metric[];
  challenge: string;
  strategy: string[];
  results: string[];
  featured?: boolean;
};

export const portfolioCategories: PortfolioCategory[] = [
  "Beauty & Skincare",
  "Fashion & Accessories",
  "Home & Kitchen",
  "Health & Fitness",
  "Electronics",
];

export const projects: Project[] = [
  {
    slug: "natural-skincare-launch",
    title: "Launching a natural skincare brand on TikTok Shop",
    client: "Natural Skincare Brand",
    category: "Beauty & Skincare",
    image: images.skincare,
    summary:
      "A creator-first launch that took a new skincare line from zero to a consistent daily sales engine.",
    duration: "6 months",
    services: ["TikTok Shop Setup", "Affiliate & Creators", "Shoppable Content", "GMV Max Ads"],
    metrics: [
      { value: "+420%", label: "GMV growth" },
      { value: "180+", label: "Active creators" },
      { value: "4.6x", label: "Ad ROAS" },
    ],
    challenge:
      "The brand had strong products and great reviews on its own website but zero presence on TikTok Shop, no creator network and no content built for short-form video.",
    strategy: [
      "Set up and verified the shop, then optimised every listing for TikTok search.",
      "Launched an open collaboration plus targeted outreach to 600+ skincare creators.",
      "Produced hook-first UGC videos demonstrating texture, routine and results.",
      "Scaled the best-performing creator videos with GMV Max campaigns.",
    ],
    results: [
      "Consistent daily orders within the first 30 days of launch",
      "180+ active affiliate creators posting monthly",
      "Hero product reached top-seller status in its sub-category",
    ],
    featured: true,
  },
  {
    slug: "womens-fashion-label",
    title: "Scaling a women's fashion label with LIVE selling",
    client: "Women's Fashion Label",
    category: "Fashion & Accessories",
    image: images.fashion,
    summary:
      "Weekly LIVE shows and seasonal drops turned an Instagram-first label into a TikTok Shop best-seller.",
    duration: "4 months",
    services: ["LIVE Shopping", "Shop Management", "Product Listings"],
    metrics: [
      { value: "3.2x", label: "Monthly revenue" },
      { value: "38%", label: "Sales from LIVE" },
      { value: "12K+", label: "New followers" },
    ],
    challenge:
      "The label relied entirely on Instagram and was seeing rising ad costs with flat sales. They needed a new, profitable acquisition channel.",
    strategy: [
      "Rebuilt the catalog with size guides, styled imagery and bundle offers.",
      "Introduced a twice-weekly LIVE schedule with flash deals and try-on hauls.",
      "Promoted LIVE sessions with short teaser videos and LIVE Shopping Ads.",
    ],
    results: [
      "Revenue more than tripled in four months",
      "LIVE sessions now drive over a third of total sales",
      "Return rate reduced through clearer sizing content",
    ],
    featured: true,
  },
  {
    slug: "home-kitchen-essentials",
    title: "Kitchen essentials brand goes viral with demo content",
    client: "Home & Kitchen Brand",
    category: "Home & Kitchen",
    image: images.kitchen,
    summary:
      "Problem-solution demo videos and a strong affiliate program made a kitchen gadget a category favourite.",
    duration: "5 months",
    services: ["Shoppable Content", "Affiliate & Creators", "Analytics & Strategy"],
    metrics: [
      { value: "2.1M", label: "Video views" },
      { value: "+265%", label: "Order volume" },
      { value: "95+", label: "Creator videos" },
    ],
    challenge:
      "A practical product with low brand awareness — customers loved it once they saw it in action, but no one was seeing it.",
    strategy: [
      "Scripted problem-solution demo videos built around satisfying before/after moments.",
      "Recruited home, cooking and lifestyle creators with tiered commissions.",
      "Used weekly analytics reviews to double down on winning hooks.",
    ],
    results: [
      "Multiple creator videos crossed 100K+ views",
      "Order volume grew 265% across the campaign",
      "Built an evergreen library of high-converting demo content",
    ],
    featured: true,
  },
  {
    slug: "fitness-gear-brand",
    title: "Building a fitness gear brand through creator partnerships",
    client: "Fitness Equipment Brand",
    category: "Health & Fitness",
    image: images.fitness,
    summary:
      "Partnering with gym and wellness creators to turn workout content into a dependable sales channel.",
    duration: "6 months",
    services: ["Affiliate & Creators", "GMV Max Ads", "Shop Management"],
    metrics: [
      { value: "+310%", label: "GMV growth" },
      { value: "5.1x", label: "Ad ROAS" },
      { value: "4.8★", label: "Avg. rating" },
    ],
    challenge:
      "The brand was new to TikTok Shop and struggled to stand out in a crowded, price-driven fitness category.",
    strategy: [
      "Positioned products around transformation stories rather than discounts.",
      "Built a roster of fitness creators with long-term commission agreements.",
      "Ran GMV Max campaigns on proven creator content to scale profitably.",
    ],
    results: [
      "GMV grew 310% over six months",
      "Maintained a 4.8★ average rating with proactive customer service",
      "Reduced reliance on discounting while increasing sales",
    ],
  },
  {
    slug: "audio-electronics",
    title: "Premium audio brand optimises for TikTok Shop search",
    client: "Audio Electronics Brand",
    category: "Electronics",
    image: images.headphones,
    summary:
      "Search-optimised listings and comparison content helped a premium headphone brand win high-intent shoppers.",
    duration: "3 months",
    services: ["Product Listings", "Shoppable Content", "Analytics & Strategy"],
    metrics: [
      { value: "+180%", label: "Search traffic" },
      { value: "6.4%", label: "Conversion rate" },
      { value: "2.4x", label: "Revenue" },
    ],
    challenge:
      "Higher price points meant shoppers needed more convincing. Existing listings were thin and did not explain product value.",
    strategy: [
      "Rewrote titles and descriptions using TikTok search keyword research.",
      "Created comparison and sound-test videos highlighting key features.",
      "Added bundle offers to increase average order value.",
    ],
    results: [
      "Search traffic up 180% within three months",
      "Conversion rate improved to 6.4%",
      "Average order value increased through bundles",
    ],
  },
  {
    slug: "cosmetics-live-selling",
    title: "Cosmetics brand masters LIVE shopping events",
    client: "Cosmetics Brand",
    category: "Beauty & Skincare",
    image: images.makeup,
    summary:
      "Tutorial-style LIVE sessions and mega-sale campaigns turned a makeup line into an event-driven success.",
    duration: "4 months",
    services: ["LIVE Shopping", "TikTok Shop Ads", "Analytics & Strategy"],
    metrics: [
      { value: "1.4K", label: "Orders in one LIVE" },
      { value: "+290%", label: "Mega-sale GMV" },
      { value: "52%", label: "Repeat buyers" },
    ],
    challenge:
      "The brand had loyal customers but no way to create urgency and excitement around launches on TikTok.",
    strategy: [
      "Designed tutorial-led LIVE formats with exclusive LIVE-only bundles.",
      "Planned campaigns around platform mega-sale events.",
      "Retargeted LIVE viewers with Video Shopping Ads.",
    ],
    results: [
      "Record LIVE session generated 1,400+ orders",
      "Mega-sale GMV up 290% year over year",
      "Over half of buyers returned for a second purchase",
    ],
  },
  {
    slug: "smartwatch-launch",
    title: "Smartwatch launch powered by unboxing creators",
    client: "Wearable Tech Brand",
    category: "Electronics",
    image: images.smartwatch,
    summary:
      "An unboxing-led creator campaign that built trust and sales for a new wearable brand.",
    duration: "3 months",
    services: ["TikTok Shop Setup", "Affiliate & Creators", "GMV Max Ads"],
    metrics: [
      { value: "250+", label: "Creator videos" },
      { value: "3.8x", label: "Ad ROAS" },
      { value: "+340%", label: "GMV growth" },
    ],
    challenge:
      "A new brand with no reviews needed to build trust quickly in a category dominated by big names.",
    strategy: [
      "Seeded samples with tech and lifestyle creators for honest unboxings.",
      "Collected early reviews through a launch voucher programme.",
      "Scaled the top unboxing videos through paid campaigns.",
    ],
    results: [
      "250+ creator videos published in 90 days",
      "Achieved a 3.8x return on ad spend",
      "Built a strong review base within the first month",
    ],
  },
  {
    slug: "handbag-accessories",
    title: "Accessories label grows with styled content & bundles",
    client: "Handbag & Accessories Label",
    category: "Fashion & Accessories",
    image: images.handbag,
    summary:
      "Styled outfit content and smart bundling lifted order value for a premium accessories label.",
    duration: "4 months",
    services: ["Product Listings", "Shoppable Content", "Shop Management"],
    metrics: [
      { value: "+45%", label: "Avg. order value" },
      { value: "2.7x", label: "Revenue" },
      { value: "8.2%", label: "Engagement rate" },
    ],
    challenge:
      "Premium pricing made impulse purchases rare, and product photos did not show how items fit into everyday outfits.",
    strategy: [
      "Produced outfit-styling and 'what fits in my bag' video series.",
      "Introduced curated bundles and gift sets for seasonal campaigns.",
      "Optimised listings with lifestyle imagery and detailed specs.",
    ],
    results: [
      "Average order value increased 45%",
      "Revenue grew 2.7x across the engagement",
      "Content engagement rate averaged 8.2%",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
