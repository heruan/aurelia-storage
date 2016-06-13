"use strict";

System.register(["./local-storage", "./session-storage"], function (_export, _context) {
    "use strict";

    var LocalStorage, SessionStorage;
    return {
        setters: [function (_localStorage) {
            LocalStorage = _localStorage.LocalStorage;
        }, function (_sessionStorage) {
            SessionStorage = _sessionStorage.SessionStorage;
        }],
        execute: function () {
            function configure(frameworkConfiguration, pluginConfiguration) {
                var container = frameworkConfiguration.container;
                container.registerSingleton(LocalStorage);
                container.registerSingleton(SessionStorage);
            }

            _export("configure", configure);

            _export("LocalStorage", LocalStorage);

            _export("SessionStorage", SessionStorage);
        }
    };
});