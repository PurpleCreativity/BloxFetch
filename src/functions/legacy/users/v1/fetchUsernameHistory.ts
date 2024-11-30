import type BloxFetch from "../../../../main.js";
import type { LegacyListFetchOptions } from "../../../../types/fetchHandler.js";

export type UsernameHistoryResponse = {
    name: string;
};

export type fetchUsernameHistoryType = (
    this: BloxFetch,
    userId: number,
    fetchOptions?: Partial<LegacyListFetchOptions>,
) => Promise<string[]>;

export default async function (
    this: BloxFetch,
    userId: number,
    fetchOptions?: Partial<LegacyListFetchOptions>,
): Promise<string[]> {
    return (
        await this.fetchHandler.fetchLegacyList<UsernameHistoryResponse>(
            "GET",
            "UsersV1",
            `/users/${userId}/username-history`,
            {
                params: {},
                body: {},
                useCache: fetchOptions?.useCache ?? true,
                perPage: 100,
                maxResults: fetchOptions?.maxResults ?? 100,
            },
        )
    ).map((entry) => entry.name);
}
