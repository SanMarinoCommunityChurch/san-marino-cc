import { getSanityData } from "./sanity";
import { groupTypes } from "../utils/data";
import { getMonth } from "../utils/format";
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

const futureEvents = groupTypes(previewFutureEvents, "date", getMonth);
// const pastEvents = groupTypes(previewPastEvents, "date", getMonth);
const pastEvents = previewPastEvents;
const eventsByCategory = eventCategories.map((category) => {
  return {
    ...category,
    events: groupTypes(category.events, "date", getMonth),
  };
});

export {
  allEvents,
  previewEvents,
  previewFutureEvents,
  previewPastEvents,
  eventCategories,
  futureEvents,
  pastEvents,
  eventsByCategory,
};
