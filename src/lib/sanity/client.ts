import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "d44xb381",
    dataset: "production",
    useCdn: false,
    apiVersion: "2026-04-01",
});
