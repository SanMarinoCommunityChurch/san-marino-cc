import { getSanityData } from "./sanity";
import {
  servicesList,
  servicesLatest,
  servicesListCalendar,
} from "./sanityQueries";

const allServices = await getSanityData(servicesList);
const latestService = await getSanityData(servicesLatest);
const allServicesForCalendar = await getSanityData(servicesListCalendar);

export { allServices, latestService, allServicesForCalendar };
