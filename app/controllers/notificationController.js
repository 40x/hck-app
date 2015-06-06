(function(){
    'use strict';

    angular.module('application').controller('notificationController', notificationCtrl);

    function notificationCtrl() {

        var notificationVm = this;

        notificationVm.heading = 'Hey you have a notifications';

        notificationVm.data = [
            {
                contentName : 'Did you Check IPL ?',
                contentNews : 'CSK Won Today!!!! '
            },

            {
                contentName : 'Mark ZuckerBurg watched Gangs of Wasseypur',
                contentNews : 'Mark ZuckerBurg was admitted to Hospital'
            },

            {
                contentName : 'Obama Visits Mumbai',
                contentNews : 'Obama watches Phas gaya re Obama'
            },

            {
                contentName : 'Rahul goes interview',
                contentNews : 'Rahul talks women empowerment'
            }

        ];

        notificationVm.contentSuggest = 'Also See this!!! '
    }

})();