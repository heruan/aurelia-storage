import {autoinject} from "aurelia-dependency-injection"
import {JsonEncoder, JsonDecoder} from "aurelia-json";
import {StorageEngine} from "./storage-engine";

@autoinject
export abstract class BrowserStorage implements StorageEngine {

    private jsonDecoder: JsonDecoder;

    public constructor(jsonDecoder: JsonDecoder) {
        this.jsonDecoder = jsonDecoder;
    }

    public get<T>(key: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            let data = this.getStorage().getItem(key);
            if (data === null) {
                reject(key);
            } else {
                resolve(this.jsonDecoder.decode(data)["item"]);
            }
        });
    }

    public set<T>(key: string, item: T): Promise<StorageEngine> {
        this.getStorage().setItem(key, new JsonEncoder().encode({
            "item": item
        }));
        return Promise.resolve(this);
    }

    public remove<T>(key: string): Promise<T> {
        return this.get<T>(key).then(item => {
            this.getStorage().removeItem(key);
            return item;
        });
    }

    protected abstract getStorage(): Storage;

}
