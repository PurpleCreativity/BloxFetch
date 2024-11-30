import FetchHandler from "./classes/internal/fetchHandler.js";

export default class BloxFetch {
    readonly fetchHandler: FetchHandler;

    readonly legacy: {};

    constructor() {
        this.fetchHandler = new FetchHandler({});
    }
}
