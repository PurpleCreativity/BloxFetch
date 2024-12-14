import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import {
    UniverseIconImageFormat,
    UniverseIconImageReutrnPolicy,
    UniverseIconImageSize,
} from "../../../../types/legacy/Thumbnails.Enums.js";
import type { Image } from "../../../../types/legacy/Thumbnails.js";

export type fetchUniverseIconResponse = { data: Image[] };

export type fetchUniverseIconType = (
    this: BloxFetch,

    universeId: number,
    returnPolicy?: UniverseIconImageReutrnPolicy,
    size?: UniverseIconImageSize,
    format?: UniverseIconImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<Image[]>;

export default async function (
    this: BloxFetch,

    universeId: number,
    returnPolicy: UniverseIconImageReutrnPolicy = UniverseIconImageReutrnPolicy.PlaceHolder,
    size: UniverseIconImageSize = UniverseIconImageSize["50x50"],
    format: UniverseIconImageFormat = UniverseIconImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<Image[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUniverseIconResponse>("GET", "ThumbnailsV1", "/v1/games/icons", {
            params: {
                universeId: universeId,
                returnPolicy: returnPolicy,

                size: size,
                format: format,
                isCircular: isCircular,
            },
            body: {},
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
