import { getSanityData } from "./sanity";
import { settings, forms } from "./sanityQueries";

const siteSettings = await getSanityData(settings);
const allForms = await getSanityData(forms);
const defaultImage = siteSettings.image;
const defaultOgImage = siteSettings.ogImage;
// const contact = siteSettings.contact;

export { siteSettings, defaultImage, defaultOgImage, allForms };
