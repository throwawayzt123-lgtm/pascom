// Placeholder photography (Unsplash). Replace with your own images in
// /public/images and point these entries at the local paths, e.g. "/images/team.jpg".
const unsplash = (id: string, width = 1600, height?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=faces,center&w=${width}${height ? `&h=${height}` : ""}&q=80`;

export const images = {
  heroShopper: unsplash("photo-1483985988355-763728e1935b", 800, 1600),
  teamCollab: unsplash("photo-1522202176988-66273c2fd55f"),
  teamMeeting: unsplash("photo-1542744173-8e7e53415bb0"),
  analyticsLaptop: unsplash("photo-1460925895917-afdab827c52f"),
  analyticsDashboard: unsplash("photo-1551288049-bebda4e38f71"),
  skincare: unsplash("photo-1608571423902-eed4a5ad8108"),
  makeup: unsplash("photo-1596462502278-27bfdc403348"),
  fashion: unsplash("photo-1441986300917-64674bd600d8"),
  handbag: unsplash("photo-1584917865442-de89df76afd3"),
  kitchen: unsplash("photo-1556911220-bff31c812dba"),
  fitness: unsplash("photo-1517836357463-d25dfeac3438"),
  headphones: unsplash("photo-1505740420928-5e560c06d30e"),
  smartwatch: unsplash("photo-1523275335684-37898b6baf30"),
  // Dedicated Service Cards Photography
  serviceSetup: "/images/service-setup.jpg",
  serviceCatalog: unsplash("photo-1523275335684-37898b6baf30", 900, 600),
  serviceOps: unsplash("photo-1586528116311-ad8dd3c8310d", 900, 600),
  serviceCreators: unsplash("photo-1534528741775-53994a69daeb", 900, 600),
  serviceAds: unsplash("photo-1533750516457-a7f992034fec", 900, 600),
  serviceContent: unsplash("photo-1574717024653-61fd2cf4d44d", 900, 600),
  serviceLive: unsplash("photo-1588196749597-9ff075ee6b5b", 900, 600),
  serviceAnalytics: unsplash("photo-1551288049-bebda4e38f71", 900, 600),
} as const;
