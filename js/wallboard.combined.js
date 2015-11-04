"use strict";

(function() {
    "use strict";
    angular.module("travisWallBoard", [ "angular-md5", "ngRoute", "travisWallBoard.objects", "travisWallBoard.filters", "travisWallBoard.services", "travisWallBoard.directives", "travisWallBoard.controllers", "travisWallBoard.builds", "travisWallBoard.resources" ]).config([ "$routeProvider", "twsettingsProvider", function($routeProvider, twsettings) {
        twsettings.loadUserData();
        twsettings.loadProjectData();
        $routeProvider.when("/repos", {
            templateUrl: "partials/repos.html",
            controller: "ReposController"
        });
        $routeProvider.when("/showmyrepos/:repo", {
            templateUrl: "partials/repos.html",
            controller: "ReposController"
        });
        $routeProvider.when("/project/:user/:slug", {
            templateUrl: "partials/project.html",
            controller: "ProjectController"
        });
        $routeProvider.when("/settings", {
            templateUrl: "partials/settings.html",
            controller: "SettingsController"
        });
        $routeProvider.when("/repo-settings", {
            templateUrl: "partials/repo-settings.html",
            controller: "RepoSettingsController"
        });
        $routeProvider.otherwise({
            redirectTo: "/repos"
        });
    } ]);
})();

"use strict";

(function() {
    "use strict";
    angular.module("travisWallBoard.directives", []).directive("travisBuild", function() {
        return {
            templateUrl: function templateUrl(elem, attr) {
                return "partials/build-" + attr.type + ".html";
            }
        };
    }).directive("travisBuildModal", function() {
        return {
            templateUrl: function templateUrl() {
                return "partials/build-recent-failed.html";
            }
        };
    }).directive("travisServerError", function() {
        return {
            templateUrl: function templateUrl() {
                return "partials/server-error.html";
            }
        };
    });
})();

"use strict";

(function() {
    "use strict";
    angular.module("travisWallBoard.filters", []).filter("stateClass", function() {
        return function(state) {
            var blockClass = "";
            if (state === "failed") {
                blockClass = "btn-danger text-danger";
            } else if (state === "passed") {
                blockClass = "btn-success text-success";
            } else if (state === "started" || state === "received" || state === "created") {
                blockClass = "btn-info text-info";
            } else if (state === "canceled") {
                blockClass = "btn-info text-info text-canceled";
            } else {
                blockClass = "btn-warning";
            }
            return blockClass;
        };
    }).filter("getSlugName", [ "twsettings", function(twsettings) {
        return function(string) {
            var slug = string.replace(twsettings.data.slug + "/", "");
            return slug;
        };
    } ]).filter("timeAgo", function() {
        return function(dateString) {
            var dt = new Date(Date.parse(dateString));
            var now = new Date();
            var diff = now.getTime() - dt.getTime();
            var minutes = Math.floor(diff / 6e4);
            if (isNaN(minutes)) {
                return 1 + " Seconds";
            } else if (minutes === 0) {
                var seconds = Math.floor(diff / 1e3);
                return seconds + " Seconds";
            } else if (minutes > 1440) {
                return Math.floor(diff / 864e5) + " Days";
            } else if (minutes > 60) {
                var hours = Math.floor(diff / 36e5);
                minutes = Math.floor(diff % 36e5 / 6e4);
                return hours + " Hours and " + minutes + " Minutes";
            } else {
                return minutes + " Minutes";
            }
        };
    }).filter("orderObjectByReverse", function() {
        return function(input, attribute) {
            if (!angular.isObject(input)) {
                return input;
            }
            var array = [];
            for (var objectKey in input) {
                array.push(input[objectKey]);
            }
            array.sort(function(a, b) {
                var dta = Date.parse(a[attribute]);
                var dtb = Date.parse(b[attribute]);
                if (dta < dtb) {
                    return 1;
                } else if (dta === dtb) {
                    return 0;
                } else {
                    return -1;
                }
            });
            return array;
        };
    }).filter("orderObjectParam", function() {
        return function(input, attribute) {
            if (!angular.isObject(input)) {
                return input;
            }
            var array = [];
            for (var objectKey in input) {
                array.push(input[objectKey]);
            }
            array.sort(function(a, b) {
                return a[attribute].localeCompare(b[attribute]);
            });
            return array;
        };
    });
})();

"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Helper = function() {
    function Helper() {
        _classCallCheck(this, Helper);
        this.useLocalStorage = null;
    }
    _createClass(Helper, [ {
        key: "isEmpty",
        value: function isEmpty(obj) {
            return typeof obj === "undefined" || obj === null || obj === "" || obj === 0;
        }
    }, {
        key: "mergeObjects",
        value: function mergeObjects(obj1, obj2) {
            var obj3 = {};
            for (var attrname1 in obj1) {
                obj3[attrname1] = obj1[attrname1];
            }
            for (var attrname2 in obj2) {
                obj3[attrname2] = obj2[attrname2];
            }
            return obj3;
        }
    }, {
        key: "getCookie",
        value: function getCookie(name) {
            JSON.parse($.cookie(name));
        }
    }, {
        key: "setCookie",
        value: function setCookie(name, value, days) {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            $.cookie(name, value, {
                expires: days,
                path: "/"
            });
        }
    }, {
        key: "setToLocalStorage",
        value: function setToLocalStorage(name, value) {
            console.debug(value);
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            window.localStorage.setItem(name, value);
        }
    }, {
        key: "getFromLocalStorage",
        value: function getFromLocalStorage(name) {
            var data = window.localStorage.getItem(name);
            try {
                return JSON.parse(data);
            } catch (e) {
                return data;
            }
        }
    }, {
        key: "getPersistentValue",
        value: function getPersistentValue(name) {
            if (this.hasLocalStorage()) {
                return this.getFromLocalStorage(name);
            } else {
                return this.getCookie(name);
            }
        }
    }, {
        key: "setPersistentValue",
        value: function setPersistentValue(name, value) {
            if (this.hasLocalStorage()) {
                return this.setToLocalStorage(name, value);
            } else {
                return this.setCookie(name, value, 700);
            }
        }
    }, {
        key: "hasLocalStorage",
        value: function hasLocalStorage() {
            return typeof Storage !== "undefined";
        }
    } ]);
    return Helper;
}();

"use strict";

angular.module("travisWallBoard.resources", [ "ngResource" ]).factory("TravisRepos", function($resource, twsettings) {
    return {
        resource: function resource(name, uri, isPrivate, token) {
            return $resource(uri + "repos/" + name, {}, {
                getRepos: {
                    params: {
                        active: true
                    },
                    method: "GET",
                    headers: {
                        Accept: "application/vnd.travis-ci.2+json",
                        Authorization: twsettings.data.getToken(isPrivate, token)
                    }
                }
            });
        }
    };
}).factory("TravisToken", function($resource) {
    return $resource("https://api.travis-ci.com/auth/github", {
        github_token: "@githubtoken"
    }, {
        getToken: {
            params: {
                github_token: "@githubtoken"
            },
            method: "POST",
            headers: {
                Accept: "application/vnd.travis-ci.2+json"
            }
        }
    });
});

"use strict";

angular.module("travisWallBoard.builds", [ "ngResource" ]).factory("TravisBuilds", function($resource, twsettings, responsehelper) {
    return {
        resource: function resource(name, uri, isPrivate, token) {
            return $resource(uri + "repos/" + name + "/:slug/builds", {
                slug: "@slug",
                event_type: "push"
            }, {
                getBuilds: {
                    params: {
                        slug: 0,
                        event_type: "push"
                    },
                    method: "GET",
                    headers: {
                        Accept: "application/vnd.travis-ci.2+json",
                        Authorization: twsettings.data.getToken(isPrivate, token)
                    },
                    transformResponse: responsehelper.data.parseBuildData
                },
                getBuildsForProject: {
                    params: {
                        slug: 0,
                        event_type: undefined
                    },
                    method: "GET",
                    headers: {
                        Accept: "application/vnd.travis-ci.2+json",
                        Authorization: twsettings.data.getToken(isPrivate, token)
                    },
                    transformResponse: responsehelper.data.parseBuildData
                }
            });
        }
    };
});

"use strict";

(function() {
    "use strict";
    angular.module("travisWallBoard.services", []).service("TravisWallboardService", [ "twsettings", function(twsettings) {
        var $building = {};
        var getBuildData = function getBuildData($name, $commit, $build) {
            var $buildData = {};
            $buildData.name = $name;
            if (typeof $build === "undefined") {
                return $buildData;
            }
            if (typeof $build.state !== "undefined") {
                $buildData.state = $build.state;
            } else {
                $build.state = "passed";
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
        this.getReposFromResponse = function($response, $user) {
            var $repos = {};
            var projects = twsettings.data.projects;
            angular.forEach($response.repos, function($repo) {
                var name = $user.name;
                if ($user.isPrivate) {
                    name += " private";
                }
                if ($repo.active && (typeof projects[name] === "undefined" || typeof projects[name][$repo.id] === "undefined" || projects[name][$repo.id].enabled === "YES")) {
                    $repos[$repo.id] = $repo;
                }
            });
            return $repos;
        };
        this.getProjectsFromResponse = function($response) {
            var $repos = {};
            angular.forEach($response.repos, function($repo) {
                if ($repo.active) {
                    $repos[$repo.id] = $repos[$repo.id] || {};
                    $repos[$repo.id].name = $repo.slug;
                    $repos[$repo.id].enabled = "YES";
                }
            });
            return $repos;
        };
        this.getReposForUsersFromResponse = function($response, $user) {
            var $repos = {};
            var projects = twsettings.data.projects;
            angular.forEach($response.repos, function($repo) {
                var name = $user.name;
                if ($user.isPrivate) {
                    name += " private";
                }
                if ($repo.active && (typeof projects[name] === "undefined" || typeof projects[name][$repo.id] === "undefined" || projects[name][$repo.id] === "YES")) {
                    $repos[$repo.slug] = $user;
                }
            });
            return $repos;
        };
        this.getUpdatedReposFromResponse = function($repos, $response) {
            var $updatedRepos = {};
            angular.forEach($response.repos, function($repo) {
                if (typeof $building[$repo.id] === "undefined") {
                    $building[$repo.id] = "done";
                }
                if ($repo.active && $repo.last_build_finished_at == null && $building[$repo.id] !== "building") {
                    $building[$repo.id] = "building";
                    $updatedRepos[$repo.id] = $repo;
                } else if ($repo.active && $repo.last_build_finished_at !== null && $building[$repo.id] === "building") {
                    $building[$repo.id] = "done";
                    $updatedRepos[$repo.id] = $repo;
                }
            });
            return $updatedRepos;
        };
        this.getBuildsForRepo = function($slug, $repoId, $response) {
            var $latestBuild = $response.builds[0];
            var $latestCommit = $response.commits[0];
            return getBuildData($slug, $latestCommit, $latestBuild);
        };
        this.getBuildsForProject = function($slug, $response) {
            var $builds = {};
            angular.forEach($response.builds, function(build, key) {
                var $data = getBuildData($slug, $response.commits[key], build);
                if (typeof $builds[$data.branch] === "undefined") {
                    $builds[$data.branch] = $data;
                }
            });
            return $builds;
        };
    } ]).factory("DisplayFunctions", function() {
        return {
            isFailed: function isFailed(state) {
                return state === "failed" || state === "error" || state === "errored";
            },
            getErrorsClass: function getErrorsClass(builds) {
                var count = 0;
                angular.forEach(builds, function(build) {
                    if (build.state === "failed" || build.state === "error" || build.state === "errored") {
                        var dt = new Date(Date.parse(build.finished_at));
                        var now = new Date();
                        var diff = now.getTime() - dt.getTime();
                        var minutes = Math.floor(diff / 6e4);
                        if (minutes < 5) {
                            count++;
                        }
                    }
                });
                if (count > 3) {
                    return "col-md-6 errors-" + count;
                } else {
                    return "col-md-12 errors-" + count;
                }
            },
            showModal: function showModal(builds) {
                var failed = false;
                angular.forEach(builds, function(build) {
                    if (build.state === "failed" || build.state === "error" || build.state === "errored") {
                        var dt = new Date(Date.parse(build.finishedAt));
                        var now = new Date();
                        var diff = now.getTime() - dt.getTime();
                        var minutes = Math.floor(diff / 6e4);
                        if (minutes < 5) {
                            failed = true;
                            return true;
                        }
                    }
                });
                return failed;
            },
            recentError: function recentError(finishedAt) {
                var dt = new Date(Date.parse(finishedAt));
                var now = new Date();
                var diff = now.getTime() - dt.getTime();
                var minutes = Math.floor(diff / 6e4);
                if (minutes < 5) {
                    return true;
                }
                return false;
            },
            isBuilding: function isBuilding(state) {
                return state === "started" || state === "created" || state === "received";
            },
            isPassing: function isPassing(state) {
                return state === "passed" || state === "canceled";
            }
        };
    }).value("version", "0.1");
})();

"use strict";

(function() {
    "use strict";
    var isMenuHidden = true;
    var isMenuAnimating = false;
    var getAgo = function getAgo(dateString) {
        var dt = new Date(Date.parse(dateString));
        var now = new Date();
        var diff = now.getTime() - dt.getTime();
        var minutes = Math.floor(diff / 6e4);
        if (isNaN(minutes)) {
            return 1 + " Seconds";
        } else if (minutes === 0) {
            var seconds = Math.floor(diff / 1e3);
            return seconds + " Seconds";
        } else if (minutes > 1440) {
            return Math.floor(diff / 864e5) + " Days";
        } else if (minutes > 60) {
            var hours = Math.floor(diff / 36e5);
            minutes = Math.floor(diff % 36e5 / 6e4);
            return hours + " Hours and " + minutes + " Minutes";
        } else {
            return minutes + " Minutes";
        }
    };
    $(document).ready(function() {
        setInterval(function() {
            $(".time").each(function() {
                if (typeof $(this).data("finished_at") === "undefined") {
                    $(this).attr("data-finished_at", Date("Now").toString());
                }
                $(this).text(getAgo($(this).data("finished_at")));
            });
        }, 1e3);
        function showMenu() {
            $(".tw-menu").animate({
                opacity: 1,
                top: 0
            }, 1e3, function() {
                isMenuAnimating = false;
            });
            $(".board").animate({
                top: 52
            }, 1e3);
        }
        function hideMenu() {
            $(".tw-menu").animate({
                opacity: .25,
                top: -52
            }, 2e3, function() {
                isMenuAnimating = false;
            });
            $(".board").animate({
                top: 0
            }, 2e3);
        }
        $(".board").mousemove(function(event) {
            if (event.pageY < 72 && !isMenuAnimating && isMenuHidden) {
                isMenuAnimating = true;
                isMenuHidden = false;
                showMenu();
            } else if (window.location.hash.indexOf("settings") === -1 && !$("ul.nav.navbar-nav").find("li").hasClass("open") && !isMenuAnimating && !isMenuHidden) {
                isMenuAnimating = true;
                isMenuHidden = true;
                hideMenu();
            }
        });
    });
})($);

"use strict";

angular.module("travisWallBoard.controllers", []);

"use strict";

angular.module("travisWallBoard.controllers").controller("TestController", [ "$scope", function($scope) {
    $scope.test = "Test succesfull";
    $scope.testFunction = function testfunction() {
        return $scope.test;
    };
    $scope.setTest = function setTest(test) {
        $scope.test = test;
    };
} ]);

"use strict";

angular.module("travisWallBoard.objects", []).provider("responsehelper", function() {
    var data = {
        parseBuildData: function parseBuildData(data) {
            var parsed = angular.fromJson(data);
            var response = {};
            response.builds = [];
            angular.forEach(parsed.builds, function(build, idx) {
                var buildModel = new Build(build.commit_id, build.number, build.number, build.state, build.started_at, build.finished_at, build.pull_request);
                var committerModel = new Committer(parsed.commits[idx].committer_name, parsed.commits[idx].committer_email);
                var commitModel = new Commit(parsed.commits[idx].message, committerModel);
                if (build.pull_request) {
                    buildModel.setBranch(build.pull_request_title);
                } else {
                    buildModel.setBranch(parsed.commits[idx].branch);
                }
                buildModel.setCommit(commitModel);
                response.builds.push(buildModel);
            });
            return response;
        }
    };
    return {
        $get: function $get() {
            return {
                data: data
            };
        }
    };
}).provider("twsettings", function() {
    var helper = new Helper();
    var data = {
        useMocks: false,
        private_uri: "https://api.travis-ci.com/",
        opensource_uri: "https://api.travis-ci.org/",
        users: [],
        projects: {},
        repos: {},
        setUsers: function setUsers($users) {
            this.users = $users;
            helper.setPersistentValue("userData", $users);
        },
        setProjects: function setProjects($projects) {
            this.projects = $projects;
            helper.setPersistentValue("projectData", $projects);
        },
        getToken: function getToken(isPrivate, token) {
            if (isPrivate === "YES") {
                return "token " + token;
            } else {
                return null;
            }
        },
        getSlug: function getSlug() {
            return this.slug;
        },
        getUri: function getUri($user) {
            if (this.useMocks) {
                return "/Mocks/MockServer.php/?slug=";
            } else if ($user.isPrivate === "YES") {
                return this.private_uri;
            } else {
                return this.opensource_uri;
            }
        }
    };
    return {
        loadUserData: function loadUserData() {
            data.users = helper.getPersistentValue("userData");
            if (data.users == null) {
                data.users = [];
            }
        },
        loadProjectData: function loadProjectData() {
            data.projects = helper.getPersistentValue("projectData");
            if (data.projects == null) {
                data.projects = {};
            }
        },
        $get: function $get() {
            return {
                data: data
            };
        }
    };
});

"use strict";

angular.module("travisWallBoard.controllers").controller("ProjectController", [ "$scope", "twsettings", "TravisWallboardService", "DisplayFunctions", "$interval", "TravisBuilds", "$routeParams", function($scope, twsettings, $travisWallboardService, DisplayFunctions, $interval, TravisBuilds, routeParams) {
    var interval = 1e3;
    var errors = 0;
    $scope.displayFunctions = DisplayFunctions;
    $scope.repos = {};
    $scope.builds = {};
    $scope.errorScreen = false;
    $scope.handleErrors = function() {
        if (typeof errors === "undefined") {
            errors = 0;
            $scope.errorScreen = false;
        } else {
            errors += 1;
        }
        if (errors > 10) {
            $scope.errorScreen = true;
        }
    };
    $scope.loadBuildsForRepo = function() {
        var slug = routeParams.slug;
        var $user = twsettings.data.repos[routeParams.user + "/" + routeParams.slug];
        var timer = $user.polling || 30;
        if (typeof $user.lastupdate === "undefined" || $user.lastupdate >= timer * interval) {
            $user.lastupdate = 0;
            $scope.loadBuild($user, slug);
        } else {
            $user.lastupdate += interval;
        }
    };
    $scope.loadBuild = function($user, slug) {
        TravisBuilds.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getBuildsForProject({
            slug: slug
        }, function(response) {
            $scope.builds = response.builds;
        }, $scope.handleErrors);
    };
    if (twsettings.data.repos[routeParams.user + "/" + routeParams.slug]) {
        $scope.loadBuildsForRepo();
    }
    var initialBuildRepoTimer = $interval(function() {
        if (twsettings.data.repos[routeParams.user + "/" + routeParams.slug]) {
            $scope.loadBuildsForRepo();
            $interval.cancel(initialBuildRepoTimer);
        }
    }, 2e3);
    var buildRepoTimer = $interval($scope.loadBuildsForRepo, interval);
    $scope.$on("$destroy", function() {
        $interval.cancel(buildRepoTimer);
    });
} ]);

"use strict";

angular.module("travisWallBoard.controllers").controller("MenuReposController", [ "$scope", "twsettings", "DisplayFunctions", "$interval", "TravisWallboardService", "TravisRepos", "$routeParams", function($scope, twsettings, DisplayFunctions, $interval, $travisWallboardService, TravisRepos, routeParams) {
    var helper = new Helper();
    if (angular.isDefined(routeParams.repo)) {
        twsettings.data.setUsers([ {
            isPrivate: "NO",
            name: routeParams.repo
        } ]);
    }
    $scope.displayFunctions = DisplayFunctions;
    $scope.repos = $scope.repos || {};
    $scope.setInitialBuilds = function() {
        angular.forEach(twsettings.data.users, function($user) {
            if (!helper.isEmpty($user.name)) {
                TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getRepos(function(response) {
                    $scope.repos = helper.mergeObjects($scope.repos, $travisWallboardService.getReposFromResponse(response, $user));
                    twsettings.data.repos = helper.mergeObjects(twsettings.data.repos, $travisWallboardService.getReposForUsersFromResponse(response, $user));
                });
            }
        });
    };
    $scope.setInitialBuilds();
} ]);

"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Menu = function Menu(name) {
    _classCallCheck(this, Menu);
    this.name = name;
};

"use strict";

angular.module("travisWallBoard.controllers").controller("ReposController", [ "$scope", "twsettings", "TravisWallboardService", "DisplayFunctions", "$interval", "TravisRepos", "TravisBuilds", "$routeParams", function($scope, twsettings, $travisWallboardService, DisplayFunctions, $interval, TravisRepos, TravisBuilds, routeParams) {
    var errors = 0;
    var helper = new Helper();
    var interval = 1e3;
    if (angular.isDefined(routeParams.repo)) {
        twsettings.data.setUsers([ {
            isPrivate: "NO",
            name: routeParams.repo
        } ]);
    }
    $scope.displayFunctions = DisplayFunctions;
    $scope.repos = {};
    $scope.pendingRepos = {};
    $scope.builds = {};
    $scope.errorScreen = false;
    $scope.loadBuilds = function($repos, $user) {
        angular.forEach($repos, function(repo) {
            $scope.loadBuildsForRepo(repo, $user, true);
        });
    };
    $scope.checkUpdateFinished = function(newbuild, $repoid, $repo) {
        if (typeof $scope.builds[$repo.id] !== "undefined") {
            if (typeof newbuild.state !== "undefined" && newbuild.state == $scope.builds[$repoid].state && newbuild.started_at === $scope.builds[$repoid].started_at && newbuild.finished_at === $scope.builds[$repoid].finished_at) {
                $scope.pendingRepos[$repoid] = $repo;
            } else if (typeof $scope.pendingRepos[$repoid] !== "undefined") {
                $scope.pendingRepos[$repoid] = null;
                delete $scope.pendingRepos[$repoid];
            }
        }
    };
    $scope.loadBuildsForRepo = function($repo, $user, $first) {
        var slug = $repo.slug.replace($user.name + "/", "");
        TravisBuilds.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getBuilds({
            slug: slug
        }, function($response) {
            if (typeof $response.builds !== "undefined" && typeof $response.builds[0] !== "undefined") {
                var newbuild = $response.builds[0];
                newbuild.name = slug;
                if ($first !== true) {
                    $scope.checkUpdateFinished(newbuild, $repo.id, $repo);
                }
                $scope.builds[$repo.id] = newbuild;
                errors = 0;
            }
        }, $scope.handleErrors);
    };
    $scope.loadRepos = function() {
        angular.forEach(twsettings.data.users, function($user) {
            if (!helper.isEmpty($user.name)) {
                var resource = TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token);
                resource.getRepos(function(response) {
                    errors = 0;
                    var newRepos = $travisWallboardService.getReposFromResponse(response, $user);
                    $scope.repos = helper.mergeObjects($scope.repos, newRepos);
                    $scope.loadBuilds(newRepos, $user);
                }, $scope.handleErrors);
            }
        });
    };
    $scope.pollRepos = function() {
        angular.forEach(twsettings.data.users, function($user) {
            var timer = $user.polling || 30;
            if (typeof $user.lastupdate === "undefined" || $user.lastupdate >= timer * interval) {
                $user.lastupdate = 0;
                $scope.loadRepo($user);
            } else {
                $user.lastupdate += interval;
            }
        });
    };
    $scope.loadRepo = function($user) {
        TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token).getRepos(function(response) {
            errors = 0;
            $scope.errorScreen = false;
            var $updatedRepos = $travisWallboardService.getUpdatedReposFromResponse($scope.repos, response);
            angular.forEach($updatedRepos, function($repo) {
                $scope.loadBuildsForRepo($repo, $user, false);
            });
            angular.forEach($scope.pendingRepos, function($repo) {
                $scope.loadBuildsForRepo($repo, $user, false);
            });
        }, $scope.handleErrors);
    };
    $scope.handleErrors = function() {
        if (typeof errors === "undefined") {
            errors = 0;
            $scope.errorScreen = false;
        } else {
            errors += 1;
        }
        if (errors > 10) {
            $scope.errorScreen = true;
        }
    };
    $scope.loadRepos();
    var pollTimer = $interval($scope.pollRepos, interval);
    $scope.$on("$destroy", function() {
        $interval.cancel(pollTimer);
    });
} ]);

"use strict";

angular.module("travisWallBoard.controllers").controller("SettingsController", [ "$scope", "twsettings", "md5", "TravisToken", function($scope, twsettings, md5, TravisToken) {
    $scope.users = twsettings.data.users || [];
    $scope.submit = function() {
        twsettings.data.setUsers($scope.users);
    };
    $scope.remove = function(idx) {
        $scope.users.splice(idx, 1);
    };
    $scope.getToken = function() {
        TravisToken.getToken({
            githubtoken: $scope.githubtoken
        }, function(response) {
            $scope.generatedtoken = response.access_token;
        });
    };
    $scope.githubtoken = null;
    $scope.generatedtoken = null;
} ]);

"use strict";

angular.module("travisWallBoard.controllers").controller("RepoSettingsController", [ "$scope", "twsettings", "TravisWallboardService", "md5", "TravisRepos", function($scope, twsettings, $travisWallboardService, md5, TravisRepos) {
    $scope.users = twsettings.data.users || [];
    $scope.repos = $scope.repos || twsettings.data.projects;
    $scope.submit = function() {
        twsettings.data.setProjects($scope.repos);
        jQuery("#repo-success").show(1e3);
        setTimeout(function() {
            jQuery("#repo-success").hide(1e3);
        }, 1e4);
    };
    $scope.loadRepos = function() {
        angular.forEach(twsettings.data.users, function($user) {
            if (!helper.isEmpty($user.name)) {
                var resource = TravisRepos.resource($user.name, twsettings.data.getUri($user), $user.isPrivate, $user.token);
                resource.getRepos(function(response) {
                    var newRepos = $travisWallboardService.getProjectsFromResponse(response);
                    var name = $user.name;
                    if ($user.isPrivate) {
                        name += " private";
                    }
                    if (helper.isEmpty($scope.repos[name])) {
                        $scope.repos[name] = newRepos;
                    }
                });
            }
        });
    };
    $scope.loadRepos();
} ]);

"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Build = function() {
    function Build(id, number, name, state, startedAt, finishedAt, isPr) {
        _classCallCheck(this, Build);
        this.id = id;
        this.number = number;
        this.name = name;
        this.state = state;
        this.startedAt = startedAt;
        this.finishedAt = finishedAt;
        this.isPr = isPr;
        this.branch = null;
        this.commit = null;
    }
    _createClass(Build, [ {
        key: "setCommit",
        value: function setCommit(commit) {
            this.commit = commit;
        }
    }, {
        key: "setBranch",
        value: function setBranch(branch) {
            this.branch = branch;
        }
    }, {
        key: "isBuilding",
        value: function isBuilding() {
            return this.state === "started" || this.state === "created" || this.state === "received";
        }
    }, {
        key: "isPassing",
        value: function isPassing() {
            return this.state === "passed" || this.state === "canceled";
        }
    }, {
        key: "isFailed",
        value: function isFailed() {
            return this.state === "failed" || this.state === "error" || this.state === "errored";
        }
    }, {
        key: "hasRecentError",
        value: function hasRecentError() {
            var dt = new Date(Date.parse(this.finishedAt));
            var now = new Date();
            var diff = now.getTime() - dt.getTime();
            var minutes = Math.floor(diff / 6e4);
            if (minutes < 5) {
                return true;
            }
            return false;
        }
    } ]);
    return Build;
}();

"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Commit = function Commit(message, committer) {
    _classCallCheck(this, Commit);
    this.message = message;
    this.committer = committer;
};

"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Committer = function Committer(name, email) {
    _classCallCheck(this, Committer);
    this.name = name;
    this.email = email;
};
//# sourceMappingURL=wallboard.combined.js.map