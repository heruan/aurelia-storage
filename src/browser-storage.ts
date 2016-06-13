import {autoinject} from "aurelia-dependency-injection"
import {JsonEncoder, JsonDecoder} from "aurelia-json";
import {StorageEngine} from "./storage-engine";

@autoinject
export abstract class BrowserStorage implements StorageEngine {

    private jsonDecoder: JsonDecoder;

    public constructor(jsonDecoder: JsonDecoder) {
        this.jsonDecoder = jsonDecoder;
    }
    
    public get(key: string): Promise<any> {
        let data = this.getStorage().getItem(key);
        if (data == null) {
            return Promise.reject(key);
        }
        return Promise.resolve(this.jsonDecoder.decode(data)["item"]);
    }

    public set(key: string, item: any): Promise<StorageEngine> {
        this.getStorage().setItem(key, new JsonEncoder().encode({
            "item": item
        }));
        return Promise.resolve(this);
    }

    public remove(key: string): Promise<any> {
        return this.get(key).then(item => {
            this.getStorage().removeItem(key);
            return item;
        });
    }

    protected abstract getStorage(): Storage;

}
