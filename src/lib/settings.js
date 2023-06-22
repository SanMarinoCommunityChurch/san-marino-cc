import { getSanityData } from "./sanity";
import { settings } from "./sanityQueries";

const siteSettings = await getSanityData(settings);
const defaultImage = siteSettings.image;

export { siteSettings, defaultImage };
