import groq from "groq";

export const FORMS_QUERY = groq`*[_type == "form"] {
    _id,
    "slug": name,
    "title": overview.title,
    "description": overview.description,
    type,
    "message": fields.message,
    "image": fields.image{
        ...,
        asset->
    }
}`;
