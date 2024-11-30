import FetchHandler from "./classes/internal/fetchHandler.js";

import fetchUsernameHistory, {
    type fetchUsernameHistoryType,
} from "./functions/legacy/users/v1/fetchUsernameHistory.js";

import fetchBirthdate, { type fetchBirthdateType } from "./functions/legacy/users/v1/fetchBirthdate.js";

import fetchUserPresences, { type fetchUserPresencesType } from "./functions/legacy/presence/v1/fetchUserPresences.js";

import fetchUserGroupRoles, {
    type UserGroupRolesResponse,
    type fetchUserGroupRolesType,
} from "./functions/legacy/groups/v2/fetchUserGroupRoles.js";

export type * from "./types/legacy/Users.js";
export type * from "./types/legacy/Presence.js";
export type * from "./types/legacy/Games.js";
export type * from "./types/legacy/Groups.js";

export type * from "./types/fetchHandler.js";
export type * from "./types/shared.js";
export default class BloxFetch {
    readonly fetchHandler: FetchHandler;

    //? UsersV1
    readonly fetchUsernameHistory: fetchUsernameHistoryType;
    readonly fetchBirthdate: fetchBirthdateType;
    //? PresenceV1
    readonly fetchUserPresences: fetchUserPresencesType;
    //? Groups
    readonly fetchUserGroupRoles: fetchUserGroupRolesType;

    constructor() {
        this.fetchHandler = new FetchHandler({});
        //? UsersV1
        this.fetchUsernameHistory = fetchUsernameHistory;
        this.fetchBirthdate = fetchBirthdate;
        //? PresenceV1
        this.fetchUserPresences = fetchUserPresences;
        //? Groups
        this.fetchUserGroupRoles = fetchUserGroupRoles;
    }
}
