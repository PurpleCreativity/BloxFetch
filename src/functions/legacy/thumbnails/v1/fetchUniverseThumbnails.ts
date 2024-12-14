import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import { UniverseThumbnailImageFormat, UniverseThumbnailImageSize } from "../../../../types/legacy/Thumbnails.Enums.js";
import type { fetchedImage } from "../../../../types/legacy/Thumbnails.js";

export type fetchUniverseThumbnailsResponse = { data: fetchedImage[] };

export type fetchUniverseThumbnailsType = (
    this: BloxFetch,

    universeId: number,
    thumbnailIds: number | number[],
    size?: UniverseThumbnailImageSize,
    format?: UniverseThumbnailImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<fetchedImage[]>;

export default async function (
    this: BloxFetch,

    universeId: number,
    thumbnailIds: number | number[],
    size: UniverseThumbnailImageSize = UniverseThumbnailImageSize["768x432"],
    format: UniverseThumbnailImageFormat = UniverseThumbnailImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<fetchedImage[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUniverseThumbnailsResponse>(
            "GET",
            "ThumbnailsV1",
            `/v1/games/${universeId}/thumbnails`,
            {
                params: {
                    thumbnailIds: Array.isArray(thumbnailIds) ? thumbnailIds : [thumbnailIds],

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
