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

      $scope.toggleHidden = function () {
        $('.navbar').toggleClass('hidden');
      };

      function merge_options(obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) {
          obj3[ attrname ] = obj1[ attrname ];
        }
        for (var attrname in obj2) {
          obj3[ attrname ] = obj2[ attrname ];
        }
        return obj3;
      };

      $scope.setInitialBuilds = function () {
        angular.forEach(
          twsettings.data.users,
          function ($user) {
            TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getRepos(
              function (response) {
                $scope.repos = merge_options($scope.repos, $travisWallboardService.getReposFromResponse(response));
                console.debug($scope.repos);
              }
            );
          }
        );
      };
      $scope.setInitialBuilds();
    }
  ]
);
