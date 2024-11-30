import type BloxFetch from "../../../../main.js";
import type { LegacyListFetchOptions } from "../../../../types/fetchHandler.js";
import type { UsernameHistoryResponse } from "../../../../types/legacy/Users.js";

export type fetchUsernameHistoryType = (
    this: BloxFetch,
    userId: number,
    options?: Partial<LegacyListFetchOptions>,
) => Promise<string[]>;

export default async function (
    this: BloxFetch,
    userId: number,
    options?: Partial<LegacyListFetchOptions>,
): Promise<string[]> {
    return (
        await this.fetchHandler.fetchLegacyList<UsernameHistoryResponse>(
            "GET",
            "UsersV1",
            `/users/${userId}/username-history`,
            {
                params: {},
                body: {},
                useCache: options?.useCache ?? true,
                perPage: 100,
                maxResults: options?.maxResults ?? 100,
            },
        )
    ).map((entry) => entry.name);
}
