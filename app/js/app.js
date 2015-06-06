(function(){

    angular.module('application', ['ui.router', 'ui.bootstrap']);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html',
                controller: 'homeController',
                controllerAs: 'hc'
            })
            .state('notifications', {
                url: '/notifications',
                templateUrl: 'partials/notifications.html',
                controller: 'notificationController',
                controllerAs: 'notificationVm'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'partials/profile.html',
                controller: 'profileController',
                controllerAs: 'pc'
            })
            .state('activity', {
                url:'/activity',
                templateUrl: 'partials/activity.html',
                controller: 'ActivityCtrl',
                controllerAs: 'acVm'
            })
            .state('settings', {
                url: '/settings',
                templateUrl: 'partials/settings.html',
                controller: 'settingsController',
                controllerAs: "settingsvm"
            })
            .state('settings.account', {
                url: '/account',
                templateUrl: 'partials/account.html',
                controller: 'settingsController',
                controllerAs: "settingsvm"
            })
            .state('settings.privacy', {
                url: '/privacy',
                templateUrl: 'partials/privacy.html',
                controller: 'settingsController',
                controllerAs: "settingsvm"
            })
            .state('settings.orderHistory', {
                    url: '/orderHistory',
                    templateUrl: 'partials/orderHistory.html',
                    controller: 'settingsController',
                    controllerAs: "settingsvm"
                })
            .state('settings.theme', {
                    url: '/theme',
                    templateUrl: 'partials/theme.html',
                    controller: 'ThemeController',
                    controllerAs: "themevm"
                });

    }

    angular.module('application').config(config);

})();