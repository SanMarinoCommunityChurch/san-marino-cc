import { getSanityData } from "./sanity";
// import { pages, features } from "./sanityQueries";

export const pageData = await getSanityData(`*[_type == 'page'] {
  _id,
  template,
  "slug": slug.current,
  sectionSlug,
  pageSlug,
  "pageName": name,
  "pageDescription": description,
  "pageContent": {
    template == 'features' => {
      features[]{
        title,
        description,
        "image": image{
          ...,
          asset->
        },
        "linkName": link.name,
        "href": link.href->{
          name,
          sectionSlug,
          pageSlug
        }
      },
    }
  },
  introSections[]{
    text,
    heading,
    layout,
    "image": image{
      ...,
      asset->
    }
  },
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    },
    _type == "previewFeature" => {
      ...,
      links[]{
        ...,
        "image": image{
          ...,
          asset->
        }
      }
    }
  },
  "cta": callToAction{
    "button": {
      "href": buttonHref,
      "text": buttonText
    },
    heading,
    text,
    "image": image{
      ...,
      asset->
    }
  },
  "background": {
    "image": image{
      ...,
      asset->
    },
    "crop": image.crop,
    "hotspot": image.hotspot
  },
  "seo": {
    "title": seoTitle,
    "description": seoDescription,
    openGraph{
      title,
      description,
      "image": image{
        ...,
        asset->
      }
    }
  },
}`);

// export const allFeatures = await getSanityData(features);
export const homePage = await getSanityData(`*[_type == 'homePage'][0] {
  hero{
    eyebrow,
    header,
    description,
    media{
      ...,
      asset->
    },
    links[]{
      name,
      "href": href->{
        sectionSlug,
        pageSlug,
        name,
      }
    },
    showFeaturedAnnouncement == true => {
      featuredAnnouncement{
        title,
        description,
        items[]->{
          _type == 'event' => {
            "refType": _type,
            "name": name,
            "type": eventType->name,
            "date": date,
            "image": image{
              ...,
              asset->
            },
            "slug": slug.current
          },
          _type == 'post' => {
            "refType": _type,
            "name": name,
            "type": category->name,
            "date": publishDate,
            "image": image{
              ...,
              asset->
            },
            "slug": slug.current
          }
        }
      }
    }
  },
  welcome{
    heading,
    text,
    "media": media[0]{
      ...,
      "type": _type,
      asset->,
      url
    },
    "person": person->{
      name,
      "image": image{
        ...,
        asset->
      }
    },
    links[]{
      name,
      text,
      icon,
      "href": href->{
        name,
        sectionSlug,
        pageSlug
      }
    }
  },
  welcomeLinks{
    heading,
    description,
    links[]{
      heading,
      description,
      "image": image{
        ...,
        asset->
      },
      icon,
      "href": href[0]{
        _type == 'reference' => @-> {
          "type": _type,
          sectionSlug,
          pageSlug,
        },
        _type != 'reference' => {
          "pageSlug": slug
        }
      }
    }
  },
  features[]{
    title,
    description,
    "image": image{
      ...,
      asset->
    },
    "linkName": link.name,
    "href": link.href->{
      name,
      sectionSlug,
      pageSlug
    }
  },
  homeCta{
    heading,
    text,
    "linkName": link.name,
    "href": link.href->{
      name,
      sectionSlug,
      pageSlug
    }
  },
  featuredResources{
    heading,
    description,
    resourceLinks[]->{
      "image": image{
        ...,
        asset->
      },
      name,
      preview,
      "slug": slug.current,
      publishDate,
      "category": category->{
        name,
        theme,
        "slug": slug.current
      }
    }
  },
  "seo": {
    "title": seoTitle,
    "description": seoDescription,
    "ogTitle": openGraph.title,
    "ogDescription": openGraph.description,
    "ogImage": openGraph.image{
      ...,
      asset->
    }
  },
}`);

export const sanityPageData = await getSanityData(`*[_type == 'page'] {
  _id,
  template,
  sectionSlug,
  pageSlug,
  "pageName": name,
  "pageContent": {
    "headerText": description,
    "headerBgImage": image{
      ...,
      asset->
    },
    template == 'features' => {
      introParagraph
    },
    template == 'ministryTypes' => {
      "ministryTypes": ministryTypesList[]->{
        name,
        preview,
        category->{
          name,
          "slug": slug.current
        },
        "slug": slug.current,
        "image": image{
          ...,
          asset->
        },
        "ministries": *[_type == 'ministry' && references(^._id)]|order(name asc) {
          name,
          preview,
          "image": image{
            ...,
            asset->
          },
          "slug": slug.current,
          "category": type->category->{
            name
          }
        }
      }
    },
    template == 'about' => {
      visionStatement{
        sectionHeading,
        mission{
          heading,
          text,
          textAfter,
          "links": highlights[]{
            heading,
            description,
            icon,
            "image": image{
              ...,
              asset->
            },
            "href": href[0]{
              _type == 'reference' => @-> {
                "type": _type,
                sectionSlug,
                pageSlug
              },
              _type != 'reference' => {
                "pageSlug": slug
              }
            }
          }
        },
        vision{
          ...
        }
      }
    },
    template == 'default' || template == 'about' || template == 'give' || template == 'missions' => {
      "textAndImageBlocks": introSections[]{
        heading,
        text,
        mediaType,
        "media": {
          video,
          "image": image{
            ...,
            asset->
          }
        },
      }
    },
    template == 'features' => {
      features[]{
        title,
        description,
        "image": image{
          ...,
          asset->
        },
        "linkName": link.name,
        "href": link.href->{
          name,
          sectionSlug,
          pageSlug
        }
      }
    },
    template == 'faq' => {
      faqs->{
        set
      },
      faqSidebar{
        heading,
        "links": imageLinks[]{
          heading,
          description,
          icon,
          "image": image{
            ...,
            asset->
          },
          "href": href[0]{
            _type == 'reference' => @-> {
              "type": _type,
              sectionSlug,
              pageSlug
            },
            _type != 'reference' => {
              "pageSlug": slug
            }
          }
        }
      }
    },
    template == 'leadership' => {
      leadershipTypes[]{
        heading,
        text
      }
    },
    template == 'missions' => {
      missionsTypes[]{
        heading,
        text,
        "missions": missionList[]->{
          name,
          type,
          "image": image{
            ...,
            asset->
          },
          "richContent": description[]{
            ...,
            _type == 'youtube' => {
              ...
            }
          }
        }
      }
    },
    template == 'contact' => {
      contact
    },
    template == 'contact' => {
      "imageLinksSection": imageLinks{
        heading,
        description,
        icon,
        "links": links[]{
          "image": image{
            ...,
            asset->
          },
          "href": href[0]{
            _type == 'reference' => @-> {
              "type": _type,
              sectionSlug,
              pageSlug
            },
            _type != 'reference' => {
              "pageSlug": slug
            }
          }
        }
      }
    },
    template == 'give' => {
      givingLinks[]{
        heading,
        description,
        "image": image{
          ...,
          asset->
        },
        "href": href[0]{
          _type == 'reference' => @-> {
            "type": _type,
            sectionSlug,
            pageSlug
          },
          _type != 'reference' => {
            "pageSlug": slug
          }
        }
      },
      iconGrid{
        heading,
        gridItems[]{
          heading,
          icon,
          description,
          externalLink
        }
      }
    },
    template == 'default' || template == 'give' || template == 'contentCTA' || template == 'leadership' => {
      "richContent": content[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        },
        _type == "youtube" => {
          ...,
        },
        _type == "previewFeature" => {
          ...,
          links[]{
            ...,
            "image": image{
              ...,
              asset->
            }
          }
        },
      }
    },
    template == 'default' || template == 'about' || template == 'contact' || template == 'give' || template == 'faq' || template == 'missions' || template == 'contentCTA' => {
      "cta": callToAction{
        "button": {
          "href": buttonHref,
          "text": buttonText
        },
        heading,
        text,
        "image": image{
          ...,
          asset->
        }
      }
    }
  },
  "seo": {
    "title": seoTitle,
    "description": seoDescription,
    "ogTitle": openGraph.title,
    "ogDescription": openGraph.description,
    "ogImage": openGraph.image{
      ...,
      asset->
    }
  },
}`);

export const getCurrentPage = (id) => {
  // console.log(pageData.find((page) => page._id === id));
  // Return all page data from pageData Sanity query
  // Sanity API only called once
  return sanityPageData.find((page) => page._id === id);
};
