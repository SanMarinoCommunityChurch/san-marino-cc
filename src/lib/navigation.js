import { getSanityData } from "./sanity";
import { navigation } from "./sanityQueries";

// const navigationSets = await getSanityData(navigation);
const allNavigation = await getSanityData(`*[_type == 'navigation']{
  _id,
  name,
  entries[]{
    _type == 'navigationSection' => {
      "type": _type,
      name,
      "image": image{
        ...,
        asset->
      },
      "pages": pages[]{
        _type == 'reference' => @-> {
          "type": _type,
          _id,
          name,
          sectionSlug,
          pageSlug
        },
        _type == 'link' => {
          ...,
          "type": _type,
          "href": href[0]{
            _type == 'reference' => @-> {
              "type": _type,
              sectionSlug,
              pageSlug
            },
            _type == 'externalLink' => {
              "type": _type,
              "fullUrl": url,
            },
            _type == 'slugString' => {
              "type": _type,
              "fullUrl": slug
            }
          }
        }
      }
    },
    _type == 'link' => {
      ...,
      "type": _type,
      "href": href[0]{
        _type == 'reference' => @-> {
          "type": _type,
          sectionSlug,
          pageSlug
        },
        _type == 'externalLink' => {
          "type": _type,
          "fullUrl": url,
        },
        _type == 'slugString' => {
          "type": _type,
          "fullUrl": slug
        }
      },
    },
    _type == 'reference' => @-> {
      "type": _type,
      _id,
      name,
      sectionSlug,
      pageSlug,
      description
    }
  }
}`);

const mainNavigation =
  await getSanityData(`*[_type == 'navigation' && _id == '0cde77d9-0c19-4642-84df-0523c76cec63'][0]{
    name,
    entries[]{
      _type == 'reference' => @-> {
        "type": _type,
        _id,
        name,
        sectionSlug,
        pageSlug,
        description
      }
    }
  }`);

// const getNavigationSet = (id) => {
//   const navSet = navigationSets.find((nav) => nav._id === id);

//   return navSet.section.map(
//     ({ sectionName, sectionSlug, sectionImage, sectionPages }) => {
//       return {
//         name: sectionName,
//         slug: sectionSlug,
//         img: sectionImage,
//         children: sectionPages.map(
//           ({ pageName, pageSlug, pageDescription }) => {
//             return {
//               name: pageName,
//               slug: pageSlug,
//               description: pageDescription,
//             };
//           }
//         ),
//       };
//     }
//   );
// };

// const filterMainNav = (navigationSet, setToFilter) => {
//   const mainNav = setToFilter[0].children;
//   // For each entry in the main nav that we get from Sanity, find the same item in the full nav so we can reconstruct the full/corret url slug

//   navigationSet.forEach((set) => {
//     const setSlug = set.slug;
//     mainNav.forEach((navItem) => {
//       const foundSlug = set.children.find((page) => page.slug === navItem.slug);
//       if (foundSlug) {
//         // Leave off first slash because you set this in SiteHeader component
//         navItem.slug = `${setSlug}/${navItem.slug}`;
//       }
//     });
//   });

//   return mainNav.map((item) => {
//     return {
//       name: item.name,
//       href: item.slug,
//       button: item.name == "Worship Live" && true,
//     };
//   });
// };

// const filterLocalNav = (sectionName) => {
//   return fullNavigation.find((navSection) => navSection.name === sectionName);
// };
const fullNavigation = allNavigation.find(
  (nav) => nav._id === "a0714f38-2dff-4ce5-b350-be13904afa67"
);
const utilityNavigation = allNavigation.find(
  (nav) => nav._id === "ba5e977f-7457-4dda-b26e-c616e37a0fd2"
);
// const mainNavigation = allNavigation.find(
//   (nav) => nav._id === "0cde77d9-0c19-4642-84df-0523c76cec63"
// );

const filterLocalNav = (pageId) => {
  // if page id exists in a navigation section, return the entire list of pages of that section
  const sections = fullNavigation.entries;
  // .pages.find((page) => page._id === pageId);
  return sections.find((section) =>
    section.pages.find((page) => page._id === pageId)
  );
};

function constructHref(navItem) {
  function buildPageSlug(page) {
    return page.sectionSlug ? page.pageSlug.fullUrl : page.pageSlug.current;
  }

  let href = "";

  if (navItem.type == "page") {
    href = `/${buildPageSlug(navItem)}`;
  } else if (navItem.type == "link") {
    if (navItem.href.type == "page") {
      href = `/${buildPageSlug(navItem.href)}`;
    } else if (navItem.href.type == "slugString") {
      href = `/${navItem.href.fullUrl}`;
    } else if (navItem.href.type == "externalLink") {
      href = navItem.href.fullUrl;
    }
  }

  return href;
}

// // pass in the entry id's from Sanity - in case someone changes the name
// const fullNavigation = getNavigationSet("a0714f38-2dff-4ce5-b350-be13904afa67");
// // get the main navigation item from Sanity
// const mainNavigation = getNavigationSet("0cde77d9-0c19-4642-84df-0523c76cec63");
// // console.log(...mainNavigation);
// const utilityNavigation = getNavigationSet(
//   "ba5e977f-7457-4dda-b26e-c616e37a0fd2"
// );
// // filter the main navigation set agains the full navigation set in order to construct accurate slugs
// const mainNavigationFiltered = filterMainNav(fullNavigation, mainNavigation);

export {
  // fullNavigation,
  mainNavigation,
  // utilityNavigation,
  // mainNavigationFiltered,
  // filterLocalNav,
  allNavigation,
  filterLocalNav,
  constructHref,
};
