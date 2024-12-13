import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type { UserBirthdate } from "../../../../types/legacy/Users.js";

export type fetchBirthdateType = (
    this: BloxFetch,
    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<UserBirthdate>;

export default async function (this: BloxFetch, fetchOptions?: Partial<LegacyFetchOptions>): Promise<UserBirthdate> {
    return await this.fetchHandler.fetchLegacy<UserBirthdate>("GET", "UsersV1", "/birthdate", {
        params: {},
        body: {},
        useCache: fetchOptions?.useCache ?? true,
    });
}
