(function(){
    'use strict';

    angular.module('application').controller('homeController', homeCtrl );

    homeCtrl.$inject = ['homeItemsFactory', '$modal'];

    function homeCtrl(homeItemsFactory,$modal ){

        var hc= this;

            hc.itemList = homeItemsFactory.getItems();

            hc.editableItem = [];
            hc.favItem = [];
            for(var i=0; i< hc.itemList.length; i++){
                hc.editableItem.push(false);
                hc.favItem.push(false);
            }

            hc.deleteItem = function(i){
                $('.lineItem').eq(i).hide("slow", function () {
                    hc.itemList.splice(i,1);
                    hc.editableItem.splice(i,1);
                    hc.favItem.splice(i,1);
                });
            };

            hc.toggleView = function(i, evt){
                var el = evt.target;
                $('.resultsContainer').eq(i).toggle('ease');
                if($(el).hasClass('fa-toggle-on')){
                    $(el).addClass('fa-toggle-off');
                    $(el).removeClass('fa-toggle-on');
                } else {
                    $(el).addClass('fa-toggle-on');
                    $(el).removeClass('fa-toggle-off');
                }
            };


            hc.addNewItem = function(){

                    var modalInstance = $modal.open({
                        animation: true,
                        templateUrl: 'partials/home/addNewItem.html',
                        controller: 'addNewItemController',
                        controllerAs : 'ancf',
                        size:  'md'
                    });

                    modalInstance.result.then(function (newItem) {
                        var data = {
                            "name" : newItem,
                            "results" : [
                                {
                                    "name" : "new result1"
                                },
                                {
                                    "name" : "new result2"
                                }
                            ]
                        };
                        hc.itemList.unshift(data);
                        hc.editableItem.unshift(false); //open it
                        hc.favItem.unshift(false); //not fav yet
                        homeItemsFactory.setItems(hc.itemList);
                    }, function () {
                        //if closed without adding
                    });
            };

            hc.share = function(i){
                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'partials/home/shareItem.html',
                    controller: 'shareItemController',
                    controllerAs : 'sic',
                    size:  'md',
                    resolve : {
                        item: function () {
                            return hc.itemList[i];
                        }
                    }
                });
            };


            ///////

            $(document).ready(function(){
                $('.result-box').click(function(){
                    $(this).children().find( ".content").css('background', 'rgba(0,0,0,0.5');
                });
            });
    }

})();