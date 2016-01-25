app.controller('StatisticsCtrl', function($scope, $ionicLoading, StatService, $timeout) {
	
	 function showLoading() {
    $ionicLoading.show({
      template: '<i class="ion-load-a"></i>',
      hideOnStateChange: true
    });
  }

  function hideLoading() {
    $ionicLoading.hide();
  }
  showLoading();
  StatService.getAllStats().then(function(data){
    $scope.teams = data;
    hideLoading();
  });
  hideLoading();
  

});