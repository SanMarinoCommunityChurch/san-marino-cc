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
      "href": href->{
        name,
        sectionSlug,
        pageSlug
      }
    }
  },
  welcomeLinks{
    heading,
    links[]{
      "image": image{
        ...,
        asset->
      },
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

export const getCurrentPage = (id) => {
  // console.log(pageData.find((page) => page._id === id));
  // Return all page data from pageData Sanity query
  // Sanity API only called once
  return pageData.find((page) => page._id === id);
};
