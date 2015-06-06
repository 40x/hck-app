(function(){
    'use strict';

    angular.module('application').
        controller('settingsController', SettingsControllerFn);

    SettingsControllerFn.$inject = ['userDetailsFactory','$rootScope'];

    function SettingsControllerFn(userDetailsFactory, $rootScope) {

        var settingsvm = this;

        settingsvm.pic = userDetailsFactory.getUserpic();
        settingsvm.username = userDetailsFactory.getUsername();
        settingsvm.email = userDetailsFactory.getUseremail();
        settingsvm.privacy = userDetailsFactory.getPrivacyDetails();
        settingsvm.visibilities = [{name:'Friends'},{name:'Friends of friends'},{name:'Everyone'}];
        settingsvm.visibility = userDetailsFactory.visibility;
        settingsvm.saveForm = function () {
            settingsvm.saved = true;
            userDetailsFactory.setUsername(settingsvm.username);
            userDetailsFactory.setUseremail(settingsvm.email);
        }

    }
})();