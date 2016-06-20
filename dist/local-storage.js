"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var browser_storage_1 = require("./browser-storage");
var LocalStorage = (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage() {
        _super.apply(this, arguments);
    }
    LocalStorage.prototype.getStorage = function () {
        return localStorage;
    };
    return LocalStorage;
}(browser_storage_1.BrowserStorage));
exports.LocalStorage = LocalStorage;
//# sourceMappingURL=local-storage.js.map