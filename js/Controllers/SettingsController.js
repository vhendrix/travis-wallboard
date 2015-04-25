angular.module('travisWallBoard.controllers').controller(
  'SettingsController',
  [
    '$scope',
    'md5',
    'TravisToken',
    function ($scope, md5, TravisToken) {
      // Instantiate an object to store your scope data in (Best Practices)
      $scope.createCookie = function (name, value, days) {
        var expires;

        if ( days ) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toGMTString();
        }
        else {
          expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
      };

      $scope.readCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[ i ];
          while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
          }

          if ( c.indexOf(nameEQ) === 0 ) {
            return c.substring(nameEQ.length, c.length);
          }
        }
        return null;
      };

      $scope.submit = function () {
        $scope.createCookie('repo', $scope.repo, 700);
        $scope.createCookie('token', $scope.token, 700);
        token = $scope.token;
        slugstart = $scope.repo;
      };

      $scope.getToken = function () {
        TravisToken.getToken(
          {githubtoken: $scope.githubtoken}, function (response) {
            $scope.token = response.access_token;
            $scope.createCookie('token', $scope.token, 700);
            token = $scope.token;
          }
        );
      };

      $scope.token = $scope.readCookie('token');
      $scope.repo = $scope.readCookie('repo');
      $scope.githubtoken = null;
    }
  ]
);
