import { isAfter, isBefore, tzDate, addMonth } from "@formkit/tempo";

/**
 * Checks whether a date string is within the last 3 months (before or after) today.
 * @param date ISO date string
 */
export const isRecentOrUpcoming = (date: string): boolean => {
    const now = new Date();
    const tz = tzDate(date, "America/Los_Angeles");
    return isAfter(tz, addMonth(now, -3)) && isBefore(tz, addMonth(now, 3));
};
