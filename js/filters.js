(function () {
  'use strict';
  /* Filters */

  angular.module('travisWallBoard.filters', [])
    .filter(
    'stateClass', function () {
      return function (state) {
        var blockClass = '';
        if ( state === 'failed' ) {
          blockClass = 'btn-danger text-danger';
        } else if ( state === 'passed' ) {
          blockClass = 'btn-success text-success';
        } else if ( state === 'started' || state === 'received' || state === 'created' ) {
          blockClass = 'btn-info text-info';
        } else {
          blockClass = 'btn-warning';
        }

        return blockClass;
      };
    }
  ).filter(
    'orderObjectByReverse', function () {
      return function (input, attribute) {
        if ( !angular.isObject(input) ) {
          return input;
        }

        var array = [];
        for (var objectKey in input) {
          array.push(input[ objectKey ]);
        }

        array.sort(
          function (a, b) {

            var dta = Date.parse(a[ attribute ]);
            var dtb = Date.parse(b[ attribute ]);

            if ( dta < dtb ) {
              return 1;
            } else if ( dta === dtb ) {
              return 0;
            } else {
              return -1;
            }
          }
        );
        return array;
      };
    }
  );
})();
