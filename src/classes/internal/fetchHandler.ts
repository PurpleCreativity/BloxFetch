import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios";
import type { FetchOptions, HttpMethod, ListFetchOptions } from "../../types/fetchHandler.js";
import CacheManager from "./cacheManager.js";

type credentials = {
    cookie?: string;
    csrf?: string;
    key?: string;
};

export default class FetchHandler {
    private client: AxiosInstance;
    private cache = new CacheManager<string, unknown>();

    private credentials: credentials = {
        cookie: undefined,
        csrf: undefined,
    };

    readonly LegacyAPI = {
        Users: "https://users.roblox.com/v1",
        Thumbnails: "https://thumbnails.roblox.com/v1",
        Friends: "https://friends.roblox.com/v1",
        Presence: "https://presence.roblox.com/v1",

        Groups: "https://groups.roblox.com/v1",
        GroupsV2: "https://groups.roblox.com/v2",

        Games: "https://games.roblox.com/v1",
        GamesV2: "https://games.roblox.com/v2",

        Badges: "https://badges.roblox.com/v1",
        BadgesV2: "https://badges.roblox.com/v2",

        Inventory: "https://inventory.roblox.com/v1",
        InventoryV2: "https://inventory.roblox.com/v2",

        AccountSettings: "https://accountsettings.roblox.com/v1",
        PremiumFeatures: "https://premiumfeatures.roblox.com/v1",

        Auth: "https://auth.roblox.com/v1",
        AuthV2: "https://auth.roblox.com/v2",
        AuthV3: "https://auth.roblox.com/v3",

        Avatar: "https://avatar.roblox.com/v1",
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

    setCredentials = (credentials: { cookie?: string; csrf?: string }) => {
        this.credentials = { ...this.credentials, ...credentials };
    };

    fetchLegacy = async (
        method: HttpMethod,
        API: keyof typeof this.LegacyAPI,
        route: string,
        options: FetchOptions,
    ): Promise<unknown> => {
        const URL = this.LegacyAPI[API] + route;

        if (options.useCache || options.useCache === undefined) {
            const cached = this.cache.getValues(URL);
            if (cached) return cached;
        }

        const response = await this.client.request({
            method: method,
            url: URL,
            data: options.body,
            params: options.params,
            headers: {
                "X-Csrf-Token": this.credentials.csrf || "",
                Cookie: this.credentials.cookie ? `.ROBLOSECURITY=${this.credentials.cookie}` : "",
            },
        });

        if (!this.credentials.csrf && response.headers["x-csrf-token"]) {
            this.setCredentials({ csrf: response.headers["x-csrf-token"] });

            if (response.status === 403) {
                return await this.fetchLegacy(method, API, route, options);
            }
        }

        if (method === "GET") this.cache.setValues(URL, response.data);

        return response.data;
    };

    fetchLegacyList = async (
        method: HttpMethod,
        API: keyof typeof this.LegacyAPI,
        route: string,
        options: ListFetchOptions,
    ): Promise<unknown> => {
        const data = [];
        let cursor = "";

        while (true) {
            try {
                const response = (await this.fetchLegacy(
                    method,
                    API,
                    `${route}?limit=${options.maxResults || 100}&cursor=${cursor}`,
                    options,
                )) as {
                    data: unknown[];
                    nextPageCursor?: string;
                };
                if (!response || !response.data) continue;
                if (response.data) data.push(...response.data);

                if (!response.nextPageCursor || data.length >= options.maxResults) break;
                cursor = response.nextPageCursor;
            } catch (error) {
                if (error instanceof AxiosError) {
                    if (error.status === 429) {
                        await new Promise((resolve) => setTimeout(resolve, 1000));
                        continue;
                    }
                }
                throw error;
            }
        }

        return data;
    };
}
