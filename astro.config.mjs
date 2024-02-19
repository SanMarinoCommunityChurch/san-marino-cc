import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://sanmarinocommunitychurch.com",
  scopedStyleStrategy: "class",
  image: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**.sanity.io"
    }]
  },
  integrations: [react(), sitemap(), svelte()]
});