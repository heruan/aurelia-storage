"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_json_1 = require("aurelia-json");
var BrowserStorage = (function () {
    function BrowserStorage(jsonDecoder) {
        this.jsonDecoder = jsonDecoder;
    }
    BrowserStorage.prototype.get = function (key) {
        var data = this.getStorage().getItem(key);
        if (data == null) {
            return Promise.reject(key);
        }
        return Promise.resolve(this.jsonDecoder.decode(data)["item"]);
    };
    BrowserStorage.prototype.set = function (key, item) {
        this.getStorage().setItem(key, new aurelia_json_1.JsonEncoder().encode({
            "item": item
        }));
        return Promise.resolve(this);
    };
    BrowserStorage.prototype.remove = function (key) {
        var _this = this;
        return this.get(key).then(function (item) {
            _this.getStorage().removeItem(key);
            return item;
        });
    };
    BrowserStorage = __decorate([
        aurelia_dependency_injection_1.autoinject, 
        __metadata('design:paramtypes', [aurelia_json_1.JsonDecoder])
    ], BrowserStorage);
    return BrowserStorage;
}());
exports.BrowserStorage = BrowserStorage;
//# sourceMappingURL=browser-storage.js.map