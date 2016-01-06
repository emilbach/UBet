app.controller('TicketCtrl',function($scope, TicketService){
	
	TicketService.getTicket().then(function(data){
		$scope.tickets = data; 
	})
});