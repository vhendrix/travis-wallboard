/*
 checker spec checks if the test environment still works.
 */
describe(
  'RepositoryTest', function () {
    //mock Application to allow us to inject our own dependencies
    beforeEach(module('travisWallBoard.controllers'));
    beforeEach(module('travisWallBoard.objects'));
    beforeEach(module('travisWallBoard.services'));
    beforeEach(module('travisWallBoard.resources'));
    beforeEach(module('angular-md5'));
    beforeEach(module('ngRoute'));

    var
      $controller,
      $q,
      $rootScope,
      $scope,
      mockRepoService,
      twsettings,
      queryDeferred;

    beforeEach(
      inject(
        function (_$q_, _$rootScope_) {
          $q = _$q_;
          $rootScope = _$rootScope_;
        }
      )
    );

    beforeEach(
      inject(
        function (_TravisRepos_, _twsettings_, _$controller_) {
          $scope = {};

          $scope.$on = function () {
          };

          $controller = _$controller_;

          twsettings = _twsettings_;
          twsettings.data.users = [{name:'test'}];

          mockRepoService = {
              resource: function (  ) {
                return {
                  getRepos: function () {
                    queryDeferred = $q.defer();
                    queryDeferred.resolve({id: 1, name: 'test'});
                    return queryDeferred;
                  }
                };
              }
          };
        }
      )
    );

    describe(
      'Repository initalizes test', function () {
        it(
          'Load builds  calls loadBuildsForRepo', function () {
            $controller('ReposController', {$scope: $scope, TravisRepos: mockRepoService, twsettings: twsettings});

            $scope.loadBuildsForRepo = jasmine.createSpy('loadBuildsForRepo');
            $scope.loadBuilds({1: 1, 2: 2, 3: 3, 4: 4}, 'testuser');

            expect($scope.loadBuildsForRepo).toHaveBeenCalledWith(1, 'testuser');
            expect($scope.loadBuildsForRepo).toHaveBeenCalledWith(2, 'testuser');
            expect($scope.loadBuildsForRepo).toHaveBeenCalledWith(3, 'testuser');
            expect($scope.loadBuildsForRepo).toHaveBeenCalledWith(4, 'testuser');
          }
        );
      }
    );

  }
)
;
