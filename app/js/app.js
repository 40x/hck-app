(function(){

    angular.module('application', ['ui.router']);


    angular.module('application').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                controller: 'homeController',
                controllerAs: 'hc'
            })

            .state('notifications', {
                url: '/notifications',
                templateUrl: 'partials/notifications.html',
                controller: 'notificationController',
                controllerAs: 'nc'
            });

    });

})();