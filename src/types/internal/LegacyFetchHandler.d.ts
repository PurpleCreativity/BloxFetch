import type { AxiosRequestConfig } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD" | "CONNECT" | "TRACE";

export type PaginatedResponse<T> = {
    data: T[];
    nextPageCursor?: string;
};

export type LegacyFetchOptions = {
    params: AxiosRequestConfig["params"];
    body: AxiosRequestConfig["data"];
    useCache: boolean;
};

export type LegacyListFetchOptions = LegacyFetchOptions & {
    maxResults: number;
    perPage: 10 | 25 | 50 | 100;
};
