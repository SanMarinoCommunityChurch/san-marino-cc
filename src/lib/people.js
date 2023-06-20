import { getSanityData } from "./sanity";
import { staffMembers, eldersAndDeacons } from "./sanityQueries";
import { slugify } from "../utils/format";

const allStaff = await getSanityData(staffMembers);
const allEldersAndDeacons = await getSanityData(eldersAndDeacons);

const makeNameSlug = (name) => {
  let arr = [name.firstName, name.lastName];
  arr.toString();
  return slugify(arr);
  // return `${name.firstName.toLowerCase().replace(/\s+/g, "-")}-${name.lastName
  //   .toLowerCase()
  //   .replace(/\s+/g, "-")}`;
};

export { allStaff, allEldersAndDeacons, makeNameSlug };
