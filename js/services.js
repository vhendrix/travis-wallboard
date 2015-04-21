angular.module('myApp.services', ['ngResource'])
    .factory('TravisRepos', function ($resource) {
        return $resource(
            'https://api.travis-ci.com/repos/' + slugstart,
            {},
            {
                'getRepos': {
                    method: 'GET', headers: {
                        'Authorization': "token " + token,
                        'Accept': 'application/vnd.travis-ci.2+json'
                    }
                }
            }
        )
    })
    .factory('TravisBuild', function ($resource) {
        return $resource(
            'https://api.travis-ci.com/repos/' + slugstart + "/:slug/builds/:buildid",
            {slug: '@slug', buildid: '@buildid'},
            {
                'getBuild': {
                    params: {slug: 0, buildid: 0},
                    method: 'GET', headers: {
                        'Authorization': "token " + token,
                        'Accept': 'application/vnd.travis-ci.2+json'
                    }
                }
            }
        )
    })
    .factory('TravisBuilds', function ($resource) {
        return $resource(
            'https://api.travis-ci.com/repos/' + slugstart + "/:slug/builds",
            {slug: '@slug', 'event_type': 'push'},
            {
                'getBuilds': {
                    params: {slug: 0, 'event_type': 'push'},
                    method: 'GET', headers: {
                        'Authorization': "token " + token,
                        'Accept': 'application/vnd.travis-ci.2+json'
                    }
                }
            }
        )
    })
    .value('version', '0.1');
