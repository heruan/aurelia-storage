"use strict";

System.register(["./browser-storage"], function (_export, _context) {
    "use strict";

    var BrowserStorage, LocalStorage;

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
            _export("LocalStorage", LocalStorage = function (_BrowserStorage) {
                _inherits(LocalStorage, _BrowserStorage);

                function LocalStorage() {
                    _classCallCheck(this, LocalStorage);

                    return _possibleConstructorReturn(this, _BrowserStorage.apply(this, arguments));
                }

                LocalStorage.prototype.getStorage = function getStorage() {
                    return localStorage;
                };

                return LocalStorage;
            }(BrowserStorage));

            _export("LocalStorage", LocalStorage);
        }
    };
});