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
    }
  },
  welcome{
    heading,
    text,
    "image": image{
        ...,
        asset->
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
      "image": image{
        ...,
        asset->
      },
      icon,
      "href": href[0].slug
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
        "slug": slug.current
      }
    }
  }
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
    template == 'features' || template == 'give' => {
      introParagraph
    },
    template == 'about' => {
      visionStatement
    },
    template == 'default' || template == 'about' || template == 'give' || template == 'missions' => {
      "textAndImageBlocks": introSections[]{
        heading,
        text,
        "image": image{
          ...,
          asset->
        }
      }
    },
    template == 'features' || template == 'give' => {
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
          "href": href[0]->{
            sectionSlug,
            pageSlug
          }
        }
      }
    },
    template == 'missions' => {
      missionsText
    },
    template == 'contact' => {
      contact
    },
    template == 'contact' || template == 'give' => {
      "imageLinksSection": imageLinks{
        heading,
        description,
        icon,
        "links": links[]{
          "image": image{
            ...,
            asset->
          },
          "href": href[0].slug
        }
      }
    },
    template == 'default' || template == 'give' || template == 'contentCTA' => {
      "richContent": content[]{
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

export const getCurrentPage = (id) => {
  // console.log(pageData.find((page) => page._id === id));
  // Return all page data from pageData Sanity query
  // Sanity API only called once
  return sanityPageData.find((page) => page._id === id);
};
