(function(){
    'use strict';

    angular.module('application').controller('shareItemController', shareItemCtrlFn );

    shareItemCtrlFn.$inject = ['$modalInstance', 'item'];

    function shareItemCtrlFn($modalInstance, item){
        var sic = this;

        console.log(item);

        sic.name = item.name;

        sic.close = function () {
            $modalInstance.dismiss('cancel');
        };

    }

})();