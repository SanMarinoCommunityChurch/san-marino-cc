import groq from "groq";

export const MINISTRIES_QUERY = groq`*[_type == "ministry"] {
    _id,
    "slug": slug.current,
    name,
    preview,
    meetingTime,
    meetingLocation,
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
    "contactPerson": ministryContact._ref,
    "category": type._ref,
    "associatedEvents": coalesce(*[_type == "event" && references(^._id)] {
        _id
    }, []),
}`;
