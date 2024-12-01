export type UserData = {
    name: string;
    displayName: string;
    id: number;
    hasVerifiedBadge: boolean;
    externalAppDisplayName: string | null;
    isBanned: boolean;
    created: Date;
    description: string;
};

export type PartialUserData = {
    hasVerifiedBadge: boolean;
    id: number;
    name: string;
    displayName: string;
};

export type UserByNameData = PartialUserData & { requestedUsername: string };

export type UserGroupRoles = {
    group: {
        id: number;
        name: string;
        memberCount: number;
        hasVerifiedBadge: boolean;
    };
    role: GroupRole;
};

export type FriendData = UserData & {
    isOnline: boolean;
    isDeleted: boolean;
    friendFrequentScore: number;
    friendFrequentRank: number;
};

export type AvatarImageFormat = "Png" | "Jpeg" | "Webp";
export type AvatarBustImageFormat = "Png" | "Webp";
export type AvatarType = "R6" | "R15";
export type AvatarAssetType =
    | "Gear"
    | "Pants"
    | "Shirt"
    | "TShirt"
    | "LeftShoeAccessory"
    | "RightShoeAccessory"
    | "ShirtAccessory"
    | "PantsAccessory"
    | "TShirtAccessory"
    | "SweaterAccessory"
    | "JacketAccessory"
    | "ShortsAccessory"
    | "DressSkirtAccessory"
    | "Hat"
    | "WaistAccessory"
    | "NeckAccessory"
    | "ShoulderAccessory"
    | "FrontAccessory"
    | "BackAccessory"
    | "FaceAccessory"
    | "HairAccessory"
    | "RunAnimation"
    | "WalkAnimation"
    | "FallAnimation"
    | "JumpAnimation"
    | "IdleAnimation"
    | "SwimAnimation"
    | "ClimbAnimation";

export type Avatar3D = {
    camera: {
        position: {
            x: number;
            y: number;
            z: number;
        };
        direction: {
            x: number;
            y: number;
            z: number;
        };
        fov: number;
    };
    aabb: {
        min: {
            x: number;
            y: number;
            z: number;
        };
        max: {
            x: number;
            y: number;
            z: number;
        };
    };
    mtl: string;
    obj: string;
    textures: string[];
};

export type AvatarAsset = {
    id: number;
    name: string;
    assetType: {
        id: number;
        name: AvatarAssetType;
    };
    currentVersionId: number;
    meta?: {
        order?: number;
        puffiness?: number;
        position?: {
            X: number;
            Y: number;
            Z: number;
        };
        rotation?: {
            X: number;
            Y: number;
            Z: number;
        };
        scale?: {
            X: number;
            Y: number;
            Z: number;
        };
        version?: number;
    };
};

export type AvatarEmote = {
    assetId: number;
    assetName: string;
    position: number;
};

export type AvatarV1 = {
    scales: {
        height: number;
        width: number;
        head: number;
        depth: number;
        proportion: number;
        bodyType: number;
    };
    playerAvatarType: AvatarType;
    bodyColors: {
        headColorId: number;
        torsoColorId: number;
        rightArmColorId: number;
        leftArmColorId: number;
        rightLegColorId: number;
        leftLegColorId: number;
    };
    assets: AvatarAsset[];
    defaultShirtApplied: boolean;
    defaultPantsApplied: boolean;
    emotes: AvatarEmote[];
};

export type AvatarV2 = {
    scales: {
        height: number;
        width: number;
        head: number;
        depth: number;
        proportion: number;
        bodyType: number;
    };
    playerAvatarType: AvatarType;
    bodyColor3s: {
        headColor3: string;
        torsoColor3: string;
        rightArmColor3: string;
        leftArmColor3: string;
        rightLegColor3: string;
        leftLegColor3: string;
    };
    assets: AvatarAsset[];
    defaultShirtApplied: boolean;
    defaultPantsApplied: boolean;
    emotes: AvatarEmote[];
};

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
