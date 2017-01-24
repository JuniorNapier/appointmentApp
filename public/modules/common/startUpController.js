angular.module('codechallenge')
    .controller('StartUpCtrl',["$scope","$rootScope", function ($scope,$rootScope) {
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                $rootScope.currentState=toState;
            })
    }])