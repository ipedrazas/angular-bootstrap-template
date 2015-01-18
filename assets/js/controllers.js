

var checkpointApp = angular.module('myapp', []);


Date.prototype.dateTime = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   var hh = this.getHours().toString();
   var min = this.getMinutes().toString();
   var sec = this.getSeconds().toString();
   var time = (hh[1]?hh:"0"+hh[0]) + ":" + (min[1]?min:"0"+min[0]) + ":" + (sec[1]?sec:"0"+sec[0]);
   var date = (dd[1]?dd:"0"+dd[0]) + "/" + (mm[1]?mm:"0"+mm[0]) + "/" + yyyy;
   return date + " " + time;
  };


checkpointApp.controller('myappCtrl', function($scope, $http){

            $http.get('api/nodes').success(function(data) {
                    $scope.nodes = data;
              });

});


