(function () {
  'use strict';
  angular.module('travisWallBoard.resources', [ 'ngResource' ])
    .factory(
    'TravisRepos', function ($resource, twsettings) {
      return {
        resource: function (name, uri, isPrivate, token) {
          return $resource(
            uri + 'repos',
            {},
            {
              'getRepos': {
                params: {active: true, search: name},
                method: 'GET', headers: {
                  'Accept': 'application/vnd.travis-ci.2+json',
                  'Authorization': twsettings.data.getToken(isPrivate, token)
                }
              }
            }
          );
        }
      };
    }
  ).factory(
    'TravisBuild', function ($resource, twsettings) {
      return {
        resource: function () {
          return $resource(
            twsettings.data.getUri('repos') + twsettings.data.slug + "/:slug/builds/:buildid",
            {slug: '@slug', buildid: '@buildid'},
            {
              'getBuild': {
                params: {slug: 0, buildid: 0},
                method: 'GET', headers: {
                  'Accept': 'application/vnd.travis-ci.2+json',
                  'Authorization': twsettings.data.getToken()
                }
              }
            }
          );
        }
      };
    }
  ).factory(
    'TravisBuilds', function ($resource, twsettings) {
      return {
        resource: function (name, uri, isPrivate, token) {
          return $resource(
            uri + 'repos/' + name + "/:slug/builds",
            {slug: '@slug', 'event_type': 'push'},
            {
              'getBuilds': {
                params: {slug: 0, 'event_type': 'push'},
                method: 'GET', headers: {
                  'Accept': 'application/vnd.travis-ci.2+json',
                  'Authorization': twsettings.data.getToken(isPrivate, token)
                }
              },
              'getBuildsForProject': {
                params: {slug: 0, 'event_type': undefined},
                method: 'GET', headers: {
                  'Accept': 'application/vnd.travis-ci.2+json',
                  'Authorization': twsettings.data.getToken(isPrivate, token)
                }
              }
            }
          );
        }
      };
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
