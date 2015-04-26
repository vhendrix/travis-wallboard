(function () {
  'use strict';
  angular.module('travisWallBoard.services', [ 'angular-md5' ])
    .service(
    'TravisWallboardService', function (TravisRepos, md5) {

      var $building = {};
      /**
       * Will parse the response and return active repositories from
       * travis.
       *
       * @param response
       * @returns {{}}
       */
      this.getReposFromResponse = function ($response) {
        var $repos = {};

        angular.forEach(
          $response.repos, function ($repo) {
            if ( $repo.active ) {
              $repos[ $repo.id ] = $repo;
            }
          }
        );

        return $repos;
      };

      this.getUpdatedReposFromResponse = function ($repos, $response) {
        var $updatedRepos = {};

        angular.forEach(
          $response.repos, function ($repo) {
            if ( typeof $building[ $repo.id ] === "undefined" ) {
              $building[ $repo.id ] = 'done';
            }

            console.debug($repo.active );
            console.debug($repo.slug);
            console.debug($repo.last_build_finished_at);
            console.debug($building[ $repo.id ]);
            console.debug('--------------------');
            if ( $repo.active && $repo.last_build_finished_at == null && $building[ $repo.id ] !== 'building' ) {
              $building[ $repo.id ] = 'building';
              $updatedRepos [$repo.id] = $repo;
            } else if ( $repo.active && $repo.last_build_finished_at !== null && $building[ $repo.id ] === 'building' ) {
              $building[ $repo.id ] = 'done';
              $updatedRepos [$repo.id] = $repo;
            }
            console.debug('--------------------');
          }
        );

        console.debug($building);
        console.debug($updatedRepos);

        return $updatedRepos;
      };

      this.getBuildsForRepo = function ($slug, $repo, $response) {
        var $found = false;
        var $builds = {};
        var $blockclass = '';

        console.debug($response);
        angular.forEach(
          $response.builds, function ($build, $key) {
            if ( $found === false ) {
              //if ( !$build.pull_request ) {
                $builds[ $repo.id ] = {};

                // @todo see if ican make this a directive.
                if ( $build.state === 'failed' ) {
                  $blockclass = 'btn-danger text-danger';
                } else if ( $build.state === 'passed' ) {
                  $blockclass = 'btn-success text-success';
                } else if ( $build.state === 'started' || $build.state === 'received' || $build.state === 'created' ) {
                  $blockclass = 'btn-info text-info';
                } else {
                  $blockclass = 'btn-warning';
                }

                $builds[ $repo.id ].state = $build.state;
                $builds[ $repo.id ].name = $slug;
                $builds[ $repo.id ].class = $blockclass;
                $builds[ $repo.id ].commit = $response.commits[ $key ];
                $builds[ $repo.id ].build = $build;
                $builds[ $repo.id ].startedAt = $build.started_at;
                $builds[ $repo.id ].userUrl = "https://www.gravatar.com/avatar/" + md5.createHash($response.commits[ $key ].committer_email) + '?s=200';
                $found = true;
              }
            //}
          }

        );
        return $builds;
      };
    }
  ).factory(
    'DisplayFunctions', function () {
      return {
        isFailed: function (state) {
          return state === 'failed' || state === 'error' || state === 'errored';
        },
        getErrorsClass: function (builds) {
          var count = 0;
          angular.forEach(
            builds, function (build) {
              if ( build.state === 'failed' || build.state === 'error' || build.state === 'errored' ) {
                count++;
              }
            }
          );

          if ( count > 3 ) {
            return 'col-md-6 errors-' + count;
          } else {
            return 'col-md-12 errors-' + count;
          }
        },

        showModal: function (builds) {
          var failed = false;
          angular.forEach(
            builds, function (build) {
              if ( build.state === 'failed' || build.state === 'error' || build.state === 'errored' ) {
                var dt = new Date(Date.parse(build.startedAt));
                var now = new Date();

                var minutes = Math.floor((now.getTime() - dt.getTime()) % 60);
                if ( minutes < 5 ) {
                  failed = true;
                  return true;
                }
              }
            }
          );
          return failed;
        },

        recentError: function (finishedAt) {
          var dt = new Date(Date.parse(finishedAt));
          var now = new Date();

          var minutes = Math.floor((now.getTime() - dt.getTime()) % 60);
          if ( minutes < 5 ) {
            return true;
          }
          return false;
        },

        isBuilding: function (state) {
          return state === 'started' || state === 'created';
        },

        isPassing: function (state) {
          return state === 'passed';
        }
      };
    }
  )
    .value('version', '0.1');
})
();
