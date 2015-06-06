(function(){
    'use strict';

    angular.module('application').
        controller('ThemeController', ThemeControllerFn);

    ThemeControllerFn.$inject = ['userDetailsFactory','$rootScope'];

    function ThemeControllerFn(userDetailsFactory, $rootScope) {

        var theme = this;

        theme.passTheme = function (value) {
            $rootScope.$emit('userDetailsFactory.userStyle', value);
        }
    }
})();