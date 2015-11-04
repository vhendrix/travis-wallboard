'use strict';

angular.module('travisWallBoard.controllers').controller('RepoSettingsController', ['$scope', 'twsettings', 'TravisWallboardService', 'md5', 'TravisRepos', function ($scope, twsettings, $travisWallboardService, md5, TravisRepos) {
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
        angular.forEach(twsettings.data.users, function ($user) {
            if (!helper.isEmpty($user.name)) {
                var resource = TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token);
                resource.getRepos(function (response) {
                    var newRepos = $travisWallboardService.getProjectsFromResponse(response);

                    var name = $user.name;

                    if ($user.isPrivate) {
                        name += ' private';
                    }
                    if (helper.isEmpty($scope.repos[name])) {
                        $scope.repos[name] = newRepos;
                    }
                });
            }
        });
    };

    $scope.loadRepos();
}]);
//# sourceMappingURL=RepoSettingsController.js.map
