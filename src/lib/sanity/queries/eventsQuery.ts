import groq from "groq";

export const EVENTS_QUERY = groq`*[_type == "event"] | order(date desc) {
    _id,
    "slug": slug.current,
    name,
    preview,
    date,
    endDate,
    hasEndDate,
    location,
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
    eventType->{
        name,
        "slug": slug.current
    },
    "type": eventType->name,
    "category": category->name,
    "categorySlug": category->slug.current,
    "associatedMinistry": associatedMinistry._ref
}`;
