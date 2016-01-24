app.controller('TicketCtrl', function ($scope, $stateParams, TicketService, $state){
	function refreshBets() {
	TicketService.getTicketEmail($stateParams.email).then(function(data){
		$scope.ticket = data;
	});
	}
	refreshBets();
	$scope.remove = {};
	$scope.deleteBet = function(){
		console.log($scope.remove.id)
		TicketService.removeTicket($scope.remove.id).then(refreshBets);
		$state.go('tab-bet');
	}
});