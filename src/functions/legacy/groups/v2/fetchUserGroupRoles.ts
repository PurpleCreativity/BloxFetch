import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type { GroupRolesRequest } from "../../../../types/legacy/Groups.js";
import type { UserGroupRoles } from "../../../../types/legacy/Users.js";

export type UserGroupRolesResponse = {
    data: UserGroupRoles[];
};

export type fetchUserGroupRolesType = (
    this: BloxFetch,
    userId: number,
    options: GroupRolesRequest,
    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<UserGroupRoles[]>;

export default async function (
    this: BloxFetch,
    userId: number,
    options: GroupRolesRequest,
    fetchOptions?: Partial<LegacyFetchOptions>,
): Promise<UserGroupRoles[]> {
    return (
        await this.fetchHandler.fetchLegacy<UserGroupRolesResponse>(
            "GET",
            "GroupsV2",
            `/users/${userId}/groups/roles`,
            {
                params: {
                    includeLocked: options.includeLocked,
                    includeNotificationPreferences: options.includeNotificationPreferences,
                },
                body: {},
                useCache: fetchOptions?.useCache ?? true,
            },
        )
    ).data;
}
