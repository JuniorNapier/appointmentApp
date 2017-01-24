 
angular.module("Appointment",[]);   

angular.module("codechallenge", ["ui.router","formly","formlyBootstrap","Appointment"])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {        
            $stateProvider            
                .state("Appointment",{
                    url: "/appointments",
                    templateUrl: "modules/appointment/views/appointments.html",
                    controller: "AppointmentCtrl"
                    });
        
            $urlRouterProvider
                .when('/appointments', {
                    templateUrl: "js/modules/appointment/views/appointments.html",
                    controller: "AppointmentCtrl",
                    controllerAs: 'appointment'
                })
                .otherwise({
                    redirectTo: '/appointments'
                });        
    }]);
