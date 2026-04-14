import { isBefore, parse } from "@formkit/tempo";
import type { CollectionEntry } from "astro:content";

/** Sort services in past order by date. */
export const sortPast = (
    services: CollectionEntry<"services">[],
): CollectionEntry<"services">[] => {
    return services.sort((a, b) => {
        const serviceA = parse(a.data.date, "YYYY-MM-DD", "en-US");
        const serviceB = parse(b.data.date, "YYYY-MM-DD", "en-US");

        if (isBefore(serviceA, serviceB)) {
            return 1;
        }
        if (isBefore(serviceB, serviceA)) {
            return -1;
        }
        return 0;
    });
};
