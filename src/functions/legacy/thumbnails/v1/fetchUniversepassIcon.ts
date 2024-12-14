import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import { UniversePassImageFormat, UniversePassImageSize } from "../../../../types/legacy/Thumbnails.Enums.js";
import type { Image } from "../../../../types/legacy/Thumbnails.js";

export type fetchUniversepassIconResponse = { data: Image[] };

export type fetchUniversepassIconType = (
    this: BloxFetch,

    universeIds: number | number[],
    size?: UniversePassImageSize,
    format?: UniversePassImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<Image[]>;

export default async function (
    this: BloxFetch,

    universeIds: number | number[],
    size: UniversePassImageSize = UniversePassImageSize["150x150"],
    format: UniversePassImageFormat = UniversePassImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<Image[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUniversepassIconResponse>("GET", "ThumbnailsV1", "/v1/game-passes", {
            params: {
                universeIds: Array.isArray(universeIds) ? universeIds : [universeIds],

                size: size,
                format: format,
                isCircular: isCircular,
            },
            body: {},
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
