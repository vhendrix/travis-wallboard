(function () {
  'use strict';
  // Declare app level module which depends on filters, and services.
  angular.module(
    'travisWallBoard',
    [
      'angular-md5',
      'ngRoute',
      'travisWallBoard.objects',
      'travisWallBoard.filters',
      'travisWallBoard.services',
      'travisWallBoard.directives',
      'travisWallBoard.controllers',
      'travisWallBoard.resources'
    ]
  )
    .config(
    [
      '$routeProvider',
      'twsettingsProvider',
      function ($routeProvider, twsettings) {
        twsettings.loadUserData();

        $routeProvider.when('/repos', {templateUrl: 'partials/repos.html', controller: 'ReposController'});
        $routeProvider.when('/showmyrepos/:repo', {templateUrl: 'partials/repos.html', controller: 'ReposController'});
        $routeProvider.when(
          '/project/:user/:slug', {
            templateUrl: 'partials/project.html',
            controller: 'ProjectController'
          }
        );
        $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'SettingsController'});
        $routeProvider.otherwise({redirectTo: '/repos'});
      }
    ]
  );
})();
