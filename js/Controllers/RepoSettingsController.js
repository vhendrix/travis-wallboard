angular.module('travisWallBoard.controllers').controller(
    'RepoSettingsController',
    [
        '$scope',
        'twsettings',
        'TravisWallboardService',
        'md5',
        'TravisRepos',
        function ($scope, twsettings, $travisWallboardService, md5, TravisRepos) {
            $scope.users = twsettings.data.users || [];
            $scope.repos = $scope.repos || twsettings.data.projects;

            $scope.submit = function () {
                twsettings.data.setProjects($scope.repos);
                jQuery('#repo-success').show(1000);
                setTimeout(function () {
                    jQuery('#repo-success').hide(1000);
                }, 10000);
            };

            /**
             * Load initial repos from the travis service.
             */
            $scope.loadRepos = function () {
                angular.forEach(
                    twsettings.data.users,
                    function ($user) {
                        if (!TW.helpers.isEmpty($user.name)) {
                            var resource = TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token);
                            resource.getRepos(
                                function (response) {
                                    var newRepos = $travisWallboardService.getProjectsFromResponse(response);

                                    if (TW.helpers.isEmpty($scope.repos[$user['name']])) {
                                        $scope.repos[$user['name']] = newRepos;
                                    }
                                }
                            );
                        }
                    }
                );
            };

            $scope.loadRepos();
        }
    ]
);
