import groq from "groq";

export const POST_CATEGORIES_QUERY = groq`*[_type == "postType"] {
    _id,
    name,
    text,
    "slug": slug.current,
    "posts": coalesce(*[_type == "post" && references((^._id))]{
        _id
    }, [])
}`;
