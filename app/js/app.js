

    var app = angular.module('application', ['ngRoute', 'homePage']);

    var homePage = angular.module('homePage', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider){
        $routeProvider
            .when('/home',
            {
                controller: 'homeController',
                templateUrl: 'partials/home.html'
            })
            .when('/landing',
            {
                controller: 'landingController',
                templateUrl: 'partials/landing.html'
            })
            .when('/notifications',
            {
                controller: 'notificationController',
                templateUrl: 'partials/notifications.html'
            })
            .otherwise({redirectTo: '/home'});
    }]);
