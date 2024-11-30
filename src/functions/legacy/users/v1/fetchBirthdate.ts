import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";

export type BirthdateResponse = {
    birthMonth: number;
    birthDay: number;
    birthYear: number;
};

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
