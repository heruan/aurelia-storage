import { autoinject } from "aurelia-dependency-injection"
import { TypeBinder } from "type-binder";
import { JsonEncoder, JsonDecoder } from "aurelia-json";
import { StorageEngine } from "./storage-engine";

@autoinject
export abstract class BrowserStorage implements StorageEngine {

    private typeBinder: TypeBinder;

    private jsonDecoder: JsonDecoder;

    private jsonEncoder: JsonEncoder;

    public constructor(typeBinder: TypeBinder = new TypeBinder(), jsonDecoder: JsonDecoder = new JsonDecoder(), jsonEncoder: JsonEncoder = new JsonEncoder()) {
        this.typeBinder = typeBinder;
        this.jsonDecoder = jsonDecoder;
        this.jsonEncoder = jsonEncoder;
    }

    public get<T>(key: string, type?: new(...args) => T, ...generics: any[]): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            let data = this.getStorage().getItem(key);
            if (data === null) {
                reject(key);
            } else {
                let wrapper = JSON.parse(data);
                if (type) {
                    resolve(this.typeBinder.bind(wrapper.item, type, ...generics));
                } else {
                    resolve(wrapper.item);
                }
            }
        });
    }

    public set<T>(key: string, item: T): Promise<T> {
        this.getStorage().setItem(key, this.jsonEncoder.encode({ item }));
        return Promise.resolve(item);
    }

    public remove<T>(key: string): Promise<StorageEngine> {
        this.getStorage().removeItem(key);
        return Promise.resolve(this);
    }

    protected abstract getStorage(): Storage;

}
