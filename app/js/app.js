(function(){

    angular.module('application', ['ui.router']);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

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
            })
            .state('activity', {
                url:'/activity',
                templateUrl: 'partials/activity.html',
                controller: 'ActivityCtrl',
                controllerAs: 'acVm'
            });

    }

    angular.module('application').config(config);

})();