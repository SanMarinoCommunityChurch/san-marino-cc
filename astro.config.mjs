import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://sanmarinocommunitychurch.com",
  scopedStyleStrategy: "class",
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.sanity.io",
      },
    ],
  },
  integrations: [react(), sitemap(), svelte()],
  // redirects: {
  //   "/welcome": "/welcome/im-new",
  //   "/worship": "/worship/live",
  //   "/worship/services": "/worship/services/1",
  //   "/connect": "/connect/events",
  //   "/who-we-are": "/who-we-are/mission-and-beliefs",
  //   "/resources/blog": "/resources",
  //   "/welcome/sunday-service-times": "/welcome/our-services",
  //   "/welcome/first-time-visitors": "/welcome/im-new",
  //   "/about/what-we-believe": "/who-we-are/mission-and-beliefs",
  //   "/about/our-history": "/who-we-are/our-history",
  //   "/about/staff": "/who-we-are/leadership",
  //   "/about/elders-deacons": "/who-we-are/leadership",
  //   "/about/news": "/resources/news",
  //   "/connect/programs-events": "/resources/events",
  //   "/connect/adult-ministries": "/connect/ministries/adult-ministries",
  //   "/connect/youth-ministries": "/connect/ministries/youth-ministries",
  //   "/connect/childrens-ministries": "/connect/ministries/childrens-ministries",
  //   "/connect/music-ministries": "/connect/ministries/music-ministries",
  //   "/connect/membership": "/welcome/how-to-join",
  //   "/serve/mission-partners": "/connect/missions",
  //   "/serve/mission-involvement": "/connect/missions",
  //   "/serve/deacon-ministries": "/connect/ministries/deacon-ministries",
  //   "/serve/pastoral-residency": "/connect/pastoral-residency",
  //   "/give/stewardship-campaign-2022": "/giving/stewardship",
  //   "/give/ways-to-give": "/giving",
  //   "/give/the-foundation-of-smcc": "/giving/the-foundation-of-smcc",
  //   "/give/other-giving-opportunities": "/giving/#ways-to-give",
  //   "/watch/traditional-live": "/worship/live",
  //   "/watch/contemporary-live": "/worship/live",
  //   "/watch/sermon-podcast-archive": "/worship/services",
  //   "/contact/baptisms-memorials-weddings":
  //     "/connect/weddings-memorials-and-rentals",
  //   "/contact/employment": "/contact",
  // },
});
