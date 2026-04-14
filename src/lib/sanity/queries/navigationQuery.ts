import groq from "groq";
import { NAV_LINK_PROJECTION } from "../groqFragments/commonProjections";

export const NAVIGATION_QUERY = groq`*[_type == "navigation"] {
    _id,
    name,
    entries[] {
        _type == "navigationSection" => {
            "type": _type,
            name,
            image{
                ...,
                asset->
            },
            "pages": coalesce(pages[]{
                _type == 'reference' => @-> {
                    "type": _type,
                    _id,
                    name,
                    sectionSlug,
                    pageSlug
                },
                _type == 'link' => ${NAV_LINK_PROJECTION}
            }, [])
        },
        _type == "reference" => @-> {
            "type": _type, // careful, will change to reference type, not "reference"
            _id,
            name,
            sectionSlug,
            pageSlug,
            description
        },
        _type == "link" => ${NAV_LINK_PROJECTION}
    }
}`;
