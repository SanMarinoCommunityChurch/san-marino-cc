import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { POSTS_QUERY } from "@lib/sanity/queries/postsQuery";
import { SanityImage, PortableText } from "./schemaFragments/sanityComponents";

export const posts = defineCollection({
    loader: customSanityLoader({
        name: "Posts",
        query: POSTS_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        slug: z.string(),
        name: z.string(),
        date: z.string(),
        preview: z.string().nullish(),
        image: SanityImage.nullish(),
        authorRef: z.string().nullish(), // ref to person id
        categoryRef: z.string().nullish(), // ref to postCategory id
        richContent: PortableText,
        cta: z
            .object({
                heading: z.string().nullish(),
                link: z
                    .object({
                        text: z.string().nullish(),
                        href: z.string().nullish(),
                    })
                    .nullish(),
                image: SanityImage.nullish(),
            })
            .nullish(),
        seo: z.object({
            title: z.string(),
            description: z.string(),
            ogTitle: z.string(),
            ogDescription: z.string(),
            ogImage: SanityImage.nullish(),
        }),
    }),
});
