import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type { partialUserDataByUsernames } from "../../../../types/legacy/Users.js";

export type fetchUsersByUsernamesResponse = { data: partialUserDataByUsernames[] };
export type fetchUsersByUsernamesOptions = { excludeBannedUsers: boolean };

export type fetchUsersByUsernamesType = (
    this: BloxFetch,
    usernames: string | string[],
    options: fetchUsersByUsernamesOptions,
    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<partialUserDataByUsernames[]>;

export default async function (
    this: BloxFetch,
    usernames: string | string[],
    options: fetchUsersByUsernamesOptions,
    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<partialUserDataByUsernames[]> {
    return (
        await this.fetchHandler.fetchLegacy<fetchUsersByUsernamesResponse>("POST", "UsersV1", "/usernames/users", {
            params: {},
            body: {
                usernames: Array.isArray(usernames) ? usernames : [usernames],
                excludeBannedUsers: options.excludeBannedUsers,
            },
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}