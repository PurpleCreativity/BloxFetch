import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import {
    UniverseIconImageFormat,
    UniverseIconImageReutrnPolicy,
    UniverseIconImageSize,
} from "../../../../types/legacy/Thumbnails.Enums.js";
import type { fetchedImage } from "../../../../types/legacy/Thumbnails.js";

export type fetchUniversesIconsResponse = { data: fetchedImage[] };

export type fetchUniversesIconsType = (
    this: BloxFetch,

    universeId: number,
    returnPolicy?: UniverseIconImageReutrnPolicy,
    size?: UniverseIconImageSize,
    format?: UniverseIconImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<fetchedImage[]>;

export default async function (
    this: BloxFetch,

    universeId: number,
    returnPolicy: UniverseIconImageReutrnPolicy = UniverseIconImageReutrnPolicy.PlaceHolder,
    size: UniverseIconImageSize = UniverseIconImageSize["50x50"],
    format: UniverseIconImageFormat = UniverseIconImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<fetchedImage[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUniversesIconsResponse>("GET", "ThumbnailsV1", "/v1/badges/icons", {
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
