/**
 * travisWallBoard,controller App
 *
 * Contains the controllers we need to get our data and send it to the views.
 */
angular.module('travisWallBoard.controllers').controller(
  'ReposController',
  [
    '$scope',
    'twsettings',
    'TravisWallboardService',
    'DisplayFunctions',
    '$interval',
    'TravisRepos',
    'TravisBuilds',
    function (
      $scope,
      twsettings,
      $travisWallboardService,
      DisplayFunctions,
      $interval,
      TravisRepos,
      TravisBuilds
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

      /**
       * Loads the builds for the given repos
       *
       * @param {Object} $repos Object with all repos.
       */
      $scope.loadBuilds = function ($repos) {
        angular.forEach(
          $repos, function (repo) {
            $scope.loadBuildsForRepo(repo);
          }
        );
      };

      /**
       * Loads builds for a given repository and sets this to the scope.
       *
       * @param {Object} $repo
       */
      $scope.loadBuildsForRepo = function ($repo) {
        var slug = $repo.slug.replace(twsettings.data.slug + '/', "");
        TravisBuilds.getBuilds(
          {slug: slug}, function ($response) {
            $scope.builds[ $repo.id ] = $travisWallboardService.getBuildsForRepo(slug, $repo.id, $response);
          }
        );
      };

      /**
       * Load initial repos from the travis service.
       */
      $scope.loadRepos = function () {
        TravisRepos.getRepos(
          function (response) {
            $scope.repos = $travisWallboardService.getReposFromResponse(response);

            $scope.loadBuilds($scope.repos);
          }
        );
      };

      /**
       * Poll the repos to see if there are any changes.
       */
      $scope.pollRepos = function () {
        TravisRepos.getRepos(
          function (response) {
            var $updatedRepos = $travisWallboardService.getUpdatedReposFromResponse($scope.repos, response);

            angular.forEach(
              $updatedRepos, function ($repo) {
                $scope.loadBuildsForRepo($repo);
              }
            );
          }
        );
      };

      $scope.loadRepos();

      //Start a interval timer to keep
      var pollTimer = $interval(
        $scope.pollRepos, 30000
      );

      // When the controller gets destroyed also remove the timer otherwise we will
      // keep spamming the api.
      $scope.$on(
        '$destroy', function () {
          $interval.cancel(pollTimer);
        }
      );
    }
  ]
);
