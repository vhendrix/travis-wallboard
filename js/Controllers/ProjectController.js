angular.module('travisWallBoard.controllers').controller(
  'ProjectController',
  [
    '$scope',
    'twsettings',
    'TravisWallboardService',
    'DisplayFunctions',
    '$interval', 'md5',
    'TravisRepos',
    'TravisBuilds',
    'TravisBuild',
    '$routeParams',
    function (
      $scope,
      twsettings,
      $travisWallboardService,
      DisplayFunctions,
      $interval,
      md5,
      TravisRepos,
      TravisBuilds,
      TravisBuild,
      routeParams
    ) {
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

      $scope.loadBuildsForRepo = function () {
        var slug = routeParams.slug;

        TravisBuilds.getBuildsForProject(
          {slug: slug}, function (response) {
            $scope.builds = $travisWallboardService.getBuildsForProject(slug, response);
          }
        );
      };

      $scope.loadBuildsForRepo();

      var buildRepoTimer = $interval(
        $scope.loadBuildsForRepo, 30000
      );

      $scope.$on(
        '$destroy', function () {
          $interval.cancel(buildRepoTimer);
        }
      );
    }
  ]
);
