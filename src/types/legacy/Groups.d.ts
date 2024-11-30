import type { NumberRange } from "../shared.js";

export type RawGroupData = {
    id: number;
    name: string;
    description: string;
    owner: {
        id: number;
        type: GroupOwnerType;
        name: string;
    };
    memberCount: number;
    created: string;
    hasVerifiedBadge: boolean;
};

export type GroupAuditLog = {
    actor: {
        user: {
            buildersClubMembershipType: number;
            hasVerifiedBadge: boolean;
            userId: number;
            username: string;
            displayName: string;
        };
        role: {
            id: number;
            name: string;
            description: string;
            rank: number;
            memberCount: number;
        };
    };
    actionType: GroupActionType;
    description: unknown;
    created: Date;
};

export type GroupActionType =
    | "DeletePost"
    | "RemoveMember"
    | "AcceptJoinRequest"
    | "DeclineJoinRequest"
    | "PostStatus"
    | "ChangeRank"
    | "BuyAd"
    | "SendAllyRequest"
    | "CreateEnemy"
    | "AcceptAllyRequest"
    | "DeclineAllyRequest"
    | "DeleteAlly"
    | "DeleteEnemy"
    | "AddGroupPlace"
    | "RemoveGroupPlace"
    | "CreateItems"
    | "ConfigureItems"
    | "SpendGroupFunds"
    | "ChangeOwner"
    | "Delete"
    | "AdjustCurrencyAmounts"
    | "Abandon"
    | "Claim"
    | "Rename"
    | "ChangeDescription"
    | "InviteToClan"
    | "KickFromClan"
    | "CancelClanInvite"
    | "BuyClan"
    | "CreateGroupAsset"
    | "UpdateGroupAsset"
    | "ConfigureGroupAsset"
    | "RevertGroupAsset"
    | "CreateGroupDeveloperProduct"
    | "ConfigureGroupGame"
    | "CreateGroupDeveloperSubscriptionProduct"
    | "Lock"
    | "Unlock"
    | "CreateGamePass"
    | "CreateBadge"
    | "ConfigureBadge"
    | "SavePlace"
    | "PublishPlace"
    | "UpdateRolesetRank"
    | "UpdateRolesetData"
    | "BanMember"
    | "UnbanMember";

export type GroupRole = {
    id: number;
    name: string;
    rank: NumberRange<1, 255>;
};

// Type Definitions for v1
export type GameDetailResponseV1 = {
    id: number;
    rootPlaceId: number;
    name: string;
    description: string;
    sourceName?: string;
    sourceDescription?: string;
    creator: GameCreatorV1;
    price?: number;
    allowedGearGenres: string[];
    allowedGearCategories: string[];
    isGenreEnforced: boolean;
    copyingAllowed: boolean;
    playing: number;
    visits: number;
    maxPlayers: number;
    created: string;
    updated: string;
    studioAccessToApisAllowed: boolean;
    createVipServersAllowed: boolean;
    universeAvatarType: UniverseAvatarTypeV1;
    genre?: string;
    genre_l1?: string;
    genre_l2?: string;
    isAllGenre: boolean;
    isFavoritedByUser: boolean;
    favoritedCount: number;
    licenseDescription?: string;
    refundLink?: string;
    localizedFiatPrice?: string;
    refundPolicy?: RefundPolicyV1;
};

export type GameCreatorV1 = {
    id: number;
    name: string;
    type: string;
    isRNVAccount?: boolean;
    hasVerifiedBadge?: boolean;
};

export type RefundPolicyV1 = {
    id: number;
    name: string;
};

export type UniverseAvatarTypeV1 = 1 | 2 | 3; // MorphToR6 | PlayerChoice | MorphToR15

// Type Definitions for v2 (Games API)
export type GameMediaItemResponseV2 = {
    assetTypeId: number;
    assetType: string;
    imageId?: number;
    videoHash?: string;
    videoTitle?: string;
    approved: boolean;
    altText?: string;
};

export type GameResponseV2 = {
    id: number;
    name: string;
    description: string;
    creator: CreatorV2;
    rootPlace: AssetTypeV2;
    created: string;
    updated: string;
    placeVisits: number;
};

export type CreatorV2 = {
    id: number;
    type: CreatorTypeV2;
    name: string;
};

export type AssetTypeV2 = {
    id: number;
    type: AssetV2;
    name?: string;
};

export enum CreatorTypeV2 {
    User = 0,
    Group = 1,
}

export enum AssetV2 {
    Image = 1,
    TShirt = 2,
    Audio = 3,
    Place = 9,
    YouTubeVideo = 33,
    Screenshot = 83,
}

// Type Definitions for v2 (Groups API)
export type GroupResponseV2 = {
    id: number;
    name: string;
    description: string;
    owner: GroupOwnerV2;
    memberCount: number;
    created: string;
    hasVerifiedBadge: boolean;
};

export type GroupOwnerV2 = {
    id: number;
    type: GroupOwnerTypeV2;
    name: string;
};

export enum GroupOwnerTypeV2 {
    User = 0,
}

export type UserModelV2 = {
    buildersClubMembershipType: BuildersClubMembershipTypeV2;
    hasVerifiedBadge: boolean;
    userId: number;
    username: string;
    displayName: string;
};

export type BuildersClubMembershipTypeV2 = 0 | 1 | 2 | 3 | 4;

export type GroupRoleResponseV2 = {
    id: number;
    name: string;
    description: string;
    rank: number;
    memberCount: number;
};
