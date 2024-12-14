import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import { UniverseThumbnailImageFormat, UniverseThumbnailImageSize } from "../../../../types/legacy/Thumbnails.Enums.js";
import type { Image } from "../../../../types/legacy/Thumbnails.js";

export type fetchUniverseThumbnailsMultigetResponseEntry = {
    universeId: number;
    error: {
        code: number;
        message: string;
        userFacingMessage: string;
        field: string;
        fieldData: string;
    };
    thumbnails: Image[];
};

export type fetchUniverseThumbnailsResponse = {
    data: fetchUniverseThumbnailsMultigetResponseEntry[];
};

export type fetchUniverseThumbnailsMultigetType = (
    this: BloxFetch,

    universeIds: number | number[],
    countPerUniverse?: number,
    defaults?: boolean,
    size?: UniverseThumbnailImageSize,
    format?: UniverseThumbnailImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<fetchUniverseThumbnailsMultigetResponseEntry[]>;

export default async function (
    this: BloxFetch,

    universeIds: number | number[],
    countPerUniverse = 1,
    defaults = true,
    size: UniverseThumbnailImageSize = UniverseThumbnailImageSize["768x432"],
    format: UniverseThumbnailImageFormat = UniverseThumbnailImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<fetchUniverseThumbnailsMultigetResponseEntry[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUniverseThumbnailsResponse>(
            "GET",
            "ThumbnailsV1",
            "/v1/games/multiget/thumbnails",
            {
                params: {
                    universeIds: Array.isArray(universeIds) ? universeIds : [universeIds],

                    countPerUniverse: countPerUniverse,
                    defaults: defaults,
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
