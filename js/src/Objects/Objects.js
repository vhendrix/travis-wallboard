angular.module('travisWallBoard.objects', [])
    .provider(
        'responsehelper', function () {
            let data = {
                parseBuildData: function (data) {
                    let parsed = angular.fromJson(data);
                    let response = {};
                    response.builds = [];
                    angular.forEach(
                        parsed.builds, function (build, idx) {
                            let buildModel = new Build(build.commit_id, build.number, build.number, build.state, build.started_at, build.finished_at, build.pull_request);
                            let committerModel = new Committer(parsed.commits[idx].committer_name, parsed.commits[idx].committer_email);
                            let commitModel = new Commit(parsed.commits[idx].message, committerModel);
                            if (build.pull_request) {
                                buildModel.setBranch(build.pull_request_title);
                            } else {
                                buildModel.setBranch(parsed.commits[idx].branch);
                            }
                            buildModel.setCommit(commitModel);
                            response.builds.push(buildModel);
                        }
                    );
                    return response;
                }
            };
            return {
                $get: function () {
                    return {data: data};
                }
            }
        }
    )
    .provider(
        'twsettings', function () {
            let helper = new Helper();
            let data = {
                useMocks: false,
                private_uri: 'https://api.travis-ci.com/',
                opensource_uri: 'https://api.travis-ci.org/',
                users: [],
                projects: {},
                //holds what repos use what connection data.
                repos: {},

                setUsers: function ($users) {
                    this.users = $users;
                    helper.setPersistentValue('userData', $users);
                },

                setProjects: function ($projects) {
                    this.projects = $projects;
                    helper.setPersistentValue('projectData', $projects);
                },

                getToken: function (isPrivate, token) {
                    if (isPrivate === "YES") {
                        return 'token ' + token;
                    } else {
                        return null;
                    }
                },

                getSlug: function () {
                    return this.slug;
                },

                getUri: function ($user) {
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
                loadUserData: function () {
                    data.users = helper.getPersistentValue('userData');
                    if (data.users == null) {
                        data.users = [];
                    }
                },
                loadProjectData: function () {
                    data.projects = helper.getPersistentValue('projectData');

                    if (data.projects == null) {
                        data.projects = {};
                    }
                },
                $get: function () {
                    return {
                        data: data
                    };
                }
            };
        }
    );
