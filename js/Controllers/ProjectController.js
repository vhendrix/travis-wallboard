angular.module('travisWallBoard.controllers').controller(
  'ProjectController',
  [
    '$scope',
    'twsettings',
    'TravisWallboardService',
    'DisplayFunctions',
    '$interval',
    'TravisBuilds',
    '$routeParams',
    function (
      $scope,
      twsettings,
      $travisWallboardService,
      DisplayFunctions,
      $interval,
      TravisBuilds,
      routeParams
    ) {
      errors = 0;

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

      $scope.handleErrors = function(response) {

        if (typeof errors === "undefined" ) {
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
        var userData = twsettings.data.repos[ routeParams.user + '/' + routeParams.slug ];

        TravisBuilds.resource(
            userData.name,
            twsettings.data.getUri(userData),
            userData.isPrivate,
            userData.token
        ).getBuildsForProject(
          {slug: slug}, function (response) {
            $scope.builds = $travisWallboardService.getBuildsForProject(slug, response);
          },
          $scope.handleErrors
        );
      };

      if ( twsettings.data.repos[ routeParams.user + '/' + routeParams.slug ] ) {
        $scope.loadBuildsForRepo();
      }

      var initialBuildRepoTimer = $interval(
        function() {
          if ( twsettings.data.repos[ routeParams.user + '/' + routeParams.slug ] ) {
            $scope.loadBuildsForRepo();
            $interval.cancel(initialBuildRepoTimer);
          }
        },
        2000
      );

      var buildRepoTimer = $interval(
        $scope.loadBuildsForRepo, 3000
      );

      $scope.$on(
        '$destroy', function () {
          $interval.cancel(buildRepoTimer);
        }
      );
    }
  ]
);
