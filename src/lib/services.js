import { getSanityData } from "./sanity";
import { servicesList } from "./sanityQueries";

const allServices = await getSanityData(servicesList);

export { allServices };
