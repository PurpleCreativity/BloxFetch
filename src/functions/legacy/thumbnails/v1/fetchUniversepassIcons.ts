import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import { UniversePassImageFormat, UniversePassImageSize } from "../../../../types/legacy/Thumbnails.Enums.js";
import type { fetchedImage } from "../../../../types/legacy/Thumbnails.js";

export type fetchUniversepassIconsResponse = { data: fetchedImage[] };

export type fetchUniversepassIconsType = (
    this: BloxFetch,

    UniversePassIds: number | number[],
    size?: UniversePassImageSize,
    format?: UniversePassImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<fetchedImage[]>;

export default async function (
    this: BloxFetch,

    UniversePassIds: number | number[],
    size: UniversePassImageSize = UniversePassImageSize["150x150"],
    format: UniversePassImageFormat = UniversePassImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<fetchedImage[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUniversepassIconsResponse>(
            "GET",
            "ThumbnailsV1",
            "/v1/Universe-passes",
            {
                params: {
                    UniversePassIds: Array.isArray(UniversePassIds) ? UniversePassIds : [UniversePassIds],

                    size: size,
                    format: format,
                    isCircular: isCircular,
                },
                body: {},
                useCache: fetchOptions?.useCache ?? true,
            },
        )
    ).data;
}
