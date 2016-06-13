import {StorageEngine} from "./storage-engine";
import {BrowserStorage} from "./browser-storage";

export class LocalStorage extends BrowserStorage implements StorageEngine {

    protected getStorage() {
        return localStorage;
    }

}
