import FetchHandler from "./classes/internal/fetchHandler.js";

import fetchUsernameHistory, {
    type fetchUsernameHistoryType,
} from "./functions/legacy/users/v1/fetchUsernameHistory.js";

import fetchBirthdate, { type fetchBirthdateType } from "./functions/legacy/users/v1/fetchBirthdate.js";

import fetchUserPresences, { type fetchUserPresencesType } from "./functions/legacy/presence/v1/fetchUserPresences.js";

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

    constructor() {
        this.fetchHandler = new FetchHandler({});

        this.fetchUsernameHistory = fetchUsernameHistory;
        this.fetchBirthdate = fetchBirthdate;

        this.fetchUserPresences = fetchUserPresences;
    }
}

const c = new BloxFetch();
console.log(await c.fetchUsernameHistory(200565345));
