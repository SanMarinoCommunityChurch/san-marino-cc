import groq from "groq";

export const EVENTS_SPECIAL_QUERY = groq`*[_type == "eventSpecial"] {
    _id,
    "slug": slug.current,
    title,
    preview,
    date,
    endDate,
    hasEndDate,
    "showRegistration": coalesce(showRegistration, false),
    registerText,
    registerLink,
    image{
        ...,
        asset->
    },
    "richContent": coalesce(description[] {
        ...,
        _type == "image" => {
            ...,
            asset->
        }
    }, []),
    "speakers": coalesce(speakers[] {
        ...,
        _type == "speaker" => {
            _type,
            name,
            "about": coalesce(about[] {
                ...
            }, []),
            image{
                ...,
                asset->
            }
        }
    }, []),
    "scheduleItems": coalesce(scheduleItems[] {
        title,
        date,
        endDate,
        location,
        "description": coalesce(description[] {
            ...
        }, [])
    }, [])
}`;
