angular.module('travisWallBoard.controllers').controller(
  'ProjectController',
  [ '$scope', 'DisplayFunctions', '$interval', 'md5', 'TravisRepos', 'TravisBuilds', 'TravisBuild', '$routeParams', function (
    $scope,
    DisplayFunctions,
    $interval,
    md5,
    TravisRepos,
    TravisBuilds,
    TravisBuild,
    routeParams
  ) {
    // Instantiate an object to store your scope data in (Best Practices)

    $scope.displayFunctions = DisplayFunctions;
    $scope.data = {};
    $scope.repos = $scope.repos || {};
    $scope.newRepos = $scope.newRepos || {};
    $scope.jobs = $scope.jobs || {};
    $scope.builds = $scope.builds || {};
    $scope.users = $scope.users || {};
    $scope.building = $scope.building || {};

    $scope.loadBuildsForRepo = function () {

      var slug = routeParams.slug;

      TravisBuilds.getBuildsForProject(
        {slug: slug}, function (response) {
          angular.forEach(
            response.builds, function (build, key) {
              $scope.builds[ key ] = {};

              var blockclass = '';
              if ( build.state == 'failed' ) {
                blockclass = 'btn-danger text-danger';
              } else if ( build.state == 'passed' ) {
                blockclass = 'btn-success text-success';
              } else if ( build.state == 'started' || build.state == 'received' || build.state == 'created' ) {
                blockclass = 'btn-info text-info';
              } else {
                blockclass = 'btn-warning';
              }

              $scope.builds[ key ][ 'state' ] = build.state;
              $scope.builds[ key ][ 'name' ] = slug;
              $scope.builds[ key ][ 'class' ] = blockclass;
              $scope.builds[ key ][ 'commit' ] = response.commits[ key ];

              if ( build.pull_request ) {
                $scope.builds[ key ][ 'branch' ] = build.pull_request_title;
              } else {
                $scope.builds[ key ][ 'branch' ] = response.commits[ key ].branch;
              }

              $scope.builds[ key ][ 'build' ] = build;
              $scope.builds[ key ][ 'startedAt' ] = build.started_at;
              $scope.builds[ key ][ 'userUrl' ] = "https://www.gravatar.com/avatar/" + md5.createHash(response.commits[ key ].committer_email) + '?s=200';
            }
          );
        }
      );
    };

    $scope.loadBuildsForRepo();

    var timer = $interval(
      $scope.loadBuildsForRepo, 30000
    );

    $scope.$on(
      '$destroy', function (e) {
        $interval.cancel(timer);
      }
    );
  }
  ]
);
