"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionStorage = exports.LocalStorage = undefined;
exports.configure = configure;

var _localStorage = require("./local-storage");

var _sessionStorage = require("./session-storage");

function configure(frameworkConfiguration, pluginConfiguration) {
    var container = frameworkConfiguration.container;
    container.registerSingleton(_localStorage.LocalStorage);
    container.registerSingleton(_sessionStorage.SessionStorage);
}
exports.LocalStorage = _localStorage.LocalStorage;
exports.SessionStorage = _sessionStorage.SessionStorage;