import { getSanityData } from "./sanity";
import { servicesList, servicesLatest } from "./sanityQueries";

const allServices = await getSanityData(servicesList);
const latestService = await getSanityData(servicesLatest);

export { allServices, latestService };
