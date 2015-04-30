angular.module('travisWallBoard.controllers').controller(
  'MenuReposController',
  [
    '$scope',
    'twsettings',
    'DisplayFunctions',
    '$interval',
    'TravisWallboardService',
    'TravisRepos',
    function (
      $scope,
      twsettings,
      DisplayFunctions,
      $interval,
      $travisWallboardService,
      TravisRepos
    ) {
      // Instantiate an object to store your scope data in (Best Practices)

      $scope.displayFunctions = DisplayFunctions;
      $scope.repos = $scope.repos || {};

      $scope.setInitialBuilds = function () {
        angular.forEach(
          twsettings.data.users,
          function ($user) {
            if ( !TW.helpers.isEmpty($user.name) ) {
              TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getRepos(
                function (response) {
                  $scope.repos = TW.helpers.mergeObjects($scope.repos, $travisWallboardService.getReposFromResponse(response));

                  twsettings.data.repos = TW.helpers.mergeObjects(
                    $travisWallboardService.getReposForUsersFromResponse(
                      response,
                      $user
                    )
                  );
                }
              );
            }
          }
        );
      };
      $scope.setInitialBuilds();
    }
  ]
);
