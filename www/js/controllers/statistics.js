app.controller('StatisticsCtrl', function($scope, StatService) {
	
	StatService.getAllStats().then(function(data){
		$scope.teams = data;
	});

});