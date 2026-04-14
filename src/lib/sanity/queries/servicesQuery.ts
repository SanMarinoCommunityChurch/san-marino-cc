import groq from "groq";

export const SERVICES_QUERY = groq`*[_type == "service"] {
    _id, 
    "slug": slug.current,
    date,
    name,
    "types": coalesce(serviceType[]{
        _type,
        name,
        podcastId,
        "preacher": preacher._ref,
        programLink,
        "description": coalesce(serviceDescription, []),
        serviceTime,
        "video": video.url
    }, [])
}`;
