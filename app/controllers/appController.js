(function(){
    'use strict';

    angular.module('application').controller('appController', appControllerFn );

    appControllerFn.$inject = ['userDetailsFactory','$rootScope'];

    function appControllerFn(userDetailsFactory, $rootScope){

        var appvm = this;
        appvm.value = userDetailsFactory.userStyle;
        $rootScope.$on('userDetailsFactory.userStyle', function(event, args) {
            appvm.value = args;
        });
    }

})();