import { allServicesForCalendar } from "../../lib/services";

const services = allServicesForCalendar;

export function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      services,
    })
  );
  // return {
  //   body: JSON.stringify({
  //     services: services,
  //   }),
  // };
}
