(function(){
    'use strict';

    angular.module('application').factory('userDetailsFactory', userDetailsFactoryFn );

    function userDetailsFactoryFn(){

        var factory= {};
        var userName = "Helium";
        var userEmail = "teamhelium@uptake.com";
        factory.userStyle = "brown";

        factory.getUsername = function(){
            return userName;
        };

        factory.setUsername = function(username){
            userName = username;
        };

        factory.getUseremail = function(){
            return userEmail;
        };

        factory.setUseremail = function(useremail){
            userEmail = useremail;
        };


        return factory;

    }

})();