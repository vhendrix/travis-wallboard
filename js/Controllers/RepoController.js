angular.module('travisWallBoard.controllers').controller(
  'ReposController',
  [ '$scope', 'twsettings', 'TravisWallboardService', 'DisplayFunctions', '$interval', 'TravisRepos', 'TravisBuilds', function (
    $scope,
    twsettings,
    $travisWallboardService,
    DisplayFunctions,
    $interval,
    TravisRepos,
    TravisBuilds
  ) {
    $scope.displayFunctions = DisplayFunctions;
    $scope.data = {};
    $scope.repos = $scope.repos || {};
    $scope.builds = $scope.builds || {};
    $scope.building = $scope.building || {};

    $scope.loadBuilds = function ($repos) {
      angular.forEach(
        $repos, function (repo) {
          $scope.loadBuildsForRepo(repo);
        }
      );
    };

    $scope.loadBuildsForRepo = function (repo) {
      var slug = repo.slug.replace(twsettings.data.slug + '/', "");
      TravisBuilds.getBuilds(
        {slug: slug}, function (response) {
          $scope.builds = $travisWallboardService.getBuildsForRepo(slug, repo, response);
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

    var pollTimer = $interval(
      $scope.pollRepos, 30000
    );

    $scope.$on(
      '$destroy', function () {
        $interval.cancel(pollTimer);
      }
    );
  }
  ]
);
