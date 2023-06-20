import { getSanityData } from "./sanity";
import { posts, postTypes } from "./sanityQueries";

const allPosts = await getSanityData(posts);
const allPostTypes = await getSanityData(postTypes);

export { allPosts, allPostTypes };
