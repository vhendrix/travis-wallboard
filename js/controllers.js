angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', '$interval', 'md5', 'TravisRepos', 'TravisBuilds', 'TravisBuild', function ($scope, $interval, md5, TravisRepos, TravisBuilds, TravisBuild) {
        // Instantiate an object to store your scope data in (Best Practices)

        $scope.data = {};
        $scope.repos = $scope.repos || {};
        $scope.newRepos = $scope.newRepos || {};
        $scope.jobs = $scope.jobs || {};
        $scope.builds = $scope.builds || {};
        $scope.users = $scope.users || {};
        $scope.building = $scope.building || {};

        $scope.getErrorsClass = function () {
            var count = 0;
            angular.forEach($scope.builds, function (build, key) {
                if (build.state === 'failed' || build.state === 'error' || build.state === 'started' || build.state === 'created') {
                    count++;
                }
            });

            if (count > 3) {
                return 'col-md-6 errors-' + count;
            } else {
                return 'col-md-12 errors-' + count;
            }
        };

        $scope.showModal = function () {
            var failed = false;
            angular.forEach($scope.builds, function (build, key) {
                if (build.state === 'failed' || build.state === 'error' || build.state === 'started' || build.state === 'created') {
                    failed = true;
                    return true;
                }
            });
            return failed;
        };

        $scope.isFailed = function (state) {
            return state === 'failed' || state === 'error';
        };

        $scope.isBuilding = function (state) {
            return state === 'started' || state === 'created';
        };

        $scope.isPassing = function (state) {
            return state === 'passed';
        };

        $scope.loadBuilds = function () {
            angular.forEach($scope.repos, function (repo, key) {
                $scope.loadBuildsForRepo(repo);
            });
        };

        $scope.loadBuildsForRepo = function (repo) {
            var slug = repo.slug.replace(slugstart + '/', "");
            TravisBuilds.getBuilds({slug: slug}, function (response) {
                var found = false;
                angular.forEach(response.builds, function (build, key) {
                    if (found == false) {
                        if (!build.pull_request) {
                            $scope.builds[repo.id] = {};

                            var blockclass = '';
                            if (build.state == 'failed') {
                                blockclass = 'btn-danger text-danger';
                            } else if (build.state == 'passed') {
                                blockclass = 'btn-success text-success';
                            } else if (build.state == 'started' || build.state == 'received' || build.state == 'created') {
                                blockclass = 'btn-info text-info';
                            } else {
                                blockclass = 'btn-warning';
                            }

                            $scope.builds[repo.id]['state'] = build.state;
                            $scope.builds[repo.id]['name'] = slug;
                            $scope.builds[repo.id]['class'] = blockclass;
                            $scope.builds[repo.id]['commit'] = response.commits[key];
                            $scope.builds[repo.id]['build'] = build;

                            console.debug(response.commits[key].committer_email);
                            console.debug( md5.createHash(response.commits[key].committer_email));

                            $scope.builds[repo.id]['userUrl'] = "https://www.gravatar.com/avatar/" + md5.createHash(response.commits[key].committer_email) + '?s=200';
                            found = true;
                        }
                    }
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

        $scope.pollRepos = function () {
            TravisRepos.getRepos(function (response) {
                angular.forEach(response.repos, function (repo, key) {
                        if (repo.active && repo.last_build_finished_at == null) {
                            $scope.building[repo.id] = 'building';
                            $scope.builds[repo.id]['state'] = 'started';
                            $scope.builds[repo.id]['class'] = 'btn-info text-info';
                        } else if (repo.active && $scope.building[repo.id] == 'building') {
                            $scope.building[repo.id] = 'done';
                            $scope.loadBuildsForRepo(repo);
                        }
                    }
                )
            });
        };

        $scope.setInitialBuilds();

        $interval(
            $scope.pollRepos, 30000
        );
    }
    ]
);
