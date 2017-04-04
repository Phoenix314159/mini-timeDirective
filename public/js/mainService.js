angular.module('timeApp').service('mainService',function ($http) {
    let serverUrl = 'http://localhost:3023'
    this.getData = function () {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/getdata'
        });
    }
    this.postData = function (name, age, height) {
        return $http({
            method: 'POST',
            data: {name:name, age:age, height:height},
            url: serverUrl + '/api/postdata'
        });
    }
    this.deletePerson = function () {
        return $http({
            method: 'DELETE',
            url: serverUrl + '/api/deleteperson'
        })
    }
    this.getHomeData = function() {
        return $http({
            method: 'GET',
            url: serverUrl + '/api/gethomedata'
        })
    }
    this.addPlace = function(city, state, country){
        return $http({
            method:'POST',
            data: {city:city, state:state, country:country},
            url: serverUrl + '/api/addplace'
        })
    }
    this.getPlaces = function () {
        return $http({
            method:'GET',
            url: serverUrl + '/api/getplaces'
        })
    }
    this.deletePlace = function () {
        return $http({
            method: 'DELETE',
            url: serverUrl + '/api/deleteplace'
        })
    }
});
