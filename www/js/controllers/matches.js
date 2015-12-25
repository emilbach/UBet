app.controller('MatchesCtrl', function($scope, MatchesService) {
    
    MatchesService.getMatches().then(function(data){
    	$scope.matches = data;
    	console.log($scope.matches);
    });
});