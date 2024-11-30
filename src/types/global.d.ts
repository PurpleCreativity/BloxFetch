export type NumberRange<N extends number, M extends number> = number extends N | M
    ? never
    : Exclude<{ [K in N | M]: K }[N | M], number>;
