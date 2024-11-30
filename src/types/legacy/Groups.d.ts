import type { AssetV2, NumberRange } from "../shared.js";

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

export type GroupRolesRequest = {
    includeLocked: boolean;
    includeNotificationPreferences: boolean;
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
