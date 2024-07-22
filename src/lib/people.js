import { getSanityData } from "./sanity";
import { groupTypes, sortTypes } from "../utils/data";
import { staffMembers, eldersAndDeacons } from "./sanityQueries";
import { slugify } from "../utils/format";

const allStaff = await getSanityData(staffMembers);
// Filter out entries that have this boolean property
const filteredStaff = allStaff.filter((person) => !person.hideDetailPage);
const allEldersAndDeacons = await getSanityData(eldersAndDeacons);

const staffGrouped = groupTypes(filteredStaff, "type");
const staffByType = sortTypes(staffGrouped, ["clergy", "program", "admin"]);
const eldersAndDeaconsGrouped = groupTypes(allEldersAndDeacons, "type");
const eldersAndDeaconsByType = sortTypes(eldersAndDeaconsGrouped, [
  "elder",
  "deacon",
]);

const makeNameSlug = (name) => {
  let arr = [name.firstName, name.lastName];
  arr.toString();
  return slugify(arr);
  // return `${name.firstName.toLowerCase().replace(/\s+/g, "-")}-${name.lastName
  //   .toLowerCase()
  //   .replace(/\s+/g, "-")}`;
};

export {
  allStaff,
  allEldersAndDeacons,
  staffByType,
  eldersAndDeaconsByType,
  makeNameSlug,
};
