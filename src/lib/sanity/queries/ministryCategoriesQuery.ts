import groq from "groq";

export const MINISTRY_CATEGORIES_QUERY = groq`*[_type == "ministryType"] {
    _id,
    "slug": slug.current,
    name,
    preview,
    image{
        ...,
        asset->
    },
    "richContent": coalesce(description[]{
        ...,
        _type == "image" => {
            ...,
            asset->
        }
    }, []),
    "associatedMinistries": coalesce(*[_type == "ministry" && references(^._id)] {
        _id
    }, [])
}`;
