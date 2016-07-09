import { JsonDecoder } from "aurelia-json";
import { StorageEngine } from "./storage-engine";
export declare abstract class BrowserStorage implements StorageEngine {
    private jsonDecoder;
    constructor(jsonDecoder: JsonDecoder);
    get<T>(key: string): Promise<T>;
    set<T>(key: string, item: T): Promise<StorageEngine>;
    remove<T>(key: string): Promise<T>;
    protected abstract getStorage(): Storage;
}
