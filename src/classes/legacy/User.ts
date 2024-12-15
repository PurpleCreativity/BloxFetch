import type BloxFetch from "../../main.js";
import type { rawUserData } from "../../main.js";

export default class User {
    readonly client: BloxFetch;
    private rawData: rawUserData;

    readonly id: number;
    readonly name: string;
    readonly displayName: string;
    readonly description: string;
    readonly hasVerifiedBadge: boolean;
    readonly externalAppDisplayName?: string;
    readonly isBanned: boolean;
    readonly joinDate: Date;

    constructor(client: BloxFetch, rawData: rawUserData) {
        this.client = client;
        this.rawData = rawData;

        this.id = rawData.id;
        this.name = rawData.name;
        this.displayName = rawData.displayName;
        this.description = rawData.description;
        this.hasVerifiedBadge = rawData.hasVerifiedBadge;
        this.externalAppDisplayName = rawData.externalAppDisplayName;
        this.isBanned = rawData.isBanned;
        this.joinDate = new Date(rawData.created);
    }

    get profileLink(): string {
        return `https://www.roblox.com/users/${this.id}/profile`;
    }

    get accountAge(): number {
        return Math.ceil(Math.abs(new Date().getTime() - this.joinDate.getTime()) / (1000 * 60 * 60 * 24));
    }
}
