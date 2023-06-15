import { getSanityData } from "./sanity";
import { eventsPreview, eventsDetail, eventTypes } from "./sanityQueries";

const allEvents = await getSanityData(eventsDetail);
const previewEvents = await getSanityData(eventsPreview);
const eventCategories = await getSanityData(eventTypes);

export { allEvents, previewEvents, eventCategories };
