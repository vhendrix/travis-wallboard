'use strict';

angular.module('travisWallBoard.controllers').controller('SettingsController', ['$scope', 'twsettings', 'md5', 'TravisToken', function ($scope, twsettings, md5, TravisToken) {
  $scope.users = twsettings.data.users || [];

  $scope.submit = function () {
    twsettings.data.setUsers($scope.users);
  };

  $scope.remove = function (idx) {

    $scope.users.splice(idx, 1);
  };
  $scope.getToken = function () {
    TravisToken.getToken({ githubtoken: $scope.githubtoken }, function (response) {
      $scope.generatedtoken = response.access_token;
    });
  };

  $scope.githubtoken = null;
  $scope.generatedtoken = null;
}]);
//# sourceMappingURL=SettingsController.js.map
