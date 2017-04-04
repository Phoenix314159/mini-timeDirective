angular.module('timeApp').controller('mainCtrl', function ($scope, mainService) {
   $scope.text = 'Dude';


   mainService.getData().then(function (response) {

       $scope.data = response.data;
   })
    $scope.morePeople = function () {
        mainService.postData($scope.name, $scope.age, $scope.height).then(function (response) {

            mainService.getData().then(function (response2) {
                $scope.data = response2.data;
            })
        })
    }
    $scope.deletePerson = function () {
        mainService.deletePerson().then(function(response) {

            mainService.getData().then(function(response2) {
                $scope.data = response2.data;
            });
        });
    }

});
