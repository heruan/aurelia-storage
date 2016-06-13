var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject } from "aurelia-dependency-injection";
import { JsonEncoder, JsonDecoder } from "aurelia-json";
export let BrowserStorage = class BrowserStorage {
    constructor(jsonDecoder) {
        this.jsonDecoder = jsonDecoder;
    }
    get(key) {
        let data = this.getStorage().getItem(key);
        if (data == null) {
            return Promise.reject(key);
        }
        return Promise.resolve(this.jsonDecoder.decode(data)["item"]);
    }
    set(key, item) {
        this.getStorage().setItem(key, new JsonEncoder().encode({
            "item": item
        }));
        return Promise.resolve(this);
    }
    remove(key) {
        return this.get(key).then(item => {
            this.getStorage().removeItem(key);
            return item;
        });
    }
};
BrowserStorage = __decorate([
    autoinject, 
    __metadata('design:paramtypes', [JsonDecoder])
], BrowserStorage);
//# sourceMappingURL=browser-storage.js.map