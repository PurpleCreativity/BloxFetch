import FetchHandler from "./classes/internal/fetchHandler.js";

import fetchUsernameHistory, {
    type fetchUsernameHistoryType,
} from "./functions/legacy/users/v1/fetchUsernameHistory.js";

import fetchBirthdate, { type fetchBirthdateType } from "./functions/legacy/users/v1/fetchBirthdate.js";

export default class BloxFetch {
    readonly fetchHandler: FetchHandler;

    readonly fetchUsernameHistory: fetchUsernameHistoryType;
    readonly fetchBirthdate: fetchBirthdateType;

    constructor() {
        this.fetchHandler = new FetchHandler({});

        this.fetchUsernameHistory = fetchUsernameHistory;
        this.fetchBirthdate = fetchBirthdate;
    }
}

const c = new BloxFetch();
console.log(await c.fetchUsernameHistory(200565345));
