import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { isUpcoming } from "@utils/isUpcoming";
import { sortUpcoming } from "@utils/sortEvents";
import v from "voca";

const DOMAIN_URL = "https://sanmarinocommunitychurch.com";

const events = await getCollection("events", ({ data }) =>
    isUpcoming(data.date),
);

const sorted = sortUpcoming(events);

export const GET = (() => {
    return new Response(
        JSON.stringify({
            upcoming_events: sorted.map((event) => ({
                id: event.id,
                title: event.data.name,
                slug: v.lowerCase(event.data.slug),
                permalink: `${DOMAIN_URL}/connect/events/${v.lowerCase(event.data.slug)}`,
                date: event.data.date,
                location: event.data.location,
                category: event.data.type,
            })),
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
        },
    );
}) satisfies APIRoute;
