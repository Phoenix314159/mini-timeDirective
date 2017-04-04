angular.module('timeApp', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider

            .state('home',{
                url: '/home',
                templateUrl: './views/home.html',
                controller: 'homeCtrl'

            })
            .state('people',{
                url: '/people',
                templateUrl: './views/people.html',
                controller: 'mainCtrl'
            })
            .state('places',{
                url: '/places',
                templateUrl: './views/places.html',
                controller: 'placesCtrl'
            });

        $urlRouterProvider.otherwise('/');
    })
