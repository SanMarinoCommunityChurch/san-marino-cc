const pages = `*[_type == 'page'] {
  _id,
  "slug": slug.current,
  "pageName": name,
  "pageDescription": description,
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
}`;

const featureBlocks = `*[_type == 'feature'] {
  title,
  _id,
  description,
  "image": image{
    ...,
    asset->
  },
  link,
  layout,
  theme
}`;

const eventsPreview = `*[_type == 'event'] | order(date asc) {
  name,
  date,
  endDate,
  "category": category->name,
  associatedMinistry->{
    "category": type->category->{
      name,
      "slug": slug.current
    },
    "image": image{
      ...,
      asset->
    },
  },
  "image": image{
    ...,
    asset->
  },
  "slug": slug.current,
  location,
  preview,
  "type": eventType->name,
  eventType->{
    name,
    "slug": slug.current
  }
}`;

const futureEventsPreview = `*[_type == 'event' && dateTime(date) > dateTime(now())] | order(date asc) {
  name,
  date,
  endDate,
  "category": category->name,
  associatedMinistry->{
    "category": type->category->{
      name,
      "slug": slug.current
    },
    "image": image{
      ...,
      asset->
    },
  },
  "image": image{
    ...,
    asset->
  },
  "slug": slug.current,
  location,
  preview,
  "type": eventType->name,
  eventType->{
    name,
    "slug": slug.current
  }
}`;

const pastEventsPreview = `*[_type == 'event' && dateTime(date) < dateTime(now())] | order(date desc) {
  name,
  date,
  endDate,
  "category": category->name,
  associatedMinistry->{
    "category": type->category->{
      name,
      "slug": slug.current
    },
    "image": image{
      ...,
      asset->
    },
  },
  "image": image{
    ...,
    asset->
  },
  "slug": slug.current,
  location,
  preview,
  "type": eventType->name,
  eventType->{
    name,
    "slug": slug.current
  }
}`;

const eventTypes = `*[_type == 'eventType'] {
  name,
  "slug": slug.current,
  "events": *[_type == 'event' && references(^._id)] {
    ...,
    name,
    date,
    "category": category->name,
    location,
    preview,
    "type": eventType->name,
    associatedMinistry->{
      "category": type->category->{
        name,
        "slug": slug.current
      },
      "image": image{
        ...,
        asset->
      },
    },
    eventType->{
      name,
      "slug": slug.current
    },
    "image": image{
      ...,
      asset->
    },
    "slug": slug.current
  }
}`;

const eventsDetail = `*[_type == 'event'] {
  ...,
  eventType->{
    name,
    "slug": slug.current
  },
  "type": eventType->name,
  "category": category->name,
  "categorySlug": category->slug.current,
  "image": image{
    ...,
    asset->
  },
  "slug": slug.current,
  associatedMinistry->{
    ...,
    "type": type->{
      name,
      "slug": slug.current,
    },
    "slug": slug.current,
    "image": image{
      ...,
      asset->
    },
    "person": ministryContact->{
      ...,
      "image": image{
        ...,
        asset->
      },
    }
  }
}`;

const servicesLatest = `*[_type == 'service' && dateTime(date + 'T7:00:00Z') < dateTime(now())]|order(date desc)[0] {
  ...,
  "slug": slug.current,
    serviceType[] {
    ...,
    preacher->{
      name,
      "image": image{
        ...,
        asset->
      },
      contact,
      "type": type.mainType
    }
  },
}`;

const servicesListCalendar = `*[_type == 'service']|order(date desc) {
  ...,
  "slug": slug.current,
  serviceType[] {
    ...,
  }
}`;

const servicesList = `*[_type == 'service' && dateTime(date + 'T7:00:00Z') < dateTime(now())]|order(date desc) {
  ...,
  "slug": slug.current,
  serviceType[] {
    ...,
    preacher->{
      name,
      "image": image{
        ...,
        asset->
      },
      contact,
      "type": type.mainType
    }
  },
  "previousService": *[_type == 'service' && ^.date > date]|order(date desc)[0]{
    "slug": slug.current,
    name,
    date,
    serviceType[] {
      name
    }
  },
  "nextService": *[_type == 'service' && ^.date < date && dateTime(date + 'T7:00:00Z') < dateTime(now())]|order(date asc)[0]{
    "slug": slug.current,
    name,
    date,
    serviceType[] {
      name
    }
  },
}`;

const ministriesPreview = `*[_type == 'ministry'] {
  name,
  "ministryType": type->name,
  "category": type->category->{
    name,
    "slug": slug.current
  },
  preview,
  meetingLocation,
  "image": image{
    ...,
    asset->
  },
  "slug": slug.current
}`;

const ministryTypeWithMinistriesPreview = `*[_type == 'ministryType'] {
  ...,
  name,
  category->{
    name,
    "slug": slug.current
  },
  "image": image{
    ...,
    asset->
  },
  description,
  "ministries": *[_type == 'ministry' && references(^._id)] {
    name,
    preview,
    meetingLocation,
    "image": image{
      ...,
      asset->
    },
    "slug": slug.current,
    "category": type->category->{
      name
    }
  }
}`;

const ministriesDetail = `*[_type == 'ministry'] {
  ...,
  name,
  "ministryType": type->name,
  "typeSlug": type->slug.current,
  "category": type->category->name,
  preview,
  meetingTime,
  meetingLocation,
  description,
  "image": image{
    ...,
    asset->
  },
  "slug": slug.current,
  "person": ministryContact-> {
    ...,
    "image": image{
      ...,
      asset->
    },
  },
  "associatedEvents": *[_type == 'event' && references(^._id)] {
    ...,
    name,
    date,
    "image": image{
      ...,
      asset->
    },
    "slug": slug.current,
    associatedMinistry->{
      type,
      "image": image{
        ...,
        asset->
      },
    },
    eventType,
    preview,
    location
  }
}`;

const missions = `*[_type == 'mission'] | order(name asc) {
  ...,
  "image": image{
    ...,
    asset->
  }
}`;

const posts = `*[_type == 'post']|order(publishDate desc) {
  "title": name, 
  "slug": slug.current,
  "author": author-> {
    name,
    "image": image{
      ...,
      asset->
    },
    role
  },
  publishDate,
  preview,
  content,
  "image": image{
    ...,
    asset->
  },
  cta {
    ...,
    "image": image{
      ...,
      asset->
    },
  },
  "category": category->{
    name,
    "slug": slug.current
  },
  "categoryName": category.name,
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
  }
}`;

const postTypes = `*[_type == 'postType'] | order(name asc) {
  name,
  "slug": slug.current,
  "posts": *[_type == 'post' && references(^._id)]|order(publishDate desc) {
    "title": name,
    "slug": slug.current,
    "author": author-> {
      name,
      "image": image{
        ...,
        asset->
      },
      role
    },
    publishDate,
    preview,
    "image": image{
      ...,
      asset->
    },
    "category": category->{
    name,
    "slug": slug.current
  },
  }
}`;

const fullNavigationFromSanity = `*[_type == 'navigation' && _id == 'a0714f38-2dff-4ce5-b350-be13904afa67'] {
  _id,
  name,
  section[]{
    "sectionName": name,
    "sectionSlug": slug.current,
    "sectionImage": image.asset->,
    "sectionPages": pages[]->{
      "pageName": name,
      "pageSlug": slug.current,
    },
  }
}
`;

const navigation = `*[_type == 'navigation'] {
  _id,
  name,
  section[]{
    "sectionName": name,
    "sectionSlug": slug.current,
    "sectionImage": image.asset->,
    "sectionPages": pages[]->{
      "pageName": name,
      "pageSlug": slug.current,
      "pageDescription": description
    },
  }
}`;

const staffMembers = `*[_type == 'person' && type.mainType == 'staff'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  bio,
  contact,
  "image": image{
    ...,
    asset->
  },
  "type": type.staffSubtype,
}`;

const eldersAndDeacons = `*[_type == 'person' && type.mainType == 'eldersAndDeacons'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  "image": image{
    ...,
    asset->
  },
  "type": type.eldersAndDeaconsSubtype,
}`;

const clergyMembers = `*[_type == 'person' && type.mainType == 'staff' && type.staffSubtype == 'clergy'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  bio,
  "image": image{
    ...,
    asset->
  },
  "type": type.staffSubtype,
}`;

const programStaffMembers = `*[_type == 'person' && type.mainType == 'staff' && type.staffSubtype == 'program'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  bio,
  "image": image{
    ...,
    asset->
  },
  "type": type.staffSubtype,
}`;

const adminStaffMembers = `*[_type == 'person' && type.mainType == 'staff' && type.staffSubtype == 'admin'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  bio,
  "image": image{
    ...,
    asset->
  },
  "type": type.staffSubtype,
}`;

const features = `*[_type == 'feature'] {
  ...,
  "image": image{
    ...,
    asset->
  }
}`;

const faq = `*[_type == 'faq'][0] {
  "items": set
}`;

const forms = `*[_type == 'form'] {
  "id": _id,
  "formName": name,
  "title": overview.title,
  "description": overview.description,
  "formType": type,
  "messageText": fields.message,
  "image": fields.image{
    ...,
    asset->
  }
}`;

const settings = `*[_type == 'siteSettings'][0] {
  ...,
  "image": defaultImage{
    ...,
    asset->
  },
  "homePageHero": homePageHero{
    ...,
    "media": media{
      ...,
      asset->
    }
  },
  "ogImage": defaultOGImage{
    ...,
    asset->
  },
  "logo": logo{
    ...,
    asset->
  },
  contact
}`;

export {
  pages,
  featureBlocks,
  eventsPreview,
  futureEventsPreview,
  pastEventsPreview,
  eventTypes,
  eventsDetail,
  servicesLatest,
  servicesList,
  servicesListCalendar,
  ministriesPreview,
  ministryTypeWithMinistriesPreview,
  ministriesDetail,
  missions,
  posts,
  postTypes,
  fullNavigationFromSanity,
  navigation,
  staffMembers,
  eldersAndDeacons,
  clergyMembers,
  programStaffMembers,
  adminStaffMembers,
  features,
  faq,
  forms,
  settings,
};
