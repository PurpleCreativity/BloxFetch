/**
 * Represents raw user data returned from the Roblox Users API.
 */
export type rawUserData = {
    /** Unique username of the user */
    name: string;

    /** Custom display name of the user */
    displayName: string;

    /** Unique ID of the user */
    id: number;

    /** Indicates if the user has a verified badge */
    hasVerifiedBadge: boolean;

    /** Display name in an external application (optional) */
    externalAppDisplayName?: string;

    /** Indicates if the user is banned */
    isBanned: boolean;

    /** Account creation date in string format (ISO) */
    created: string;

    /** Description or bio of the user */
    description: string;
};

/**
 * Represents processed user data with a parsed creation date.
 */
export type UserData = Omit<rawUserData, "created"> & {
    /** Account creation date as a Date object */
    created: Date;
};

/**
 * Represents minimal user data by ID, useful for basic lookups.
 */
export type partialUserDataByIds = Pick<UserData, "name" | "displayName" | "id" | "hasVerifiedBadge">;

/**
 * Represents minimal user data by Username, useful for basic lookups.
 */
export type partialUserDataByUsernames = Pick<UserData, "name" | "displayName" | "id" | "hasVerifiedBadge"> & {
    /**
     * The username that was requested for lookup
     */
    requestedUsername: string;
};

//

export type UserBirthdate = {
    /**
     * The month of the user's birth (1-12).
     */
    birthMonth: number;

    /**
     * The day of the user's birth (1-31 depending on the month).
     */
    birthDay: number;

    /**
     * The year of the user's birth.
     */
    birthYear: number;
};
