import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type { partialUserDataByUsernames } from "../../../../types/legacy/Users.js";

export type fetchUsersByNamesResponse = { data: partialUserDataByUsernames[] };
export type fetchUsersByNamesOptions = { excludeBannedUsers: boolean };

export type fetchUsersByNamesTypes = (
    this: BloxFetch,
    usernames: string | string[],
    options: fetchUsersByNamesOptions,
    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<partialUserDataByUsernames[]>;

export default async function (
    this: BloxFetch,
    usernames: string | string[],
    options: fetchUsersByNamesOptions,
    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<partialUserDataByUsernames[]> {
    return (
        await this.fetchHandler.fetchLegacy<fetchUsersByNamesResponse>("POST", "UsersV1", "/usernames/users", {
            params: {},
            body: {
                usernames: Array.isArray(usernames) ? usernames : [usernames],
                excludeBannedUsers: options.excludeBannedUsers,
            },
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
