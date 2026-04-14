import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import {
    SanityImage,
    PageSlug,
    LinkReference,
    Link,
} from "./schemaFragments/sanityComponents";
import { NAVIGATION_QUERY } from "@lib/sanity/queries/navigationQuery";

const navigationReference = z.object({
    type: z.union([z.literal("reference"), z.literal("page")]),
    _id: z.string(),
    name: z.string(),
    sectionSlug: z.string().nullish(),
    pageSlug: PageSlug,
    description: z.string().nullish(),
});

export type NavigationReference = z.infer<typeof navigationReference>;

const navigationSectionPageEntry = z.object({
    type: z.string(),
    _id: z.string(),
    name: z.string(),
    sectionSlug: z.string().nullish(),
    pageSlug: PageSlug,
});

export type NavigationSectionPageEntry = z.infer<
    typeof navigationSectionPageEntry
>;

const navigationSection = z.object({
    type: z.literal("navigationSection"),
    name: z.string(),
    image: SanityImage.nullish(),
    pages: z.array(z.union([navigationSectionPageEntry, Link])),
});

export type NavigationSection = z.infer<typeof navigationSection>;

const navigationLink = Link;

export type NavigationLink = z.infer<typeof navigationLink>;

export const navigation = defineCollection({
    loader: customSanityLoader({
        name: "Navigation",
        query: NAVIGATION_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        name: z.string(),
        entries: z.array(
            z.union([navigationSection, navigationReference, navigationLink]),
        ),
    }),
});
