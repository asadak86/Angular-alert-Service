/* Angular JS by AAK & MOIN */
/* Date: 1 Sept 2014 */
/* Version : 1.0 */


// To Define a NG Module
var app = angular.module('app', []);




// Main Controller 
//*************************//
app.controller('ws', ['$scope', '$rootScope','alertService',
    function($scope, $rootScope, alertService) {
	
	//initSwappService.initSwapp();
	/*alert("in ws controller");
	var request = {
                task_request: "Session/key",
                data: localStorage.local_key
        }
	SocketService.getWSdata(request).then(function(data) {
		console.log("from ws controller , received session_key");
	}, function(error) {
            // promise rejected, could log the error with: console.log('error', error);
            console.log("No promise");
        });*/


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