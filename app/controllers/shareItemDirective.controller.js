(function(){
    'use strict';

    angular.module('application').controller('shareItemDirectiveController', shareItemDirCtrlFn );

    shareItemDirCtrlFn.$inject = ['$modal'];

    function shareItemDirCtrlFn($modal){
        var sidc = this;

        sidc.share = function(){
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'partials/home/shareItem.html',
                controller: 'shareItemController',
                controllerAs : 'sic',
                size:  'md',
                resolve : {
                    item: function () {
                        return sidc.data;
                    }
                }
            });
        };
    }

})();