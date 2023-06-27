import { getSanityData } from "./sanity";
import { pages, features } from "./sanityQueries";

export const pageData = await getSanityData(pages);
export const allFeatures = await getSanityData(features);

export const getCurrentPage = (id) => {
  // console.log(pageData.find((page) => page._id === id));
  // Return all page data from pageData Sanity query
  // Sanity API only called once
  return pageData.find((page) => page._id === id);
};
