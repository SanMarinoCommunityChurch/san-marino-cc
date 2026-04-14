import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { customSanityLoader } from "@lib/sanity/customSanityLoader";
import { SERVICES_QUERY } from "@lib/sanity/queries/servicesQuery";

const serviceType = z.object({
    _type: z.string(),
    name: z.string(),
    preacher: z.string().nullish(), // single _ref to people
    programLink: z.string().nullish(),
    podcastId: z.string().nullish(),
    description: z.array(z.any()),
    serviceTime: z.string().nullish(),
    video: z.string(), // url of youtube video
});
export type ServiceType = z.infer<typeof serviceType>;

export const services = defineCollection({
    loader: customSanityLoader({
        name: "Services",
        query: SERVICES_QUERY,
    }),
    schema: z.object({
        _id: z.string(),
        slug: z.string(),
        name: z.string().nullish(),
        date: z.string(),
        types: z.array(serviceType),
    }),
});
