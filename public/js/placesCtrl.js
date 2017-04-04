angular.module('timeApp').controller('placesCtrl', function ($scope, mainService) {

    $scope.addPlace = function () {
        mainService.addPlace($scope.city, $scope.state, $scope.country).then(function (response) {
            console.log(response.data);
            mainService.getPlaces().then(function (response2) {
                $scope.places = response2.data;
            })
        })
    }

    mainService.getPlaces().then(function (response) {
        $scope.places = response.data;
    })
    $scope.deletePlace = function () {
        mainService.deletePlace().then(function (response) {
            console.log(response);
            mainService.getPlaces().then(function (response2) {
                $scope.places = response2.data;
            })
        })
    }

});
