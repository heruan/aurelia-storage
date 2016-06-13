"use strict";

System.register(["./browser-storage"], function (_export, _context) {
    "use strict";

    var BrowserStorage, SessionStorage;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_browserStorage) {
            BrowserStorage = _browserStorage.BrowserStorage;
        }],
        execute: function () {
            _export("SessionStorage", SessionStorage = function (_BrowserStorage) {
                _inherits(SessionStorage, _BrowserStorage);

                function SessionStorage() {
                    _classCallCheck(this, SessionStorage);

                    return _possibleConstructorReturn(this, _BrowserStorage.apply(this, arguments));
                }

                SessionStorage.prototype.getStorage = function getStorage() {
                    return sessionStorage;
                };

                return SessionStorage;
            }(BrowserStorage));

            _export("SessionStorage", SessionStorage);
        }
    };
});