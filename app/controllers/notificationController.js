(function(window){
    'use strict';

    angular.module('application').controller('notificationController', notificationCtrl);

    function notificationCtrl() {


        var notificationVm = this;

        notificationVm.heading = 'Hey you have a notifications';

        notificationVm.data = [
            {
                contentName : 'Did you Check IPL ?',
                content : 'CSK Won Today!!!! ',
                img : '/images/img1.jpg'
            },

            {
                contentName : 'Mark ZuckerBurg watched Gangs of Wasseypur',
                content : 'Mark ZuckerBurg was admitted to Hospital',
                img: '/images/img2.jpg'
            },

            {
                contentName : 'Obama Visits Mumbai',
                content : 'Obama watches Phas gaya re Obama',
                img : '/images/img3.jpg'
            },

            {
                contentName : 'Rahul goes interview',
                content : 'Rahul talks women empowerment',
                img: '/images/img4.jpg'
            },

            {
                contentName : 'New Followers',
                content : [
                    {
                        name: 'Praveen'
                    },
                    {
                        name : 'Monisha'
                    }
                ]
            }

        ];

        notificationVm.isArray = angular.isArray;

        notificationVm.close = function (i) {
            notificationVm.data.splice(i,1)
        };

        notificationVm.contentSuggest = 'Also See this!!! '
    }

})(window);