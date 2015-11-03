angular.module('travisWallBoard.controllers').controller('MenuReposController', ['$scope', 'twsettings', 'DisplayFunctions', '$interval', 'TravisWallboardService', 'TravisRepos', '$routeParams', function ($scope, twsettings, DisplayFunctions, $interval, $travisWallboardService, TravisRepos, routeParams) {
  // Instantiate an object to store your scope data in (Best Practices)
  if (angular.isDefined(routeParams.repo)) {
    twsettings.data.setUsers([{ isPrivate: 'NO', name: routeParams.repo }]);
  }

  $scope.displayFunctions = DisplayFunctions;
  $scope.repos = $scope.repos || {};

  $scope.setInitialBuilds = function () {
    angular.forEach(twsettings.data.users, function ($user) {
      if (!TW.helpers.isEmpty($user.name)) {
        TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getRepos(function (response) {
          $scope.repos = TW.helpers.mergeObjects($scope.repos, $travisWallboardService.getReposFromResponse(response, $user));

          twsettings.data.repos = TW.helpers.mergeObjects(twsettings.data.repos, $travisWallboardService.getReposForUsersFromResponse(response, $user));
        });
      }
    });
  };
  $scope.setInitialBuilds();
}]);
//# sourceMappingURL=MenuController.js.map
