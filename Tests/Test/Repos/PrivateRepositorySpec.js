/*
 checker spec checks if the test environment still works.
 */
describe(
  'TestController', function () {
    //mock Application to allow us to inject our own dependencies
    beforeEach(module('travisWallBoard.controllers'));

    var $controller;

    beforeEach(
      inject(
        function (_$controller_) {
          // The injector unwraps the underscores (_) from around the parameter names when matching
          $controller = _$controller_;
        }
      )
    );

    describe(
      'Test controller works as a sanity check', function () {
        it(
          'sees if test in scope indeed has the text "Test succesfull"', function () {
            var $scope = {};
            $controller('TestController', {$scope: $scope});
            expect($scope.test).toEqual('Test succesfull');
          }
        );
        it(
          'sees if the test function indeed retuns the text from the scope "Test succesfull"', function () {
            var $scope = {};
            $controller('TestController', {$scope: $scope});
            expect($scope.testFunction()).toEqual('Test succesfull');
          }
        );
        it(
          'sees if the set function indeed sets text to the scope', function () {
            var $scope = {};
            $controller('TestController', {$scope: $scope});
            $scope.setTest('Changed');
            expect($scope.test).toEqual('Changed');
            expect($scope.testFunction()).toEqual('Changed');
          }
        );
      }
    );
  }
);
