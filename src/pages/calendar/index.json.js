import { previewEvents } from "../../lib/events";

const events = previewEvents;

export function get({ params, request }) {
  return {
    body: JSON.stringify({
      events: events,
    }),
  };
}
