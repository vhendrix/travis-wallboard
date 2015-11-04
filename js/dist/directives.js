'use strict';

(function () {
  'use strict'

  /* Directives */
  ;
  angular.module('travisWallBoard.directives', []).directive('travisBuild', function () {
    return {
      templateUrl: function templateUrl(elem, attr) {
        return 'partials/build-' + attr.type + '.html';
      }
    };
  }).directive('travisBuildModal', function () {
    return {
      templateUrl: function templateUrl() {
        return 'partials/build-recent-failed.html';
      }
    };
  }).directive('travisServerError', function () {
    return {
      templateUrl: function templateUrl() {
        return 'partials/server-error.html';
      }
    };
  });
})();
//# sourceMappingURL=directives.js.map
