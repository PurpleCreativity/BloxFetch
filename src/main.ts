import FetchHandler from "./classes/internal/fetchHandler.js";

import fetchUsernameHistory, {
    type fetchUsernameHistoryType,
} from "./functions/legacy/users/v1/fetchUsernameHistory.js";

export default class BloxFetch {
    readonly fetchHandler: FetchHandler;

    readonly fetchUsernameHistory: fetchUsernameHistoryType;

    constructor() {
        this.fetchHandler = new FetchHandler({});

        this.fetchUsernameHistory = fetchUsernameHistory;
    }
}

const c = new BloxFetch();
console.log(await c.fetchUsernameHistory(200565345));
