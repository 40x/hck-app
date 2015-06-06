(function(){
    'use strict';

    angular.module('application').controller('shareItemController', shareItemCtrlFn );

    shareItemCtrlFn.$inject = ['item'];

    function shareItemCtrlFn(item){
        var sic = this;

        sic.name = item.name;

        sic.close = function () {
            $modalInstance.dismiss('cancel');
        };

    }

})();