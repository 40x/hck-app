(function(){
    'use strict';

    angular.module('application').directive('shareItem', shareItemFn );

    function shareItemFn(){
        return {
            restrict: 'E',
            scope : {
                data : "="
            },
            template: '<div title="Share" class="pointer" ng-class="{\'fa fa-share\': !sidc.label }" ng-click="sidc.share()"><span ng-if="sidc.label">Share</span></div>',
            controller : 'shareItemDirectiveController',
            controllerAs : 'sidc',
            bindToController: true
        }
    }

})();