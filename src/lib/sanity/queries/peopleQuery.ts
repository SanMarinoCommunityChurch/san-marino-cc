import groq from "groq";

export const PEOPLE_QUERY = groq`*[_type == "person" && type.mainType != null] {
    _id,
    name,
    image{
        ...,
        asset->
    },
    "categoryGroup": type.mainType,
    type.mainType == "staff" => {
        "category": type.staffSubtype
    },
    type.mainType == "eldersAndDeacons" => {
        "category": type.eldersAndDeaconsSubtype
    },
    "slug": slug.current,
    role,
    "bio": coalesce(bio, []),
    order,
    contact,
    canPreach,
    hideDetailPage
}`;
