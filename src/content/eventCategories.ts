import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { EVENT_CATEGORIES_QUERY } from "@lib/sanity/queries/eventCategoriesQuery";

export const eventCategories = defineCollection({
    loader: customSanityLoader({
        name: "Event Categories",
        query: EVENT_CATEGORIES_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        name: z.string(),
        slug: z.string(),
        events: z.array(
            z.object({
                _id: z.string(),
            }),
        ),
    }),
});
