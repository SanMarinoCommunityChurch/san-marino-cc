import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { HOME_PAGE_QUERY } from "@lib/sanity/queries/pagesQuery";
import {
    SanityImage,
    HomeHero,
    HomeLinksSection,
    HomeWelcomeSection,
    FeatureList,
    HomeCTA,
    HomeResourcesSection,
} from "./schemaFragments/sanityComponents";

export const homePage = defineCollection({
    loader: customSanityLoader({
        name: "Home Page",
        query: HOME_PAGE_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        type: z.literal("homePage"),
        title: z.string(),
        seo: z.object({
            title: z.string(),
            description: z.string(),
            ogTitle: z.string(),
            ogDescription: z.string(),
            ogImage: SanityImage.nullish(),
        }),
        content: z.object({
            hero: HomeHero,
            welcomeSection: HomeWelcomeSection,
            linksSection: HomeLinksSection,
            featureList: FeatureList,
            cta: HomeCTA,
            resourcesSection: HomeResourcesSection,
        }),
    }),
});
