import { getSanityData } from "./sanity";
import { navigation } from "./sanityQueries";

const navigationSets = await getSanityData(navigation);

const getNavigationSet = (id) => {
  const navSet = navigationSets.find((nav) => nav._id === id);

  return navSet.section.map(
    ({ sectionName, sectionSlug, sectionImage, sectionPages }) => {
      return {
        name: sectionName,
        slug: sectionSlug,
        img: sectionImage,
        children: sectionPages.map(
          ({ pageName, pageSlug, pageDescription }) => {
            return {
              name: pageName,
              slug: pageSlug,
              description: pageDescription,
            };
          }
        ),
      };
    }
  );
};

const filterMainNav = (navigationSet, setToFilter) => {
  const mainNav = setToFilter[0].children;
  // For each entry in the main nav that we get from Sanity, find the same item in the full nav so we can reconstruct the full/corret url slug

  navigationSet.forEach((set) => {
    const setSlug = set.slug;
    mainNav.forEach((navItem) => {
      const foundSlug = set.children.find((page) => page.slug === navItem.slug);
      if (foundSlug) {
        // Leave off first slash because you set this in SiteHeader component
        navItem.slug = `${setSlug}/${navItem.slug}`;
      }
    });
  });

  return mainNav.map((item) => {
    return {
      name: item.name,
      href: item.slug,
      button: item.name == "Worship Live" && true,
    };
  });
};

const filterLocalNav = (sectionName) => {
  return fullNavigation.find((navSection) => navSection.name === sectionName);
};

// pass in the entry id's from Sanity - in case someone changes the name
const fullNavigation = getNavigationSet("a0714f38-2dff-4ce5-b350-be13904afa67");
// get the main navigation item from Sanity
const mainNavigation = getNavigationSet("0cde77d9-0c19-4642-84df-0523c76cec63");
// console.log(...mainNavigation);
const utilityNavigation = getNavigationSet(
  "ba5e977f-7457-4dda-b26e-c616e37a0fd2"
);
// filter the main navigation set agains the full navigation set in order to construct accurate slugs
const mainNavigationFiltered = filterMainNav(fullNavigation, mainNavigation);

export {
  fullNavigation,
  mainNavigation,
  utilityNavigation,
  mainNavigationFiltered,
  filterLocalNav,
};
