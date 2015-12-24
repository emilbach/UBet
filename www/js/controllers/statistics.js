app.controller('StatisticsCtrl', function($scope, $stateParams, StatService) {
	
	StatService.getAllStats().then(function(data){
		$scope.teams = data;
	});

});