import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import { BadgeIconImageFormat, BadgeIconImageSize } from "../../../../types/legacy/Thumbnails.Enums.js";
import type { fetchedImage } from "../../../../types/legacy/Thumbnails.js";

export type fetchBadgeIconsResponse = { data: fetchedImage[] };

export type fetchBadgeIconsType = (
    this: BloxFetch,

    badgeIds: number | number[],
    size?: BadgeIconImageSize,
    format?: BadgeIconImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<fetchedImage[]>;

export default async function (
    this: BloxFetch,

    badgeIds: number | number[],
    size: BadgeIconImageSize = BadgeIconImageSize["150x150"],
    format: BadgeIconImageFormat = BadgeIconImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<fetchedImage[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchBadgeIconsResponse>("GET", "ThumbnailsV1", "/v1/badges/icons", {
            params: {
                badgeIds: Array.isArray(badgeIds) ? badgeIds : [badgeIds],

                size: size,
                format: format,
                isCircular: isCircular,
            },
            body: {},
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
