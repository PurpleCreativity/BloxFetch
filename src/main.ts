import FetchHandler from "./classes/internal/fetchHandler.js";

import fetchUsersPresence, { type fetchUsersPresenceType } from "./functions/legacy/presence/v1/fetchUsersPresence.js";
import fetchBirthdate, { type fetchBirthdateType } from "./functions/legacy/users/v1/fetchBirthdate.js";
import fetchUserById, { type fetchUserByIdType } from "./functions/legacy/users/v1/fetchUserById.js";
import fetchUsernameHistory, {
    type fetchUsernameHistoryType,
} from "./functions/legacy/users/v1/fetchUsernameHistory.js";
import fetchUsersByIds, { type fetchUsersByIdsType } from "./functions/legacy/users/v1/fetchUsersByIds.js";
import fetchUsersByNames, { type fetchUsersByNamesTypes } from "./functions/legacy/users/v1/fetchUsersByNames.js";

//export type * from "./types/legacy/Users.js";
//export type * from "./types/legacy/Presence.js";
//export type * from "./types/legacy/Games.js";
//export type * from "./types/legacy/Groups.js";

export type * from "./types/fetchHandler.js";
export type * from "./types/shared.js";
export default class BloxFetch {
    readonly fetchHandler: FetchHandler;

    //? UsersV1
    readonly fetchUsernameHistory: fetchUsernameHistoryType;
    readonly fetchBirthdate: fetchBirthdateType;
    readonly fetchUserById: fetchUserByIdType;
    readonly fetchUsersByIds: fetchUsersByIdsType;
    readonly fetchUsersByNames: fetchUsersByNamesTypes;
    //? PresenceV1
    readonly fetchUsersPresence: fetchUsersPresenceType;
    //? GroupsV1

    constructor() {
        this.fetchHandler = new FetchHandler({});
        //? UsersV1
        this.fetchUsernameHistory = fetchUsernameHistory;
        this.fetchBirthdate = fetchBirthdate;
        this.fetchUserById = fetchUserById;
        this.fetchUsersByIds = fetchUsersByIds;
        this.fetchUsersByNames = fetchUsersByNames;
        //? PresenceV1
        this.fetchUsersPresence = fetchUsersPresence;
        //? GroupsV1
    }
}
