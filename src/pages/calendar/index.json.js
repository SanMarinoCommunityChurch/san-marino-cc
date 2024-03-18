import { previewEvents } from "../../lib/events";

const events = previewEvents;

export function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      events,
    })
  );
  // return {
  //   body: JSON.stringify({
  //     events: events,
  //   }),
  // };
}
