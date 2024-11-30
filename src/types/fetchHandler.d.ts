import type { AxiosRequestConfig } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD" | "CONNECT" | "TRACE";

export type FetchOptions = {
    params: AxiosRequestConfig["params"];
    body: AxiosRequestConfig["data"];
    useCache: boolean;
};

export type ListFetchOptions = FetchOptions & {
    maxResults: number;
    perPage?: 10 | 25 | 50 | 100;
};
