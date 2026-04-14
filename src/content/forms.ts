import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { FORMS_QUERY } from "@lib/sanity/queries/formsQuery";
import { SanityImage } from "./schemaFragments/sanityComponents";

export const forms = defineCollection({
    loader: customSanityLoader({
        name: "Forms",
        query: FORMS_QUERY,
    }),
    schema: z.object({
        slug: z.string(), // slug-like name for the form `name` attribute
        title: z.string().nullish(),
        description: z.string().nullish(),
        type: z.string().nullish(),
        message: z.string().nullish(),
        image: SanityImage.nullish(),
    }),
});
