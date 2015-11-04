"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = (function () {
    function Helper() {
        _classCallCheck(this, Helper);

        this.useLocalStorage = null;
    }

    /**
     * Checks if the given object is empty or not.
     *
     * @param obj
     * @returns {boolean}
     */

    _createClass(Helper, [{
        key: "isEmpty",
        value: function isEmpty(obj) {
            return typeof obj === 'undefined' || obj === null || obj === "" || obj === 0;
        }

        /**
         * Merge the attributes of two obj  ects.
         *
         * @param obj1
         * @param obj2
         * @returns {{}}
         */

    }, {
        key: "mergeObjects",
        value: function mergeObjects(obj1, obj2) {
            var obj3 = {};
            for (var attrname1 in obj1) {
                obj3[attrname1] = obj1[attrname1];
            }
            for (var attrname2 in obj2) {
                obj3[attrname2] = obj2[attrname2];
            }
            return obj3;
        }

        /**
         * Gets a cookie for the given name.
         *
         * @param name
         * @returns {*}
         */

    }, {
        key: "getCookie",
        value: function getCookie(name) {
            JSON.parse($.cookie(name));
        }

        /**
         * Sets a cookie to the given name.
         *
         * @param name
         * @param value
         * @param days
         */

    }, {
        key: "setCookie",
        value: function setCookie(name, value, days) {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            $.cookie(name, value, { expires: days, path: '/' });
        }
    }, {
        key: "setToLocalStorage",
        value: function setToLocalStorage(name, value) {
            console.debug(value);
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            window.localStorage.setItem(name, value);
        }
    }, {
        key: "getFromLocalStorage",
        value: function getFromLocalStorage(name) {
            var data = window.localStorage.getItem(name);

            try {
                return JSON.parse(data);
            } catch (e) {
                return data;
            }
        }
    }, {
        key: "getPersistentValue",
        value: function getPersistentValue(name) {
            if (this.hasLocalStorage()) {
                return this.getFromLocalStorage(name);
            } else {
                return this.getCookie(name);
            }
        }
    }, {
        key: "setPersistentValue",
        value: function setPersistentValue(name, value) {
            if (this.hasLocalStorage()) {
                return this.setToLocalStorage(name, value);
            } else {
                return this.setCookie(name, value, 700);
            }
        }
    }, {
        key: "hasLocalStorage",
        value: function hasLocalStorage() {
            return typeof Storage !== "undefined";
        }
    }]);

    return Helper;
})();
//# sourceMappingURL=helpers.js.map
