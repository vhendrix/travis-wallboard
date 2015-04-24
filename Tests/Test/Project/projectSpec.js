describe(
  'TestController', function () {
    var scope;//we'll use this scope in our tests

    //mock Application to allow us to inject our own dependencies
      beforeEach(module('travisWallBoard.controllers'));

    var $controller;

    beforeEach(inject(function(_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
    }));

    describe('$scope.test', function() {
      it('sets the strength to "strong" if the password length is >8 chars', function() {
        var $scope = {};
        var controller = $controller('TestController', { $scope: $scope });
        expect($scope.test).toEqual('hello');
      });
    });
  }
);
