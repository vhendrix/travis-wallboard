angular.module('travisWallBoard.controllers', []).
    controller('ReposController', ['$scope', 'DisplayFunctions', '$interval', 'md5', 'TravisRepos', 'TravisBuilds', 'TravisBuild', function ($scope, DisplayFunctions, $interval, md5, TravisRepos, TravisBuilds, TravisBuild) {
        // Instantiate an object to store your scope data in (Best Practices)

        $scope.displayFunctions = DisplayFunctions;
        $scope.data = {};
        $scope.repos = $scope.repos || {};
        $scope.newRepos = $scope.newRepos || {};
        $scope.jobs = $scope.jobs || {};
        $scope.builds = $scope.builds || {};
        $scope.users = $scope.users || {};
        $scope.building = $scope.building || {};

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
                            $scope.builds[repo.id]['startedAt'] = build.started_at;
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
                            $scope.builds[repo.id] = $scope.builds[repo.id] || {};
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

        timer = $interval(
            $scope.pollRepos, 30000
        );


        $scope.$on('$destroy', function(e) {
            $interval.cancel(timer);
        });
    }
    ]
).controller('ProjectController', ['$scope', 'DisplayFunctions', '$interval', 'md5', 'TravisRepos', 'TravisBuilds', 'TravisBuild', '$routeParams', function ($scope, DisplayFunctions, $interval, md5, TravisRepos, TravisBuilds, TravisBuild, routeParams) {
        // Instantiate an object to store your scope data in (Best Practices)

        $scope.displayFunctions = DisplayFunctions;
        $scope.data = {};
        $scope.repos = $scope.repos || {};
        $scope.newRepos = $scope.newRepos || {};
        $scope.jobs = $scope.jobs || {};
        $scope.builds = $scope.builds || {};
        $scope.users = $scope.users || {};
        $scope.building = $scope.building || {};

        $scope.loadBuildsForRepo = function () {

            var slug = routeParams.slug;

            TravisBuilds.getBuildsForProject({slug: slug}, function (response) {
                angular.forEach(response.builds, function (build, key) {
                    $scope.builds[key] = {};

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

                    $scope.builds[key]['state'] = build.state;
                    $scope.builds[key]['name'] = slug;
                    $scope.builds[key]['class'] = blockclass;
                    $scope.builds[key]['commit'] = response.commits[key];

                    if (build.pull_request) {
                        $scope.builds[key]['branch'] = build.pull_request_title;
                    } else {
                        $scope.builds[key]['branch'] = response.commits[key].branch;
                    }

                    $scope.builds[key]['build'] = build;
                    $scope.builds[key]['startedAt'] = build.started_at;
                    $scope.builds[key]['userUrl'] = "https://www.gravatar.com/avatar/" + md5.createHash(response.commits[key].committer_email) + '?s=200';
                });
            });
        };


        $scope.loadBuildsForRepo();

        var timer = $interval(
            $scope.loadBuildsForRepo, 30000
        );

        $scope.$on('$destroy', function(e) {
            $interval.cancel(timer);
        });
    }
    ]
).controller('MenuReposController', ['$scope', 'DisplayFunctions', '$interval', 'md5', 'TravisRepos', 'TravisBuilds', 'TravisBuild', function ($scope, DisplayFunctions, $interval, md5, TravisRepos, TravisBuilds, TravisBuild) {
        // Instantiate an object to store your scope data in (Best Practices)

        $scope.displayFunctions = DisplayFunctions;
        $scope.repos = $scope.repos || {};

        $scope.toggleHidden = function () {
            $('.navbar').toggleClass('hidden');
        };

        $scope.setInitialBuilds = function () {
            TravisRepos.getRepos(function (response) {
                angular.forEach(response.repos, function (repo, key) {
                    if (repo.active) {
                        var slug = repo.slug.replace(slugstart + '/', "");
                        $scope.repos[repo.id] = slug;
                    }
                });
            });
        };

        $scope.setInitialBuilds();
    }
    ]
).controller('SettingsController', ['$scope', 'md5', 'TravisToken', function ($scope, md5, TravisToken) {
        // Instantiate an object to store your scope data in (Best Practices)
        $scope.createCookie = function (name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        };

        $scope.readCookie = function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };

        $scope.submit = function () {
            $scope.createCookie('repo', $scope.repo, 700);
            $scope.createCookie('token', $scope.token, 700);
            token = $scope.token;
            slugstart = $scope.repo;
        };

        $scope.getToken = function () {
            TravisToken.getToken({githubtoken:   $scope.githubtoken}, function (response) {
                $scope.token = response.access_token;
                $scope.createCookie('token', $scope.token, 700);
                token = $scope.token;
            });
        };

        $scope.token = $scope.readCookie('token');
        $scope.repo = $scope.readCookie('repo');
        $scope.githubtoken = null;
    }
    ]
);

