import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { POST_CATEGORIES_QUERY } from "@lib/sanity/queries/postCategoriesQuery";

export const postCategories = defineCollection({
    loader: customSanityLoader({
        name: "Post Categories",
        query: POST_CATEGORIES_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        name: z.string(),
        text: z.string().nullish(),
        slug: z.string(),
        posts: z.array(
            z.object({
                _id: z.string(),
            }),
        ),
    }),
});
