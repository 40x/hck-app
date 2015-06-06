(function(){


    var app = angular.module('application', ['ui.router']);


    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                controller: 'homeController',
                templateUrl: 'partials/home.html'
            });

    });

})();