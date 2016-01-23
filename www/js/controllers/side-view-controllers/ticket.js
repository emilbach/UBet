app.controller('TicketCtrl', function ($scope, $stateParams, TicketService, $http){
	
	TicketService.getTicketEmail($stateParams.email).then(function(data){
		$scope.ticket = data;
	});
	$scope.data = {};
	$scope.deleteBet = function(id){
		$http.delete('http://52.30.78.86:3000/api/bet', {id: $scope.data.id}).then(function(res){
              $scope.data = res.data;
        });
		
	}
});