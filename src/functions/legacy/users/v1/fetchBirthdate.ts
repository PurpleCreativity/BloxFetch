import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type { BirthdateResponse } from "../../../../types/legacy/Users.js";

export type fetchBirthdateType = (
    this: BloxFetch,
    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<BirthdateResponse>;

export default async function (
    this: BloxFetch,
    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<BirthdateResponse> {
    return await this.fetchHandler.fetchLegacy<BirthdateResponse>("GET", "UsersV1", "/birthdate", {
        params: {},
        body: {},
        useCache: fetchOptions?.useCache ?? true,
    });
}
