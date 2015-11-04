'use strict';

// TEST controller to test if the test setup works.
angular.module('travisWallBoard.controllers').controller('TestController', ['$scope', function ($scope) {
  $scope.test = 'Test succesfull';

  $scope.testFunction = function testfunction() {
    return $scope.test;
  };

  $scope.setTest = function setTest(test) {
    $scope.test = test;
  };
}]);
//# sourceMappingURL=TestController.js.map
