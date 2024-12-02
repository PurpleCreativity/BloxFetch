import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type { PartialUserData } from "../../../../types/legacy/Users.js";

export type fetchUsersByIdsResponse = { data: PartialUserData[] };
export type fetchUsersByIdsOptions = { excludeBannedUsers: boolean };
export type fetchUsersByIdsType = (
    this: BloxFetch,
    userIds: number | number[],
    options: fetchUsersByIdsOptions,
    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<PartialUserData[]>;

export default async function (
    this: BloxFetch,
    userIds: number | number[],
    options: fetchUsersByIdsOptions,
    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<PartialUserData[]> {
    return (
        await this.fetchHandler.fetchLegacy<fetchUsersByIdsResponse>("POST", "UsersV1", "/users", {
            params: {},
            body: {
                userIds: Array.isArray(userIds) ? userIds : [userIds],
                excludeBannedUsers: options.excludeBannedUsers,
            },
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
