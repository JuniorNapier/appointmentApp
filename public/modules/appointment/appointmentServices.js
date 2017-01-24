angular.module('Appointment')
    .factory('AppointmentServices',["$http","$q",function ($http,$q) {
        return {
            retrieveAppointments:function(){
                
                var defer=$q.defer();
                $http.get("api/appointment")
                    .then(function(result){
                        defer.resolve(result)
                    })
                return defer.promise;
            },
            saveAppointment:function(AppointmentObj){

                var defer=$q.defer();
                $http.post("api/appointment",AppointmentObj)
                    .then(function(result){
                        defer.resolve(result)
                    });
                return defer.promise;
            },
            updateAppointment:function(AppointmentObj){

                var defer=$q.defer();
                $http.put("api/appointment/"+AppointmentObj.id,AppointmentObj)
                    .then(function(result){
                        defer.resolve(result)
                    });

                return defer.promise;
            },
            deleteAppointment:function(id){

                var defer=$q.defer();
                $http.delete("api/appointment/"+id)
                    .then(function(result){
                        defer.resolve(result)
                    });

                return defer.promise;
            },
            retrieveAppointmentById:function(id){

                var defer=$q.defer();
                $http.get("api/appointment/"+id)
                    .then(function(result){
                        defer.resolve(result)
                    });

                return defer.promise;
            }
        }
    }]);