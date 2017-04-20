"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var browser_storage_1 = require("./browser-storage");
var LocalStorage = (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalStorage.prototype.getStorage = function () {
        return localStorage;
    };
    return LocalStorage;
}(browser_storage_1.BrowserStorage));
exports.LocalStorage = LocalStorage;

//# sourceMappingURL=local-storage.js.map
