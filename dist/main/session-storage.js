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
var SessionStorage = (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SessionStorage.prototype.getStorage = function () {
        return sessionStorage;
    };
    return SessionStorage;
}(browser_storage_1.BrowserStorage));
exports.SessionStorage = SessionStorage;

//# sourceMappingURL=session-storage.js.map
