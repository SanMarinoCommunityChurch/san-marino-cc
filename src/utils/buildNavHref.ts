import type {
    NavigationSection,
    NavigationReference,
    NavigationLink,
    NavigationSectionPageEntry,
} from "@content/navigation";

/** Build the final href value from navigation items */
export function buildNavHref(
    navItem:
        | NavigationLink
        | NavigationReference
        | NavigationSection
        | NavigationSectionPageEntry,
): string {
    let href = "";

    if ("sectionSlug" in navItem) {
        href = `/${navItem.sectionSlug ? navItem.pageSlug.fullUrl : navItem.pageSlug.current}`;
    } else if ("href" in navItem) {
        if ("pageSlug" in navItem.href) {
            href = `/${navItem.href.sectionSlug ? navItem.href.pageSlug.fullUrl : navItem.href.pageSlug.current}`;
        } else if (navItem.href.type === "slugString") {
            href = `/${navItem.href.fullUrl}`;
        } else {
            href = navItem.href.fullUrl;
        }
    }

    return href;
}
