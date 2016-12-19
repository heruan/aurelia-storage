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
var type_binder_1 = require("type-binder");
var aurelia_json_1 = require("aurelia-json");
var BrowserStorage = (function () {
    function BrowserStorage(typeBinder, jsonDecoder, jsonEncoder) {
        if (typeBinder === void 0) { typeBinder = new type_binder_1.TypeBinder(); }
        if (jsonDecoder === void 0) { jsonDecoder = new aurelia_json_1.JsonDecoder(); }
        if (jsonEncoder === void 0) { jsonEncoder = new aurelia_json_1.JsonEncoder(); }
        this.typeBinder = typeBinder;
        this.jsonDecoder = jsonDecoder;
        this.jsonEncoder = jsonEncoder;
    }
    BrowserStorage.prototype.get = function (key, type) {
        var _this = this;
        var generics = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            generics[_i - 2] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            var data = _this.getStorage().getItem(key);
            if (data === null) {
                reject(key);
            }
            else {
                var wrapper = JSON.parse(data);
                if (type) {
                    resolve((_a = _this.typeBinder).bind.apply(_a, [wrapper.item, type].concat(generics)));
                }
                else {
                    resolve(wrapper.item);
                }
            }
            var _a;
        });
    };
    BrowserStorage.prototype.set = function (key, item) {
        this.getStorage().setItem(key, this.jsonEncoder.encode({ item: item }));
        return Promise.resolve(item);
    };
    BrowserStorage.prototype.remove = function (key) {
        this.getStorage().removeItem(key);
        return Promise.resolve(this);
    };
    return BrowserStorage;
}());
BrowserStorage = __decorate([
    aurelia_dependency_injection_1.autoinject,
    __metadata("design:paramtypes", [type_binder_1.TypeBinder, aurelia_json_1.JsonDecoder, aurelia_json_1.JsonEncoder])
], BrowserStorage);
exports.BrowserStorage = BrowserStorage;

//# sourceMappingURL=browser-storage.js.map
