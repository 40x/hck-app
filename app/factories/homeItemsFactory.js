(function(){
    'use strict';

    angular.module('application').factory('homeItemsFactory', homeItemsFactoryFn );

    function homeItemsFactoryFn(){

        var factory= {};

        var itemList = [
            {
                "name" : "item 1 item 1 item 1 item 1 item 1 item 1 item 1item 1 item 1 item 1 item 1 item 1",
                "results" : [
                    {
                        "name" : "item1 result1"
                    },
                    {
                        "name" : "item1 result2"
                    },
                    {
                        "name" : "item1 result3"
                    },
                    {
                        "name" : "item1 result4"
                    },
                    {
                        "name" : "item1 result5"
                    }
                ]
            },
            {
                "name": "item 2",
                "results" : [
                    {
                        "name" : "item2 result1"
                    },
                    {
                        "name" : "item2 result2"
                    }
                ]
            },
            {
                "name" : "item 3",
                "results" : [
                    {
                        "name" : "item3 result1"
                    },
                    {
                        "name" : "item3 result2"
                    },
                    {
                        "name" : "item3 result3"
                    },
                    {
                        "name" : "item4 result4"
                    }
                ]
            }
        ];

        factory.getItems = function(){
            return itemList;
        };

        factory.setItems = function(items){
            itemList = items;
        };

        return factory;

    }

})();