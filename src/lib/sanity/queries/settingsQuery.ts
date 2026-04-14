import groq from "groq";

export const SITE_SETTINGS_QUERY = groq`*[_type == 'siteSettings'] {
    _id,
    siteName,
    siteDescription,
    "socialLinks": coalesce(
        socialLinks[]{
            name,
            icon,
            url
        },
        []
    ),
    "image": defaultImage{
        ...,
        asset->
    },
    "ogImage": defaultOGImage{
        ...,
        asset->
    },
    "logo": logo{
        ...,
        asset->
    },
    footer
}`;
