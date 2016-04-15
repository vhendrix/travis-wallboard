angular.module('travisWallBoard.resources', ['ngResource'])
    .factory(
        'TravisRepos', function ($resource, twsettings) {
            return {
                resource: function (name, uri, isPrivate, token) {
                    return $resource(
                        uri + 'repos/' + name,
                        {},
                        {
                            'getRepos': {
                                params: {active: true},
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

