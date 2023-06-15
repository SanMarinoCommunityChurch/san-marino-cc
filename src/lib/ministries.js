import { getSanityData } from "./sanity";
import {
  ministriesPreview,
  ministryTypeWithMinistriesPreview,
  ministriesDetail,
} from "./sanityQueries";

const allMinistries = await getSanityData(ministriesDetail);
const previewMinistries = await getSanityData(ministriesPreview);
const ministryCategories = await getSanityData(
  ministryTypeWithMinistriesPreview
);

export { allMinistries, previewMinistries, ministryCategories };
