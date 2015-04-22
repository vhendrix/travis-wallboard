'use strict';


// Declare app level module which depends on filters, and services
angular.module('travisWallBoard', ['angular-md5','ngRoute','travisWallBoard.filters', 'travisWallBoard.services', 'travisWallBoard.directives', 'travisWallBoard.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/repos', {templateUrl: 'partials/repos.html', controller: 'ReposController'});
        $routeProvider.when('/project/:slug', {templateUrl: 'partials/project.html', controller: 'ProjectController'});
        $routeProvider.otherwise({redirectTo: '/repos'});
    }]);
