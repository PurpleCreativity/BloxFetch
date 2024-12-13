/**
 * Enum representing a user's presence status on Roblox.
 */
export enum UserPresenceType {
    /** The user is offline. */
    Offline = 0,

    /** The user is online but not in a game or studio. */
    Online = 1,

    /** The user is currently in a game. */
    InGame = 2,

    /** The user is currently in Roblox Studio. */
    InStudio = 3,

    /** The user is invisible to others. */
    Invisible = 4,
}

/**
 * Represents a user's presence information on Roblox.
 */
export type UserPresence = {
    /**
     * The user's current presence type.
     */
    userPresenceType: UserPresenceType;

    /**
     * The last known location of the user.
     */
    lastLocation: string;

    /**
     * The ID of the place the user is currently in, if applicable.
     */
    placeId?: number;

    /**
     * The root place ID of the experience the user is in, if applicable.
     */
    rootPlaceId?: number;

    /**
     * The unique game session ID (UUID), if the user is in a game.
     */
    gameId?: string;

    /**
     * The universe ID of the game the user is in, if applicable.
     */
    universeId?: number;

    /**
     * The unique ID of the user.
     */
    userId: number;

    /**
     * The last time the user was online, as a Date object.
     */
    lastOnline: Date;

    /**
     * The expiration date of the user's invisible mode, if applicable.
     */
    invisibleModeExpiry?: Date;
};
