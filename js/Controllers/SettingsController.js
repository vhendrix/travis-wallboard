angular.module('travisWallBoard.controllers').controller(
  'SettingsController',
  [
    '$scope',
    'twsettings',
    'md5',
    'TravisToken',
    function ($scope, twsettings, md5, TravisToken) {
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
        $scope.createCookie('repo', $scope.repo);
        $scope.createCookie('token', $scope.token);
        $scope.createCookie('private', $scope.private);
        twsettings.data.token = $scope.token;
        twsettings.data.slug = $scope.repo;
        twsettings.data.private = $scope.private;
        window.location.reload();
      };

      $scope.getToken = function () {
        TravisToken.getToken(
          {githubtoken: $scope.githubtoken}, function (response) {
            $scope.token = response.access_token;
            $scope.createCookie('token', $scope.token);
            twsettings.data.token = $scope.token;
            window.location.reload();
          }
        );
      };

      $scope.token = $scope.readCookie('token');
      $scope.repo = $scope.readCookie('repo');
      $scope.private = $scope.readCookie('private');
      $scope.githubtoken = null;
    }
  ]
);
