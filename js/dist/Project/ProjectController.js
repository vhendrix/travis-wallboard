angular.module('travisWallBoard.controllers').controller('ProjectController', ['$scope', 'twsettings', 'TravisWallboardService', 'DisplayFunctions', '$interval', 'TravisBuilds', '$routeParams', function ($scope, twsettings, $travisWallboardService, DisplayFunctions, $interval, TravisBuilds, routeParams) {
  // Standard interval 1 second (1000 milisecond).
  var interval = 1000;

  var errors = 0;

  /**
   * Holds the display funcions from the service.
   * @todo see if i can call this direcly from the view one way or the other.
   * @type DisplayFunctions
   */
  $scope.displayFunctions = DisplayFunctions;
  /**
   * Holds all active repositories the user has available in Travis.
   *
   * @type {Object}
   */
  $scope.repos = {};

  /**
   * Holds the last builds per repo.
   *
   * @type {Object}
   */
  $scope.builds = {};

  $scope.errorScreen = false;

  /**
   * Handle errors to be able to show error screen.
   */
  $scope.handleErrors = function () {

    if (typeof errors === "undefined") {
      errors = 0;
      $scope.errorScreen = false;
    } else {
      errors += 1;
    }
    if (errors > 10) {
      $scope.errorScreen = true;
    }
  };

  $scope.loadBuildsForRepo = function () {
    var slug = routeParams.slug;
    var $user = twsettings.data.repos[routeParams.user + '/' + routeParams.slug];
    var timer = $user.polling || 30;
    if (typeof $user.lastupdate === "undefined" || $user.lastupdate >= timer * interval) {
      $user.lastupdate = 0;
      $scope.loadBuild($user, slug);
    } else {
      $user.lastupdate += interval;
    }
  };

  $scope.loadBuild = function ($user, slug) {
    TravisBuilds.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getBuildsForProject({ slug: slug }, function (response) {
      $scope.builds = $travisWallboardService.getBuildsForProject(slug, response);
    }, $scope.handleErrors);
  };

  if (twsettings.data.repos[routeParams.user + '/' + routeParams.slug]) {
    $scope.loadBuildsForRepo();
  }

  var initialBuildRepoTimer = $interval(function () {
    if (twsettings.data.repos[routeParams.user + '/' + routeParams.slug]) {
      $scope.loadBuildsForRepo();
      $interval.cancel(initialBuildRepoTimer);
    }
  }, 2000);

  var buildRepoTimer = $interval($scope.loadBuildsForRepo, interval);

  $scope.$on('$destroy', function () {
    $interval.cancel(buildRepoTimer);
  });
}]);
//# sourceMappingURL=ProjectController.js.map
