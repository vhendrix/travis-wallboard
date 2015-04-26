(function () {
  'use strict';
  angular.module('travisWallBoard.resources', [ 'ngResource' ])
    .factory(
    'TravisRepos', function ($resource, twsettings) {
      return $resource(
        twsettings.data.getUri('repos') + twsettings.data.slug,
        {},
        {
          'getRepos': {
            params: {active: true},
            method: 'GET', headers: {
              'Accept': 'application/vnd.travis-ci.2+json'
            }
          }
        }
      );
    }
  ).factory(
    'TravisBuild', function ($resource, twsettings) {
      return $resource(
        twsettings.data.getUri('repos') + twsettings.data.slug + "/:slug/builds/:buildid",
        {slug: '@slug', buildid: '@buildid'},
        {
          'getBuild': {
            params: {slug: 0, buildid: 0},
            method: 'GET', headers: {
              'Accept': 'application/vnd.travis-ci.2+json'
            }
          }
        }
      );
    }
  ).factory(
    'TravisBuilds', function ($resource, twsettings) {
      return $resource(
        twsettings.data.getUri('repos') + twsettings.data.slug + "/:slug/builds",
        {slug: '@slug'},
        {
          'getBuilds': {
            params: {slug: 0},
            method: 'GET', headers: {
              'Accept': 'application/vnd.travis-ci.2+json'
            }
          },
          'getBuildsForProject': {
            params: {slug: 0, 'event_type': undefined},
            method: 'GET', headers: {
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
  );
})();
