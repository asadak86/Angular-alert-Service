/* Angular JS by AAK */
/* Date: 1 Sept 2014 */
/* Version : 1.0 */


// To Define a NG Module
var app = angular.module('app', []);




// Main Controller 
//*************************//
app.controller('ws', ['$scope', '$rootScope','alertService',
    function($scope, $rootScope, alertService) {
	
	
    $scope.success = function(){
        alertService.add("success", "Success: It works! ", 3000);
    }

     $scope.error = function(){
        alertService.add("danger", "Error: Something went wrong! ", 3000);
    }

  
  // root binding for alertService
  $rootScope.closeAlert = alertService.closeAlert; 



	}
]);