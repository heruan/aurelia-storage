import { JsonDecoder } from "aurelia-json";
import { StorageEngine } from "./storage-engine";
export declare abstract class BrowserStorage implements StorageEngine {
    private jsonDecoder;
    constructor(jsonDecoder: JsonDecoder);
    get(key: string): Promise<any>;
    set(key: string, item: any): Promise<StorageEngine>;
    remove(key: string): Promise<any>;
    protected abstract getStorage(): Storage;
}
