export type fetchedBadgeIcon = {
    targetId: number;
    state: string;
    imageUrl: string;
    version: string;
};

//? Enums

// User Avatar

export enum UserAvatarImageSize {
    "48x48" = "48x49",
    "50x50" = "50x50",
    "60x60" = "60x60",
    "75x75" = "75x75",
    "100x100" = "100x100",
    "110x110" = "110x110",
    "150x150" = "150x150",
    "180x180" = "180x180",
    "352x352" = "352x352",
    "420x420" = "420x420",
    "720x720" = "720x720",
}

export enum UserAvatarImageFormat {
    Png = "Png",
    Jpeg = "Jpeg",
    Webp = "Webp",
}

// User Avatar Bust

export enum UserAvatarBustImageSize {
    "48x48" = "48x49",
    "50x50" = "50x50",
    "60x60" = "60x60",
    "75x75" = "75x75",
    "100x100" = "100x100",
    "150x150" = "150x150",
    "180x180" = "180x180",
    "352x352" = "352x352",
    "420x420" = "420x420",
}

export enum UserAvatarImageFormat {
    Png = "Png",
    Webp = "Webp",
}

// User Avatar Headshot

export enum UserAvatarHeadshotImageSize {
    "48x48" = "48x49",
    "50x50" = "50x50",
    "60x60" = "60x60",
    "75x75" = "75x75",
    "100x100" = "100x100",
    "110x110" = "110x110",
    "150x150" = "150x150",
    "180x180" = "180x180",
    "352x352" = "352x352",
    "420x420" = "420x420",
    "720x720" = "720x720",
}

export enum UserAvatarHeadshotImageFormat {
    Png = "Png",
    Jpeg = "Jpeg",
    Webp = "Webp",
}

// Badge Icon

export enum BadgeIconImageSize {
    "150x150" = "150x150",
}

export enum BadgeIconImageFormat {
    Png = "Png",
    Webp = "Webp",
}
