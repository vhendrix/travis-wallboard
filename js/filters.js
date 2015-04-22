'use strict';

/* Filters */

angular.module('travisWallBoard.filters', []).
    filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }])
    .filter('orderObjectBy', function () {
        return function (input, attribute) {
            if (!angular.isObject(input)) return input;

            var array = [];
            for (var objectKey in input) {
                array.push(input[objectKey]);
            }

            array.sort(function (a, b) {
                a = parseInt(a[attribute]);
                b = parseInt(b[attribute]);
                return a - b;
            });
            return array;
        }
    }).filter('orderObjectByReverse', function () {
        return function (input, attribute) {
            if (!angular.isObject(input)) return input;

            var array = [];
            for (var objectKey in input) {
                array.push(input[objectKey]);
            }

            array.sort(function (a, b) {

                var dta = Date.parse(a[attribute]);
                var dtb = Date.parse(b[attribute]);

                if (dta < dtb) {
                    return 1
                } else if(dta == dtb) {
                    return 0
                } else {
                    return -1;
                }
            });
            return array;
        }
    });
