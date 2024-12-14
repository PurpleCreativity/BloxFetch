import type BloxFetch from "../../../../main.js";
import type { LegacyListFetchOptions } from "../../../../types/internal/LegacyFetchHandler.js";

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
        await this.LegacyFetchHandler.fetchList<UsernameHistoryResponse>(
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
