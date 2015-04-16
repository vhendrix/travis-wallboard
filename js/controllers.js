angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', '$interval', 'TravisBuilds','TravisBuild', function ($scope, $interval, TravisBuilds, TravisBuild) {
        // Instantiate an object to store your scope data in (Best Practices)
        $scope.data = {};
        $scope.repos =  $scope.repos || {};
        $scope.newRepos =  $scope.newRepos || {};
        $scope.jobs =  $scope.jobs || {};

        $scope.setInitialBuildsS = function() {
            TravisBuilds.getBuilds(function (response) {
                // Assign the response INSIDE the callback
                angular.forEach(response.repos, function(repo, key) {
                    $scope.repos[repo.id] = repo;
                    $scope.jobs[repo.id] = {};
                });
            });
        };


        $interval(function () {
            TravisBuilds.getBuilds(function (response) {
                // Assign the response INSIDE the callback
                angular.forEach(response.repos, function(repo, key) {
                    if (
                        repo.active &&
                        repo.last_build_finished_at !== null &&
                        (typeof $scope.jobs[repo.id] == 'undefined' ||
                        (
                          typeof $scope.jobs[repo.id]['state'] == 'undefined' ||
                          $scope.jobs[repo.id]['state'] != 'retrieving')
                        )
                        ) {
                        $scope.jobs[repo.id]['repo'] = repo;
                        $scope.jobs[repo.id]['state'] = 'retrieving';

                        console.debug(repo.slug);
                        console.debug(repo.last_build_id);
                        TravisBuild.getBuild({slug: repo.slug, buildid : repo.last_build_id},function (response) {
                            $scope.jobs[repo.id]['state'] = 'done';
                            $scope.jobs[repo.id]['commit'] = response.commit;
                        });
                    }

                });
            });
        }, 20000);
    }]);
