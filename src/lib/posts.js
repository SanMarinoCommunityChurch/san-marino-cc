import { getSanityData } from "./sanity";
import { posts } from "./sanityQueries";

const allPosts = await getSanityData(posts);

export { allPosts };
