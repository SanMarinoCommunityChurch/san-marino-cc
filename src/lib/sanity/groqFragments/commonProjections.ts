import groq from "groq";

export const NAV_LINK_PROJECTION = groq`{
    "type": _type,
    "href": href[0]{
        _type == "reference" => @-> {
            "type": _type,
            sectionSlug,
            pageSlug
        },
        _type == "externalLink" => {
            "type": _type,
            "fullUrl": url
        },
        _type == "slugString" => {
            "type": _type,
            "fullUrl": slug
        }
    },
    name,
    icon,
    description
}`;
