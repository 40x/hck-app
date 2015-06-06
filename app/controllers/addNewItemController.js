(function(){
    'use strict';

    angular.module('application').controller('addNewItemController', addNewCtrlFn );

    addNewCtrlFn.$inject = ['$modalInstance'];

    function addNewCtrlFn($modalInstance){
        var ancf = this;

        ancf.newItem = null;

        ancf.close = function () {
            $modalInstance.dismiss('cancel');
        };

        ancf.addItem = function () {
            $modalInstance.close(ancf.newItem);
        };

    }

})();