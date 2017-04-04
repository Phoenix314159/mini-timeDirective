angular.module('timeApp').controller('homeCtrl', function ($scope, mainService) {
   $scope.picture = mainService.getHomeData;
});
