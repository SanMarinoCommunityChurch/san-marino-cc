const eventsPreview = `*[_type == 'event'] | order(date asc) {
  name,
  date,
  associatedMinistry->{
    type,
    "image": image.asset->
  },
  "image": image.asset->,
  "slug": slug.current,
  location,
  preview,
  eventType
}`;

const eventsDetail = `*[_type == 'event'] {
  ...,
  "image": image.asset->,
  "slug": slug.current,
  associatedMinistry->{
    ...,
    "image": image.asset->,
    "person": ministryContact->{
      ...,
      "image": image.asset->
    }
  }
}`;

const ministriesPreview = `*[_type == 'ministry'] {
  name,
  type,
  preview,
  meetingLocation,
  "image": image.asset->,
  "slug": slug.current
}`;

const ministriesDetail = `*[_type == 'ministry'] {
  ...,
  name,
  type,
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
  eventsDetail,
  ministriesPreview,
  ministriesDetail,
  fullNavigation,
  staffMembers,
  clergyMembers,
  programStaffMembers,
  adminStaffMembers,
};
