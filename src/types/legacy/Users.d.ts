export enum SortOrder {
    Asc = 1,
    Desc = 2,
}

export enum PagingDirection {
    Forward = 1,
    Backward = 2,
}

export type AuthenticatedGetUserResponse = {
    id: number; // int64
    name: string;
    displayName: string;
};

export type BirthdateRequest = {
    birthMonth: number; // int32
    birthDay: number; // int32
    birthYear: number; // int32
    password: string;
};

export type BirthdateResponse = {
    birthMonth: number;
    birthDay: number;
    birthYear: number;
};

export type DescriptionRequest = {
    description: string;
};

export type DescriptionResponse = {
    description: string;
};

export type GenderRequest = {
    gender: string;
};

export type GenderResponse = {
    gender: number; // int32
};

export type GetUserResponse = {
    id: number;
    name: string;
    displayName: string;
    description: string;
    created: string; // date-time
    isBanned: boolean;
    externalAppDisplayName: string | null;
    hasVerifiedBadge: boolean;
};

export type MultiGetByUserIdRequest = {
    userIds: number[]; // int64[]
    excludeBannedUsers: boolean;
};

export type MultiGetUserByNameResponse = {
    requestedUsername: string;
    hasVerifiedBadge: boolean;
    id: number;
    name: string;
    displayName: string;
};

export type MultiGetUserResponse = {
    hasVerifiedBadge: boolean;
    id: number;
    name: string;
    displayName: string;
};

export type SearchGetUserResponse = {
    previousUsernames: string[];
    hasVerifiedBadge: boolean;
    id: number;
    name: string;
    displayName: string;
};

export type SetDisplayNameRequest = {
    newDisplayName: string;
};

export type UserAgeBracketResponse = {
    ageBracket: number;
};

export type UserCountryCodeResponse = {
    countryCode: string;
};

export type UserRolesResponse = {
    roles: string[];
};

export type UsernameHistoryResponse = {
    name: string;
};
