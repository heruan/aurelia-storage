"use strict";

System.register(["aurelia-dependency-injection", "aurelia-json"], function (_export, _context) {
    "use strict";

    var autoinject, JsonEncoder, JsonDecoder, _typeof, __decorate, __metadata, BrowserStorage;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaDependencyInjection) {
            autoinject = _aureliaDependencyInjection.autoinject;
        }, function (_aureliaJson) {
            JsonEncoder = _aureliaJson.JsonEncoder;
            JsonDecoder = _aureliaJson.JsonDecoder;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
            };

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            _export("BrowserStorage", BrowserStorage = function () {
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
                    this.getStorage().setItem(key, new JsonEncoder().encode({
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
            }());

            _export("BrowserStorage", BrowserStorage);

            _export("BrowserStorage", BrowserStorage = __decorate([autoinject, __metadata('design:paramtypes', [JsonDecoder])], BrowserStorage));
        }
    };
});