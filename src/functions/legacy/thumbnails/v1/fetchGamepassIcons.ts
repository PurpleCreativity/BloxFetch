import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import type { fetchedImage } from "../../../../types/legacy/Thumbnails.js";
import { GamePassImageFormat, GamePassImageSize } from "../../../../types/legacy/ThumbnailsEnums.js";

export type fetchGamepassIconsResponse = { data: fetchedImage[] };

export type fetchGamepassIconsType = (
    this: BloxFetch,

    gamePassIds: number | number[],
    size?: GamePassImageSize,
    format?: GamePassImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<fetchedImage[]>;

export default async function (
    this: BloxFetch,

    gamePassIds: number | number[],
    size: GamePassImageSize = GamePassImageSize["150x150"],
    format: GamePassImageFormat = GamePassImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<fetchedImage[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchGamepassIconsResponse>("GET", "ThumbnailsV1", "/v1/badges/icons", {
            params: {
                gamePassIds: Array.isArray(gamePassIds) ? gamePassIds : [gamePassIds],

                size: size,
                format: format,
                isCircular: isCircular,
            },
            body: {},
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
