/* jshint node: true */
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            "babel": {
                options: {
                    sourceMap: true,
                    presets: ['es2015']

                },
                dist: {
                    files: {
                        "js/dist/app.js": "js/src/app.js",
                        "js/dist/directives.js": "js/src/directives.js",
                        "js/dist/filters.js": "js/src/filters.js",
                        "js/dist/helpers.js": "js/src/helpers.js",
                        "js/dist/resources.js": "js/src/resources.js",
                        "js/dist/services.js": "js/src/services.js",
                        "js/dist/wallboard.js": "js/src/wallboard.js",

                        // Controllers

                        "js/dist/Controllers/Controllers.js": "js/src/Controllers/Controllers.js",
                        "js/dist/Controllers/TestController.js": "js/src/Controllers/TestController.js",

                        // Objects

                        "js/dist/Objects/Objects.js": "js/src/Objects/Objects.js",

                        // Project

                        "js/dist/Project/ProjectController.js": "js/src/Project/ProjectController.js",

                        // Menu

                        "js/dist/Menu/MenuController.js": "js/src/Menu/MenuController.js",
                        "js/dist/Menu/MenuModel.js": "js/src/Menu/MenuModel.js",

                        // Repo

                        "js/dist/Repo/RepoController.js": "js/src/Repo/RepoController.js",

                        // Settings

                        "js/dist/Settings/SettingsController.js": "js/src/Settings/SettingsController.js",

                        // Settings

                        "js/dist/Settings/Repo/RepoSettingsController.js": "js/src/Settings/Repo/RepoSettingsController.js"

                    }
                }
            },
            uglify: {
                options: {
                    mangle: false,
                    sourceMap: true
                },
                my_target: {
                    files: {
                        'js/wallboard.min.js': [
                            "js/dist/app.js",
                            "js/dist/directives.js",
                            "js/dist/filters.js",
                            "js/dist/helpers.js",
                            "js/dist/resources.js",
                            "js/dist/services.js",
                            "js/dist/wallboard.js",

                            // Controllers

                            "js/dist/Controllers/Controllers.js",
                            "js/dist/Controllers/TestController.js",

                            // Objects

                            "js/dist/Objects/Objects.js",

                            // Project

                            "js/dist/Project/ProjectController.js",

                            // Menu

                            "js/dist/Menu/MenuController.js",
                            "js/dist/Menu/MenuModel.js",

                            // Repo

                            "js/dist/Repo/RepoController.js",

                            // Settings

                            "js/dist/Settings/SettingsController.js",

                            // Settings

                            "js/dist/Settings/Repo/RepoSettingsController.js"
                        ]
                    }
                }
            },
            jshint: {
                all: [
                    "Gruntfile.js",
                    "js/*.js",
                    "js/Controllers/*.js",
                    "js/Objects/*.js",
                    "Tests/**/*.js"
                ],
                options: {
                    jshintrc: '.jshintrc'
                }
            }
        }
    );

    require("load-grunt-tasks")(grunt);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['test']);
    grunt.registerTask('babelgen', ['babel', 'uglify']);
};
