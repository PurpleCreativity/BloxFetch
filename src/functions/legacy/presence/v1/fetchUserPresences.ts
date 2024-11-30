import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type { UserPresence, UserPresencesResponse } from "../../../../types/legacy/Presence.js";

export type fetchUserPresencesType = (
    this: BloxFetch,
    userIds: number | number[],
    options?: Partial<LegacyFetchOptions>,
) => Promise<UserPresence[]>;

export default async function (
    this: BloxFetch,
    userIds: number | number[],
    options?: Partial<LegacyFetchOptions>,
): Promise<UserPresence[]> {
    const data = (
        await this.fetchHandler.fetchLegacy<UserPresencesResponse>("POST", "PresenceV1", "/presence/users", {
            body: { userIds: Array.isArray(userIds) ? userIds : [userIds] },
            params: {},
            useCache: options?.useCache ?? true,
        })
    ).userPresences;

    for (const entry of data) {
        entry.lastOnline = new Date(entry.lastOnline);
        if (entry.invisibleModeExpiry) entry.invisibleModeExpiry = new Date(entry.invisibleModeExpiry);
    }

    return data;
}