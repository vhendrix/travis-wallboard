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
    'getSlugName', [
      'twsettings',
      function (twsettings) {
        return function (string) {
          var slug = string.replace(twsettings.data.slug + '/', "");
          return slug;
        };
      }
    ]
  ).filter(
    'timeAgo', function () {
      return function (dateString) {
        var dt = new Date(Date.parse(dateString));
        var now = new Date();

        var diff = now.getTime() - dt.getTime();

        var minutes = Math.floor((diff / (60000)));

        if ( isNaN(minutes) ) {
          return 1 + ' Seconds';
        } else if ( minutes === 0 )
        {
          var seconds = Math.floor((diff / (1000)));
          return seconds + ' Seconds';
        } else if ( minutes > 1440 ) {
          return Math.floor((diff / 86400000)) + ' Days';
        } else if ( minutes > 60 ) {
          var hours = Math.floor((diff / 3600000));
          minutes = Math.floor(((diff % 3600000) / 60000));
          return hours + ' Hours and ' + minutes + ' Minutes';
        } else {
          return minutes + ' Minutes';
        }
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
})
();
