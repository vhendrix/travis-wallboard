angular.module('travisWallBoard.controllers').controller(
  'MenuReposController',
  [ '$scope', 'twsettings', 'DisplayFunctions', '$interval', 'md5', 'TravisRepos', function (
    $scope,
    twsettings,
    DisplayFunctions,
    $interval,
    md5,
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
          angular.forEach(
            response.repos, function (repo) {
              if ( repo.active ) {
                var slug = repo.slug.replace(twsettings.data.slug + '/', "");
                $scope.repos[ repo.id ] = slug;
              }
            }
          );
        }
      );
    };

    $scope.setInitialBuilds();
  }
  ]
);
