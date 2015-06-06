(function(){
    'use strict';

    angular.module('application').
        controller('settingsController', SettingsControllerFn);

    function SettingsControllerFn() {
        var settingsvm = this;
        settingsvm.name = 'mmmmmmmmmm';
    }
})();