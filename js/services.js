(function () {
  'use strict';
  angular.module('travisWallBoard.services', [ 'ngResource' ])
    .factory(
    'TravisRepos', function ($resource, twsettings) {
      return $resource(
        'https://api.travis-ci.com/repos/' + twsettings.data.slug,
        {},
        {
          'getRepos': {
            method: 'GET', headers: {
              'Authorization': "token " + twsettings.data.token,
              'Accept': 'application/vnd.travis-ci.2+json'
            }
          }
        }
      );
    }
  ).factory(
    'TravisBuild', function ($resource, twsettings) {
      return $resource(
        'https://api.travis-ci.com/repos/' + twsettings.data.slug + "/:slug/builds/:buildid",
        {slug: '@slug', buildid: '@buildid'},
        {
          'getBuild': {
            params: {slug: 0, buildid: 0},
            method: 'GET', headers: {
              'Authorization': "token " + twsettings.data.token,
              'Accept': 'application/vnd.travis-ci.2+json'
            }
          }
        }
      );
    }
  ).factory(
    'TravisBuilds', function ($resource, twsettings) {
      return $resource(
        'https://api.travis-ci.com/repos/' + twsettings.data.slug + "/:slug/builds",
        {slug: '@slug', 'event_type': 'push'},
        {
          'getBuilds': {
            params: {slug: 0, 'event_type': 'push'},
            method: 'GET', headers: {
              'Authorization': "token " + twsettings.data.token,
              'Accept': 'application/vnd.travis-ci.2+json'
            }
          },
          'getBuildsForProject': {
            params: {slug: 0, 'event_type': undefined},
            method: 'GET', headers: {
              'Authorization': "token " + twsettings.data.token,
              'Accept': 'application/vnd.travis-ci.2+json'
            }
          }
        }
      );
    }
  ).factory(
    'TravisToken', function ($resource) {
      return $resource(
        'https://api.travis-ci.com/auth/github',
        {github_token: '@githubtoken'},
        {
          'getToken': {
            params: {github_token: '@githubtoken'},
            method: 'POST', headers: {
              'Accept': 'application/vnd.travis-ci.2+json'
            }
          }
        }
      );
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
})();
