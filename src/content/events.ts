import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { EVENTS_QUERY } from "@lib/sanity/queries/eventsQuery";
import { SanityImage } from "./schemaFragments/sanityComponents";

export const events = defineCollection({
    loader: customSanityLoader({
        name: "Events",
        query: EVENTS_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        slug: z.string(),
        name: z.string(),
        preview: z.string().nullish(),
        date: z.string(),
        endDate: z.string().nullish(),
        hasEndDate: z.boolean().nullish(),
        location: z.string().nullish(),
        image: SanityImage.nullish(),
        richContent: z.array(z.any()),
        eventType: z
            .object({
                name: z.string(),
                slug: z.string(),
            })
            .nullish(),
        type: z.string().nullish(),
        category: z.string().nullish(),
        categorySlug: z.string().nullish(),
        associatedMinistry: z.string().nullish(),
    }),
});
