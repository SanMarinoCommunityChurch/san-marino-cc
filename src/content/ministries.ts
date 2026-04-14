import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { MINISTRIES_QUERY } from "@lib/sanity/queries/ministriesQuery";
import { SanityImage } from "./schemaFragments/sanityComponents";

export const ministries = defineCollection({
    loader: customSanityLoader({
        name: "Ministries",
        query: MINISTRIES_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        slug: z.string(),
        name: z.string(),
        preview: z.string().nullish(),
        meetingTime: z.string().nullish(),
        meetingLocation: z.string().nullish(),
        image: SanityImage.nullish(),
        richContent: z.array(z.any()),
        category: z.string().nullish(), // single _ref to ministryCategories
        contactPerson: z.string().nullish(), // single _ref to people
        associatedEvents: z.array(z.object({ _id: z.string() })), // array of _id to events
    }),
});
