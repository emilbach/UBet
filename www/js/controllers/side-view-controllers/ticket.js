app.controller('TicketCtrl',function($scope, $stateParams, TicketService){
	
	TicketService.getTicketEmail($stateParams.email).then(function(data){
		$scope.ticket = data;
	});
});