app.controller('MatchesCtrl', function($scope, $ionicLoading, MatchesService) {

	var showLoading = function() {
    $ionicLoading.show({
      template: '<i class="ion-load-a"></i>',
      hideOnStateChange: true
    });
  }

  var hideLoading = function() {
    $ionicLoading.hide();
  }

  // set loading to true first time while we retrieve songs from server.
  showLoading();
	MatchesService.getMatches().then(function(data){
		$scope.matches = data;
		hideLoading();
	});
});