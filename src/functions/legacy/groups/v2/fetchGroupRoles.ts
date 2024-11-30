import type BloxFetch from "../../../../main.js";
import type { LegacyFetchOptions } from "../../../../types/fetchHandler.js";
import type { GroupRolesRequest } from "../../../../types/legacy/Groups.js";
import type { UserGroupRoles } from "../../../../types/legacy/Users.js";

export type fetchGroupRoles = (
    this: BloxFetch,
    userId: number,
    fetchOptions?: Partial<LegacyFetchOptions>,
) => Promise<UserGroupRoles>;

export default async function (
    this: BloxFetch,
    userId: number,
    options: GroupRolesRequest,
    fetchOptions?: Partial<LegacyFetchOptions>,
) {}
