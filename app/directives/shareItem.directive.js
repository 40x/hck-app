(function(){
    'use strict';

    angular.module('application').directive('shareItem', shareItemFn );

    function shareItemFn(){
        return {
            restrict: 'E',
            scope : {
                data : "="
            },
            template: '<div title="Share" class="pointer fa fa-share" ng-click="sidc.share()"></div>',
            controller : 'shareItemDirectiveController',
            controllerAs : 'sidc',
            bindToController: true
        }
    }

})();