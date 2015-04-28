angular.module('travisWallBoard.controllers').controller(
  'MenuReposController',
  [
    '$scope',
    'DisplayFunctions',
    '$interval',
    'TravisWallboardService',
    'TravisRepos',
    function (
      $scope,
      DisplayFunctions,
      $interval,
      $travisWallboardService,
      TravisRepos
    ) {
      // Instantiate an object to store your scope data in (Best Practices)

      $scope.displayFunctions = DisplayFunctions;
      $scope.repos = $scope.repos || {};

      $scope.toggleHidden = function () {
        $('.navbar').toggleClass('hidden');
      };

      $scope.setInitialBuilds = function () {
        TravisRepos.getRepos(
          function (response) {
            $scope.repos = $travisWallboardService.getReposFromResponse(response);
          }
        );
      };

      $scope.setInitialBuilds();
    }
  ]
);
