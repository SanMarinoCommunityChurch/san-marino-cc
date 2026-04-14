import groq from "groq";

export const PAGES_QUERY = groq`*[_type == "page"] {
    _id,
    "type": _type,
    template,
    sectionSlug,
    "slug": coalesce(pageSlug.current, ""),
    name,
    "seo": {
        "title": coalesce(seoTitle, name),
        "description": coalesce(seoDescription, ""),
        "ogTitle": coalesce(openGraph.title, seoTitle, name),
        "ogDescription": coalesce(openGraph.description, ""),
        "ogImage": openGraph.image{
            ...,
            asset->
        }
    },
    "header": {
        "description": description,
        "bgImage": image{
            ...,
            asset->
        }
    },
    "content": {
        introParagraph,
        "textAndImageBlocks": coalesce(introSections[]{
            heading,
            "text": coalesce(text, []),
            mediaType,
            "media": {
                "video": video.url,
                image{
                    ...,
                    frame,
                    "frameRatio": aspectRatio,
                    asset->
                }
            }
        }, []),
        "featureList": coalesce(features[]{
            title,
            description,
            image{
                ...,
                asset->
            },
            link{
                name,
                href->{
                    name,
                    sectionSlug,
                    pageSlug
                }
            }
        }, []),
        template == "about" => {
            "valuesSection": visionStatement{
                "heading": sectionHeading,
                "vision": vision{
                    heading,
                    text
                },
                "mission": mission{
                    heading,
                    text,
                    textAfter,
                    "highlights": coalesce(highlights[]{
                        heading,
                        description,
                        icon,
                        image{
                            ...,
                            asset->
                        },
                        "href": href[0]{
                            _type == "reference" => @-> {
                                "type": _type,
                                sectionSlug,
                                pageSlug
                            },
                            _type != "reference" => {
                                slug
                            }
                        }
                    }, [])
                }
            }
        },
        template == "faq" => {
            "faqSection": {
                "items": coalesce(faqs->set[]{
                    question,
                    "answer": coalesce(answer, [])
                }, []),
                "sidebar": faqSidebar{
                    heading,
                    "links": coalesce(imageLinks[]{
                        heading,
                        description,
                        icon,
                        image{
                            ...,
                            asset->
                        },
                        "href": href[0]{
                            _type == "reference" => @-> {
                                "type": _type,
                                sectionSlug,
                                pageSlug
                            },
                            _type != "reference" => {
                                slug
                            }
                        }
                    }, [])
                }
            }
        },
        template == "leadership" => {
            "leadershipSection": {
                "sections": coalesce(leadershipTypes[]{
                    heading,
                    text
                }, [])
            }
        },
        template == "ministryTypes" => {
            "ministryCategoriesSection": {
                "sections": coalesce(ministryTypesList[]{
                    _ref
                }, [])
            }
        },
        template == "missions" => {
            "missionsSection": {
                "sections": coalesce(missionsTypes[]{
                    heading,
                    text,
                    "items": coalesce(missionList[]->{
                        "type": _type,
                        name,
                        "slug": slug.current,
                        "category": type,
                        image{
                            ...,
                            asset->
                        },
                        "richContent": coalesce(description[], [])
                    }, [])
                }, [])
            }
        },
        template == "give" => {
            "givingLinks": coalesce(givingLinks[]{
                heading,
                description,
                image{
                    ...,
                    asset->
                },
                "href": href[0]{
                    _type == "reference" => @-> {
                        "type": _type,
                        sectionSlug,
                        pageSlug
                    },
                    _type != "reference" => {
                        slug
                    }
                }
            }, []),
            "iconGridSection": iconGrid{
                heading,
                "items": coalesce(gridItems[]{
                    heading,
                    "text": description,
                    icon,
                    externalLink
                }, [])
            }
        },
        template == "contact" => {
            "contactSection": {
                "hours": coalesce(contact.hours[], []),
                "info": coalesce(contact.info[], [])
            }
        },
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
            }
        }, []),
        "pageCTA": callToAction{
            heading,
            image{
                ...,
                asset->
            },
            "button": {
                "text": buttonText,
                "href": buttonHref
            }
        }
    }
}`;

export const HOME_PAGE_QUERY = groq`*[_type == "homePage"] {
    _id,
    "type": _type,
    title,
    "seo": {
        "title": coalesce(seoTitle, title),
        "description": coalesce(seoDescription, ""),
        "ogTitle": coalesce(openGraph.title, seoTitle, title),
        "ogDescription": coalesce(openGraph.description, ""),
        "ogImage": openGraph.image{
            ...,
            asset->
        }
    },
    "content": {
        hero{
            eyebrow,
            "heading": header,
            "text": description,
            "links": coalesce(links[]{
                name,
                href->{
                    sectionSlug,
                    pageSlug,
                    name
                }
            }, []),
            showFeaturedAnnouncement,
            featuredAnnouncement{
                title,
                "text": description,
                "items": coalesce(items[]->{
                    _id,
                    "type": _type,
                }, [])
            }
        },
        "welcomeSection": welcome{
            heading,
            text,
            "personRef": person._ref,
            "media": coalesce(media[0]{
                ...,
                "type": _type,
                asset->,
                url
            }, null),
            "links": coalesce(links[]{
                "title": name,
                text,
                icon,
                "href": href->{
                    name,
                    sectionSlug,
                    pageSlug
                }
            }, [])
        },
        "linksSection": welcomeLinks{
            heading,
            "text": description,
            "items": coalesce(links[]{
                "type": _type,
                heading,
                icon,
                image{
                    ...,
                    asset->
                },
                "href": coalesce(href[0]{
                    _type == "reference" => @-> {
                        "type": _type,
                        sectionSlug,
                        pageSlug
                    },
                    _type != "reference" => {
                        slug
                    }
                }, null)
            }, [])
        },
        "featureList": coalesce(features[]{
           title,
            description,
            image{
                ...,
                asset->
            },
            link{
                name,
                href->{
                    name,
                    sectionSlug,
                    pageSlug
                }
            }
        }, []),
        "cta": homeCta{
            heading,
            text,
            link{
                name,
                href->{
                    name,
                    sectionSlug,
                    pageSlug
                }
            }
        },
        "resourcesSection": featuredResources{
            heading,
            "text": description,
            "items": coalesce(resourceLinks[]{
                _ref
            }, [])
        }
    }
}`;
