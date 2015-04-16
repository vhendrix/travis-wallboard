angular.module('myApp.services', ['ngResource'])
    .factory('TravisRepos', function ($resource) {
        return $resource(
            url,
            {},
            {
                'getRepos': {
                    method: 'GET', headers: {
                        'Authorization': token,
                        'Accept': 'application/vnd.travis-ci.2+json'
                    }
                }
            }
        )
    })
    .factory('TravisBuild', function ($resource) {
        return $resource(
            url +"/:slug/builds/:buildid",
            {slug: '@slug', buildid: '@buildid'},
            {
                'getBuild': {
                    params: {slug: 0, buildid: 0},
                    method: 'GET', headers: {
                        'Authorization': token,
                        'Accept': 'application/vnd.travis-ci.2+json'
                    }
                }
            }
        )
    })
    .factory('TravisBuilds', function ($resource) {
        return $resource(
            url +"/:slug/builds",
            {slug: '@slug'},
            {
                'getBuilds': {
                    params: {slug: 0},
                    method: 'GET', headers: {
                        'Authorization': token,
                        'Accept': 'application/vnd.travis-ci.2+json'
                    }
                }
            }
        )
    })
    .value('version', '0.1');
