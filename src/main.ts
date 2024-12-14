import LegacyFetchHandler from "./classes/internal/LegacyFetchHandler.js";

import fetchUsersPresences, {
    type fetchUsersPresencesType,
} from "./functions/legacy/presence/v1/fetchUsersPresences.js";
import fetchBadgeIcons, { type fetchBadgeIconsType } from "./functions/legacy/thumbnails/v1/fetchBadgeIcon.js";
import fetchUniverseIcon, { type fetchUniverseIconType } from "./functions/legacy/thumbnails/v1/fetchUniverseIcon.js";
import fetchUniverseThumbnails, {
    type fetchUniverseThumbnailsType,
} from "./functions/legacy/thumbnails/v1/fetchUniverseThumbnails.js";
import fetchUniverseThumbnailsMultiget, {
    type fetchUniverseThumbnailsMultigetType,
} from "./functions/legacy/thumbnails/v1/fetchUniverseThumbnailsMultiget.js";
import fetchUniversepassIcon, {
    type fetchUniversepassIconType,
} from "./functions/legacy/thumbnails/v1/fetchUniversepassIcon.js";
import fetchUserAvatarHeadshot, {
    type fetchUserAvatarHeadshotType,
} from "./functions/legacy/thumbnails/v1/fetchUserAvatarHeadshot.js";
import fetchBirthdate, { type fetchBirthdateType } from "./functions/legacy/users/v1/fetchBirthdate.js";
import fetchUserById, { type fetchUserByIdType } from "./functions/legacy/users/v1/fetchUserById.js";
import fetchUsernameHistory, {
    type fetchUsernameHistoryType,
} from "./functions/legacy/users/v1/fetchUsernameHistory.js";
import fetchUsersByIds, { type fetchUsersByIdsType } from "./functions/legacy/users/v1/fetchUsersByIds.js";
import fetchUsersByUsernames, {
    type fetchUsersByUsernamesType,
} from "./functions/legacy/users/v1/fetchUsersByUsernames.js";

export type * from "./types/legacy/Thumbnails.js";
export * from "./types/legacy/Thumbnails.Enums.js";

export type * from "./types/legacy/Presence.js";

export type * from "./types/legacy/Users.js";

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
    readonly fetchUsersPresences: fetchUsersPresencesType;

    //? GroupsV1 (Future implementation placeholder)

    //? ThumbnailsV1

    readonly fetchBadgeIcon: fetchBadgeIconsType;

    readonly fetchUniversepassIcon: fetchUniversepassIconType;

    readonly fetchUniverseThumbnails: fetchUniverseThumbnailsType;

    readonly fetchUniverseIcon: fetchUniverseIconType;

    readonly fetchUniverseThumbnailsMultiget: fetchUniverseThumbnailsMultigetType;

    readonly fetchUserAvatarHeadshot: fetchUserAvatarHeadshotType;
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
        this.fetchUsersPresences = fetchUsersPresences;

        //? GroupsV1

        //? ThumbnailsV1
        this.fetchBadgeIcon = fetchBadgeIcons;
        this.fetchUniversepassIcon = fetchUniversepassIcon;
        this.fetchUniverseThumbnails = fetchUniverseThumbnails;
        this.fetchUniverseIcon = fetchUniverseIcon;
        this.fetchUniverseThumbnailsMultiget = fetchUniverseThumbnailsMultiget;
        this.fetchUserAvatarHeadshot = fetchUserAvatarHeadshot;
    }
}
