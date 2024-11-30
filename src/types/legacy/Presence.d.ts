export enum UserPresenceType {
    Offline = 0,
    Online = 1,
    InGame = 2,
    InStudio = 3,
    Invisible = 4,
}

export type UserPresence = {
    userPresenceType: UserPresenceType;
    lastLocation: string;
    placeId: number; // int64
    rootPlaceId: number; // int64
    gameId: string; // UUID
    universeId: number; // int64
    userId: number; // int64
    lastOnline: Date; // date-string
    invisibleModeExpiry: Date; // date-string
};

export type UserPresencesResponse = {
    userPresences: UserPresence[];
};
