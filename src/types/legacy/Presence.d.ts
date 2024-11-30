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
    placeId: number | null; // int64
    rootPlaceId: number | null; // int64
    gameId: string | null; // UUID
    universeId: number | null; // int64
    userId: number; // int64
    lastOnline: Date; // date-string
    invisibleModeExpiry?: Date; // date-string
};
