import { BrowserStorage } from "./browser-storage";
export class LocalStorage extends BrowserStorage {
    getStorage() {
        return localStorage;
    }
}
//# sourceMappingURL=local-storage.js.map