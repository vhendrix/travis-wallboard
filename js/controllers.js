angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', '$interval', 'TravisRepos', 'TravisBuilds', 'TravisBuild', function ($scope, $interval, TravisRepos, TravisBuilds, TravisBuild) {
        // Instantiate an object to store your scope data in (Best Practices)
        $scope.data = {};
        $scope.repos = $scope.repos || {};
        $scope.newRepos = $scope.newRepos || {};
        $scope.jobs = $scope.jobs || {};
        $scope.builds = $scope.builds || {};

        $scope.isFailed = function(state) {
            return state === 'failed' || state === 'error';
        };

        $scope.isBuilding = function(state) {
            return state === 'started' || state === 'created';
        };

        $scope.isPassing = function(state) {
            return state === 'passed';
        };

        $scope.loadBuilds = function () {
            angular.forEach($scope.repos, function (repo, key) {
                var slug = repo.slug.replace(slugstart + '/', "");
                TravisBuilds.getBuilds({slug: slug}, function (response) {
                    var found = false;
                    angular.forEach(response.builds, function (build, key) {
                        if (found == false) {
                            if (!build.pull_request) {
                                $scope.builds[repo.id] = {};

                                var blockclass = '';

                                if (build.state == 'failed') {
                                    blockclass = 'bg-danger text-danger';
                                } else if (build.state == 'passed') {
                                    blockclass = 'bg-success text-success';
                                } else if (build.state == 'started' || build.state == 'received' || build.state == 'created') {
                                    blockclass = 'bg-info text-info';
                                } else {
                                    blockclass = 'btn-warning';
                                }

                                $scope.builds[repo.id]['state'] = build.state;
                                $scope.builds[repo.id]['name'] = slug;
                                $scope.builds[repo.id]['class'] = blockclass;
                                $scope.builds[repo.id]['commit'] = response.commits[key];


                                $scope.builds[repo.id]['build'] = build;
                                found = true;
                            }
                        }
                    });
                });
            });
        };

        $scope.setInitialBuilds = function () {
            TravisRepos.getRepos(function (response) {
                angular.forEach(response.repos, function (repo, key) {
                    if (repo.active) {
                        $scope.repos[repo.id] = repo;
                        $scope.jobs[repo.id] = {};
                    }
                });

                $scope.loadBuilds($scope.repos);
            });
        };
        $scope.setInitialBuilds();

        $interval(
            $scope.loadBuilds, 60000
        );
    }
    ]
);
