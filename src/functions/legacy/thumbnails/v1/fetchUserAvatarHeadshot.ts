import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import {
    UserAvatarHeadshotImageFormat,
    UserAvatarHeadshotImageSize,
} from "../../../../types/legacy/Thumbnails.Enums.js";
import type { Image } from "../../../../types/legacy/Thumbnails.js";

export type fetchUserAvatarHeadshotResponse = { data: Image[] };

export type fetchUserAvatarHeadshotType = (
    this: BloxFetch,

    userIds: number | number[],
    size?: UserAvatarHeadshotImageSize,
    format?: UserAvatarHeadshotImageFormat,
    isCircular?: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<Image[]>;

export default async function (
    this: BloxFetch,

    userIds: number | number[],
    size: UserAvatarHeadshotImageSize = UserAvatarHeadshotImageSize["48x48"],
    format: UserAvatarHeadshotImageFormat = UserAvatarHeadshotImageFormat.Png,
    isCircular = false,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<Image[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUserAvatarHeadshotResponse>(
            "GET",
            "ThumbnailsV1",
            "/users/avatar-headshot",
            {
                params: {
                    userIds: Array.isArray(userIds) ? userIds : [userIds],

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
