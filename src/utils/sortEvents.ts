import { isBefore, parse } from "@formkit/tempo";
import type { CollectionEntry } from "astro:content";

/** Sort events in upcoming order by datetime. */
export const sortUpcoming = (
    events: CollectionEntry<"events">[],
): CollectionEntry<"events">[] => {
    return events.sort((a, b) => {
        const eventA = parse(a.data.date, "YYYY-MM-DD HH:mm", "en-US");
        const eventB = parse(b.data.date, "YYYY-MM-DD HH:mm", "en-US");

        if (isBefore(eventA, eventB)) {
            return -1;
        }
        if (isBefore(eventB, eventA)) {
            return 1;
        }
        return 0;
    });
};
