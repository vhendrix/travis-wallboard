angular.module('travisWallBoard.controllers').controller(
  'SettingsController',
  [
    '$scope',
    'twsettings',
    'md5',
    'TravisToken',
    function ($scope, twsettings, md5, TravisToken) {
      $scope.users = twsettings.data.users || [];

      $scope.submit = function () {
        twsettings.data.setUsers($scope.users);
      };

      $scope.getToken = function () {
        TravisToken.getToken(
          {githubtoken: $scope.githubtoken}, function (response) {
            $scope.token = response.access_token;
            twsettings.data.token = $scope.token;
          }
        );
      };

      $scope.githubtoken = null;
    }
  ]
);
