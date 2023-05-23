const eventsPreview = `*[_type == 'event'] | order(date asc) {
  name,
  date,
  "category": category->name,
  associatedMinistry->{
    "category": type->category->{
      name,
      "slug": slug.current
    },
    "image": image.asset->
  },
  "image": image.asset->,
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
    "image": image.asset->,
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
  "image": image.asset->,
  "slug": slug.current,
  associatedMinistry->{
    ...,
    "type": type->{
      name,
      "slug": slug.current,
    },
    "slug": slug.current,
    "image": image.asset->,
    "person": ministryContact->{
      ...,
      "image": image.asset->
    }
  }
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
  "image": image.asset->,
  "slug": slug.current
}`;

const ministryTypeWithMinistriesPreview = `*[_type == 'ministryType'] {
  ...,
  name,
  category->{
    name,
    "slug": slug.current
  },
  "image": image.asset->,
  description,
  "ministries": *[_type == 'ministry' && references(^._id)] {
    name,
    preview,
    meetingLocation,
    "image": image.asset->,
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
  "image": image.asset->,
  "slug": slug.current,
  "person": ministryContact-> {
    ...,
    "image": image.asset->
  },
  "associatedEvents": *[_type == 'event' && references(^._id)] {
    ...,
    name,
    date,
    "image": image.asset->,
    "slug": slug.current,
    associatedMinistry->{
      type,
      "image": image.asset->
    },
    eventType,
    preview,
    location
  }
}`;

const fullNavigation = `*[_type == 'navigation' && _id == 'a0714f38-2dff-4ce5-b350-be13904afa67'] {
  _id,
  name,
  section[]{
    "sectionName": name,
    "sectionSlug": slug.current,
    "sectionImage": image.asset->,
    "sectionPages": pages[]->{
      "pageName": name,
      "pageSlug": slug.current
    },
  }
}
`;

const staffMembers = `*[_type == 'person' && type.mainType == 'staff'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  bio,
  "image": image.asset->,
  "type": type.staffSubtype,
}`;

const clergyMembers = `*[_type == 'person' && type.mainType == 'staff' && type.staffSubtype == 'clergy'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  bio,
  "image": image.asset->,
  "type": type.staffSubtype,
}`;

const programStaffMembers = `*[_type == 'person' && type.mainType == 'staff' && type.staffSubtype == 'program'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  bio,
  "image": image.asset->,
  "type": type.staffSubtype,
}`;

const adminStaffMembers = `*[_type == 'person' && type.mainType == 'staff' && type.staffSubtype == 'admin'] | order(order asc, lower(name.lastName) asc) {
  name,
  role,
  bio,
  "image": image.asset->,
  "type": type.staffSubtype,
}`;

export {
  eventsPreview,
  eventTypes,
  eventsDetail,
  ministriesPreview,
  ministryTypeWithMinistriesPreview,
  ministriesDetail,
  fullNavigation,
  staffMembers,
  clergyMembers,
  programStaffMembers,
  adminStaffMembers,
};