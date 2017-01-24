
angular.module('codechallenge')
    .directive('tooltipInit', function () {
        return{
            restrict:"A",
            link:function(scope,elem){
                jQuery(elem).tooltip();
            }
        }
    })