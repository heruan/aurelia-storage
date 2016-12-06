import { TypeBinder } from "type-binder";
import { JsonEncoder, JsonDecoder } from "aurelia-json";
import { StorageEngine } from "./storage-engine";
export declare abstract class BrowserStorage implements StorageEngine {
    private typeBinder;
    private jsonDecoder;
    private jsonEncoder;
    constructor(typeBinder?: TypeBinder, jsonDecoder?: JsonDecoder, jsonEncoder?: JsonEncoder);
    get<T>(key: string, type?: new (...args) => T, ...generics: any[]): Promise<T>;
    set<T>(key: string, item: T): Promise<T>;
    remove<T>(key: string): Promise<StorageEngine>;
    protected abstract getStorage(): Storage;
}
