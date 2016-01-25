app.controller('StatInfoCtrl', function($scope, $stateParams, $ionicLoading, StatService) {
	 function showLoading() {
    $ionicLoading.show({
      template: '<i class="ion-load-a"></i>',
      noBackdrop: true
    });
  }

   function hideLoading() {
    $ionicLoading.hide();
  }
    showLoading();
    StatService.getStatID($stateParams.id).then(function(data){
    	$scope.team = data;
    	hideLoading();
    });
});