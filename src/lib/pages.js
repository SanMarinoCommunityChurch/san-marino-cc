import { getSanityData } from "./sanity";
import { pages } from "./sanityQueries";

export const pageData = await getSanityData(pages);

export const getCurrentPage = (id) => {
  return pageData.find((page) => page._id === id);
};
