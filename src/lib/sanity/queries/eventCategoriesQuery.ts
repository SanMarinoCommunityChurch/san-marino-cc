import groq from "groq";

export const EVENT_CATEGORIES_QUERY = groq`*[_type == "eventType"] {
    _id,
    name,
    "slug": slug.current,
    "events": coalesce(*[_type == "event" && references(^._id) && dateTime(date) > dateTime(now())] | order(date asc) {
        _id
    }, [])
}`;
