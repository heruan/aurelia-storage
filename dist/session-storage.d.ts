import { StorageEngine } from "./storage-engine";
import { BrowserStorage } from "./browser-storage";
export declare class SessionStorage extends BrowserStorage implements StorageEngine {
    protected getStorage(): Storage;
}
