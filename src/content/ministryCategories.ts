import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { MINISTRY_CATEGORIES_QUERY } from "@lib/sanity/queries/ministryCategoriesQuery";
import { SanityImage } from "./schemaFragments/sanityComponents";

export const ministryCategories = defineCollection({
    loader: customSanityLoader({
        name: "Ministry Categories",
        query: MINISTRY_CATEGORIES_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        slug: z.string(),
        name: z.string(),
        preview: z.string().nullish(),
        richContent: z.array(z.any()),
        image: SanityImage.nullish(),
        associatedMinistries: z.array(z.object({ _id: z.string() })),
    }),
});
