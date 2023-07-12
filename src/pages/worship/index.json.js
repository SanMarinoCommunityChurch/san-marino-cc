import { allServicesForCalendar } from "../../lib/services";

const services = allServicesForCalendar;

export function get({ params, request }) {
  return {
    body: JSON.stringify({
      services: services,
    }),
  };
}
