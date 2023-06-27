import { allServices } from "../../lib/services";

const services = allServices;

export function get({ params, request }) {
  return {
    body: JSON.stringify({
      services: services,
    }),
  };
}
