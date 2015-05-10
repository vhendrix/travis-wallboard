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
    '$routeParams',
    function (
      $scope,
      twsettings,
      $travisWallboardService,
      DisplayFunctions,
      $interval,
      TravisRepos,
      TravisBuilds,
      routeParams
    ) {

      if ( angular.isDefined(routeParams.repo) ) {
        twsettings.data.setUsers([{isPrivate:'NO', name:routeParams.repo}]);
      }

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
      $scope.loadBuilds = function ($repos, $user) {
        angular.forEach(
          $repos, function (repo) {
            $scope.loadBuildsForRepo(repo, $user);
          }
        );
      };

      /**
       * Loads builds for a given repository and sets this to the scope.
       *
       * @param {Object} $repo
       */
      $scope.loadBuildsForRepo = function ($repo, $user) {
        var slug = $repo.slug.replace($user.name + '/', "");
        TravisBuilds.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getBuilds(
          {slug: slug}, function ($response) {
            $scope.builds[ $repo.id ] = $travisWallboardService.getBuildsForRepo(slug, $repo.id, $response);
          }
        );
      };

      /**
       * Load initial repos from the travis service.
       */
      $scope.loadRepos = function () {
        angular.forEach(
          twsettings.data.users,
          function ($user) {
            if ( !TW.helpers.isEmpty($user.name) ) {
              var resource = TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token);
              resource.getRepos(
                function (response) {
                  var newRepos = $travisWallboardService.getReposFromResponse(response);
                  $scope.repos = TW.helpers.mergeObjects($scope.repos, newRepos)  ;
                  $scope.loadBuilds(newRepos, $user);
                }
              );
            }
          }
        );
      };

      /**
       * Poll the repos to see if there are any changes.
       */
      $scope.pollRepos = function () {
        angular.forEach(
          twsettings.data.users,
          function ($user) {
            TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getRepos(
              function (response) {
                var $updatedRepos = $travisWallboardService.getUpdatedReposFromResponse($scope.repos, response);
                angular.forEach(
                  $updatedRepos, function ($repo) {
                    $scope.loadBuildsForRepo($repo, $user);
                  }
                );
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
