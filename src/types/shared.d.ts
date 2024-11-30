export type NumberRange<N extends number, M extends number> = number extends N | M
    ? never
    : Exclude<{ [K in N | M]: K }[N | M], number>;

export enum SortOrder {
    Asc = 1,
    Desc = 2,
}

export enum PagingDirection {
    Forward = 1,
    Backward = 2,
}

export enum AssetV2 {
    Image = 1,
    TShirt = 2,
    Audio = 3,
    Place = 9,
    YouTubeVideo = 33,
    Screenshot = 83,
}

export type AssetTypeV2 = {
    id: number;
    type: AssetV2;
    name?: string;
};

export enum CreatorTypeV2 {
    User = 0,
    Group = 1,
}

export type CreatorV2 = {
    id: number;
    type: CreatorTypeV2;
    name: string;
};

export type RefundPolicyV1 = {
    id: number;
    name: string;
};
