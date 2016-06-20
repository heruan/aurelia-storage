"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var browser_storage_1 = require("./browser-storage");
var SessionStorage = (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage() {
        _super.apply(this, arguments);
    }
    SessionStorage.prototype.getStorage = function () {
        return sessionStorage;
    };
    return SessionStorage;
}(browser_storage_1.BrowserStorage));
exports.SessionStorage = SessionStorage;
//# sourceMappingURL=session-storage.js.map