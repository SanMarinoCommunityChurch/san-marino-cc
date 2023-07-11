import { getSanityData } from "./sanity";
import {
  ministriesPreview,
  ministryTypeWithMinistriesPreview,
  ministriesDetail,
  missions,
} from "./sanityQueries";

const allMinistries = await getSanityData(ministriesDetail);
const previewMinistries = await getSanityData(ministriesPreview);
const ministryCategories = await getSanityData(
  ministryTypeWithMinistriesPreview
);
const allMissions = await getSanityData(missions);

export { allMinistries, previewMinistries, ministryCategories, allMissions };
