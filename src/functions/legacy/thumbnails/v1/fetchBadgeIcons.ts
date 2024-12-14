import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type {
    BadgeIconImageFormat,
    BadgeIconImageSize,
    fetchedBadgeIcon,
} from "../../../../types/legacy/Thumbnails.js";

export type fetchBadgeIconsResponse = { data: fetchedBadgeIcon[] };

export type fetchBadgeIconsType = (
    this: BloxFetch,

    badgeIds: number | number[],
    size: BadgeIconImageSize,
    format: BadgeIconImageFormat,
    isCircular: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<fetchedBadgeIcon[]>;

export default async function (
    this: BloxFetch,

    badgeIds: number | number[],
    size: BadgeIconImageSize,
    format: BadgeIconImageFormat,
    isCircular: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<fetchedBadgeIcon[]> {
    return await this.fetchHandler.fetchLegacy("GET", "ThumbnailsV1", "/v1/badges/icons", {
        params: {
            badgeIds: Array.isArray(badgeIds) ? badgeIds : [badgeIds],

            size: size,
            format: format,
            isCircular: isCircular,
        },
        body: {},
        useCache: fetchOptions?.useCache ?? true,
    });
}
