import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import type { partialUserDataByIds } from "../../../../types/legacy/Users.js";

export type fetchUsersByIdsResponse = { data: partialUserDataByIds[] };

export type fetchUsersByIdsType = (
    this: BloxFetch,

    userIds: number | number[],
    excludeBannedUsers: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<partialUserDataByIds[]>;

export default async function (
    this: BloxFetch,

    userIds: number | number[],
    excludeBannedUsers: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<partialUserDataByIds[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUsersByIdsResponse>("POST", "UsersV1", "/users", {
            params: {},
            body: {
                userIds: Array.isArray(userIds) ? userIds : [userIds],
                excludeBannedUsers: excludeBannedUsers,
            },
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
