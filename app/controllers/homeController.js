(function(){
    'use strict';

    angular.module('application').controller('homeController', homeCtrl );

    homeCtrl.$inject = ['homeItemsFactory'];

    function homeCtrl(homeItemsFactory){

        var hc= this;

        hc.itemList = homeItemsFactory.getItems();

            hc.editableItem = [];
            for(var i=0; i< hc.itemList.length; i++){
                hc.editableItem.push(false);
            }

            hc.deleteItem = function(i){

                $('.lineItem').eq(i).hide("slow", function () {
                    hc.itemList.splice(i,1);
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

            $(document).ready(function(){
                $('.result-box').click(function(){
                    $(this).children().find( ".content").css('background', 'rgba(0,0,0,0.5');
                });
            });
    }

})();