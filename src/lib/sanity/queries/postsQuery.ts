import groq from "groq";

export const POSTS_QUERY = groq`*[_type == "post"] {
    _id,
    name,
    "slug": slug.current,
    "date": publishDate,
    image{
        ...,
        asset->
    },
    "authorRef": author._ref,
    "categoryRef": category._ref,
    preview,
    "richContent": coalesce(content[]{
        ...,
        _type == "image" => {
            ...,
            asset->
        },
        _type == "previewFeature" => {
            ...,
            "links": coalesce(links[]{
                ...,
                image{
                    ...,
                    asset->
                }
            }, [])
        },
        _type == "reference" => @-> {
            "eventRef": _id,
        }
    }, []),
    cta{
        heading,
        "link": {
            "text": buttonText,
            "href": buttonHref
        },
        image{
            ...,
            asset->
        }
    },
    "seo": {
        "title": coalesce(seoTitle, name),
        "description": coalesce(seoDescription, ""),
        "ogTitle": coalesce(openGraph.title, seoTitle, name),
        "ogDescription": coalesce(openGraph.description, ""),
        "ogImage": openGraph.image{
            ...,
            asset->
        }
    }
}`;
