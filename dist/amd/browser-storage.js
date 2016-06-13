define(["exports", "aurelia-dependency-injection", "aurelia-json"], function (exports, _aureliaDependencyInjection, _aureliaJson) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.BrowserStorage = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var BrowserStorage = exports.BrowserStorage = function () {
        function BrowserStorage(jsonDecoder) {
            _classCallCheck(this, BrowserStorage);

            this.jsonDecoder = jsonDecoder;
        }

        BrowserStorage.prototype.get = function get(key) {
            var data = this.getStorage().getItem(key);
            if (data == null) {
                return Promise.reject(key);
            }
            return Promise.resolve(this.jsonDecoder.decode(data)["item"]);
        };

        BrowserStorage.prototype.set = function set(key, item) {
            this.getStorage().setItem(key, new _aureliaJson.JsonEncoder().encode({
                "item": item
            }));
            return Promise.resolve(this);
        };

        BrowserStorage.prototype.remove = function remove(key) {
            var _this = this;

            return this.get(key).then(function (item) {
                _this.getStorage().removeItem(key);
                return item;
            });
        };

        return BrowserStorage;
    }();
    exports.BrowserStorage = BrowserStorage = __decorate([_aureliaDependencyInjection.autoinject, __metadata('design:paramtypes', [_aureliaJson.JsonDecoder])], BrowserStorage);
});