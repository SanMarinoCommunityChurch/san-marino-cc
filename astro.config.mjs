import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

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
  integrations: [svelte(), react(), sitemap()],
});
