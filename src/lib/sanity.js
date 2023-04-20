import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "d44xb381",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-11",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  if (source) {
    return builder.image(source);
  } else {
    return;
  }
};
