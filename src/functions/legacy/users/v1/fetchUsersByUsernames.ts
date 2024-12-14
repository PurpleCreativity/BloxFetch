import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";
import type { partialUserDataByUsernames } from "../../../../types/legacy/Users.js";

export type fetchUsersByUsernamesResponse = { data: partialUserDataByUsernames[] };

export type fetchUsersByUsernamesType = (
    this: BloxFetch,

    usernames: string | string[],
    excludeBannedUsers: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<partialUserDataByUsernames[]>;

export default async function (
    this: BloxFetch,

    usernames: string | string[],
    excludeBannedUsers: boolean,

    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<partialUserDataByUsernames[]> {
    return (
        await this.LegacyFetchHandler.fetch<fetchUsersByUsernamesResponse>("POST", "UsersV1", "/usernames/users", {
            params: {},
            body: {
                usernames: Array.isArray(usernames) ? usernames : [usernames],
                excludeBannedUsers: excludeBannedUsers,
            },
            useCache: fetchOptions?.useCache ?? true,
        })
    ).data;
}
