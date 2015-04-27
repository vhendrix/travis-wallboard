(function () {
  'use strict';

  /* Directives */
  angular.module('travisWallBoard.directives', []).directive(
    'travisBuild', function () {
      return {
        templateUrl: function (elem, attr) {
          return 'partials/build-' + attr.type + '.html';
        }
      };
    }
  );
})();
