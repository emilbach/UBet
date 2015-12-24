app.controller('StatInfoCtrl', function($scope, $stateParams, StatService) {

    StatService.getStatID($stateParams.id).then(function(data){
    	$scope.team = data;
    });
});