import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { SITE_SETTINGS_QUERY } from "@lib/sanity/queries/settingsQuery";
import { SanityImage } from "./schemaFragments/sanityComponents";

export const siteSettings = defineCollection({
    loader: customSanityLoader({
        name: "Site Settings",
        query: SITE_SETTINGS_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        siteName: z.string(),
        siteDescription: z.string(),
        socialLinks: z.array(
            z.object({
                name: z.string(),
                icon: z.string(),
                url: z.string(),
            }),
        ),
        image: SanityImage.nullish(),
        ogImage: SanityImage.nullish(),
        logo: SanityImage.nullish(),
        footer: z.object({
            address: z.string().nullish(),
            email: z.string().nullish(),
            phone: z.string().nullish(),
        }),
    }),
});
