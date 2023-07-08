import { getSanityData } from "./sanity";
import {
  eventsPreview,
  futureEventsPreview,
  pastEventsPreview,
  eventsDetail,
  eventTypes,
} from "./sanityQueries";

const allEvents = await getSanityData(eventsDetail);
const previewEvents = await getSanityData(eventsPreview);
const previewFutureEvents = await getSanityData(futureEventsPreview);
const previewPastEvents = await getSanityData(pastEventsPreview);
const eventCategories = await getSanityData(eventTypes);

export {
  allEvents,
  previewEvents,
  previewFutureEvents,
  previewPastEvents,
  eventCategories,
};
