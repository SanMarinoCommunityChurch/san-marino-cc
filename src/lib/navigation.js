import { getSanityData } from "./sanity";
import { navigation } from "./sanityQueries";

const navigationSets = await getSanityData(navigation);

export const getNavigationSet = (id) => {
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

export const filterMainNav = (navigationSet, setToFilter) => {
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
