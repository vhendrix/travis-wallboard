angular.module('myApp.services', ['ngResource'])
    .factory('TravisBuilds', function ($resource) {
        return $resource(
            '',
            {},
            {
                'getBuilds': {
                    method: 'GET', headers: {
                        'Authorization': '',
                        'Accept': 'application/vnd.travis-ci.2+json'
                    }
                }
            }
        )
    })
    .factory('TravisBuild', function ($resource) {
        return $resource(
            '   ',
            {slug: '@slug', buildid: '@buildid'},
            {
                'getBuild': {
                    params: {slug: 0, buildid: 0},
                    method: 'GET', headers: {
                        'Authorization': '',
                        'Accept': 'application/vnd.travis-ci.2+json'
                    }
                }
            }
        )
    })
    .value('version', '0.1');
