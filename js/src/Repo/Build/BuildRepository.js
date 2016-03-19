angular.module('travisWallBoard.builds', ['ngResource'])
    .factory(
        'TravisBuilds', function ($resource, twsettings, responsehelper) {
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
                                },
                                transformResponse: responsehelper.data.parseBuildData
                            },
                            'getBuildsForProject': {
                                params: {slug: 0, 'event_type': undefined},
                                method: 'GET', headers: {
                                    'Accept': 'application/vnd.travis-ci.2+json',
                                    'Authorization': twsettings.data.getToken(isPrivate, token)
                                },
                                transformResponse: responsehelper.data.parseBuildData
                            }
                        }
                    );
                }
            };
        }
    );

