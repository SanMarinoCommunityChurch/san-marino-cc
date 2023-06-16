import { getSanityData } from "./sanity";
import { staffMembers } from "./sanityQueries";

const allStaff = await getSanityData(staffMembers);

const makeNameSlug = (name) => {
  return `${name.firstName.toLowerCase().replace(/\s+/g, "-")}-${name.lastName
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
};

export { allStaff, makeNameSlug };
