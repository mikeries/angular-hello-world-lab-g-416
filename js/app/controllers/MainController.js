function MainController($scope) {
  $scope.name = 'Bill Gates';
  $scope.phone = '01234567890'
}

angular
	.module('app')
	.controller('MainController', MainController);
