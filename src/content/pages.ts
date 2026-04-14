import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { PAGES_QUERY } from "@lib/sanity/queries/pagesQuery";
import {
    SanityImage,
    IntroParagraph,
    TextAndImageBlocks,
    PageCTA,
    PortableText,
    FAQSection,
    FeatureList,
    ValuesSection,
    LeadershipSection,
    MinistryCategoriesSection,
    MissionsSection,
    GivingLinks,
    IconGridSection,
    ContactSection,
} from "./schemaFragments/sanityComponents";

const pageTemplates = z.enum([
    "default",
    "about",
    "contact",
    "custom",
    "give",
    "utility",
    "features",
    "faq",
    "missions",
    "leadership",
    "ministryTypes",
    "contentCTA",
    "custom",
    "listing",
]);

export type PageTemplates = z.infer<typeof pageTemplates>;

export const pages = defineCollection({
    loader: customSanityLoader({
        name: "Pages",
        query: PAGES_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        type: z.literal("page"),
        template: pageTemplates.nullish(),
        sectionSlug: z.string().nullish(),
        slug: z.string(),
        name: z.string(),
        seo: z.object({
            title: z.string(),
            description: z.string(),
            ogTitle: z.string(),
            ogDescription: z.string(),
            ogImage: SanityImage.nullish(),
        }),
        header: z.object({
            description: z.string().nullish(),
            bgImage: SanityImage.nullish(),
        }),
        content: z.object({
            introParagraph: IntroParagraph,
            textAndImageBlocks: TextAndImageBlocks,
            richContent: PortableText,
            faqSection: FAQSection,
            featureList: FeatureList,
            valuesSection: ValuesSection,
            leadershipSection: LeadershipSection,
            ministryCategoriesSection: MinistryCategoriesSection,
            missionsSection: MissionsSection,
            givingLinks: GivingLinks,
            iconGridSection: IconGridSection,
            contactSection: ContactSection,
            pageCTA: PageCTA,
        }),
    }),
});
