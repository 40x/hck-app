

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
            .when('/profile',
            {
                controller: 'profileController',
                templateUrl: 'partials/profifle.html'
            })
            .when('/settings',
            {
                controller: 'settingsController',
                templateUrl: 'partials/settings.html'
            })
            .when('/activity',
            {
                controller: 'activityController',
                templateUrl: 'partials/activity.html'
            })
            .otherwise({redirectTo: '/home'});
    }]);
