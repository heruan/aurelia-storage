"use strict";
var local_storage_1 = require("./local-storage");
exports.LocalStorage = local_storage_1.LocalStorage;
var session_storage_1 = require("./session-storage");
exports.SessionStorage = session_storage_1.SessionStorage;
function configure(frameworkConfiguration, pluginConfiguration) {
    var container = frameworkConfiguration.container;
    container.registerSingleton(local_storage_1.LocalStorage);
    container.registerSingleton(session_storage_1.SessionStorage);
}
exports.configure = configure;
//# sourceMappingURL=index.js.map