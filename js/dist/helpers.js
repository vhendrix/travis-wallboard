"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = (function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, [{
        key: "isEmpty",

        /**
         * Checks if the given object is empty or not.
         *
         * @param obj
         * @returns {boolean}
         */
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
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }

                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
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
            var expires;

            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = "; expires=" + date.toGMTString();
            } else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    }]);

    return Helper;
})();
//# sourceMappingURL=helpers.js.map
