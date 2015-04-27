(function () {
  'use strict';
  angular.module('travisWallBoard.services', [])
    .service(
    'TravisWallboardService', function () {

      var $building = {};
      /**
       * Will parse the response and return active repositories from
       * travis.
       *
       * @param $response
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

      /**
       * Get all repositories that have a changed state compared to the previous
       * check.
       *
       * @param $repos
       * @param $response
       * @returns {{}}
       */
      this.getUpdatedReposFromResponse = function ($repos, $response) {
        var $updatedRepos = {};

        angular.forEach(
          $response.repos, function ($repo) {
            if ( typeof $building[ $repo.id ] === "undefined" ) {
              $building[ $repo.id ] = 'done';
            }

            if ( $repo.active && $repo.last_build_finished_at == null && $building[ $repo.id ] !== 'building' ) {
              $building[ $repo.id ] = 'building';
              $updatedRepos [ $repo.id ] = $repo;
            } else if ( $repo.active && $repo.last_build_finished_at !== null && $building[ $repo.id ] === 'building' ) {
              $building[ $repo.id ] = 'done';
              $updatedRepos [ $repo.id ] = $repo;
            }
          }
        );

        return $updatedRepos;
      };

      /**
       * Parses the builds returned from the service.
       *
       * @param {String} $slug The slug of the project (project name on git)
       * @param {int} $repoId Id of the repositiory.
       * @param {Object} $response Response we got from the service.
       * @returns {{}}
       */
      this.getBuildsForRepo = function ($slug, $repoId, $response) {
        var $found = false;
        var $builds = {};

        angular.forEach(
          $response.builds, function ($build, $key) {
            if ( $found === false ) {
              $builds[ $repoId ] = {};
              $builds[ $repoId ].name = $slug;
              $builds[ $repoId ].state = $build.state;
              $builds[ $repoId ].commit = $response.commits[ $key ];
              $builds[ $repoId ].build = $build;
              $builds[ $repoId ].startedAt = $build.started_at;
              $found = true;
            }
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
