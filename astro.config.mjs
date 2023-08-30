import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
// import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sanmarinocommunitychurch.com",
  scopedStyleStrategy: "class",
  // compressHTML: true,
  // experimental: {
  //   assets: true,
  // },
  integrations: [
    svelte(),
    react(),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
    sitemap(),
  ],
});
