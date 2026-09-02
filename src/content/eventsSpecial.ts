import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { EVENTS_SPECIAL_QUERY } from "@lib/sanity/queries/eventsSpecialQuery";
import { SanityImage } from "./schemaFragments/sanityComponents";

const EventSpeaker = z.object({
    _type: z.literal("speaker"),
    name: z.string(),
    about: z.array(z.any()),
    image: SanityImage.nullish(),
});

export type EventSpeaker = z.infer<typeof EventSpeaker>;

const EventScheduleItem = z.object({
    title: z.string(),
    date: z.string(),
    endDate: z.string().nullish(),
    location: z.string().nullish(),
    description: z.array(z.any()),
});

export type EventScheduleItem = z.infer<typeof EventScheduleItem>;

export const eventsSpecial = defineCollection({
    loader: customSanityLoader({
        name: "Special Events",
        query: EVENTS_SPECIAL_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        slug: z.string(),
        title: z.string(),
        preview: z.string().nullish(),
        date: z.string(),
        endDate: z.string().nullish(),
        hasEndDate: z.boolean().nullish(),
        image: SanityImage.nullish(),
        showRegistration: z.boolean(),
        registerText: z.string().nullish(),
        registerLink: z.string().nullish(),
        richContent: z.array(z.any()),
        speakers: z.array(z.union([z.any(), EventSpeaker])),
        scheduleItems: z.array(EventScheduleItem),
    }),
});
