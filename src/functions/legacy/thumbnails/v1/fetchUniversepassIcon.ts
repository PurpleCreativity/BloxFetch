import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import { UniversePassImageFormat, UniversePassImageSize } from "../../../../types/legacy/Thumbnails.Enums.js";
import type { Image } from "../../../../types/legacy/Thumbnails.js";

export type fetchUniversepassIconResponse = { data: Image[] };

export type fetchUniversepassIconType = (
    this: BloxFetch,

    UniversePassIds: number | number[],
    size?: UniversePassImageSize,
    format?: UniversePassImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<Image[]>;

export default async function (
    this: BloxFetch,

    UniversePassIds: number | number[],
    size: UniversePassImageSize = UniversePassImageSize["150x150"],
    format: UniversePassImageFormat = UniversePassImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<Image[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUniversepassIconResponse>("GET", "ThumbnailsV1", "/v1/game-passes", {
            params: {
                UniversePassIds: Array.isArray(UniversePassIds) ? UniversePassIds : [UniversePassIds],

                size: size,
                format: format,
                isCircular: isCircular,
            },
            body: {},
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
