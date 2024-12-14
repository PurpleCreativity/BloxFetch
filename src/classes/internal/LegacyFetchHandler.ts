import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios";
import type {
    HttpMethod,
    LegacyFetchOptions,
    LegacyListFetchOptions,
    PaginatedResponse,
} from "../../types/internal/LegacyFetchHandler.js";
import CacheManager from "./cacheManager.js";

type credentials = {
    cookie?: string;
    csrf?: string;
};

export default class LegacyFetchHandler {
    private client: AxiosInstance;
    private cache = new CacheManager<string, unknown>();

    private credentials: credentials = {
        cookie: undefined,
        csrf: undefined,
    };

    readonly LegacyAPI = {
        UsersV1: "https://users.roblox.com/v1",

        ThumbnailsV1: "https://thumbnails.roblox.com/v1",

        FriendsV1: "https://friends.roblox.com/v1",

        PresenceV1: "https://presence.roblox.com/v1",

        GroupsV1: "https://groups.roblox.com/v1",
        GroupsV2: "https://groups.roblox.com/v2",

        GamesV1: "https://games.roblox.com/v1",
        GamesV2: "https://games.roblox.com/v2",

        BadgesV1: "https://badges.roblox.com/v1",
        BadgesV2: "https://badges.roblox.com/v2",

        InventoryV1: "https://inventory.roblox.com/v1",
        InventoryV2: "https://inventory.roblox.com/v2",

        AccountSettingsV1: "https://accountsettings.roblox.com/v1",

        PremiumFeaturesV1: "https://premiumfeatures.roblox.com/v1",

        AuthV1: "https://auth.roblox.com/v1",
        AuthV2: "https://auth.roblox.com/v2",
        AuthV3: "https://auth.roblox.com/v3",

        AvatarV1: "https://avatar.roblox.com/v1",
        AvatarV2: "https://avatar.roblox.com/v2",
        AvatarV3: "https://avatar.roblox.com/v3",
    };

    constructor(axiosConfig: AxiosRequestConfig) {
        this.client = axios.create(axiosConfig);

        this.client.defaults.headers.common["Content-Type"] = "application/json";
        this.client.defaults.timeout = 2_500;
    }

    setCacheTimeout = (ms: number) => {
        this.cache.setTimeout(ms);
    };

    setCredentials = (credentials: { cookie?: string; key?: string }) => {
        this.credentials = { ...this.credentials, ...credentials };
    };

    async fetch<T = unknown>(
        method: HttpMethod,
        API: keyof typeof this.LegacyAPI,
        route: string,
        options: LegacyFetchOptions,
    ): Promise<T> {
        const URL = this.LegacyAPI[API] + route;

        if (options.useCache || options.useCache === undefined) {
            const cached = this.cache.getValues(URL);
            if (cached) return cached as T;
        }

        const response = await this.client.request({
            method: method,
            url: URL,
            data: options.body,
            params: options.params,
            headers: {
                "X-Csrf-Token": this.credentials.csrf,
                Cookie: this.credentials.cookie ? `.ROBLOSECURITY=${this.credentials.cookie}` : undefined,
            },
        });

        if (!this.credentials.csrf && response.headers["x-csrf-token"]) {
            this.credentials.csrf = response.headers["x-csrf-token"];

            if (response.status === 403) {
                return await this.fetch(method, API, route, options);
            }
        }

        if (method === "GET") this.cache.setValues(URL, response.data);

        return response.data;
    }

    async fetchList<T = unknown>(
        method: HttpMethod,
        API: keyof typeof this.LegacyAPI,
        route: string,
        options: LegacyListFetchOptions,
    ): Promise<T[]> {
        const data: T[] = [];
        let cursor = "";

        while (true) {
            try {
                const response = await this.fetch<PaginatedResponse<T>>(
                    method,
                    API,
                    `${route}?limit=${options.maxResults || 100}&cursor=${cursor}`,
                    options,
                );

                if (response?.data) {
                    data.push(...response.data);
                }

                if (!response.nextPageCursor || data.length >= options.maxResults) break;
                cursor = response.nextPageCursor;
            } catch (error) {
                if (error instanceof AxiosError && error.response?.status === 429) {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    continue;
                }
                throw error;
            }
        }

        return data;
    }
}
