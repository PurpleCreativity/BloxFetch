import LegacyFetchHandler from "./classes/internal/LegacyFetchHandler.js";

import fetchUsersPresence, { type fetchUsersPresenceType } from "./functions/legacy/presence/v1/fetchUsersPresence.js";
import fetchBadgeIcons, { type fetchBadgeIconsType } from "./functions/legacy/thumbnails/v1/fetchBadgeIcons.js";
import fetchGamepassIcons, {
    type fetchGamepassIconsType,
} from "./functions/legacy/thumbnails/v1/fetchGamepassIcons.js";
import fetchBirthdate, { type fetchBirthdateType } from "./functions/legacy/users/v1/fetchBirthdate.js";
import fetchUserById, { type fetchUserByIdType } from "./functions/legacy/users/v1/fetchUserById.js";
import fetchUsernameHistory, {
    type fetchUsernameHistoryType,
} from "./functions/legacy/users/v1/fetchUsernameHistory.js";
import fetchUsersByIds, { type fetchUsersByIdsType } from "./functions/legacy/users/v1/fetchUsersByIds.js";
import fetchUsersByUsernames, {
    type fetchUsersByUsernamesType,
} from "./functions/legacy/users/v1/fetchUsersByUsernames.js";

//export type * from "./types/legacy/Users.js";
//export type * from "./types/legacy/Presence.js";
//export type * from "./types/legacy/Thumbnails.js";
//export type * from "./types/legacy/Games.js";
//export type * from "./types/legacy/Groups.js";

export type * from "./types/internal/LegacyFetchHandler.js";
export type * from "./types/shared.js";

/**
 * Main class for interacting with the Roblox API through various endpoints.
 */
export default class BloxFetch {
    /**
     * Instance of the internal fetch handler responsible for making API requests.
     */
    readonly LegacyFetchHandler: LegacyFetchHandler;

    //? UsersV1

    /**
     * Fetches a user's username history by their Id.
     */
    readonly fetchUsernameHistory: fetchUsernameHistoryType;

    /**
     * Fetches a user's birthdate information.
     */
    readonly fetchBirthdate: fetchBirthdateType;

    /**
     * Fetches detailed information about a user by their Id.
     */
    readonly fetchUserById: fetchUserByIdType;

    /**
     * Fetches information about multiple users by their Ids.
     */
    readonly fetchUsersByIds: fetchUsersByIdsType;

    /**
     * Fetches information about multiple users by their usernames.
     */
    readonly fetchUsersByUsernames: fetchUsersByUsernamesType;

    //? PresenceV1

    /**
     * Fetches the online presence of multiple users.
     */
    readonly fetchUsersPresence: fetchUsersPresenceType;

    //? GroupsV1 (Future implementation placeholder)

    //? ThumbnailsV1

    readonly fetchBadgeIcons: fetchBadgeIconsType;

    readonly fetchGamepassIcons: fetchGamepassIconsType;
    /**
     * Initializes a new instance of the BloxFetch class.
     */
    constructor() {
        this.LegacyFetchHandler = new LegacyFetchHandler({});

        //? UsersV1
        this.fetchUsernameHistory = fetchUsernameHistory;
        this.fetchBirthdate = fetchBirthdate;
        this.fetchUserById = fetchUserById;
        this.fetchUsersByIds = fetchUsersByIds;
        this.fetchUsersByUsernames = fetchUsersByUsernames;

        //? PresenceV1
        this.fetchUsersPresence = fetchUsersPresence;

        //? GroupsV1

        //? ThumbnailsV1
        this.fetchBadgeIcons = fetchBadgeIcons;
        this.fetchGamepassIcons = fetchGamepassIcons;
    }
}
