(function () {
    'use strict';
    angular.module('travisWallBoard.services', [])
        .service(
        'TravisWallboardService',
        [
            'twsettings',
            function (twsettings) {

                var $building = {};

                var getBuildData = function ($name, $commit, $build) {
                    var $buildData = {};
                    $buildData.name = $name;

                    if (typeof($build) === "undefined") {
                        return $buildData;
                    }

                    if (typeof($build.state) !== 'undefined') {
                        $buildData.state = $build.state;
                    } else {
                        $build.state = 'passed';
                    }
                    $buildData.finished_at = $build.finished_at;
                    $buildData.started_at = $build.started_at;
                    $buildData.is_pr = $build.pull_request;

                    if ($build.pull_request) {
                        $buildData.branch = $build.pull_request_title;
                    } else {
                        $buildData.branch = $commit.branch;
                    }

                    $buildData.commit_message = $commit.message;
                    $buildData.committer_name = $commit.committer_name;
                    $buildData.committer_email = $commit.committer_email;

                    return $buildData;
                };
                /**
                 * Will parse the response and return active repositories from
                 * travis.
                 *
                 * @param $response
                 * @returns {{}}
                 */
                this.getReposFromResponse = function ($response, $user) {
                    var $repos = {};
                    var projects = twsettings.data.repoSettings;
                    angular.forEach(
                        $response.repos, function ($repo) {
                            var name = $user.name;
                            if ($user.isPrivate) {
                                name += ' private';
                            }

                            if ($repo.active && (typeof projects[name] === "undefined" || typeof projects[name][$repo.id] === 'undefined' || projects[name][$repo.id].enabled === "YES" )) {
                                $repos[$repo.id] = $repo;
                            }
                        }
                    );

                    return $repos;
                };

                this.getProjectsFromResponse = function ($response) {
                    var $repos = {};

                    angular.forEach(
                        $response.repos, function ($repo) {
                            if ($repo.active) {
                                $repos[$repo.id] = $repos[$repo.id] || {};
                                $repos[$repo.id].name = $repo.slug;
                                $repos[$repo.id].enabled = 'YES';
                            }
                        }
                    );

                    return $repos;
                };

                /**
                 * Will parse the response and return active repositories from
                 * travis.
                 *
                 * @param $response
                 * @returns {{}}
                 */
                this.getReposForUsersFromResponse = function ($response, $user) {
                    var $repos = {};

                    var projects = twsettings.data.repoSettings;

                    angular.forEach(
                        $response.repos, function ($repo) {
                            var name = $user.name;
                            if ($user.isPrivate) {
                                name += ' private';
                            }

                            if ($repo.active && (typeof projects[name] === "undefined" || typeof projects[name][$repo.id] === 'undefined' || projects[name][$repo.id] === "YES" )) {
                                $repos[$repo.slug] = $user;
                            }
                        }
                    );

                    return $repos;
                };

                /**
                 * Get all repositories that have a changed state compared to the previous
                 * check.
                 *
                 * @param $repos
                 * @param $response
                 * @returns {{}}
                 */
                this.getUpdatedReposFromResponse = function ($repos, $response) {
                    var $updatedRepos = {};

                    angular.forEach(
                        $response.repos, function ($repo) {
                            if (typeof $building[$repo.id] === "undefined") {
                                $building[$repo.id] = 'done';
                            }

                            if ($repo.active && $repo.last_build_finished_at == null && $building[$repo.id] !== 'building') {
                                $building[$repo.id] = 'building';
                                $updatedRepos [$repo.id] = $repo;
                            } else if ($repo.active && $repo.last_build_finished_at !== null && $building[$repo.id] === 'building') {
                                $building[$repo.id] = 'done';
                                $updatedRepos [$repo.id] = $repo;
                            }
                        }
                    );

                    return $updatedRepos;
                };

                /**
                 * Parses the builds returned from the service.
                 *
                 * @param {String} $slug The slug of the project (project name on git)
                 * @param {int} $repoId Id of the repositiory.
                 * @param {Object} $response Response we got from the service.
                 * @returns {{}}
                 */
                this.getBuildsForRepo = function ($slug, $repoId, $response) {
                    var $latestBuild = $response.builds[0];
                    var $latestCommit = $response.commits[0];

                    return getBuildData($slug, $latestCommit, $latestBuild);
                };

                /**
                 * Parses the builds returned from the service for the project view.
                 *
                 * @param {String} $slug The slug of the project (project name on git)
                 * @param {int} $repoId Id of the repositiory.
                 * @param {Object} $response Response we got from the service.
                 * @returns {{}}
                 */
                this.getBuildsForProject = function ($slug, $response) {
                    var $builds = {};

                    angular.forEach(
                        $response.builds, function (build, key) {
                            var $data = getBuildData($slug, $response.commits[key], build);
                            if (typeof  $builds[$data.branch] === "undefined") {
                                $builds[$data.branch] = $data;
                            }
                        }
                    );

                    return $builds;
                };
            }
        ]
    ).factory(
        'DisplayFunctions', function () {
            return {
                isFailed: function (state) {
                    return state === 'failed' || state === 'error' || state === 'errored';
                },
                getErrorsClass: function (builds) {
                    var count = 0;
                    angular.forEach(
                        builds, function (build) {
                            if (build.state === 'failed' || build.state === 'error' || build.state === 'errored') {
                                var dt = new Date(Date.parse(build.finished_at));
                                var now = new Date();

                                var diff = now.getTime() - dt.getTime();

                                var minutes = Math.floor((diff / (60000)));
                                if (minutes < 5) {
                                    count++;
                                }
                            }
                        }
                    );

                    if (count > 3) {
                        return 'col-md-6 errors-' + count;
                    } else {
                        return 'col-md-12 errors-' + count;
                    }
                },

                showModal: function (builds) {
                    var failed = false;
                    angular.forEach(
                        builds, function (build) {
                            if (build.state === 'failed' || build.state === 'error' || build.state === 'errored') {
                                var dt = new Date(Date.parse(build.finishedAt));
                                var now = new Date();

                                var diff = now.getTime() - dt.getTime();

                                var minutes = Math.floor((diff / (60000)));
                                if (minutes < 5) {
                                    failed = true;
                                    return true;
                                }
                            }
                        }
                    );
                    return failed;
                },

                recentError: function (finishedAt) {
                    var dt = new Date(Date.parse(finishedAt));
                    var now = new Date();

                    var diff = now.getTime() - dt.getTime();

                    var minutes = Math.floor((diff / (60000)));

                    if (minutes < 5) {
                        return true;
                    }
                    return false;
                },

                isBuilding: function (state) {
                    return state === 'started' || state === 'created' || state === 'received';
                },

                isPassing: function (state) {
                    return state === 'passed' || state === 'canceled';
                }
            };
        }
    )
        .value('version', '0.1');
})
();
