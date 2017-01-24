/**
 * Created by Shivali on 6/30/15.
 */

angular.module('Appointment')
    .controller('AppointmentCtrl', ["$scope", "$rootScope", "AppointmentServices", function ($scope, $rootScope,AppointmentServices) {

        $scope.currentAppointment= {};
        $scope.appointmentFields=[
            {"type":"input","key":"slot","templateOptions":{"label":"Time Slot","required":false, "readonly":true,"type":"text"}},
            {"type":"input","key":"name","templateOptions":{"label":"Name","required":true,"type":"text"}},
            {"type":"input","key":"phone","templateOptions":{"label":"Phone#","required":true,"type":"text"}}
        ];

        // retrieve Appointment from server
        $scope.retrieveAppointments = (function(){
            AppointmentServices.retrieveAppointments()
                .then(function(result){
                    $rootScope.appointments = result && result.data && result.data.appointments || [];

                    console.log($rootScope.appointments);

                },function(error){
                    alert(error);
                })
            })();


        $scope.openAddAppointment=function(){
            $scope.currentAppointment= {};
            $('#addAppointment.modal').modal('show');
        }

        // save Appointment to server
        $scope.saveAppointment = function(){
            AppointmentServices.saveAppointment($scope.currentAppointment)
            .then(function(result){
                    $rootScope.appointments.push(result);
                },function(error){
                    alert(error);
                })
        }

        $scope.openUpdateAppointment=function(data){
            $scope.currentAppointment=angular.copy(data);
            $('#updateAppointment.modal').modal('show');
        }

        //update data to server
        $scope.updateAppointment = function(){
            AppointmentServices.updateAppointment($scope.currentAppointment)
            .then(function(result){
                var appt = result && result.data || {};

                console.log("merging returned appointment, ", result);

                for(var key in $rootScope.appointments){
                    if(appt.id==$rootScope.appointments[key].id) {
                        $rootScope.appointments[key] = appt;
                        $rootScope.appointments[key].available = false;
                    }
                }

                console.log("appointment is now ",  $rootScope.appointments);
                $('#updateAppointment.modal').modal('hide');
                },function(error){
                    alert(error);
                })
        }

        $scope.openDeleteAppointment=function(data){
            $scope.currentAppointment=angular.copy(data);
            $('#deleteAppointment.modal').modal('show');
        }

        //delete data to server
        $scope.deleteAppointment = function(){
                AppointmentServices.deleteAppointment($scope.currentAppointment.id)
                .then(function(result){
                    for(var key in $rootScope.appointments){
                        if($scope.currentAppointment.id==$rootScope.appointments[key].id){
                            $rootScope.appointments.splice(key,1);
                            break;
                        }
                }
                },function(error){
                    alert(error);
                })
        }

        $scope.emptyAppointment = function(){
            $scope.currentAppointment={};
        };
    }]);