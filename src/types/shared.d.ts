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
