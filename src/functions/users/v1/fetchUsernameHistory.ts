import type BloxFetch from "../../../main.js";
import type { LegacyListFetchOptions } from "../../../types/fetchHandler.js";

export type UsernameHistoryResponse = {
    name: string;
};

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
    const response = await this.fetchHandler.fetchLegacyList<UsernameHistoryResponse>(
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
    );

    return response.map((entry) => entry.name);
}
