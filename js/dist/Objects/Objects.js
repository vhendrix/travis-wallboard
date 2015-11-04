'use strict';

angular.module('travisWallBoard.objects', []).provider('responsehelper', function () {
    var data = {
        parseBuildData: function parseBuildData(data) {
            var parsed = angular.fromJson(data);
            var response = {};
            response.builds = [];
            angular.forEach(parsed.builds, function (build, idx) {
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
            return { data: data };
        }
    };
}).provider('twsettings', function () {
    var helper = new Helper();
    var data = {
        useMocks: false,
        private_uri: 'https://api.travis-ci.com/',
        opensource_uri: 'https://api.travis-ci.org/',
        users: [],
        projects: {},
        //holds what repos use what connection data.
        repos: {},

        setUsers: function setUsers($users) {
            this.users = $users;
            helper.setPersistentValue('userData', $users);
        },

        setProjects: function setProjects($projects) {
            this.projects = $projects;
            helper.setPersistentValue('projectData', $projects);
        },

        getToken: function getToken(isPrivate, token) {
            if (isPrivate === "YES") {
                return 'token ' + token;
            } else {
                return null;
            }
        },

        getSlug: function getSlug() {
            return this.slug;
        },

        getUri: function getUri($user) {
            if (this.useMocks) {
                return '/Mocks/MockServer.php/?slug=';
            } else if ($user.isPrivate === "YES") {
                return this.private_uri;
            } else {
                return this.opensource_uri;
            }
        }
    };

    return {
        loadUserData: function loadUserData() {
            data.users = helper.getPersistentValue('userData');
            if (data.users == null) {
                data.users = [];
            }
        },
        loadProjectData: function loadProjectData() {
            data.projects = helper.getPersistentValue('projectData');

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
//# sourceMappingURL=Objects.js.map
