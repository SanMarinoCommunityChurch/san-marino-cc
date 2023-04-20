import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "d44xb381",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-11",
});
