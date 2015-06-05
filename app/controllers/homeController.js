(function(){
    'use strict';

    function homeCtrl($scope){

        $scope.itemList = [
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
            ]

            $scope.editableItem = [];
            for(var i=0; i< $scope.itemList.length; i++){
                $scope.editableItem.push(false);
            }

            $scope.deleteItem = function(i){

                $('.lineItem').eq(i).hide("slow", function () {
                    $scope.itemList.splice(i,1);
                });
            }

            $scope.toggleView = function(i, evt){
                var el = evt.target;
                $('.resultsContainer').eq(i).toggle('ease');
                if($(el).hasClass('fa-toggle-on')){
                    $(el).addClass('fa-toggle-off');
                    $(el).removeClass('fa-toggle-on');
                } else {
                    $(el).addClass('fa-toggle-on');
                    $(el).removeClass('fa-toggle-off');
                }
            }

            $(document).ready(function(){
                $('.result-box').click(function(){
                    $(this).children().find( ".content").css('background', 'rgba(0,0,0,0.5');
                });
            });
    }

    app.controller('homeController', ['$scope', homeCtrl]);

})();