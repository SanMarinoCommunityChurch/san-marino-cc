import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { PEOPLE_QUERY } from "@lib/sanity/queries/peopleQuery";
import { SanityImage } from "./schemaFragments/sanityComponents";

export const people = defineCollection({
    loader: customSanityLoader({
        name: "People",
        query: PEOPLE_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        name: z.object({
            title: z.string().nullish(),
            firstName: z.string(),
            lastName: z.string(),
        }),
        slug: z.string().nullish(),
        image: SanityImage.nullish(),
        categoryGroup: z.enum([
            "staff",
            "eldersAndDeacons",
            "guest",
            "ministry",
        ]),
        category: z
            .enum(["clergy", "program", "admin", "elder", "deacon"])
            .nullish(),
        role: z.string().nullish(),
        bio: z.array(z.any()),
        order: z.number().nullish(),
        contact: z
            .object({
                email: z.string().nullish(),
                phone: z.string().nullish(),
            })
            .nullish(),
        canPreach: z.boolean().nullish(),
        hideDetailPage: z.boolean().nullish(),
    }),
});
