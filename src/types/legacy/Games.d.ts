import type { CreatorV2, RefundPolicyV1 } from "./../shared.d.ts";
// Type Definitions for v1
export type GameDetailResponseV1 = {
    id: number; // Universe ID
    rootPlaceId: number; // Root place ID
    name: string; // Game name
    description: string; // Game description
    sourceName?: string; // Source language name
    sourceDescription?: string; // Source language description
    creator: GameCreatorV1;
    price?: number; // Paid access price
    allowedGearGenres: string[];
    allowedGearCategories: string[];
    isGenreEnforced: boolean;
    copyingAllowed: boolean;
    playing: number; // Current player count
    visits: number; // Total visits
    maxPlayers: number; // Maximum players
    created: string; // Creation date
    updated: string; // Last updated
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

export enum UniverseAvatarTypeV1 {
    MorphToR6 = 1,
    PlayerChoice = 2,
    MorphToR15 = 3,
}

// Type Definitions for v2
export type GameMediaItemResponseV2 = {
    assetTypeId: number;
    assetType: string; // Image or YouTubeVideo
    imageId?: number;
    videoHash?: string;
    videoTitle?: string;
    approved: boolean;
    altText?: string;
};

export type GameResponseV2 = {
    id: number; // Universe ID
    name: string;
    description: string;
    creator: CreatorV2;
    rootPlace: AssetTypeV2;
    created: string; // Creation date
    updated: string; // Last updated
    placeVisits: number; // Total visits
};

export type ExclusiveStartKeyCursorV2 = {
    key?: string;
    sortOrder: SortOrderV2;
    pagingDirection: PagingDirectionV2;
    pageNumber?: number;
    discriminator?: string;
    count?: number;
};
