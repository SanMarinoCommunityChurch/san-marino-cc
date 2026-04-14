// @ts-check
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    site: "https://sanmarinocommunitychurch.com",
    image: {
        domains: ["cdn.sanity.io"],
    },

    prefetch: {
        prefetchAll: true,
    },

    integrations: [
        sitemap(),
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.includes("youtube"),
                },
            },
        }),
    ],

    vite: {
        css: {
            transformer: "lightningcss",
            lightningcss: {
                targets: browserslistToTargets(browserslist("defaults")),
            },
        },
        build: {
            cssMinify: "lightningcss",
        },
    },

    redirects: {
        "/worship/services": "/worship/services/1",
    },
});
